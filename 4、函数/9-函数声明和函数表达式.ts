
// 在js中
// // 函数声明 命名函数
// function add(a,b) {
// return a + b
// }

// //函数表达式 匿名函数
// const remove = (a,b) => {
// return a + b
// }

//在ts中
// 函数声明 命名函数
// (参数名:参数类型 ... )：返回值类型
function add(a: number, b: number): number {
    return a + b
}

let c: number = add(2, 3)

// 函数表达式 匿名函数

let remove = (a: number, b: number): number => {
    return b - a
}

remove(1, 2)

// 函数的完整写法
let add3: (a: number, b: number) => number = function (a: number, b: number): number {
    return a + b
}