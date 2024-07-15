console.log("Hello");
console.log("Hello World");

let a = 10;
let b = 5;
console.log("sum is : " + a + b);

let x = 10;
let y = 5;
let output = `The Total sum is : ${x + y} .`
console.log(output);

//Truthy and falsy Value
if ("") {
    console.log("it has true value");
} else {
    console.log("it has falsae value");
}

if (1) {
    console.log("it has true value");
} else {
    console.log("it has falsae value");
}

// Switch
let color = "red";

switch (color) {
    case "red":
        console.log("Stop");
        break;
    case "yellow":
        console.log("Slow Down");
        break;
    case "green":
        console.log("Go");
        break;
    default:
        break;
}

// alert("Something is wrong!")
// console.error("Error");
// console.warn("Warning");

let rn = prompt("Enter Roll No : ");
console.log(rn);