// 数字类型
let a: number = 10//十进制

// 布尔类型
let f: boolean = false

//字符串类型
let s: string = '1'

// undefined和null
let u: undefined = undefined
let n: null = null
//可以作为其他类型的子类型 //严格模式下不行


// any 类型 任何类型
let an: any = 123
an = true
an = '1'
an = []

// void类型
// 空值类型 表示没有任何返回值的函数
function fun1(): void {
    console.log(123)
}

// 没有任何类型
let v: void = undefined


// 函数返回值定义类型
function fun2():number{
    return 1
}


