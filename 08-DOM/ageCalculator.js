/*
Q1: Take name and age from input fields and show age in months and days.
*/

function checkAge() {
  let name = document.getElementById("userName").value;
  let age = Number(document.getElementById("userAge").value);

  let months = age * 12;
  let days = age * 365;

  document.getElementById("result").innerHTML =
    `${name}, you are ${months} months or ${days} days old.`;
}
