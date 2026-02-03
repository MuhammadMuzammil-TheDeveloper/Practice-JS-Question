/*
Project: Calculate student percentage and show Pass/Fail.
*/

let marks = [80, 70, 60, 90, 85];
let total = 0;

for (let m of marks) {
  total += m;
}

let percentage = total / marks.length;
console.log("Percentage:", percentage);

if (percentage >= 50) console.log("Pass");
else console.log("Fail");
