// (1) this KeyWord
const student = {
    name : "Priyam",
    age : 23,
    eng : 98,
    math : 90,
    phy : 97,
    getAvg(){
        console.log(this);
        let avg = (this.eng + this.math + this.phy) / 3;
        console.log(`${this.name} got avg marks = ${avg}`);
    }
}

function getAvg(){
    console.log(this);
}

// (2) try and catch
console.log("Hello");

try {
    console.log(a);
} catch (error) {
    console.log("Caught an Error....");
    console.log(error);
}

console.log("World");

// (3) Arrow Function
// const functionName = (arg1, arg2, arg3, ...) => {
//       function defination
// };

// Example (i)
const sum = (a, b) => {
    console.log(a + b);
};
sum(1, 3);

// Example (ii)
const cube = (n) => {
    return n * n * n;
};

console.log(cube(2));

// Example (iii)
const pow = (a, b) => {
    return a ** b;
};

console.log(pow(2, 3));

// Example (iv)
const hello = () => {
    console.log("Hello World");
};

hello();

// (4) Implicit Return in Arrow Functions

// Example Mo. (i) : 
const mult = (a, b) => (
    a * b
);

console.log(mult(2, 3));

// Example Mo. (ii) : 
const div = (a, b) => a / b;  // parenthesis is optional

console.log(div(9, 3));

// (5) Set Timeout
// 1st syntex
// setTimeout(function, timeout)

// 2nd syntex
// setTimeout(() => {
//    
// }, timeout);

console.log("Hi Everyone!");

setTimeout(() => {
    console.log("Hello world");
}, 5000);

console.log("Welcome");

// (6) Set Interval
// Syntex
// setInterval(() => {
    
// }, interval);

let id = setInterval(() => {
    console.log("Hello India Hi")
}, 2000);