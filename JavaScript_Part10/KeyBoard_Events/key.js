// KeyBoard Event
let inp = document.querySelector("input");

// KeyDown Event
inp.addEventListener("keydown", function(event){
    console.log("key : ", event.key);
    console.log("code : ", event.code);

    console.log("Key was Pressed");
});

// KeyUp Event
// inp.addEventListener("keyup", function(event){
//     console.log(event);
//     console.log("Key was released");
// });

