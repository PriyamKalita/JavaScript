h1 = document.querySelector("h1");

function changeColor(color, delay){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            h1.style.color = color;
            resolve("Color Changed!");
        }, delay);
    });
}

changeColor("red", 1000)

.then(() => {
    console.log("Red Color Was Completed");
    return changeColor("Orange", 1000);
})

.then(() => {
    console.log("Orange Color Was Completed");
    return changeColor("green", 1000);
})

.then(() => {
    console.log("Blue Color Was Completed");
    return changeColor("blue", 1000);
})
