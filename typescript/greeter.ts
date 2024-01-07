function greet(name: string){
    return `${name + ' Hello'}`
}

// console.log(greet('Nabhag'))


let data = {
    name: 'Nabhag',
    hello: {
	world: 'world',
    }
}


const obj2 = {
  foo: 'world',
  bar: true  ? data : undefined
};

console.log(obj2);

