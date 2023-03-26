

interface InPerson {
    name: string;
    age: number;
    sayHello(): void;
}

class Student implements InPerson {
    constructor(public name: string, public age: number) { }

    sayHello() {
        console.log(`Hello, my name is ${this.name}.`);
    }
}

let student: InPerson = new Student("Alice", 20);
student.sayHello(); // 输出 "Hello, my name is Alice."

// 在上面的代码中，我们定义了一个 Person 接口，包括 name、age 和 sayHello 三个属性。然后我们定义了一个 Student 类，它实现了 Person 接口，保证实现了 Person 接口中定义的所有属性和方法。最后我们创建了一个 Student 实例，并将其赋值给 Person 类型的变量，然后调用 sayHello 方法。

// 需要注意的是，类实现接口时不仅要保证属性名和类型一致，还要保证方法签名一致。在接口中定义的方法必须在实现类中具有相同的名称、参数类型和返回类型。如果类没有实现接口中定义的所有属性和方法，会得到一个编译错误。


// 接口继承接口

interface JJJPerson {
    name: string;
    age: number;
}

interface JJJStudent extends JJJPerson {
    grade: number;
}

let studentA: JJJStudent = { name: "Alice", age: 20, grade: 90 };
console.log(studentA.name); // 输出 "Alice"
console.log(studentA.age); // 输出 20
console.log(studentA.grade); // 输出 90


// 接口继承类

// 常见的面向对象语言中，接口是不能继承类的，但是在 TypeScript 中却是可以的

class NewPerson {
    name: string
    constructor(name: string) {
        this.name = name
    }
    sey() {
        console.log('1');

    }
}

interface APerson extends NewPerson { //接口继承类中的实例属性和实例方法
    age: number
}

let aPerson: APerson = {
    name: '1',
    age: 12,
    sey() {

    }
}