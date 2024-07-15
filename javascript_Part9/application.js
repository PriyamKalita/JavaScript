// change color in (class box 's a)
let links = document.querySelectorAll(".box a");


// Approach No. (i)
// for(l of links){
//     l.style.color = "red";
// }

// Approach No. (ii)
for(let i = 0; i < links.length; i++){
    links[i].style.color = "red";
}