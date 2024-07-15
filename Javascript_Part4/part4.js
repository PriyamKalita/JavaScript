for(let i = 1; i <= 5; i++){
    console.log(i);
}

// Print all Odd Number ( 1 to 15)
for(let i = 1; i <= 15; i = i + 2){
    console.log(i);
}

// Print all even number (2 to 10)
for(let i = 2; i <= 10; i = i + 2){
    console.log(i);
}

// Print Multiplication table
let n = prompt("Enter Number : ");

n = parseInt(n); // parseInt() convert String to Integer

for(let i = n; i <= n * 10; i = i * n){
    console.log(i);
}

// Nested Loop
for(let i = 1; i <= 3; i++){
    console.log(`Outer Loop ${i}`)
    for(let j = 1; j <= 3; j++){
        console.log(j);
    }
}

// While Loop
let i = 0;

while(i <= 10){
    console.log(i);
    i++;
}


// Break Keyword
let j = 1;
while (j <= 5) {
    if (j == 3) {
        break;
    }
    console.log(j);
    j++;
}

// Loop with Arrays
let a = ["A", "B", "C", "D"];
a.push("E");

for(let i = 0; i < a.length; i++){
    console.log(i, a[i]);
}

// Nested Loops With Nested Arrays
let student = [["A", 90], ["B", 80], ["C", 89], ["D", 93]];
for(let i = 0; i < student.length; i++){
    console.log(`Info of student : ${i}`);
    for(let j = 0; j < student[i].length; j++){
        console.log(student[i][j]);
    }
}

// For of Loop
let fruits = ["Mango", "Apple", "Banana", "Orange", "Litchi"];

for(i of fruits){
    console.log(i);
}

for(i of "Priyam Kalita"){
    console.log(i);
}

// Nested For Of Loop
let K = [["A", "B", "C", "D"], [1, 2, 3, 4]];

for(list of K){
    for(list2 of list){
        console.log(list2);
    }
}