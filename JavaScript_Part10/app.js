// Approach (i) 
// let btn = document.querySelector("button");

// console.dir(btn);

// btn.onclick = function (){
//     alert("Button was Clicked");
// }

// Approach (ii)
// let btn = document.querySelector("button");

// console.dir(btn);

// function sayHello(){
//     alert("Hello");
// }

// btn.onclick = sayHello;

// Click all Button
// onclick and onmouseenter
// let btns = document.querySelectorAll("button");

// for (btn of btns){
//     btn.onclick = sayHello;

//     btn.onmouseenter = function () {
//         console.log("Yes");
//     }
//  }

// function sayHello(){
//     alert("Hello");
// }

// Event Listener
let btns = document.querySelectorAll("button");

for (btn of btns){
    // btn.addEventListener("click", sayHello);
    // btn.addEventListener("click", sayName);

    // click double
    btn.addEventListener("dblclick", function () {
        console.log("You double CLicked me!");
    });
 }

function sayHello(){
    alert("Hello");
}

function sayName(){
    alert("Hello World");
}