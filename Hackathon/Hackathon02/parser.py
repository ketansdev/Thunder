from lark import Lark

JS_GRAMMAR = r"""
    start: statement*

    statement: func_decl
             | return_stmt ";"
             | var_decl ";"
             | const_decl ";"
             | assign_stmt ";"
             | incr_expr ";"
             | decr_expr ";"
             | func_call ";"
             | chain_expr ";"
            #  | method_call ";"
             | console_log ";"
             | if_stmt
             | for_stmt
             | while_stmt
             | do_while_stmt
             | expr ";"

    var_decl   : "let" NAME "=" expr
    const_decl : "const" NAME "=" expr
    assign_stmt: NAME "=" expr
               | NAME "+=" expr        -> plus_assign
               | NAME "-=" expr        -> minus_assign
               | NAME "*=" expr        -> mul_assign
               | NAME "/=" expr        -> div_assign
               | NAME "%=" expr        -> mod_assign
               | NAME "." NAME "=" expr -> prop_assign

    func_decl  : "function" NAME "(" params? ")" block
    params     : NAME ("," NAME)*
    return_stmt: "return" expr?

    console_log: "console" "." "log" "(" arglist? ")"
    arglist    : expr ("," expr)*

    if_stmt    : "if" "(" expr ")" block ("else" (block | if_stmt))?
    for_stmt   : "for" "(" for_init ";" expr ";" for_update ")" block
    while_stmt    : "while" "(" expr ")" block
    do_while_stmt : "do" block "while" "(" expr ")" ";"

    for_init   : var_decl | const_decl | assign_stmt
    for_update : assign_stmt | incr_expr | decr_expr
    incr_expr  : NAME INCR
    decr_expr  : NAME DECR

    block      : "{" statement* "}"

    ?expr        : or_expr
    ?or_expr     : and_expr ("||" and_expr)*
    ?and_expr    : compare_expr ("&&" compare_expr)*
    ?compare_expr: add_expr (COMPARE_OP add_expr)*
    ?add_expr    : mul_expr ((ADD | SUB) mul_expr)*
    ?mul_expr    : pow_expr ((MUL | DIV | MOD) pow_expr)*
    ?pow_expr    : unary_expr (POW unary_expr)*
    ?unary_expr  : SUB pow_expr -> neg
                 | NOT atom -> not_expr
                 | atom

    ?atom      : chain_expr
           | subscript
           | prop_access
           | func_call
           | array_literal
           | object_literal
           | NUMBER                -> number
           | ESCAPED_STRING        -> string
           | "true"               -> true_val
           | "false"              -> false_val
           | "null"               -> null_val
           | "undefined"          -> undefined_val
           | NAME                 -> var
           | "(" expr ")"
           | new_expr
           | func_expr
           | arrow_func

    arrow_func    : "(" params? ")" "=>" (block | concise_body)
                  | NAME "=>" (block | concise_body)
    concise_body  : expr

    object_literal : "{" obj_items? "}"
    obj_items      : obj_item ("," obj_item)*
    obj_item       : obj_key ":" expr
    obj_key        : NAME | ESCAPED_STRING

    func_expr  : "function" NAME? "(" params? ")" block

    new_expr      : "new" NAME "(" arglist? ")"
    func_call     : NAME "(" arglist? ")"
    chain_expr    : atom "." NAME "(" arglist? ")"
    subscript     : atom "[" expr "]"
    prop_access   : atom "." NAME
    array_literal : "[" array_items? "]"
    array_items   : array_item ("," array_item)*
    array_item    : "..." NAME -> spread_elem
                  | expr

    COMPARE_OP : "===" | "!==" | "==" | "!=" | "<=" | ">=" | "<" | ">"
    ADD  : "+"
    SUB  : "-"
    MUL  : "*"
    DIV  : "/"
    MOD  : "%"
    POW  : "**"
    NOT  : "!"
    INCR : "++"
    DECR : "--"
    ARROW: "=>"

    NAME       : /[a-zA-Z_$][a-zA-Z0-9_$]*/
    %import common.NUMBER
    %import common.ESCAPED_STRING
    %import common.WS
    %import common.CPP_COMMENT
    %import common.C_COMMENT
    %ignore WS
    %ignore CPP_COMMENT
    %ignore C_COMMENT
"""

def build_parser():
    return Lark(JS_GRAMMAR, parser="earley", ambiguity="resolve")