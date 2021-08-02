1. 使用ts的好处是什么？
> 1.1 TS为js的超集，给js添加了可选的静态类型和基于类的面向对象编程，扩展了js的语法，功能比js只多不少。
> 
> 1.2 TS为面向对象的编程语言（？），包含类和接口的概念。
> 
> 1.3 能提前爆出低级错误。
> 
> 1.4 类型提示友好，明确知道各种数据类型，代码可读性强，更方便理解。（前后端交互的接口约束）
> 
> 1.5 ts中有很多方便的特性。（可选链）
 
2. type和interface的异同
用interface来描述数据结构，用type来描述类型。
 
2.1 都支持变数一个对象或者函数
```typescript
interface User {
  name: string;
  age: number;
}

type User = {
  name: string;
  age: number;
}
```
 
2.2 都允许 extends，可以互相 extends.
 
2.3 只有type可以做的事情
type 可声明基本类型，联合类型，元组等类型
```ts
type Name = string; // 基本类型

interface Dog {
  wong();
}
interface Cat {
  miao();
}
type Pet = Dog | Cat; // 联合类型

type PetList = [Dog, Cat] // 元组类型
```

3. 如何基于一个已有类型，扩展出一个大部分内容相似，但是部分区别的类型。
Pick Omit
```ts
interface Common {
  name: string;
  code: number;
}
type Code = Pick<Common, 'code'> // number
const target: Code = {code: 1}

type NoCode = Omit<Common, 'code'>
const target2: NoCode = {name: '123'}
```

4. 什么是泛型，泛型的具体使用。

泛型是指在定义函数、接口或者类的时候，不预先指定具体的类型，而是使用时再去指定类型的一种特性。

```ts
interface UserCommon<T = any> {
  userId: T;
}

type UserWechat = UserCommon<string>

type UserQQ = UserCommon<number>
```

5. 用装饰器实现一个计算函数时间的逻辑
****
