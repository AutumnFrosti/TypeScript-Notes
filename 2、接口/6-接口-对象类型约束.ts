
// 对 「对象的形状（Shape）」的描述
// 接口一般首字母大写
//定义的变量不能比接 接口多 也不能少

// 声明接口 对变量进行约束
interface IPerson {

    name: string,
    age: number,// 加上问号可有可无
    sex?: string,
    // 一个接口中只能定义一个任意属性。如果接口中有多个类型的属性，则可以在任意属性中使用联合类型
    // 一旦定义了任意属性，那么确定属性和可选属性的类型都必须是它的类型的子集：
    [PropName: string]: string | number | undefined
}

let p: IPerson = {
    name: '小明',
    age: 18,
    // sex:'男'
}

// 只读属性 
// readonly 加上readonly标识符只能读取不能修改
interface ISf {
    readonly id: number,
    name: string,
    age: number,
}

let S: ISf = {
    id: 1, //这个值就不能被修改
    name: '小红',
    age: 17
}