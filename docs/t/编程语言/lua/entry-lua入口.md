
### Lua 入口

```c
int status, result;
lua_State *L = luaL_newstate();  /* create state 创建状态机 */
if (L == NULL) {
    l_message(argv[0], "cannot create state: not enough memory");
    return EXIT_FAILURE;
}
lua_pushcfunction(L, &pmain);  /* to call 'pmain' in protected mode */
```

#### 接下来的部分 pmain

1. 获取参数
2. 检查版本
3. 加载标准库
4. 命令行执行脚本 
```shell script
lua -e "pirnt(1)"
```
5. handle_script执行脚本，先通过`  status = luaL_loadfile(L, fname);`加载文件
```c
status = luaL_loadfile(L, fname);
if (status == LUA_OK) {
int n = pushargs(L);  /* push arguments to script 将参数推给脚本 */
status = docall(L, n, LUA_MULTRET);     // 执行脚本
}
```
```c
/*
** Main body of stand-alone interpreter (to be called in protected mode).
** Reads the options and handles them all.
*/
runargs(L, argv, script)        // lua -e/-l

docall()

status = lua_pcall(L, narg, nres, base);

#define lua_pcall(L,n,r,f)	lua_pcallk(L, (n), (r), (f), 0, NULL)
lua_pcallk()
```

