from lark import Tree, Token


class JSError(Exception):
    pass


class ReturnSignal(Exception):
    """Used to unwind the call stack on a return statement."""
    def __init__(self, value):
        self.value = value


class Interpreter:
    def __init__(self):
        self.env_stack: list[dict] = [{}]
        self.functions: dict = {}           # name → func_decl node

    # ------------------------------------------------------------------ #
    # Environment helpers
    # ------------------------------------------------------------------ #

    def _push_scope(self):
        self.env_stack.append({})

    def _pop_scope(self):
        self.env_stack.pop()

    def _lookup(self, name: str):
        for env in reversed(self.env_stack):
            if name in env:
                return env[name]
        raise JSError(f"ReferenceError: '{name}' is not defined")

    def _assign(self, name: str, value):
        for env in reversed(self.env_stack):
            if name in env:
                env[name] = value
                return
        raise JSError(f"ReferenceError: '{name}' is not defined before assignment")

    def _declare(self, name: str, value):
        self.env_stack[-1][name] = value

    # ------------------------------------------------------------------ #
    # Public entry
    # ------------------------------------------------------------------ #

    def execute(self, tree: Tree):
        self._run(tree)

    # ------------------------------------------------------------------ #
    # Dispatcher
    # ------------------------------------------------------------------ #

    def _run(self, node):
        if isinstance(node, Token):
            return
        method = f"_exec_{node.data}"
        handler = getattr(self, method, None)
        if handler is None:
            raise JSError(f"Unhandled node type: '{node.data}'")
        return handler(node)

    # ------------------------------------------------------------------ #
    # Top-level & statements
    # ------------------------------------------------------------------ #

    def _exec_start(self, node):
        for child in node.children:
            self._run(child)

    def _exec_statement(self, node):
        self._run(node.children[0])

    # ------------------------------------------------------------------ #
    # Declarations & assignment
    # ------------------------------------------------------------------ #

    def _exec_var_decl(self, node):
        name = str(node.children[0])
        value = self._eval(node.children[1])
        self._declare(name, value)

    def _exec_const_decl(self, node):
        name = str(node.children[0])
        value = self._eval(node.children[1])
        self._declare(name, value)

    def _exec_assign_stmt(self, node):
        name = str(node.children[0])
        value = self._eval(node.children[1])
        self._assign(name, value)

    def _exec_plus_assign(self, node):
        name = str(node.children[0])
        value = self._eval(node.children[1])

        current = self._lookup(name)

        if isinstance(current, str) or isinstance(value, str):
            result = self._js_str(current) + self._js_str(value)
        else:
            result = current + value

        self._assign(name, result)

    # ------------------------------------------------------------------ #
    # Functions
    # ------------------------------------------------------------------ #

    def _exec_func_decl(self, node):
        name = str(node.children[0])
        self.functions[name] = node         # store whole node for later call

    def _exec_func_call(self, node):
        """Allow a bare function call as a statement (return value discarded)."""
        self._call_function(node)

    def _exec_chain_expr(self, node):
        """Allow a bare chained call as a statement (return value discarded)."""
        self._eval_chain_expr(node)

    def _eval_chain_expr(self, node):
        # Handle console.log specially

        if (
            hasattr(node.children[0], "data")
            and node.children[0].data == "var"
            and str(node.children[0].children[0]) == "console"
            and str(node.children[1]) == "log"
        ):
            raw_args = node.children[2].children if len(node.children) > 2 else []
            args = [self._eval(a) for a in raw_args]

            print(*[self._js_str(a) for a in args])
            return None

        if (
            hasattr(node.children[0], "data")
            and node.children[0].data == "var"
            and str(node.children[0].children[0]) == "Math"
            and str(node.children[1]) == "floor"
        ):
            raw_args = node.children[2].children if len(node.children) > 2 else []
            if len(raw_args) != 1:
                raise JSError("TypeError: Math.floor() takes exactly 1 argument")
            return int(self._eval(raw_args[0]) // 1)
        receiver = self._eval(node.children[0])

        method = str(node.children[1])

        raw_args = node.children[2].children if len(node.children) > 2 else []

        args = [self._eval(a) for a in raw_args]

        # Special case for console.log()

        # if (
        #     hasattr(node.children[0], "data")
        #     and node.children[0].data == "var"
        #     and str(node.children[0].children[0]) == "console"
        #     and method == "log"
        # ):
        #     print(*[self._js_str(a) for a in args])
        #     return None

        if isinstance(receiver, str):
            if method == "split":
                sep = self._js_str(args[0]) if args else ","

                if sep == "":
                    return list(receiver)

                return receiver.split(sep)

            if method == "toUpperCase":
                return receiver.upper()

            if method == "toLowerCase":
                return receiver.lower()

            raise JSError(f"TypeError: '{method}' is not a function on string")

        if not isinstance(receiver, list):
            raise JSError(
                f"TypeError: cannot call '{method}' on {type(receiver).__name__}"
            )

        if method == "reverse":
            if args:
                raise JSError("TypeError: reverse() takes no arguments")

            receiver.reverse()
            return receiver

        if method == "join":
            sep = self._js_str(args[0]) if args else ","
            return sep.join(self._js_str(el) for el in receiver)

        if method == "push":
            if not args:
                raise JSError("TypeError: push() requires at least 1 argument")
            receiver.extend(args)
            return len(receiver)            # JS push() returns new length

        if method == "pop":
            if args:
                raise JSError("TypeError: pop() takes no arguments")
            if not receiver:
                raise JSError("TypeError: pop() called on empty array")
            return receiver.pop()           # mutates in place, returns removed element

        raise JSError(f"TypeError: '{method}' is not a function on array")

    def _exec_return_stmt(self, node):
        value = self._eval(node.children[0]) if node.children else None
        raise ReturnSignal(value)

    def _call_function(self, node):
        name = str(node.children[0])
        if name not in self.functions:
            raise JSError(f"ReferenceError: '{name}' is not defined")

        func_node = self.functions[name]
        # func_node.children: [NAME, params (optional), block]
        rest = func_node.children[1:]       # drop function name
        if rest[0].data == "params":
            param_names = [str(t) for t in rest[0].children]
            body = rest[1]
        else:
            param_names = []
            body = rest[0]

        # Evaluate arguments in the *caller's* scope
        raw_args = node.children[1].children if len(node.children) > 1 else []
        arg_values = [self._eval(a) for a in raw_args]

        if len(arg_values) != len(param_names):
            raise JSError(
                f"TypeError: '{name}' expects {len(param_names)} arg(s), "
                f"got {len(arg_values)}"
            )

        # Execute body in a fresh scope with params bound
        self._push_scope()
        try:
            for pname, pval in zip(param_names, arg_values):
                self._declare(pname, pval)
            self._exec_block(body)
            return None                     # implicit undefined
        except ReturnSignal as r:
            return r.value
        finally:
            self._pop_scope()

    def _eval_method_call(self, node):
        # node.children: [obj_NAME, method_NAME, arglist?]
        obj_name  = str(node.children[0])
        method    = str(node.children[1])
        raw_args  = node.children[2].children if len(node.children) > 2 else []
        args      = [self._eval(a) for a in raw_args]

        # console.log is parsed as a method_call by Earley; handle it here
        if obj_name == "console" and method == "log":
            print(*[self._js_str(a) for a in args])
            return None

        obj = self._lookup(obj_name)

        if isinstance(obj, str):
           if method == "split":
                sep = self._js_str(args[0]) if args else ","
                if sep == "":
                    return list(obj)        # split every character
                return obj.split(sep)

           if method == "toUpperCase":
               return obj.upper()

           if method == "toLowerCase":
               return obj.lower()

           raise JSError(f"TypeError: '{method}' is not a function on string")

        if not isinstance(obj, list):
            raise JSError(f"TypeError: '{obj_name}' is not an array")

        if method == "reverse":
            if args:
                raise JSError("TypeError: reverse() takes no arguments")
            obj.reverse()           # mutates in place, returns None like JS
            return obj

        if method == "join":
            sep = self._js_str(args[0]) if args else ","
            return sep.join(self._js_str(el) for el in obj)

        if method == "push":
            if not args:
                raise JSError("TypeError: push() requires at least 1 argument")
            obj.extend(args)
            return len(obj)                 # JS push() returns new length

        if method == "pop":
            if args:
                raise JSError("TypeError: pop() takes no arguments")
            if not obj:
                raise JSError("TypeError: pop() called on empty array")
            return obj.pop()               # mutates in place, returns removed element

        raise JSError(f"TypeError: '{method}' is not a function on array")

    # ------------------------------------------------------------------ #
    # console.log
    # ------------------------------------------------------------------ #

    def _exec_console_log(self, node):
        args = []
        if node.children:
            args = [self._eval(c) for c in node.children[0].children]
        print(*[self._js_str(a) for a in args])

    # ------------------------------------------------------------------ #
    # Control flow
    # ------------------------------------------------------------------ #

    def _exec_if_stmt(self, node):
        cond_val = self._eval(node.children[0])
        if self._truthy(cond_val):
            self._exec_block(node.children[1])
        elif len(node.children) == 3:
            else_branch = node.children[2]
            if else_branch.data == "block":
                self._exec_block(else_branch)
            else:
                self._run(else_branch)

    def _exec_for_stmt(self, node):
        init_node, cond_node, update_node, body_node = node.children
        self._push_scope()
        try:
            self._run(init_node)
            while self._truthy(self._eval(cond_node)):
                self._exec_block(body_node)
                self._run(update_node)
        finally:
            self._pop_scope()

    def _exec_for_init(self, node):
        self._run(node.children[0])

    def _exec_for_update(self, node):
        self._run(node.children[0])

    def _exec_incr_expr(self, node):
        name = str(node.children[0])
        self._assign(name, self._lookup(name) + 1)

    def _exec_decr_expr(self, node):
        name = str(node.children[0])
        self._assign(name, self._lookup(name) - 1)

    def _exec_while_stmt(self, node):
        cond_node, body_node = node.children
        while self._truthy(self._eval(cond_node)):
            self._exec_block(body_node)

    def _exec_block(self, node):
        self._push_scope()
        try:
            for child in node.children:
                self._run(child)
        finally:
            self._pop_scope()

    # ------------------------------------------------------------------ #
    # Expression evaluator
    # ------------------------------------------------------------------ #

    def _eval(self, node):
        if isinstance(node, Token):
            raise JSError(f"Unexpected bare token in _eval: {node!r}")

        data = node.data

        if data == "number":
            raw = str(node.children[0])
            return float(raw) if "." in raw else int(raw)

        if data == "string":
            raw = str(node.children[0])
            # Handle both single and double-quoted (Lark uses ESCAPED_STRING → double)
            return raw[1:-1]

        if data == "true_val":
            return True

        if data == "false_val":
            return False

        if data == "var":
            return self._lookup(str(node.children[0]))

        if data == "func_call":
            return self._call_function(node)
        
        if data == "chain_expr":
            return self._eval_chain_expr(node)

        if data == "array_literal":
            if not node.children:
                return []
            result = []
            for item in node.children[0].children:   # array_items children
                # spread_elem is inlined directly; plain exprs stay in array_item
                if hasattr(item, "data") and item.data == "spread_elem":
                    name = str(item.children[0])
                    val = self._lookup(name)
                    if not isinstance(val, list):
                        raise JSError(f"TypeError: spread requires an array, got '{name}'")
                    result.extend(val)
                elif hasattr(item, "data") and item.data == "array_item":
                    result.append(self._eval(item.children[0]))
                else:
                    result.append(self._eval(item))
            return result

        if data == "method_call":
            return self._eval_method_call(node)

        if data == "neg":
            return -self._eval(node.children[1])   # child[0] is SUB token

        if data == "not_expr":
            return not self._truthy(self._eval(node.children[1]))  # child[0] is NOT token

        if data in ("add_expr", "mul_expr", "pow_expr"):
            return self._eval_binop(node)

        if data == "compare_expr":
            return self._eval_compare(node)

        raise JSError(f"Unknown expression node: '{data}'")

    def _eval_binop(self, node):
        children = node.children
        result = self._eval(children[0])
        i = 1
        while i < len(children):
            op = str(children[i])          # Token (ADD, SUB, MUL, DIV, MOD)
            right = self._eval(children[i + 1])
            result = self._apply_arith(op, result, right)
            i += 2
        return result

    def _apply_arith(self, op: str, left, right):
        if op == "+":
            if isinstance(left, str) or isinstance(right, str):
                return self._js_str(left) + self._js_str(right)
            return left + right
        if op == "-":
            return left - right
        if op == "*":
            return left * right
        if op == "/":
            if right == 0:
                raise JSError("ZeroDivisionError")
            result = left / right
            return int(result) if result == int(result) else result
        if op == "%":
            return left % right
        if op == "**":
            return left ** right
        raise JSError(f"Unknown arithmetic operator: '{op}'")

    def _eval_compare(self, node):
        children = node.children
        left = self._eval(children[0])
        i = 1
        while i < len(children):
            op = str(children[i])          # COMPARE_OP token
            right = self._eval(children[i + 1])
            if op in ("===", "=="):
                ok = left == right
            elif op in ("!==", "!="):
                ok = left != right
            elif op == "<":
                ok = left < right
            elif op == ">":
                ok = left > right
            elif op == "<=":
                ok = left <= right
            elif op == ">=":
                ok = left >= right
            else:
                raise JSError(f"Unknown comparison operator: '{op}'")
            if not ok:
                return False
            left = right
            i += 2
        return True

    # ------------------------------------------------------------------ #
    # Helpers
    # ------------------------------------------------------------------ #

    def _truthy(self, value) -> bool:
        if value is None or value is False:
            return False
        if isinstance(value, (int, float)) and value == 0:
            return False
        if isinstance(value, str) and value == "":
            return False
        return True

    def _js_str(self, value) -> str:
        if value is True:
            return "true"
        if value is False:
            return "false"
        if value is None:
            return "undefined"
        if isinstance(value, list):
            return ",".join(self._js_str(el) for el in value)
        if isinstance(value, float) and value == int(value):
            return str(int(value))
        return str(value)