
用后缀表达式实现一个简单的计算器，支持加减乘除和括号。

算法思路：
1. 中缀表达式转后缀表达式，然后计算后缀表达式的值。
2. 中缀表达式转后缀表达式的算法是：遍历中缀表达式，遇到数字直接输出，遇到运算符，如果运算符栈为空，直接入栈，否则，如果当前运算符优先级大于栈顶运算符，直接入栈，否则，弹出栈顶运算符，直到当前运算符优先级大于栈顶运算符，然后当前运算符入栈。遇到左括号直接入栈，遇到右括号，弹出栈顶运算符，直到遇到左括号。


### 定义 token 类型

```py
token_eof = 0
token_number = 1        # 数字
token_plus = 2          # 加
token_minus = 3         # 减
token_times = 4         # 乘
token_divide = 5        # 除
token_lparen = 6        # 左括号
token_rparen = 7        # 右括号
```

### 映射 token 类型到字符串

```py
def token_name(tok):
    return {
        token_eof: 'eof',
        token_number: 'number',
        token_plus: 'plus',
        token_minus: 'minus',
        token_times: 'times',
        token_divide: 'divide',
        token_lparen: 'lparen',
        token_rparen: 'rparen',
    }[tok]
```

### tokenify 函数，将单词后者数字、符号转换为 token 流

```py
def tokenify(s):
    l = len(s)
    cursor = 0
    while cursor < l:
        c = s[cursor]
        if c.isspace():
            cursor += 1
        elif c.isdigit():
            num = 0
            while cursor < l and s[cursor].isdigit():
                num = num * 10 + int(s[cursor])
                cursor += 1
            yield token_number, num
        elif c == '+':
            cursor += 1
            yield token_plus, c
        elif c == '-':
            cursor += 1
            yield token_minus, c
        elif c == '*':
            cursor += 1
            yield token_times, c
        elif c == '/':
            cursor += 1
            yield token_divide, c
        elif c == '(':
            cursor += 1
            yield token_lparen, c
        elif c == ')':
            cursor += 1
            yield token_rparen, c
        else:
            raise ValueError('unexpected character: ' + c)
```

### 运算符计算数值

```py
def calc(op, a, b):
    if op == token_times:
        return a * b
    if op == token_divide:
        return a / b
    if op == token_plus:
        return a + b
    if op == token_minus:
        return a - b
    raise ValueError('unexpected operator: ' + token_name(op))
```

### 运算符优先级

```py
def op_priority(op):
    if op in (token_times, token_divide):
        return 2
    if op in (token_plus, token_minus):
        return 1
    return 0
```

### 中缀表达式转后缀表达式

```py
def eval_expr(expr):
    result_stack = []
    op_stack = []
    for tok in tokenify(expr):
        tok, val = tok
        if tok == token_number:
            result_stack.append(val)
        elif tok in (token_plus, token_minus, token_times, token_divide):
            if not op_stack:
                op_stack.append(tok)
                continue
            while op_stack and op_priority(op_stack[-1]) >= op_priority(tok):
                op = op_stack.pop()
                b = result_stack.pop()
                a = result_stack.pop()
                result_stack.append(calc(op, a, b))
            op_stack.append(tok)
        elif tok == token_lparen: # (
            op_stack.append(tok)
        elif tok == token_rparen: # )
            while op_stack[-1] != token_lparen:
                op = op_stack.pop() 
                b = result_stack.pop()
                a = result_stack.pop()
                result_stack.append(calc(op, a, b))
            op_stack.pop()
    while op_stack:
        op = op_stack.pop()
        b = result_stack.pop()
        a = result_stack.pop()
        result_stack.append(calc(op, a, b))
    print(result_stack.pop())
```

### 计算

```py
if __name__ == '__main__':
    eval_expr('2 + 34 * 4 - (3 + 6) / 7 - 4 - 3 - 4 - 56 - 6 + 3 - 4 - 5 + 1') # 58.71428571428572
    eval_expr('1 - 2 * ( (60-30 +(40/5) * (9-2*5/3 + 7 /3*99/4*2998 +10 * 568/14 )) - (4*3)/ (16-3*2) )') # -2776790.6952380957
    eval_expr('1 - 1 + 2 + 3 * 1')
```

如果需要完整源码的同学，可以在公众号后台回复：`calc`。

## 总结

1. 程序实现比较简单，没有考虑负数的情况，如果要支持负数，需要修改 tokenify 函数，使得负数也能被识别。
2. 没有实现语法错误检查，比如括号不匹配，运算符不合法等情况。
3. 程序实现的是一个简单的计算器，如果要支持更多的运算符，比如求余，求幂等，需要修改 calc 函数和 op_priority 函数。
4. 有了简单的构思就要开始实现，不要一直纠结于细节，先实现一个简单的版本，然后再逐步完善。