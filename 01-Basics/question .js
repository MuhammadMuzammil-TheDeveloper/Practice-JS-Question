/*
Q1: Write a program to round a number using ceil and floor.
Q2: Print current date and time.
Q3: Display current year, month, and day.
Q4: Calculate age from given date of birth.
*/

let num = 4.7;
console.log("Ceil:", Math.ceil(num));
console.log("Floor:", Math.floor(num));

let now = new Date();
console.log("Current Date:", now);

console.log("Year:", now.getFullYear());
console.log("Month:", now.getMonth() + 1);
console.log("Day:", now.getDate());

let dob = new Date("2004-01-01");
let age = now.getFullYear() - dob.getFullYear();
console.log("Age:", age);
