function createArray<T>(length: number, value: T): Array<T> {
    let result: T[] = [];
    for (let i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
}

createArray(3, 'x'); // ['x', 'x', 'x']

// 我们在函数名后添加了 <T>，其中 T 用来指代任意输入的类型，在后面的输入 value: T 和输出 Array<T> 中即可使用了。


// 多个泛型
function swap<T, U>(tuple: [T, U]): [U, T] {
    return [tuple[1], tuple[0]];
}

swap([7, 'seven']); // ['seven', 7]

// 泛型约束

// 约束任意输入的类型必须要有length属性

interface Ilength {
    length: number
}
function getLength<T extends Ilength>(X: T): number {
    return X.length
}


// 泛型接口

interface IArr {
    <T>(value: T, count: number): Array<T>
}

let getArr1: IArr = function <T>(value: T, count: number): T[] {
    const arr: T[] = []
    for (let i = 0; i < length; i++) {

        arr.push(value)
    }
    return arr
}



interface CreateArrayFunc<T> {
    (length: number, value: T): Array<T>;
}

let cArray: CreateArrayFunc<any>;
cArray = function <T>(length: number, value: T): Array<T> {
    let result: T[] = [];
    for (let i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
}

createArray(3, 'x'); // ['x', 'x', 'x']

// 注意，此时在使用泛型接口的时候，需要定义泛型的类型。


// 泛型类§
// 与泛型接口类似，泛型也可以用于类的类型定义中：

class MyGenericClass<T> {
    private data: T;
  
    constructor(data: T) {
      this.data = data;
    }
  
    getData(): T {
      return this.data;
    }
  }

//   在这个泛型类中，T 是一个泛型参数，可以在使用时指定具体类型。例如，可以使用该类来创建一个存储字符串的对象：
const myStringObject = new MyGenericClass<string>("Hello, world!");
console.log(myStringObject.getData());  // 输出 "Hello, world!"
// 也可以使用该类来创建一个存储整数的对象：
const myIntegerObject = new MyGenericClass<number>(42);
console.log(myIntegerObject.getData());  // 输出 42
// 在创建对象时需要指定泛型参数的具体类型，否则会出现编译错误。例如，下面的代码将会出现编译错误