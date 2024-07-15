const student = {
    name : "priyam",
    marks : 90,
    prop : this, // Global scope
    getName : function(){
       console.log(this);
       return this.name; 
    },
    getmarks: () =>{
        console.log(this); // parent's scope -> window
        return this.marks;
    },
    getInfo1: function() {
        setTimeout(() => {
            console.log(this); // student
        }, 2000);
    },
    getInfo2: function() {
        setTimeout(function (){
            console.log(this); // Window
        }, 2000);
    },
};

// Question
// Write an arrow function that return the square of a number n
const square = (n) => (
    n * n
);

console.log(square(4));

// Question
// write a function that prints "Hello World" 5 times at intervals of 2s each.
let id = setInterval(() => {
    console.log("Hello World");
}, 2000);

setTimeout(() => {
    clearInterval(id);
    console.log("Clear Interval ran");
}, 10000);