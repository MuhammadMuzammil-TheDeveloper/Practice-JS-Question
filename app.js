/* ======================================================
   Topic 1: Print All Student Names
   Question:
   You have an array of student names. Write a program to display each student's name along with their index.
====================================================== */

let studentNames = [
    "Faheem", "Nasir", "Hammad", "Hamza", "Abdullah",
    "Ali", "Rizwan", "Ahmed", "Bilal", "Usman",
    "Ayaan", "Saad", "Zain", "Huzaifa", "Talha",
    "Danish", "Areeb", "Sameer", "Fahad", "Ibrahim"
];  

for(var i = 0; i < studentNames.length; i++){
    console.log("Index: " + i + " " + studentNames[i]);
}

/* ======================================================
   Topic 2: Search for a Number in an Array
   Question:
   Given an array of numbers, check whether the number 5 exists in the array. Display a message if found.
====================================================== */

let number  = [1,2,3,4,5,6,7,8,9,10];
let found = false;

for(var i = 0; i < number.length; i++){
    if(5 === number[i]){
        found = true;
        break;
    }
}
if(found){
    console.log("Number 5 is Found in array");
} else{
    console.log("Number 5 is Not Found in array");
}

/* ======================================================
   Topic 3: Check if a Specific Student is Present
   Question:
   Given an array of student names, check whether "Ali" is present in the array. Display the result.
====================================================== */

let students = ["Faheem","Nasir","Hammad","Hamza","Abdullah","Ali","Rizwan","Ahmed","Bilal","Usman"];
let isAliPresent = false;

for(var i = 0; i < students.length; i++){
    if(students[i] === "Ali"){
        isAliPresent = true;
        break;
    }
}
console.log(isAliPresent ? "Ali is present in the class." : "Ali is not present in the class.");

/* ======================================================
   Topic 4: Find Numbers Greater Than 50
   Question:
   Given an array of numbers, display all numbers  that are greater than 50.
====================================================== */

let numbers = [1,2,3,4,51,68,7,8,9,10];
let isGreater = false;

for(var i = 0; i < numbers.length; i++){
    if(numbers[i] > 50){
        console.log("Number greater than 50 found: " + numbers[i]);
        isGreater = true;
    }
}
if(!isGreater){
    console.log("No number greater than 50 found in the array.");
}

/* ======================================================
   Topic 5: Bakery Item Search
   Question:
   Ask the user which bakery item they want. Display the price if available, or a "not available" message.
====================================================== */

let Bakery = ["Bread", "Cake", "Pastry", "Cookies", "Muffins"];
let Price = [40, 500, 150, 200, 1000];

var searchItem = prompt("Welcome to the Bakery! What would you like to order?");
var itemFound = false;

for (var i = 0; i < Bakery.length; i++){
    if(Bakery[i].toLowerCase() === searchItem.toLowerCase()){
        alert(searchItem + " is available: " + Price[i] + " Rs");
        itemFound = true;
    }
}
if(!itemFound){
    alert(searchItem + " is Not available");
}

/* ======================================================
   Topic 6: String Slice and Capitalization
   Question:
   Given a string, demonstrate slicing and how to capitalize the first letter while making the rest lowercase.
====================================================== */

var str = "MUHAMMAD-  MUZAMMIL";
var copy = str.slice(0, 7);
console.log(copy);

var firstLetter = str[0].toUpperCase();
var RemainLetter = str.slice(1).toLowerCase();
var FullName = firstLetter + RemainLetter;
console.log(FullName);

var neww = str[0].toUpperCase() + str.slice(1).toLowerCase();
console.log(neww);

/* ======================================================
   Topic 7: Detect Double Spaces in a String
   Question:
   Ask the user to input a string and check whether it contains double spaces.
====================================================== */

var str1 = prompt("Enter a name:");
for(var i = 0; i < str1.length - 1; i++){
    if(str1.slice(i, i+2) == "  "){
        alert("Double space found");
        break;
    }
}

/* ======================================================
   Topic 8: Word Replacement in a Paragraph
   Question:
   You are given a paragraph stored in a JavaScript string.
   Write a program that:
   1. Asks the user for a word they want to replace.
   2. Asks the user for the new word to replace it with.
   3. Searches the paragraph for the word and replaces all occurrences.
   4. Displays the updated paragraph.
   5. If the word is not found, displays: "The word you are searching for is not found."
====================================================== */

var para =
"The New Yorker magazine doesn't allow the phrase World War II. ' They say it should be 'the Second World War.' So let's search the following sentence for the banned characters and replace them with the phrase that the New Yorker prefers.";
console.log("Original paragraph:\n" + para);

var updation = prompt("Which word you choose to update?");
var newParaWord = prompt("Enter the new word to replace it with:");

var found = false;
for (var a = 0; a <= para.length - updation.length; a++) {
    if (para.slice(a, a + updation.length) === updation) {
        console.log("Found the word '" + updation + "' at index: " + a);
        para = para.slice(0, a) + newParaWord + para.slice(a + updation.length);
        found = true;
        a += newParaWord.length - 1; 
    }
}

if (!found) {
    console.log("The word you are searching for is not found.");
} else {
    console.log("\nUpdated paragraph:\n" + para);
}