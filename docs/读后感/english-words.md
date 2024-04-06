
- concept
  - an idea of how something is, or how something should be done
    - concept of
      - the concept of total patinet care
      - the concept of infinite space
    - concept that
      - the concept that we are citizens of one world
      - a new concept in business travel
      - our basic concepts of decent humna behavior
      - It's very simple, once you grasp the concept

- In fact
- pronunciation
  - the way in chich a language or a particular word is pronounced
- pronounce 明言
  - to make the sound of a letter, word etc, especially in the correct way
    - correct
    - incorrect
  - how do you pronounce your name?
- snack
  - a small amount of food that is eaten between man meals or intead of meal
- drill
  - the drill
  - A tool or machine uesd for making holes in something
    - an electric drill
  - a method of teaching students, sports players etc something by making them repeat the same lesson, exercise etc many times.
- if you ask me
  - in my opinion
- you'd be much better of
- request your transfer
- we can make that happen (让某事情发生)
  - i can do that
- so far
  -  如此
- to do so
  - 为此
- In the same way that the function body can operate on an abstract list instead of specific values, generics allow code to operate on abstract types.
- eliminate
  - How would we eliminate that duplication?
- At the beginning of this book I promised you that we wouldn't take any shortcusts and build a fullu functional interpreter with our own hands, from scratch and without any third part tools.
- Consider what happens when we run this snippet of Monkey code in our interpreter
- Obviously
- The environment that was constructed for the evaluation of counter's body gets destroyed and with it the foobar binding.




- It's advisable to have your code panic when it's possible that your code could end up in a bad state.
- In this context, a bad state is when some assumption, guarantee, contract, or invariant has been broken, such as when invalid values, contradictory values ,or missing values are passed to your code-plus one or more of the following:
  - the bad state is something that is unexpectedd, as opposed to something that will likely happen occasionally, like a user entering dta in the wrong format.
  - your code after this point needs to reply on not being in this bad state, rather than cheking for the problem at every step.
  - There's not a good way to encode this information in the types you use. We'll work through an exmpale of what we mean in the "Encoding States and Behavior as Types" section of Chapter 17.

- If someone calls your code and passes in values 
  - that don't make sense, (如果有人调用你的代码，并且通过了赋值，这样是没有意义的)
  - it's best to return an error if you can 
    - so the user of the library can decide 
      - what they want to do in that case. （如果你可以的话最好是返回错误，因此用户库可以在这个例子中决定他们做他们想做的）
  - 如果有人在调用你的代码是传入不合理的值，最好尽可能返回错误信息，这样库的用户就可以决定他们在这种情况下要做什么。
- However, in cases where continuing could be insecure or harmful, 
  - the best choice might be the call panic! and alert the person using your library to the bug in their code so they can fix it during development.
  - 然而，在这种情况下继续操作可能不安全或者有害，最好的选择肯能是调用 panic!，警告使用库的人去调试他们的代码，以至于能在开发阶段修复它。
    - 合理翻译：
      - 然而，在继续使用可能不安全或者有害的情况下，最好的选择可能是调用 panic！，并提醒使用您库的人注意他们代码中的错误，以便他们在开发过程中修复它。
- Similarly, panic! is often appropriate if you're calling external code that is out of your control and it returns an invalid state that you have no way of fixing.
  - 相似的，panic！通常处理不在你控制范围内，返回你没办法修复的无效状态的调用继承代码
    - 同样，如果您调用的外部代码不收您的控制，而它返回的状态无效，您又没办法修复，那么 panic！。
    - appropriate 适合
    - often appropriate 适宜


- However, when failure is expected, it's more appropriate to return a Result than to make a panic! call.
  - 同样，当失败在预期内，返回 Result 比调用 panic！更合适
- Examples include a parser being given malformed data or an HTTP request returning a status that indicates you have hit a rate limit.
  - 例子包含一个解析器被给与一个非结构化的数据，或者一个 HTTP 请求返回命中频率限制的状态
    - 例如，解析器收到畸形数据，或者 HTTP 请求返回状态，表明您已经达到了速率限制。
- In these cases, returning a Result indicates that failure is an expected possibility that the calling code must decide how to handle.
  - 在这些例子中，返回 Result 表明失败是一个有可能被预知的，在调用代码时必须决定如何处理。
  - 在这些情况下，返回一个结果表示失败有一种预期的可能性，调用代码必须决定如何处理。


- 如何翻译
  - 翻译句子的顺序不一定是按短句或者从句的走向，首先我们应该学会的是如何断句，消除补充说明，翻译每个短句或者从句的意思，然后再拼接在一起，调整句子的顺序，最终达到语句通顺，表达清晰。