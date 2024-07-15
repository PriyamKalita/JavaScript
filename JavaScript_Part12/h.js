// async function 
// Example No. (i) 
async function greet() {
    throw "404 Page Not Found";
    return "Hello World Hi";
}

greet()
    .then((result) => {
        console.log("Promise Was Resolved");
        console.log("Result was : ", result);
    })

    .catch((err) => {
        console.log("Promise was rejected with err : ", err);
    });

// async function
// Example No. (ii) 
// let demo = async () => {
//     return 5;
// };

// Await KeyWord
function getNum() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let num = Math.floor(Math.random() * 10) + 1;
            console.log(num);
            resolve();
        }, 1000);
    });
}

async function demo() {
    await getNum();
    await getNum();
    await getNum();
    await getNum();
    getNum();
}