// let msg = "       Hello     ";

let password = prompt("Set your password");
let newPass = password.trim();
console.log(newPass);

// String Methods With Arguments
let str = "ilovecoding";
let a = str.indexOf("l");
console.log(a);

// Method Chaining
let srn = "      Hello    ";
let newsrn = srn.trim().toUpperCase();
console.log(newsrn);

// Slice
let str3 = "ILoveCoding";
console.log(str3.slice(1, 4));
console.log(str3.slice(3));
console.log(str3.slice(-2)); // 11 - 2 = 9

// Replace
let str4 = "IloveCoding";
console.log(str3.replace("love", "do"));
console.log(str3.replace("o", "x"));

// Repeat
let str5 = "Mango";
console.log(str5.repeat(3));

// Separate the "College" part in String and replace 'l' with 't' in it
let str6 = "apnaCollege";
console.log(str6.slice(4).replace("l", "t"));