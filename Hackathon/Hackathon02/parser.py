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
             | expr ";"

    var_decl   : "let" NAME "=" expr
    const_decl : "const" NAME "=" expr
    assign_stmt: NAME "=" expr
               | NAME "+=" expr   -> plus_assign

    func_decl  : "function" NAME "(" params? ")" block
    params     : NAME ("," NAME)*
    return_stmt: "return" expr?

    console_log: "console" "." "log" "(" arglist? ")"
    arglist    : expr ("," expr)*

    if_stmt    : "if" "(" expr ")" block ("else" (block | if_stmt))?
    for_stmt   : "for" "(" for_init ";" expr ";" for_update ")" block
    while_stmt : "while" "(" expr ")" block

    for_init   : var_decl | const_decl | assign_stmt
    for_update : assign_stmt | incr_expr | decr_expr
    incr_expr  : NAME INCR
    decr_expr  : NAME DECR

    block      : "{" statement* "}"

    ?expr        : compare_expr
    ?compare_expr: add_expr (COMPARE_OP add_expr)*
    ?add_expr    : mul_expr ((ADD | SUB) mul_expr)*
    ?mul_expr    : unary_expr ((MUL | DIV | MOD) unary_expr)*
    ?unary_expr  : SUB atom -> neg
                 | NOT atom -> not_expr
                 | atom

    ?atom      : chain_expr
           | func_call
           | array_literal
           | NUMBER                -> number
           | ESCAPED_STRING        -> string
           | "true"               -> true_val
           | "false"              -> false_val
           | NAME                 -> var
           | "(" expr ")"

    func_call     : NAME "(" arglist? ")"
    chain_expr    : atom "." NAME "(" arglist? ")"
    array_literal : "[" arglist? "]"

    COMPARE_OP : "===" | "!==" | "==" | "!=" | "<=" | ">=" | "<" | ">"
    ADD  : "+"
    SUB  : "-"
    MUL  : "*"
    DIV  : "/"
    MOD  : "%"
    NOT  : "!"
    INCR : "++"
    DECR : "--"

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