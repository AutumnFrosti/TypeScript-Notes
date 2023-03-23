
// 剩余参数
function fn(x: string, y: string, ...args: number[]) {
    console.log(x, y, args);

}

fn('1', '2', 1, 2, 3, 4, 5, 6)
// 函数重载

function reverse(x: number): number;
function reverse(x: string): string;

// 函数重载
function reverse(x: number | string): number | string | void {
    // 判断参数类型
    if (typeof x === 'number') {
        // 数字类型，转为字符串，反转，再转为数字类型
        return Number(x.toString().split('').reverse().join(''));
    } else if (typeof x === 'string') {
        // 字符串类型，反转
        return x.split('').reverse().join('');
    }
}
