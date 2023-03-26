// TypeScript 可以使用三种访问修饰符（Access Modifiers），分别是 public、private 和 protected。

// public 修饰的属性或方法是公有的，可以在任何地方被访问到，默认所有的属性和方法都是 public 的

class Bclass {
    public name1: string //公有的属性
    public constructor(name: string) { //公有的方法
        this.name1 = name
    }
    public P() {
        return this.name1
    }
}

const b = new Bclass('张三')
console.log(b.P);


// private 修饰的属性或方法是私有的，不能在声明它的类的外部访问,包括其子类，但是这个属性和方法是可以被继承的

// protected 修饰的属性或方法是受保护的，它和 private 类似，区别是它在子类中也是允许被访问的
class Pclass {
    public sex: string
    private _name1: string
    protected age: number
    constructor(_name1: string) {
        this._name1 = _name1
    }
    say() {
        return this._name1
    }
}

class Spclass extends Pclass {
    constructor(_name1: string) {
        super(_name1)
    }
    play() {
        return super.age
    }
}


// readonly 只读属性不能被修改的

class X {
    // readonly age: number
    // readonly 以及三个修饰符 定义在参数上，就会在创建的时候初始化 
    constructor(readonly age: number) {
        // this.age = age
    }
    update() {
        // this.age= 15 只读属性不能被修改
    }
}
