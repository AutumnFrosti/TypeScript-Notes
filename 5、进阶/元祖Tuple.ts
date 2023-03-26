let arr: number[] = [1, 2, 3, 4]
// 元祖
// 数组合并了相同的类型
// 元祖和合并了不同的类型
// 第一个规定了number 值第一个值也必须为number
let brr: [number, string] = [123, '123']
// 添加内容的时候，需要是number或者是string类型
brr.push('1234')
brr.push('1123')
brr.push(12313)
// brr.push(true) 报错 ，不能添加越界的类型

brr.push('123', 123)
brr.push(123, "123")
console.log(brr);
