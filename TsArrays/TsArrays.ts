{
    /* 类型 + 方括号[] 定义数组 */
    let numArrays: number[] = [1, 2, 3];

    let nums = 21;

    numArrays.push(nums);
    // 报错：number数组的push 方法要求传入一个 number 类型的值，这里传入的是 string
    // numArrays.push('21');
    console.log(numArrays);
}

{
    /* 数组泛型定义表示数组 */
    let numGenericArrays: Array<number> = [1, 2, 3];

    type numGenericArraysType = typeof numGenericArrays;
    type type = numGenericArraysType[number];
    console.log(numGenericArrays);
}

{
    /* 接口定义数组 */
    interface NumberIArray {
        [index: number]: number;
    }

    let numberArrays: NumberIArray = [1, 2, 3];
}


function sum() {
    /* 类数组接口定义：arguments 需要实现 IArguments 接口 */
    let args: {
        [index: number]: number;
        length: number;
        callee: Function;
    } = arguments;
}

{
    /* any 数组 */
    let Anylist: any[] = ['Norman', 24, {web: 'www.sinvirance.ltd'}];
    type AnylistType = typeof Anylist;
    type TypeAnyList = AnylistType[number];
    console.log(Anylist);
}
