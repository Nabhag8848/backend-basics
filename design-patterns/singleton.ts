// global instance throughout app

let instance:CommClassroom;

// class CommClassroom {

//     founder:string;

//     constructor(){
//         this.founder = 'Kunal Kushwaha';
//     }

//     getName() {
//         return this.founder;
//     }
// }

// const kunal:CommClassroom = new CommClassroom();
// const makeNewFounder:CommClassroom = new CommClassroom();

// -> against the design
// console.log(kunal === makeNewFounder) // false


 
class CommClassroom {

    founder:string;

    constructor(){
        if(!instance){
            throw new Error('Cannot make a new founder.')
        }

        this.founder = 'Kunal Kushwaha';
        instance = this
    }

    getName() {
        return this.founder;
    }
}

const kunal:CommClassroom = new CommClassroom();
// const makeNewFounder:CommClassroom = new CommClassroom();  not possible






