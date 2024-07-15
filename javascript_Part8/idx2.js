// (i) MAP function 
// 1st Example of MAP function 
let stundets = [
    {
        name : "A",
        marks : 90,
    },
    {
        name : "B",
        marks : 98,
    },
    {
        name : "C",
        marks : 89,
    },
];

let gpa = stundets.map((el) => {
    return el.marks / 10;
});

console.log(gpa);

for(let i = 0; i < gpa.length; i++){
    console.log(gpa[i]);
}

// 2nd Example of MAP function 
let num = [1, 2, 3, 4];

let double = num.map((el) => {
    return el * 2;
});

console.log(double);

for(let i = 0; i < double.length; i++){
    console.log(double[i]);
}

// (ii) filter Method
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let ans = nums.filter((el) => {
    return el % 2 == 0; // Even -> true, odd -> false
});

console.log(ans);

// (iii) Every Method
let ar = [2, 4, 8];

let f = ar.every((el) => el % 2 == 0);

console.log(f);

// (iv) some Method
let a = [1, 2, 3, 4];

let k = a.some((el) => {
    return (el % 2) == 0;
});

console.log(k);