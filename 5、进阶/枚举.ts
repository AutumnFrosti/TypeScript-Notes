// 使用枚举类型给一组数值赋予名称
// 可以通过名称拿去值，也可以通过值拿取名称
// 1、2、3、4
// 枚举成员会被赋值为从 0 开始递增的数字，同时也会对枚举值到枚举名进行反向映射：
enum numberType { zero, one, two, three, four }


// 手动赋值
// 我们也可以给枚举项手动赋值：

// enum Days {Sun = 7, Mon = 1, Tue, Wed, Thu, Fri, Sat};


// console.log(Days["Sun"] === 7); // true
// console.log(Days["Mon"] === 1); // true
// console.log(Days["Tue"] === 2); // true
// console.log(Days["Sat"] === 6); // true

// 手动赋值尽量不要取写重复的值
// 递增到 3 的时候与前面的 Sun 的取值重复了，但是 TypeScript 并没有报错，导致 Days[3] 的值先是 "Sun"，而后又被 "Wed" 覆盖了

enum Days { Sun = 3, Mon = 1, Tue, Wed, Thu, Fri, Sat };

console.log(Days["Sun"] === 3); // true
console.log(Days["Wed"] === 3); // true
console.log(Days[3] === "Sun"); // false
console.log(Days[3] === "Wed"); // true


// 枚举项有两种类型：常数项（constant member）和计算所得项（computed member）
// 如果紧接在计算所得项后面的是未手动赋值的项，那么它就会因为无法获得初始值而报错：
enum Color {
    red, //常数项（constant member）
    blue = "blue.length" //计算所得项（computed member）
}

// 常数枚举
// 常数枚举是使用 const enum 定义的枚举类型：
const enum Obj {
    o,
    b,
    j
}

// 常数枚举与普通枚举的区别是，它会在编译阶段被删除，并且不能包含计算成员。
console.log(Obj.o);

// 假如包含了计算成员，则会在编译阶段报错：
// const enum Color {Red, Green, Blue = "blue".length};

// 外部枚举

// 外部枚举（Ambient Enums）是使用 declare enum 定义的枚举类型：
// 运用在声明文件

// 同时使用 declare 和 const 也是可以的：
declare enum B {
    a, b, c
}
// 之前提到过，declare 定义的类型只会用于编译时的检查，编译结果中会被删除


