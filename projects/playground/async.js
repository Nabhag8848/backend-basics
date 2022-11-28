// callback

function greet(name) {
    console.log(`Hello ${name}`);
}

function isJavaScriptDeveloper(name, value, cb){
    if(value){
        cb(name);
    }
}

isJavaScriptDeveloper('Nabhag', true, greet);


let promise = new Promise(function (resolve ,reject) {

    setTimeout(() => {
        resolve('You can do it!!');
    });

    // setTimeout(() => reject(new Error("Whoops!")), 1000);
});

promise.then((response) => console.log(response), (reject) => console.log(reject))

let promisesuccess = new Promise(resolve => {
    setTimeout(() => {
        resolve('Always success');
    },1000)
})

promisesuccess.then((response) => console.log(response));

let promisereject = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(new Error('Always Reject'));
    }, 1000)
})

promisereject.then(null, (reject) => console.log(reject)).finally(() => console.log('settled'));
promisereject.catch((err) => console.error(err)).finally(() => console.log('settled'));

// async await 
function resolveAfter2Seconds() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('resolved');
      }, 2000);
    });
  }

async function OPfeature(){
    const result = await resolveAfter2Seconds() ;
    console.log(result);
}

OPfeature();