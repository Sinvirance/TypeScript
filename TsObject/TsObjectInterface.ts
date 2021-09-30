{
    interface Person {
        name: string;
        age: number;
    }

    let Norman: Person = {
        name: 'Norman',
        age: 24,
    };

}

/*
 * 可选属性
 */
{
    interface Person {
        name: string;
        age?: number;
    }
    
    let Norman: Person = {
        name: 'Norman',
    };
}


/* 任意属性 */
{
    interface Person {
        name: string;
        age?: number;
        [propName: string]: any;
    }

    let Norman: Person = {
        name: 'Norman',
        gender: 'male',
    }
}


/* 只读属性 */
{
    interface Person {
        readonly id: number;
        name: string;
        [propName: string]: string|number;
    }
    
    let Norman: Person = {
        id: 12,
        name: 'Norman',
        gender: 'male',
    };

    // 报错，无法再实例化之后继续为只读属性赋值
    // Norman.id = 15;
}