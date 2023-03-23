
// 类型断言 手动指定一个类型
// 2种方式
// 1、变量 as 类型
// 2、<类型>变量
function GetLength(x: string | number): number {
    if ((x as string).length) {
        return (<string>x).length
    } else {
        return x.toString().length
    }
}

GetLength('123');
//将任何类型断言为any any类型是访问任何属性和方法
// 它极有可能掩盖了真正的类型错误，所以如果不是非常确定，就不要使用 as any。
// ，一方面不能滥用 as any，另一方面也不要完全否定它的作用，我们需要在类型的严格性和开发的便利性之间掌握平衡
(window as any).a = 1
// 通过as将any断言为一个具体的类型
function abc(x: any, y: any): any {
    return x + y
}
let a = abc(1, 2) as number
let b = abc('1', '2') as string