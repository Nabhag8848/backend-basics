const MEMCACHED = require('memcached');
const serverPool = new MEMCACHED(["nabhag:11211", "nabhag:11212", "nabhag:11213", "nabhag:11214"]);

function run () {
    
    const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    values.forEach(value => {
        serverPool.set(`foo${value}`, `bar${value}`, 3600, err => {
            if(err){
                console.log(err);
            }
        });
    })  
    
}

// run();

function read () {
    const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    values.forEach(value => {
        serverPool.get(`foo${value}`, (err,data) => {
            if(err){
                console.log(err);
                
            }else{
                console.log(data);
            }


        });
    })
}

read();