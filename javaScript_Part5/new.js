// const student = {
//     name : "Priyam Kalita",
//     age : 23,
//     marks : 95
// };

// const item = {
//     price : 100,
//     discount : 50,
//     colors : ["red", "pink"]
// };

// // Thread / Twitter Post
// // Create an object literal for the properties of thread / twitter post which includes - 
// // username
// // content
// // likes
// // reposts
// // tags
// const post = {
//     username : "PriyamKalita",
//     content : "This is my Post",
//     like: 1120,
//     reposts : 3,
//     tags : ["Hello", "World"]
// };

// // Get Values
// console.log(post.username);
// console.log(post["username"]);

// console.log(post.like);
// console.log(post["like"]);

// console.log(post.tags);
// console.log(post.tags[1]);

// // Coversion in Get Values
// const obj = {
//     1 : "a",
//     2 : "b",
//     true : "c",
//     null : "d",
//     undefined : "e"
// };

// console.log(obj[1]);

// // Add / Update value
// const info = {
//     name : "Priyam",
//     age : 23,
//     marks : 90,
//     city : "Delhi"
// };

// console.log(info);

// // Change the City to "Mumbai"
// info.city = "Mumbai";
// console.log(info);

// // Add a new property , gender : "male"
// info.gender = "Male";
// console.log(info);

// // Change the marks to "A"
// info.marks = "A";
// console.log(info);

// // Delete 
// delete info.marks;
// console.log(info);

// // Nested Objects / Object of Object
// // (Storing information of multiple students)

// const classInfo = {
//     P : {
//         grade : "A+",
//         city : "Mumbai"
//     },
//     Q : {
//         grade : "B+",
//         city : "Delhi"
//     },
//     R : {
//         grade : "A",
//         city : "Chennai"
//     }
// };

// console.log(classInfo);

// console.log(classInfo.P);
// console.log(classInfo.Q);
// console.log(classInfo.R);

// console.log(classInfo.P.city);

// classInfo.P.city = "Guwahati";
// console.log(classInfo);

// // Arrays of Object
// // 
// const classINFO = [
//     {
//         name : "Jhon",
//         grade : "A+",
//         city : "Mumbai"
//     },
//     {
//         name : "Petter",
//         grade : "B+",
//         city : "Delhi"
//     },
//     {
//         name : "Harry",
//         grade : "A",
//         city : "Chennai"
//     }
// ];

// console.log(classINFO);
// console.log(classINFO[1].name);
// console.log(classINFO[0].city);

// console.log(classINFO[0]);
// console.log(classINFO[1]);
// console.log(classINFO[2]);

// classINFO[2].grade = "B";
// console.log(classINFO);

// // Generate Random Integer 1 to 10
// let ramdom = Math.floor(Math.random() * 10) + 1;
// console.log(ramdom);

// // Generate Random Integer 1 to 100
// let ramdom3 = Math.floor(Math.random() * 100) + 1;
// console.log(ramdom3);

// // Generate Random Integer 1 to 5
// let num = Math.random();

// num = num * 5;

// num = Math.floor(num);

// num = num + 1;

// console.log(num);

// Guessing Game
// User enters a max number and then tries to guess a random generated number between 1 to max
const max = prompt("Enter the max number ");

const random = Math.floor(Math.random() * max ) + 1;

let guess = prompt("Guess the number");

while(true){
    if(guess == "exit"){
        console.log("User Exit ");
        break;
    }
    if(guess == random){
        console.log("Yor are right ! CONGRATS !! Random number was ", random);
    }else if(guess < random){
        guess = prompt("Your guess was too small. Please try agin");
    }else{
        guess = prompt("Your guess was too large. Please try agin");

    }
}

