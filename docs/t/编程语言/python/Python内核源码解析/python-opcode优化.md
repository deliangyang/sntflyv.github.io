
Python内核源码中字节码的优化实现在文件`Python/compile.c`中，Python的字节码优化是通过`peephole`优化器实现的。`peephole`优化器是一个简单的局部优化器，它对字节码进行扫描，找到一些可以优化的地方，然后进行优化。`peephole`优化器的实现在`Python/peephole.c`中。`peephole`叫窥孔优化，是一种局部优化，它只对一小段代码进行优化，而不是对整个程序进行优化。

compile.c 实现了AST到字节码的编译器，它的入口是`PyAST_Compile`函数。`PyAST_Compile`函数首先将AST转换为控制流图，然后对控制流图进行优化，最后将控制流图转换为字节码。

compile.c 中的优化实现入口是`optimize_cfg`函数，它对字节码的控制流图进行优化。控制流图是一个有向图，图中的节点是基本块，边是控制流。基本块是一段代码，它没有入口，只有一个出口。控制流图是一个有向无环图，它的入口是函数的入口基本块，出口是函数的出口基本块。控制流图的优化是通过对基本块进行优化来实现的。

### 优化实现入口

`optimize_cfg`函数是字节码的优化实现入口，它对字节码的控制流图进行优化。`optimize_cfg`函数的实现如下：

```c
static int
optimize_cfg(struct compiler *c, struct assembler *a, PyObject *consts)
{
    for (basicblock *b = a->a_entry; b != NULL; b = b->b_next) {
        if (optimize_basic_block(c, b, consts)) {
            return -1;
        }
        clean_basic_block(b, -1);
        assert(b->b_predecessors == 0);
    }
    // ...
}
```

`optimize_cfg`函数首先对控制流图中的每个基本块进行优化，然后对基本块进行清理。`optimize_basic_block`函数是对基本块进行优化的函数，它的实现如下：

### 基本块优化

```c
/* Optimization */
static int
optimize_basic_block(struct compiler *c, basicblock *bb, PyObject *consts)
{
    assert(PyList_CheckExact(consts));
    struct instr nop;
    nop.i_opcode = NOP;
    struct instr *target;
    for (int i = 0; i < bb->b_iused; i++) {
        struct instr *inst = &bb->b_instr[i];
        int oparg = inst->i_oparg;
        int nextop = i+1 < bb->b_iused ? bb->b_instr[i+1].i_opcode : 0;
        if (is_jump(inst)) {
            /* Skip over empty basic blocks. */
            while (inst->i_target->b_iused == 0) {
                inst->i_target = inst->i_target->b_next;
            }
            target = &inst->i_target->b_instr[0];
        }
        else {
            target = &nop;
        }
        switch (inst->i_opcode) {
            /* Remove LOAD_CONST const; conditional jump */
            case LOAD_CONST:
            {
                PyObject* cnt;
                int is_true;
                int jump_if_true;
                switch(nextop) {
                    case POP_JUMP_IF_FALSE:
                    case POP_JUMP_IF_TRUE:
                        cnt = PyList_GET_ITEM(consts, oparg);
                        is_true = PyObject_IsTrue(cnt);
                        if (is_true == -1) {
                            goto error;
                        }
                        inst->i_opcode = NOP;
                        jump_if_true = nextop == POP_JUMP_IF_TRUE;
                        if (is_true == jump_if_true) {
                            bb->b_instr[i+1].i_opcode = JUMP_ABSOLUTE;
                            bb->b_nofallthrough = 1;
                        }
                        else {
                            bb->b_instr[i+1].i_opcode = NOP;
                        }
                        break;
                    case JUMP_IF_FALSE_OR_POP:
                    case JUMP_IF_TRUE_OR_POP:
                        cnt = PyList_GET_ITEM(consts, oparg);
                        is_true = PyObject_IsTrue(cnt);
                        if (is_true == -1) {
                            goto error;
                        }
                        jump_if_true = nextop == JUMP_IF_TRUE_OR_POP;
                        if (is_true == jump_if_true) {
                            bb->b_instr[i+1].i_opcode = JUMP_ABSOLUTE;
                            bb->b_nofallthrough = 1;
                        }
                        else {
                            inst->i_opcode = NOP;
                            bb->b_instr[i+1].i_opcode = NOP;
                        }
                        break;
                }
                break;
            }
            // ...
        }
    }
    return 0;
error:
    return -1;
}
```

当opcode为`LOAD_CONST`时，如果下一个opcode是`POP_JUMP_IF_FALSE`或`POP_JUMP_IF_TRUE`，则可以直接判断`LOAD_CONST`的值，然后根据判断结果直接跳转到目标位置。这样就可以减少一条指令的执行。switch分支中还有其它的指令优化。

### 清理基本块

```c
static void
clean_basic_block(basicblock *bb, int prev_lineno) {
    /* Remove NOPs when legal to do so. */
    int dest = 0;
    for (int src = 0; src < bb->b_iused; src++) {
        int lineno = bb->b_instr[src].i_lineno;
        if (bb->b_instr[src].i_opcode == NOP) {
            /* Eliminate no-op if it doesn't have a line number */
            if (lineno < 0) {
                continue;
            }
            /* or, if the previous instruction had the same line number. */
            if (prev_lineno == lineno) {
                continue;
            }
            /* or, if the next instruction has same line number or no line number */
            if (src < bb->b_iused - 1) {
                int next_lineno = bb->b_instr[src+1].i_lineno;
                if (next_lineno < 0 || next_lineno == lineno) {
                    bb->b_instr[src+1].i_lineno = lineno;
                    continue;
                }
            }
            else {
                basicblock* next = bb->b_next;
                while (next && next->b_iused == 0) {
                    next = next->b_next;
                }
                /* or if last instruction in BB and next BB has same line number */
                if (next) {
                    if (lineno == next->b_instr[0].i_lineno) {
                        continue;
                    }
                }
            }

        }
        if (dest != src) {
            bb->b_instr[dest] = bb->b_instr[src];
        }
        dest++;
        prev_lineno = lineno;
    }
    assert(dest <= bb->b_iused);
    bb->b_iused = dest;
}
```

`clean_basic_block`函数用于清理基本块，它的作用是删除一些不必要的指令。比如，删除一些没有意义的`NOP`指令。

### 总结

Python的字节码优化是通过`peephole`优化器实现的，它是一个简单的局部优化器，对字节码进行扫描，找到一些可以优化的地方，然后进行优化。

