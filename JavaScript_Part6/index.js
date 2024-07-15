// Function JavaScript

// Function Defination
function hello(){
    console.log("Hello World");
}

function printName(){
    console.log("Priyam Kalita");
}

function print1To5(){
    for(let i = 1; i <= 5; i++){
        console.log(i);
    }
}

function isAdult(){
    let age = 10;
    if(age >= 18){
        console.log("Adult");
    }else{
        console.log("Not Adult");
    }
}


// Finction Calling
hello();
hello();
hello();

printName();

print1To5();

isAdult();

// Question
// Create a Function to roll a dice and always display the value of the dice(1 to 6)
function rollDice(){
    let rand = Math.floor(Math.random() * 6) + 1;
    console.log(rand);
} 

rollDice();
rollDice();
rollDice();
rollDice();


// Functions With Arguments
function printInfo(name, age){
    console.log(`${name}'s age is ${age}`);
}

printInfo("Priyam", 23);
printInfo("Raj", 25);
printInfo("Jhon");

// Sum of Two numbers
function sum(a, b){
    console.log(a + b);
}

sum(1, 2);
sum(10, 32);
sum(10, 34);


function printTable(n){
    for(let i = n; i <= n * 10; i = i + n){
        console.log(i);
    }
}

printTable(3);


// Return KeyWord
function sum3(a, b){
    console.log("Hello World");
    console.log("Hello World");

    return a + b;

    // Other code does not execute after return keyword is applied
    console.log("Hello World");
    console.log("Hello World");

}

console.log(sum3(2, 4));

// Question
// Create a FUNCTION that returns the sum of numbers from 1 to n.
function sum4(n){
    let sum = 0;

    for(let i = 1; i <= n; i++){
        sum += i;
    }
    return sum;
}

console.log(sum4(4));

// Question 
// Create a Function that returns the concatenation of all strings in an array.
function concat(str){
    let result = "";

    for(let i = 0; i < str.length; i++){
        result += str[i];
    }
    return  result;
} 

let str = ["Hi", "Hello", "World"];
console.log(concat(str));


// Question 
let greet = "Hello";
function changeGreet(){
    let greet = "Namate";
    console.log(greet);

    function innnerGreet(){
        console.log(greet);
    }
    innnerGreet();
}

console.log(greet);
changeGreet();

// Function Expression

// Example No. (1)
let sum6 = function(a, b){
    return a + b;
}
console.log(sum6(1, 2));

// Example No. (2)
let sample = function() {
    console.log("Hello");
}

sample();

// Higher Order Functions
function multipleGreet(func, count){
    for(let i = 1; i <= count; i++){
        func();
    }
}

let greet3 = function(){
    console.log("Hello");
}

multipleGreet(greet3, 3);

// Higher Order Functions (Resurns)
function oddOrEvenFactory(request){
    if(request == "odd"){
        let odd = function(n){
            console.log(!(n % 2 == 0));
        }
        return odd;
    }else if(request == "even"){
        let even = function(n){
            console.log(n % 2 == 0);
        }
        return even;
    }else{
        console.log("Wrong Request");
    }
}

let request = "odd";

// Methods
// Actions that can be performed on the object.
const calculator = {
    add : function(a, b){
        return a + b;
    },
    sub : function(a, b){
        return a - b;
    },
    mul : function(a, b){
        return a * b;
    }
};

console.log(calculator.add(1, 3));
console.log(calculator.add);
