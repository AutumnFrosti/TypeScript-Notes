// 约束函数

interface ISearchFunc {
    //    函数传入参数：类型  返回值的类型    
    (a: string, b: string): boolean
}

const Search: ISearchFunc = (a: string, b: string): boolean => {
    return a.search(b) !== -1
}

console.log(
    Search('123', '2'));



interface SearchFunc {
    (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function(source: string, subString: string) {
    return source.search(subString) !== -1;
}