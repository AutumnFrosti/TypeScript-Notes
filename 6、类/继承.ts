// 继承 就是类与类之间的关系
class Animal {
    public name;
    constructor(name) {
        this.name = name;
    }
    sayHi() {
        return `My name is ${this.name}`;
    }
}


// 使用 extends 关键字实现继承，子类中使用 super 关键字来调用父类的构造函数和方法

class Cat extends Animal {
    constructor(name) {
      super(name); // 调用父类的 constructor(name)
      console.log(this.name);
    }
    sayHi() {
      return 'Meow, ' + super.sayHi(); // 调用父类的 sayHi()
    }
  }
  
  let c = new Cat('Tom'); // Tom
  console.log(c.sayHi()); // Meow, My name is Tom