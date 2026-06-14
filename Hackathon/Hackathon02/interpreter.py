from lark import Tree, Token


class JSError(Exception):
    pass


class Interpreter:
    def __init__(self):
        self.env_stack: list[dict] = [{}]

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

        if data == "neg":
            return -self._eval(node.children[1])   # child[0] is SUB token

        if data == "not_expr":
            return not self._truthy(self._eval(node.children[1]))  # child[0] is NOT token

        if data in ("add_expr", "mul_expr"):
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
        if isinstance(value, float) and value == int(value):
            return str(int(value))
        return str(value)
