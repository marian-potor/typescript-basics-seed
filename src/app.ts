console.log('Hello TypeScript!');

//let can have type1 ot type2
let pizza:number | string = 'sksks';
pizza = 9;
console.log(pizza);

//type void - for functions that do not return enithing
function fun():void {
    console.log('sometrhing');
}

//union let can only get the tree options or get error
let size: 'small' | 'medium' | 'large';
size = 'small'

// function type first arg is mandatory, second one is optional (see ?) and if not provided will be = 1
// let funct: (arg1: number, arg2?: number) => number
// funct = (x,y = 1) => x*y;
// or
let funct: Function;
funct = (arg1: number, arg2: number = 1) => {
    return arg1*arg2
}
const first = funct(2,3);
const second = funct(3);

// object types
let obj: {name: string, price: number, method(): string}
obj = {
    name: 'someName',
    price: 12,
    method(){
        return obj.name;
    }
}

//arrays of one type
let array: number[]
// or 
// let array: Array<number>
array = [1,3,5]

//tuple types - defines type of al  arr elements; they have to respect the order
let arr: [string, number, boolean]
arr = ['ddd', 3, true]