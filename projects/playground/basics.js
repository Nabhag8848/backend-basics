const { object } = require("joi");

var user = {
    first_name: "Yourname",
    last_name: "Yoursurname",
    age: "22",
    department: "CE"
}

for(const property in user) {
    console.log(property, ":", user[property]);
}

delete user.last_name;

console.log(user);

console.log(Object.keys(user).length);