// 使用 static 修饰符修饰的方法称为静态方法，它们不需要实例化，而是直接通过类来调用：

// 在 TypeScript 中，静态方法是指属于类本身而不是类的实例的方法。也就是说，静态方法可以直接通过类名来调用，而无需创建类的实例。静态方法使用 static 关键字来修饰，例如：

class MathHelper {
    static add(a: number, b: number) {
        return a + b;
    }
}

console.log(MathHelper.add(1, 2)); // 输出 3

// 在上面的示例中，MathHelper 类定义了一个静态方法 add，它可以直接通过类名 MathHelper.add 来调用，而不需要创建 MathHelper 的实例。在 add 方法中，我们传入两个参数 a 和 b，并返回它们的和。

// class Person {
//     private static _total: number = 0;
//     private _name: string;
//     constructor(name: string) {
//       this._name = name;
//       Person._total++;
//     }
//     public static getTotal() {
//       return Person._total;
//     }
//     public greet() {
//       console.log(`Hello, my name is ${this._name}.`);
//     }
//   }
  
//   const person1 = new Person('John');
//   const person2 = new Person('Jane');
//   console.log(Person.getTotal()); // 输出 2
//   person1.greet(); // 输出 "Hello, my name is John."
//   person2.greet(); // 输出 "Hello, my name is Jane."