// Rest
// Example
function kSum(...args){
    return args.reduce((kSum, el) => kSum + el);
}
console.log(kSum(1, 2, 3));

// Example
function minimum(msg, ...args) {
    console.log("Hello World");
    return args.reduce((min, el) => {
        if (min > el) {
            return el;
        } else {
            return min;
        }
    });
}
console.log(minimum("hello", 1, 2, 3, 4));  // Output: 1

// Destructuring in Array
let names = ["A", "B", "C", "D", "D"];

let [winner, runnerup] = names;

console.log(winner, runnerup);

// Destructuring in Object
const child = {
    name : "Jhon",
    age : 12,
    class : 8,
    subject : ["Hindi", "English", "Mathematics", "Science"],
    username : "Jhon@1234",
    password : "pqr123@",
};

// let {
//     username, 
//     password
// } = child;

// console.log(username, password);

let {
    username : user, 
    password : secretCode,
    city = "Mumbai"
} = child;

console.log(user, secretCode, city);