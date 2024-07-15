let student = ["Hello", "world", "India"];
student[10] = "apple";
console.log(student);

// Array Methods
let cars = ["audi", "bmw", "Mahindra", "Tata"];

//(1)
// Add Last
// Push
cars.push("Farrari"); 
console.log(cars);

// Delete from end and return it
// Pop
cars.pop();
console.log(cars);

// Add start
// Unshift
cars.unshift("farrari");
console.log(cars);

// Delete from start and return it
cars.shift();
console.log(cars);

// Question
// For the given start of an array, change it to final form using methods
let months = ['january', 'july', 'march', 'august'];

months.shift();
months.shift();
months.unshift('june');
months.unshift('july');
console.log(months);

// (2)
let color = ["yellow", "green", "pink"];

// indexOf Method - return index of something
console.log(color.indexOf("green"));
console.log(color.indexOf("red"));

// includes Method - Search for a Value
console.log(color.includes("red"));
console.log(color.includes("Purple"));


// (3) 
let primary = [1, 2, 3, 4, 5];
let secondary = [6, 7, 8, 9, 10];

// concat - Merge 2 arrays
let merge = primary.concat(secondary);
console.log(merge);

// reverse - reverse an array
let rev = primary.reverse();
console.log(rev);

// (4)
// Slice - Copies a portion of an array
let num = [1, 2, 3, 4, 5];

let n = num.slice(2);
console.log(n);

let n2 = num.slice(3, 4);
console.log(n2);

let n3 = num.slice(-2);
console.log(n3);

// (5)
// Splice - Removes / replaces / add elements in place

let nu = ["A", "B", "C", "D", "E", "F"];

// console.log(nu.splice(4));
// console.log(nu);

//    splice(start, deleteCount, iteam0, ...... , iteamN);
// nu.splice(0,        3,         "k", "G");
nu.splice(0, 3, "K", "G");
console.log(nu);

// (6)
// Sort - Sorts an Array
let k = [1, 2, 3, 4, 5];
k.sort();
console.log(k);

let so = ["A", "B", "C", "D", "E"];
so.sort();
console.log(so);

let k3 = [100, 32, 34, 90, 79, 58];
k3.sort();
console.log(k3);

// Question
// Forthe given start of an array, change it to final form using slice.

let month = ['january', 'july', 'march', 'august'];
month.splice(0, 2, 'july', "june");
console.log(month);

// Return the index of the "Javascript" from the given array. If it was reversed.
let language = ['C', 'C++', 'Html', 'JavaScript', 'Python', 'Java', 'C#', 'Sql'];
console.log(language.reverse().indexOf("JavaScript"));

// (7)
// Arrys References
let arr1 = [1];
let arr2 = [1];

console.log(arr1 == arr2);
console.log(arr1 === arr2);

let arr3 = [1, 2, 3, 4, 5];
let arr4 = arr3;
console.log(arr3 == arr4);

// (8)
// Constant array
// const a = [1, 2, 3];
// a = [3, 4, 5];  // Uncaught TypeError: Assignment to constant variable.
// console.log(a);

// (9)
// Multi - Dimensional Array
let multi = [[1, 2], [3, 4], [5, 6]];

console.log(multi);
console.log(multi.length);
console.log(multi[0]);
console.log(multi[0][1]);
console.log(multi[1][1]);
console.log(multi[2][1]);
