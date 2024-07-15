// reduce() method
let num3 = [1, 2, 3, 4];

let finalValue = num3.reduce((res, el) => res + el);

console.log(finalValue);

// Question
// Find Maximum in An Array using reduce() Method
let arr5 = [1, 2, 3, 45, 6, 9, 35, 22];

let max = arr5.reduce((max, el) => {
    if(max < el){
        return el;
    }else{
        return max;
    }
});

console.log(max);

// Question
// Check if all numbers in our array are multiples of 10 or not.
let mulNum = [10, 20, 30, 40];

let ans3 = mulNum.every((el) => el % 10 == 0);

console.log(ans3);

// Question
// Create a function to find the min number in an array.
let arr6 = [1, 2, 3, 45, 6, 9, 35, 22];

let min = arr6.reduce((min, el) => {
    if(min > el){
        return el;
    }else{
        return min;
    }
});

console.log(min);


// Default Parameters
function cal(a, b = 3){
    return a + b;
}

console.log(cal(3));
console.log(cal(1, 5));

// Spread 
let s = [1, 3, 4, 2, 8, 9, 3];

let an = Math.min(...s);
let anp = Math.max(...s);

console.log(an);
console.log(anp);

console.log(..."Priyam Kalita");

// Spread (Array Literals)

// Example
// (i) 
let newArray = [1, 2, 3, 4];

let otherArray = [...newArray];

console.log(otherArray);

// (ii)
let p = ["h", "K", "S", "N"];

let kpr = [...p];

console.log(kpr);

// (iii) combine two Arrays
let first = [1, 2, 3, 4, 5];
let second = [6, 7, 8, 9, 10];

let third = [...first, ...second];
console.log(third);

// Spread With Object Literals
const data = {
    email: "priyamKalita2002@gmail.com",
    password: "abcd",
};

const dataCopy = {
    ...data,
    id : 12,
};

console.log(data);
console.log(dataCopy);

// example
// (i)
let arrD = [1, 2, 3, 5];
let obj1 = {...arrD};   // element store inedx wiese
console.log(obj1);

// (ii)
let obj2 = {..."Hello World"};
console.log(obj2);
