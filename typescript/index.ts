const str = 'hello'
console.log(typeof str)

const rectangle = {
    width:5,
    height:4
}

interface Rectangle {
    width:number,
    height:number
}
const obj:Rectangle = { width: 10, height: 15 };
const area:number = obj.width * obj.height;

console.log(area)

// console.log(4 / [])
console.log(1 / 0) 

// if ("" == 0) {
//     console.log('worked')
// }

const x = 5
// if (1 < x < 3) {
//     console.log('heyllo')
// }

// order doesn't matter
const rect:Rectangle = {
    height:20,
    width:10,
}


interface User{
    name:string,
    id:number
}

class UserAccount{
    name:string;
    id:number;

    constructor(name:string, id:number){
        this.name = name;
        this.id = id;
    }

    getUserAccount():number{
        return this.id;
    }

}

const user:UserAccount = new UserAccount('Nabhag', 63);
console.log(user.getUserAccount());


// creating own complex types with unions and generics

type Mybool = true | false; // boolean is a protperty of Structural Type System

type isThere = 'found' | 'not found';

const isFound:isThere = 'not found'
console.log(isFound)

function takesMultipletypeParameter(obj:string | string[] | number):string[] | string | number[]{
    console.log(typeof obj == 'string')
    if(typeof obj === 'string') {
        return obj;
    }else if(typeof obj === 'number'){ 
        return [obj];
    }

    return obj;
     
}

console.log(takesMultipletypeParameter('Nabhag'))
console.log(takesMultipletypeParameter(['nabhag']))

console.log(takesMultipletypeParameter(32))

type StringArray = Array<string>;
type NumberArray = Array<number>
type UserArray = Array<User>

const userArray:UserArray = [user]

console.log(userArray)

interface Item<Type>{
    add:(obj:Type) => void;
    get:() => Type;
}

declare const item:Item<string>;

// const object = item.get();
// item.add('can pass the string not the number');

interface Point{
    x:number;
    y:number;
}

function logPoint(point:Point): string{
    return `${point.x}, ${point.y}`;
}

const point = {x:3, y:4};
console.log(logPoint(point))




