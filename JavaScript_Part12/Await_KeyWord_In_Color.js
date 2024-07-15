h1 = document.querySelector("h1");

function changeColor(color, delay){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            h1.style.color = color;
            console.log(`Color Changed to ${color}`);
            resolve("Color Changed!");
        }, delay);
    });
}

async function demo() {
    await changeColor("red", 1000);
    await changeColor("green", 1000);
    await changeColor("purple", 1000);
    await changeColor("pink", 1000);
    await changeColor("aqua", 1000);

    let a= 5;
    console.log(a);
    console.log("New Number : ", a + 3);
}