// Mouse Event
let btn = document.querySelector("button");

// One Click
btn.addEventListener("click", function(event){
    console.log(event);
    console.log("button clicked once");
});

// Double Click
btn.addEventListener("dblclick", function(event){
    console.log(event);
    console.log("button clicked twice");
});


