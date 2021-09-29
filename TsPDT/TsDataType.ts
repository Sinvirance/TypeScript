{
    // 基本类型布尔值boolean
    let isTrue: boolean = true;

    // 基本类型数值number
    let nums: number = 3;
    // NaN 非数值的数值
    let notANumber = NaN;
    // Infinity 无穷大
    let infinityNumber = Infinity;

    // 基本类型字符串 string
    let myName: string = 'Norman';
    // 模板字符串
    let intr: string = `Hello, my name is ${myName}`;

    // 空值变量只能将值设置为 null 或者 undefined
    let unusable: void = undefined;
    // 注意：严格模式下只能赋值为 undefined, 赋值null会报错

    let u: undefined = undefined;
    let n: null = null;

    // let num: number = undefined;
}

// 空值函数，ES6 块内不允许存放执行函数
function alertName(): void {
    alert("My name is Norman");
}