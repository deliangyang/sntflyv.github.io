
JSON是一种编程语言无关的数据格式，它是一种轻量级的数据交换格式。JSON的数据格式在语法上与Python的字典类似，但是JSON的数据格式是纯文本的，它可以被任何编程语言读取和解析。

JSON的数据格式是一个键值对的集合，它由键值对组成，键值对之间使用逗号分隔，键值对的键和值之间使用冒号分隔。JSON的数据格式可以包含数组和对象，数组是一个有序的值的集合，对象是一个无序的键值对的集合。


其数据结构可以在官方文档中查看：[https://www.json.org/json-zh.html](https://www.json.org/json-zh.html)

接下来我们用Python实现一个JSON解析器，实现JSON的解析。

## JSON解析器

### token 类型
```py
token_eof = 0
token_number = 1
token_string = 2
token_bool = 3
token_array = 4
token_object = 5
token_null = 6
token_colon = 7
token_comma = 8     # ,
token_lbrace = 9    # {
token_rbrace = 10   # }
token_lbracket = 11 # [
token_rbracket = 12 # ]
```

### 映射token类型到字符串
```py
def token_name(tok):
    return {
        token_eof: 'eof',
        token_number: 'number',
        token_string: 'string',
        token_bool: 'bool',
        token_array: 'array',
        token_object: 'object',
        token_colon: 'colon',
        token_comma: 'comma',
        token_lbrace: 'lbrace',
        token_rbrace: 'rbrace',
        token_lbracket: 'lbracket',
        token_rbracket: 'rbracket',
        token_null: 'null',
    }[tok]
```

### tokenify函数，将单词后者数字、符号转换为token流
```py
def tokenify(s):
    l = len(s)
    cursor = 0
    while cursor < l:
        c = s[cursor]
        if c.isspace():
            cursor += 1
        elif c.isdigit():
            num, cursor = parse_number(s, l, cursor)
            yield token_number, num
        elif c == '-':
            cursor += 1
            num, cursor = parse_number(s, l, cursor)
            yield token_number, -num
        elif c == '"':
            str, cursor = parse_string(s, l, cursor)
            yield token_string, str
        elif c == 't':
            val, cursor = parse_true(s, l, cursor)
            yield token_bool, val
        elif c == 'f':
            val, cursor = parse_false(s, l, cursor)
            yield token_bool, val
        elif c == 'n':
            val, cursor = parse_null(s, l, cursor)
            yield token_null, val
        elif c == '[':
            cursor += 1
            yield token_lbracket, c
        elif c == ']':
            cursor += 1
            yield token_rbracket, c
        elif c == '{':
            cursor += 1
            yield token_lbrace, c
        elif c == '}':
            cursor += 1
            yield token_rbrace, c
        elif c == ':':
            cursor += 1
            yield token_colon, c
        elif c == ',':
            cursor += 1
            yield token_comma, c
        else:
            raise ValueError('unexpected character: ' + c)
```

### 解析数字，包含整数和小数
```py
def parse_number(s, l, cursor):
    num = 0
    while cursor < l and s[cursor].isdigit():
        num = num * 10 + int(s[cursor])
        cursor += 1
    if cursor < l and s[cursor] == '.':
        cursor += 1
        div = 1
        while cursor < l and s[cursor].isdigit():
            num = num * 10 + int(s[cursor])
            div *= 10
            cursor += 1
        return num / div, cursor
    return num, cursor
```

### 解析字符串
```py
def parse_string(s, l, cursor):
    cursor += 1
    start = cursor
    while cursor < l:
        if s[cursor-1] != '\\' and s[cursor] == '"':
            break
        cursor += 1
    return s[start:cursor], cursor + 1
```

### 解析true
```py
def parse_true(s, l, cursor):
    if len(s) < cursor + 4:
        raise ValueError('unexpected character: ' + c)
    elif s[cursor:cursor+4] != 'true':
        raise ValueError('unexpected character: ' + c)
    cursor += 4
    return True, cursor
```

### 解析false
```py
def parse_false(s, l, cursor):
    if len(s) < cursor + 5:
        raise ValueError('unexpected character: ' + c)
    elif s[cursor:cursor+5] != 'false':
        raise ValueError('unexpected character: ' + c)
    cursor += 5
    return False, cursor
```

### 解析null
```py
def parse_null(s, l, cursor):
    if len(s) < cursor + 4:
        raise ValueError('unexpected character: ' + c)
    elif s[cursor:cursor+4] != 'null':
        raise ValueError('unexpected character: ' + c)
    cursor += 4
    return None, cursor
```
### 解析JSON，将token流转换为JSON对象
```py
def parse(s):
    tokens = list(tokenify(s))
    cursor = 0
    l = len(tokens)
    val, _ = parse_value(tokens, l, cursor)
    return val
```

### 解析值，包含数字、字符串、布尔、null、数组、对象
```py
def parse_value(tokens, l, cursor):
    tok, val = tokens[cursor]
    cursor += 1
    if tok == token_number:
        return val, cursor
    if tok == token_string:
        return val, cursor
    if tok == token_bool:
        return val, cursor
    if tok == token_null:
        return val, cursor
    if tok == token_lbracket: # parse array
        arr = []
        while cursor < l:
            tok, val = tokens[cursor]
            if tok == token_rbracket:
                cursor += 1
                return arr, cursor
            val, cursor = parse_value(tokens, l, cursor)
            arr.append(val)
            tok, val = tokens[cursor]
            if tok == token_comma:
                cursor += 1
        raise ValueError('expected ]')
    if tok == token_lbrace: # parse object
        obj = {}
        while cursor < l:
            tok, key = tokens[cursor]
            if tok == token_rbrace:
                cursor += 1
                return obj, cursor
            if tok != token_string:
                raise ValueError('expected string')
            cursor += 1
            tok, val = tokens[cursor]
            if tok != token_colon:
                raise ValueError('expected :')
            cursor += 1
            obj[key], cursor = parse_value(tokens, l, cursor)
            tok, val = tokens[cursor]
            if tok == token_comma:
                cursor += 1
        raise ValueError('expected }')
    raise ValueError('unexpected token: ' + token_name(tok))
```

### 测试
```py
def main():
    with open('a.json', 'r' ) as f:
        import time
        import json
        content = f.read()
        start = time.time()
        print(parse(content))
        t = time.time() - start
        print(t * 1000)
        start = time.time()
        json.loads(content)
        t2 = time.time() - start
        print(t2 * 1000)

if __name__ == '__main__':
    main()
# 0.1361370086669922
# 0.0152587890625
```

## 总结

1. 用Python实现JSON解析器，其性能比Python内置的json库慢了10倍左右。这次动手实现JSON解析器的目的是为了学习JSON的解析原理，实际开发中不建议自己实现JSON解析器，而是使用Python内置的json库。
2. JSON解析器的实现原理是有限状态机，它将JSON字符串转换为token流，然后根据token流解析出JSON对象。
3. 这次研究的JSON解析器只是一个简单的实现，实际的JSON解析器还需要处理更多的细节，比如处理转义字符、处理Unicode字符等。