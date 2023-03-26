// 在 TypeScript 中，抽象类是一种不能被直接实例化的类，它只能被其他类继承并实现其抽象方法。抽象类主要用于定义一些基础功能和行为，而具体的实现则由其子类来完成。

// 定义抽象类的方式是在类名前加上 abstract 关键字，同时在抽象类中可以定义抽象方法，抽象方法不包含具体实现，只是声明其方法签名。子类必须实现抽象方法，否则会报错。

abstract class CxAnimal {
    abstract makeSound(): void;
    move(): void {
        console.log("Moving...");
    }
}

//   在上面的代码中，我们定义了一个抽象类 Animal，它有一个抽象方法 makeSound 和一个非抽象方法 move。 makeSound 方法没有具体实现，只是定义了其方法签名，必须在子类中实现；而 move 方法有具体实现，但它也可以被子类覆盖。

class Dog extends CxAnimal {
    makeSound() {
        console.log("Barking...");
    }
}


// 在上面的代码中，我们定义了一个 Dog 类，它继承自 Animal 类，并实现了 makeSound 方法，输出狗叫的声音。由于 Dog 类实现了 makeSound 方法，所以它可以被实例化。

const dog = new Dog();
dog.makeSound(); // 输出 "Barking..."
dog.move(); // 输出 "Moving..."


// 需要注意的是，抽象类不能直接被实例化，只能作为其他类的父类使用。如果我们尝试直接实例化 Animal 类，会得到一个编译错误：

// const animal = new Animal(); // 编译错误：无法创建抽象类的实例





// 在 TypeScript 中，类不仅可以作为值被实例化，还可以用来定义类型，类的类型可以像接口一样用于类型声明和类型注解。

// 类的类型包括两部分内容：

// 类的实例类型：表示该类的实例的类型，可以用来声明变量、函数参数或返回值的类型。

// 类的静态类型：表示该类本身的类型，包括类的静态属性和静态方法，可以用来声明静态属性和静态方法的类型。

// 下面是一个使用类类型的示例：


class LPerson {
    constructor(public name: string, public age: number) { }

    sayHello() {
        console.log(`Hello, my name is ${this.name}.`);
    }

    static create(name: string, age: number) {
        return new Person(name, age);
    }
}

let lperson: LPerson; // 类型声明
lperson = new LPerson("Alice", 20); // 创建类的实例
lperson.sayHello(); // 调用实例方法

let createPerson: typeof LPerson.create; // 类型声明
createPerson = LPerson.create; // 赋值静态方法
let newPerson = createPerson("Bob", 25); // 调用静态方法
console.log(newPerson.name); // 输出 "Bob"
// 在上面的代码中，我们定义了一个 Person 类，包括一个构造函数和一个实例方法 sayHello，以及一个静态方法 create。我们使用 typeof 操作符声明了 createPerson 的类型，表示它的类型与 Person.create 方法相同。然后我们将 Person.create 方法赋值给 createPerson，并调用它来创建一个新的 Person 对象。在这个示例中，我们使用类的类型来声明变量和函数参数的类型，以及赋值静态方法的类型。