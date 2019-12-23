### excel中如何读取浮点时间，转化为时间错，且格式化

### 天数转时间戳
```js
let value = 43831;

let offsetTime = (new Date()).getTimezoneOffset() * 60;
let res = Math.round((value - 25569) * 86400 + offsetTime);

console.log(res);
```


### 时间格式化
```js
Date.prototype.Format = function (fmt) { //author: meizz
    let o = {
        "M+": this.getMonth() + 1,                 //月份
        "d+": this.getDate(),                    //日
        "h+": this.getHours(),                   //小时
        "m+": this.getMinutes(),                 //分
        "s+": this.getSeconds(),                 //秒
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度
        "S": this.getMilliseconds()             //毫秒
    };
    if (/(y+)/.test(fmt))
        fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (let k in o) {
        if (new RegExp("(" + k + ")").test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        }
    }
    return fmt;
};
```


### Tips form表单提交个数超过1000就会被截断

```
max_input_vars 默认1000，可在php.ini中修改
```