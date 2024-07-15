// Add the following elements to the conatiner using only javascript and the DOM methods.
// (i)   a <p> with red text that says "Hey i'm red!"
// (ii)  an <h3> blue text that says "i'm a blue h3!"
// (iii) a <div> with a black border and pink background color with the following elements inside of it.
//       (a) another <h1> that says "i'm in a div"
//       (b) a <p> that says "ME TOO!"

// Ans : (i) 
let para = document.createElement('p');

para.innerHTML = "Hey I'm red!";

document.querySelector("body").append(para);

para.classList.add('red');

// Ans : (ii)
let h3 = document.createElement('h3');

h3.innerHTML = "I'm a blue h3!";
document.querySelector("body").append(h3);

h3.classList.add('blue');

// Ans : (iii)
let div = document.createElement("div");
let h1 = document.createElement("h1");
let para2 = document.createElement("p");

h1.innerHTML = "i'm in a div";
para2.innerText = "ME TOO!";

div.append(h1);
div.append(para2);
div.classList.add("box");

document.querySelector("body").append(div);