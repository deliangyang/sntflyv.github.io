
## 如何通过group by过滤次相同组数量最多的列

### 背景

之前潘同学问了我一个问题，group by如何刷选出同组个数次数最多的一行，我试了一下，没有找到解决方案，于是就回了他可能需要用函数来解决，但是后来又仔细想了一下，肯定有其他更好的方法，于是接着琢磨了一下。

### 过程

![img](../../../assets/mysql/group-by.png)

描述：
按照c1,c2,c3分组，得到结果集  
但是要得到c4，结果最多那个。

#### 建表添加测试集
```sql
-- 建表语句
CREATE TABLE `t` (
  `c1` varchar(1) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `c2` varchar(1) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `c3` varchar(1) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `c4` varchar(1) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci

-- 添加测试集
INSERT INTO `t` VALUES ('a','b','c','a'),('a','b','c','a'),
('a','b','c','b'),('a','b','c','b'),('a','b','c','b'),
('a','b','c','b'),('a','b','a','a');
```

#### 解决方案
```sql
select c1, c2, c3, c4 from (
    select *, count(1) as cc from t 
      group by c1, c2, c3, c4 
      order by cc desc
) as dd 
group by c1, c2, c3;
```

#### 解决问题思路

1. 需要做两次`group by`，第一次group by统计出前三项相同的组出现的次数，然后对数量做倒序排列，`group by`的特点，相同组的数据只取第一条，所以为了拿到数量最多的，我们需要对数量做倒序排列。

2. 第二次`group by`才是真正的拿到数据，相同组的第一条数据

### pgSQl的解决方案

当时想到pgsql其实更好处理这个问题，不用想这个麻烦，异曲同工之妙。`WITH .... AS`，pgsql显得更加的强大些。
```sql
WITH xx AS (
	select *, count(1) as cc from t 
    group by a, b, c, d 
    order by cc desc
) select a, b, c, d from xx 
    group by a, b, c;
```

### 知识扩展

1. mysql中`count`为什么需要参数，`count(1)`和`count(*)`，`count(a)`有什么区别，其实`count(1)`和`count(*)`每什么区别，有区别的是`count(a)`，它会过滤掉`a = NULL`的记录，
所有`count(a) <= count(1) or count(*)`

### 总结

1. MySQl和pgSQL功能是在太强大了，关系查询的特性，帮助我们减少了代码量，提升了工作效率。
2. 自己对数据库的知识尚且薄弱，仍有很多知识需要学习的。
3. 如果表的行数特别大的话，可能两次group by操作比较耗时，所有我们可以分步骤进行，或者建立视图。
