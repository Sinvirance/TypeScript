/* 函数声明 */
function sum(x: number, y: number): number {
    return x + y;
}


/* 函数表达式 */
{
    let sumResult = function (x: number, y: number): number {
        return x + y;
    }
}

{
    let sumResult: (x: number, y: number) => number = function (x: number, y: number): number {
        return x + y;
    }
}

/* 使用接口定义函数 */
{
    interface ISearchFunction {
        (source: string, subString: string): boolean;
    }

    let mySearch: ISearchFunction;

    mySearch = function (source: string, subString: string) {
        return source.search(subString) !== -1;
    }
}


/* 函数重载 */
function reverse(x: number): number;

function reverse(x: string): string;

function reverse(x: number | string): number | string | void {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    } else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}

console.log(reverse('string'));


function push(array: any[], ...items: any[]) {
    items.forEach(function(item) {
        array.push(item);
    });
}

let a = [];
push(a, 1, 2, 3);
console.log(a);