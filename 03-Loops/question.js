/*
Q1: Print numbers from 1 to 10 using a loop.
Q2: Find numbers greater than 50 from an array.
*/

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

let arr = [10, 55, 23, 78, 30];

for (let num of arr) {
  if (num > 50) {
    console.log("Greater than 50:", num);
  }
}
