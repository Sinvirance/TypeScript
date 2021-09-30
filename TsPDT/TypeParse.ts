{
    // 类型推断
    let AnyClearTypeVariable;
    AnyClearTypeVariable = '7';
    AnyClearTypeVariable = 7;
}

{
    // 联合类型
    let UnionType: string|number;
    UnionType = 7;
    UnionType = 'seven';
    console.log(UnionType);

}


// 当 TypeScript 不确定联合类型的变量到底是哪个时，只能够访问联合类型共有的方法和属性
function getString(TestType: string|number): string {
    return TestType.toString();
}

const NormanAge = '7';
console.log("Norman" + getString(NormanAge));


{
    // 联合类型的类型推论
    let UnionTypeInference: string | number;
    UnionTypeInference = 'seven';
    console.log(UnionTypeInference.length);
    UnionTypeInference =7;
    // 由于赋值语句使得 TypeScript 推断该类型为 number 所以无法执行字符串长度计算
    // console.log(UnionTypeInference.length);
    let numbers = 7;
    console.log(UnionTypeInference + numbers);
}