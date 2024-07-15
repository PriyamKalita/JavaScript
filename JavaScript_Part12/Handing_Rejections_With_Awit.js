h1 = document.querySelector("h1");

function changeColor(color, delay){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let num = Math.floor(Math.random() * 5) + 1;
            if(num > 3){
                reject("Promies Rejected");
            }

            h1.style.color = color;
            console.log(`Color Changed to ${color}`);
            resolve("Color Changed!");
        }, delay);
    });
}

async function demo3() {
    try{
        await changeColor("red", 1000);
        await changeColor("green", 1000);
        await changeColor("purple", 1000);
        await changeColor("pink", 1000);
        await changeColor("aqua", 1000);
    }catch(e) {
        console.log("ERROR CAUGHT");
        console.log(e);
    }
    

    let a= 5;
    console.log(a);
    console.log("New Number : ", a + 3);
}