// 使用 getter 和 setter 可以改变属性的赋值和读取行为：

class NamePerson {
    private _name: string;
    get name() {
        return this._name;
    }
    set name(value: string) {
        if (value.length < 3) {
            throw new Error('Name is too short.');
        }
        this._name = value;
    }
}

const person = new NamePerson();
person.name = 'John'; // 正常赋值
console.log(person.name); // 输出 "John"
person.name = 'Li'; // 抛出错误，因为名字太短

//   在上面的代码中，NamePerson 类有一个私有成员 _name，通过 get 和 set 定义了一个公有的 name 属性。在 set 方法中，如果传入的值长度小于 3，将会抛出一个错误。在 get 方法中，返回私有成员 _name 的值。

// 当我们调用 person.name 时，会自动调用 get 方法获取 _name 的值。而当我们给 person.name 赋值时，会自动调用 set 方法，进行一些数据验证。这就是存取器的作用。