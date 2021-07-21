
### Lua chunk文件结构

- header
- prototype
    - basic info
    - bytecodes
    - constants
    - upvalues
    - debug info
    - sub functions
        - function1
        - function2
        - function3

```lua
print('hello world')

-- code dump

--[[
hexdump -C luac.out

00000000  1b 4c 75 61 53 00 19 93  0d 0a 1a 0a 04 08 04 08  |.LuaS...........|
00000010  08 78 56 00 00 00 00 00  00 00 00 00 00 00 28 77  |.xV...........(w|
00000020  40 01 0a 40 74 65 73 74  2e 6c 75 61 00 00 00 00  |@..@test.lua....|
00000030  00 00 00 00 00 01 02 04  00 00 00 06 00 40 00 41  |.............@.A|
00000040  40 00 00 24 40 00 01 26  00 80 00 02 00 00 00 04  |@..$@..&........|
00000050  06 70 72 69 6e 74 04 0c  68 65 6c 6c 6f 20 77 6f  |.print..hello wo|
00000060  72 6c 64 01 00 00 00 01  00 00 00 00 00 04 00 00  |rld.............|
00000070  00 09 00 00 00 09 00 00  00 09 00 00 00 09 00 00  |................|
00000080  00 00 00 00 00 01 00 00  00 05 5f 45 4e 56        |.........._ENV|
0000008e
--]]
```

### Lua header

#### Lua签名
```c
/* mark for precompiled code ('<esc>Lua') */
#define LUA_SIGNATURE	"\x1bLua"

#define LUAC_VERSION	(MYINT(LUA_VERSION_MAJOR)*16+MYINT(LUA_VERSION_MINOR))
#define LUAC_FORMAT	0	/* this is the official format */

/* data to catch conversion errors */
#define LUAC_DATA	"\x19\x93\r\n\x1a\n"

#define LUAC_INT	0x5678
#define LUAC_NUM	cast_num(370.5)


/*
** dump Lua function as precompiled chunk
*/
int luaU_dump(lua_State *L, const Proto *f, lua_Writer w, void *data,
              int strip) {
  DumpState D;
  D.L = L;
  D.writer = w;
  D.data = data;
  D.strip = strip;
  D.status = 0;
  DumpHeader(&D);
  DumpByte(f->sizeupvalues, &D);
  DumpFunction(f, NULL, &D);
  return D.status;
}

// header
static void DumpHeader (DumpState *D) {
  DumpLiteral(LUA_SIGNATURE, D);
  DumpByte(LUAC_VERSION, D);
  DumpByte(LUAC_FORMAT, D);
  DumpLiteral(LUAC_DATA, D);
  DumpByte(sizeof(int), D);             // 04
  DumpByte(sizeof(size_t), D);          // 08
  DumpByte(sizeof(Instruction), D);     // 04
  DumpByte(sizeof(lua_Integer), D);     // 08
  DumpByte(sizeof(lua_Number), D);      // 08
  DumpInteger(LUAC_INT, D);             // 22136 => 0x5678
  DumpNumber(LUAC_NUM, D);              // 0
}

static void DumpFunction (const Proto *f, TString *psource, DumpState *D) {
  if (D->strip || f->source == psource)
    DumpString(NULL, D);  /* no debug info or same source as its parent */
  else
    DumpString(f->source, D);
  DumpInt(f->linedefined, D);
  DumpInt(f->lastlinedefined, D);
  DumpByte(f->numparams, D);
  DumpByte(f->is_vararg, D);
  DumpByte(f->maxstacksize, D);
  DumpCode(f, D);
  DumpConstants(f, D);
  DumpUpvalues(f, D);
  DumpProtos(f, D);
  DumpDebug(f, D);
}
```