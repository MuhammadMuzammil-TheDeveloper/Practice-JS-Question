/*
Q1: Capitalize the first letter of a string.
Q2: Remove extra spaces from a string.
Q3: Find the index of a word in a string.
*/

let str = "javascript";
str = str.charAt(0).toUpperCase() + str.slice(1);
console.log(str);

let text = "Hello  World";
console.log(text.replace("  ", " "));
console.log(text.indexOf("World"));
