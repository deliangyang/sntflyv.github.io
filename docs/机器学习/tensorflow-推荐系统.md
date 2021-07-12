## tensorflow 推荐系统

### 用户数据收集
1. 收集用户数据，这些数据能反映用户的某些偏好，通过分析用户的行为评分数据进行推荐
    - 行为分组
    - 行为加权
    - 减噪和归一化

### 协同过滤算法
- 算法
    - 用户的协同过滤
    - 基于物品的协同过滤
- 欧几里得距离，相似度计算
    - 欧式距离越小、相似度越小
- 余弦相似，分词向量法，判断文本的相似度
    - 余弦值为0，表示文本的相似度低
    - 余弦值接近1，表示文本的相似度越高
    - 余弦值接近-1，表示文本相似度负相关

### Tensorflow实践
1. 数据准备，用户行为数据
2. 数据清洗，去除噪点
3. 提取特征
4. 建立数据及评分矩阵
5. 构建模型

## 实时引擎

- [data_performance](https://www.tensorflow.org/guide/data_performance#the_dataset)
- [TFRecord 和 tf.Example](https://www.tensorflow.org/tutorials/load_data/tfrecord)
- [分布式训练](https://www.oreilly.com/content/distributed-tensorflow/)
- [Tensorflow 分布式训练](https://www.tensorflow.org/guide/distributed_training)
- [TensorNet是一个构建在TensorFlow之上针对广告推荐等大规模稀疏场景优化的分布式训练框架](https://reposhub.com/python/deep-learning/Qihoo360-tensornet.html)
- [TensorFlow 分布式 Demo](https://blog.csdn.net/fenglepeng/article/details/105535061)
- [Tensorflow.js Flink 实践](https://github.com/TsingJyujing/tf.js-on-flink)
- [实时数据流上的机器学习——Tensorflow on Flink](https://zhuanlan.zhihu.com/p/55638891)
## tensorflow demo

```py
import tensorflow as tf

# 加载数据集
mnist = tf.keras.datasets.mnist

# 载入并准备好 MNIST 数据集。将样本从整数转换为浮点数：
(x_train, y_train), (x_test, y_test) = mnist.load_data()
x_train, x_test = x_train / 255.0, x_test / 255.0

# 将模型的各层堆叠起来，以搭建 tf.keras.Sequential 模型。为训练选择优化器和损失函数：
model = tf.keras.models.Sequential([
  tf.keras.layers.Flatten(input_shape=(28, 28)),
  tf.keras.layers.Dense(128, activation='relu'),
  tf.keras.layers.Dropout(0.2),
  tf.keras.layers.Dense(10, activation='softmax')
])

model.compile(optimizer='adam',
              loss='sparse_categorical_crossentropy',
              metrics=['accuracy'])

# 训练并验证模型：
model.fit(x_train, y_train, epochs=5)
model.evaluate(x_test,  y_test, verbose=2)

## 结果预测
res = model.predict(x_test, batch_size=128)
print(res)
```

## 视频推荐
- 建立关键词库、个性化标签库
- 视频上传，用户打tag（描述提取关键词）
- 后台tag校正、后台打tag
- 设置标签库、用户设置标签
- 收集用户的关注、用户的浏览、用户的评论（提取关键词），计算相似度，推荐
- 热门推荐
- 已下发过滤、去重
- 等等
- 零起点推荐
    - 一开始需要准备大量的数据，如果单靠用户上传视频，很可能玩到最后就没数据了
    - 刚注册的用户可能什么都没有
        - 推荐一些热门的关注
        - 推荐一些热门的视频
        - 让用户设置个性化标签、年龄、性别等


## 参考资料
1. [Tensorflow构建推荐系统](https://blog.csdn.net/Oscar6280868/article/details/80952945)
2. [Tensorflow io](https://github.com/tensorflow/io#tensorflow-io)