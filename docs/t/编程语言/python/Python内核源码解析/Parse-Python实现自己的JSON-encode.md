
上一篇文章用 Python 实现了一个 JSON decode 的解析器，这一篇文章我们来实现一个 JSON encode 的编码器。

## JSON 编码器

### 编码器

简单的数据结构如：None，bool，int，float，str 我们可以直接编码为 JSON 字符串。对于 list 和 dict，我们可以使用递归的方式进行编码。

```py
def json_encode(obj):
    if obj is None:
        return 'null'
    elif isinstance(obj, bool):
        return 'true' if obj else 'false'
    elif isinstance(obj, (int, float)):
        return str(obj)
    elif isinstance(obj, str):
        return '"' + obj + '"'
    elif isinstance(obj, list):
        return '[' + ', '.join(json_encode(e) for e in obj) + ']'
    elif isinstance(obj, dict):
        return '{' + ', '.join(f'"{k}": {json_encode(v)}' for k, v in obj.items()) + '}'
    else:
        raise TypeError(f'Unsupported type: {type(obj)}')
```

### 测试

```py
def test():
    assert json_encode(None) == 'null'
    assert json_encode(True) == 'true'
    assert json_encode(False) == 'false'
    assert json_encode(123) == '123'
    assert json_encode(3.14) == '3.14'
    assert json_encode('hello') == '"hello"'
    assert json_encode([1, 2, 3]) == '[1, 2, 3]'
    assert json_encode({'a': 1, 'b': 2}) == '{"a": 1, "b": 2}'
    print('PASSED')

if __name__ == '__main__':
    test()
```

### 总结

1. 这一篇文章我们实现了一个 JSON encode 的编码器，将 Python 对象转换为 JSON 字符串。这个编码器支持了 None, bool, int, float, str, list, dict 等类型的编码。
2. 对于数组和对象，我们使用递归的方式进行编码。
