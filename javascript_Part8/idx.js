let arr = [1, 2, 3, 4, 5];

// Approach No. (i)
// let print = function (el) {
//     console.log(el);
// };

// arr.forEach(print);

// Approach No. (ii)
// arr.forEach(function (el){
//     console.log(el);
// });

// Approach No. (iii)
// arr.forEach((el) => {
//     console.log(el);
// });

// Approach No. (iv) : forEach use for OBJECTS 
let arr3 = [
    {
        name : "A",
        marks : 90,
    },
    {
        name : "B",
        marks : 98,
    },
    {
        name : "C",
        marks : 89,
    },
];

arr3.forEach((el) => {
    console.log(el);
});
