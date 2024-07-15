// function hello(){
//     console.log("Inside Hello Function");
//     console.log("Hello");
// }

// function demo(){
//     console.log("Calling Hello Function");
//     hello();
// }

// console.log("Calling Hello Function");
// demo();
// console.log("Done, Bye!");

// BreakPoints
function one(){
    return 1;
}

function two(){
    return one() + one();
}

function three(){
    let ans = two() + one();
    console.log(ans);
}

three();

// Synchrous Nature
let a = 25;
console.log(a);
let b = 10;
console.log(b);
console.log( a + b);


