
type s = string
// 通过 type 重新声明类型别名
// 作用和平常使用是一样

let str: s = '123'

// str = 123 报错 


// 常用语联合类型
type all = string | number | boolean
let atype: all = 1
let btype: all = false