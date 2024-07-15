// h1 = document.querySelector("h1");

// setTimeout(() =>{
//     h1.style.color = "red";
// }, 1000);

// setTimeout(() =>{
//     h1.style.color = "purple";
// }, 2000);

// setTimeout(() =>{
//     h1.style.color = "green";
// }, 3000);


// Callbacks nesting -> callback hell
// h1 = document.querySelector("h1");

// function changeColor(color, delay, nextColorChange){
//     setTimeout(() =>{
//         h1.style.color = color;
//         if(nextColorChange) nextColorChange();
//     }, delay);
// }

// changeColor("red", 1000, () => {
//     changeColor("green", 1000, () => {
//         changeColor("purple", 1000, () => {
//             changeColor("pink", 1000, () => {
//                 changeColor("orange", 1000);
//             });
//         });
//     });
// });

// function saveToDb(data, success, failure) {
//     let internelSpeed = Math.floor(Math.random() * 10) + 1;
//     if (internelSpeed > 4) {
//         success();
//     } else {
//         failure();
//     }
// }

// // callback hell
// saveToDb("Hello World",
//     () => {
//         console.log("Success: Your data was saved");
//         saveToDb(
//             "Hello World Hi!",
//             () => {
//                 console.log("Success2: Data2 Saved");
//                 saveToDb("Priyam Kalita", () => {
//                     console.log("Success3: Data3 Saved");
//                 }, () =>{
//                     console.log("Failure3: Weak Connection");
//                 })
//             },
//             () => {
//                 console.log("Failure2: Weak Connection");
//             }
//         );
//     },
//     () => {
//         console.log("Failure: Weak Connection, Your data was not saved");
//     }
// );

// Promies
function saveToDb(data) {
    return new Promise((resolve, reject) => {
        let internetSpeed = Math.floor(Math.random() * 10) + 1;
        if (internetSpeed > 4) {
            resolve("Succes : Data was Saved");
        } else {
            reject("Failure : Weak Connection");
        }
    });
}

// Approach No. (i)
// let request = saveToDb("Hello World"); // request = promies Object
// request
//    .then(() => {
//     console.log("Promies Was Resolved");
//     console.log(request);
//    })
//    .catch(() => {
//     console.log("Promise was Rejected");
//     console.log(request);
//    });

// Approach No. (ii)
saveToDb("Hello World")
   .then(() => {
    console.log("Promies Was Resolved");
   })
   .catch(() => {
    console.log("Promise was Rejected");
   });