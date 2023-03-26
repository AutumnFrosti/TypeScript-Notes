// 类（Class）：定义了一件事物的抽象特点，包含它的属性和方法
// 实例化对象

class Person {
    name: string
    age: number
    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
    say(str: string) {
        console.log('====================================');
        console.log(str);
        console.log('====================================');
    }
}


let p  =new Person('张三', 20)
p.say('hello')