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
let size: 'small' | 'medium' | 'large' = 'small'; //default value
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

//type alias
type Size = 'small' | 'medium' | 'large';
type Callback = (size: Size) => void;

let otherPizza: Size = 'small';
const changeSize: Callback = (x: Size) => {
    otherPizza = 'large';
}

// type assertion
type Pizza = {name: string, price: number};
const pizzaPie: Pizza = { name: 'Diavola', price:9};
const serialized: string = JSON.stringify(pizzaPie);
function getNameFromJSON(obj: string){
    // return (<Pizza>JSON.parse(obj)).name;
    // or
    return (JSON.parse(obj) as Pizza).name;
}
getNameFromJSON(serialized);

//interface
interface Sizes {
    sizes: string[],
}
interface PizzaInt extends Sizes {
    name: string,
    toppings?: number, //optional properti 
    getAvailableSizes(): string[],
    [key: number]: string //index signature
}

// let pizzaForInt: PizzaInt;
function createPizza(name:string, sizes:string[]):PizzaInt {
    return {
        name,
        sizes,
        // toppings: 3, optional properti, we can add it later
        getAvailableSizes() {
            return this.sizes;
        }
    }
}
let pizzaForInt = createPizza('Diavola', ['small', 'medium']);
pizzaForInt.toppings = 3;
pizzaForInt[1]='abc';

//classes
class PizzaClass {
    toppings: string[] = []; //is already asigned a value - empty array
    private size: number;

    constructor(readonly name: string, size: number){
        this.size = size;
    }

    public addTopping(newTopping: string) {
        this.toppings.push(newTopping);
        console.log('New topping added:', newTopping);
    }
}

const pizzaFromClass = new PizzaClass('Diavola', 20)
pizzaFromClass.addTopping('pepperoni');

// getters and setters
class SizesList {
    constructor(protected sizeList: string[]){}
     //the protected type keeps the property private but can be modified by a method of a child class

    set availableSizes(sizeList: string[]) {
            this.sizeList=sizeList;
    }

    get availableSizes() {
        return this.sizeList;
    }
}

const pizzaSizes = new SizesList(['small', 'medium']);
console.log(pizzaSizes.availableSizes);
pizzaSizes.availableSizes = ['medium', 'large'];
console.log(pizzaSizes.availableSizes);

//Classes inheritance

class Cookies extends SizesList {
    constructor(readonly name: string, public sizeList:string[]) {
        super(sizeList);
    }
    //this method canges the value of the protected sizeList
    changeAvailableSizes(size: string[]){
        this.sizeList = size;
    }
}

let firstCookie = new Cookies('Chocolate', ['small', 'medium']);
console.log('Cookie sizes:', firstCookie.availableSizes);
firstCookie.availableSizes = ['medium', 'large'];
console.log('Cookie sizes:', firstCookie.availableSizes);

//abstract classes - can't create a new instance, can only extend
abstract class Vehicle {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
}
