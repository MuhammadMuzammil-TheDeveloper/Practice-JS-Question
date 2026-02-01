`   // /* ======================================================
   //    Topic 1: Print All Student Names
   //    Question:
   //    You have an array of student names. Write a program to display each student's name along with their index.
   // ====================================================== */

   // let studentNames = [
   //     "Faheem", "Nasir", "Hammad", "Hamza", "Abdullah",
   //     "Ali", "Rizwan", "Ahmed", "Bilal", "Usman",
   //     "Ayaan", "Saad", "Zain", "Huzaifa", "Talha",
   //     "Danish", "Areeb", "Sameer", "Fahad", "Ibrahim"
   // ];  

   // for(var i = 0; i < studentNames.length; i++){
   //     console.log("Index: " + i + " " + studentNames[i]);
   // }

   // /* ======================================================
   //    Topic 2: Search for a Number in an Array
   //    Question:
   //    Given an array of numbers, check whether the number 5 exists in the array. Display a message if found.
   // ====================================================== */

   // let number  = [1,2,3,4,5,6,7,8,9,10];
   // let found = false;

   // for(var i = 0; i < number.length; i++){
   //     if(5 === number[i]){
   //         found = true;
   //         break;
   //     }
   // }
   // if(found){
   //     console.log("Number 5 is Found in array");
   // } else{
   //     console.log("Number 5 is Not Found in array");
   // }

   // /* ======================================================
   //    Topic 3: Check if a Specific Student is Present
   //    Question:
   //    Given an array of student names, check whether "Ali" is present in the array. Display the result.
   // ====================================================== */

   // let students = ["Faheem","Nasir","Hammad","Hamza","Abdullah","Ali","Rizwan","Ahmed","Bilal","Usman"];
   // let isAliPresent = false;

   // for(var i = 0; i < students.length; i++){
   //     if(students[i] === "Ali"){
   //         isAliPresent = true;
   //         break;
   //     }
   // }
   // console.log(isAliPresent ? "Ali is present in the class." : "Ali is not present in the class.");

   // /* ======================================================
   //    Topic 4: Find Numbers Greater Than 50
   //    Question:
   //    Given an array of numbers, display all numbers  that are greater than 50.
   // ====================================================== */

   // let numbers = [1,2,3,4,51,68,7,8,9,10];
   // let isGreater = false;

   // for(var i = 0; i < numbers.length; i++){
   //     if(numbers[i] > 50){
   //         console.log("Number greater than 50 found: " + numbers[i]);
   //         isGreater = true;
   //     }
   // }
   // if(!isGreater){
   //     console.log("No number greater than 50 found in the array.");
   // }

   // /* ======================================================
   //    Topic 5: Bakery Item Search
   //    Question:
   //    Ask the user which bakery item they want. Display the price if available, or a "not available" message.
   // ====================================================== */

   // let Bakery = ["Bread", "Cake", "Pastry", "Cookies", "Muffins"];
   // let Price = [40, 500, 150, 200, 1000];

   // var searchItem = prompt("Welcome to the Bakery! What would you like to order?");
   // var itemFound = false;

   // for (var i = 0; i < Bakery.length; i++){
   //     if(Bakery[i].toLowerCase() === searchItem.toLowerCase()){
   //         alert(searchItem + " is available: " + Price[i] + " Rs");
   //         itemFound = true;
   //     }
   // }
   // if(!itemFound){
   //     alert(searchItem + " is Not available");
   // }

   // /* ======================================================
   //    Topic 6: String Slice and Capitalization
   //    Question:
   //    Given a string, demonstrate slicing and how to capitalize the first letter while making the rest lowercase.
   // ====================================================== */

   // var str = "MUHAMMAD-  MUZAMMIL";
   // var copy = str.slice(0, 7);
   // console.log(copy);

   // var firstLetter = str[0].toUpperCase();
   // var RemainLetter = str.slice(1).toLowerCase();
   // var FullName = firstLetter + RemainLetter;
   // console.log(FullName);

   // var neww = str[0].toUpperCase() + str.slice(1).toLowerCase();
   // console.log(neww);

   // /* ======================================================
   //    Topic 7: Detect Double Spaces in a String
   //    Question:
   //    Ask the user to input a string and check whether it contains double spaces.
   // ====================================================== */

   // var str1 = prompt("Enter a name:");
   // for(var i = 0; i < str1.length - 1; i++){
   //     if(str1.slice(i, i+2) == "  "){
   //         alert("Double space found");
   //         break;
   //     }
   // }

   // /* ======================================================
   //    Topic 8: Word Replacement in a Paragraph
   //    Question:
   //    You are given a paragraph stored in a JavaScript string.
   //    Write a program that:
   //    1. Asks the user for a word they want to replace.
   //    2. Asks the user for the new word to replace it with.
   //    3. Searches the paragraph for the word and replaces all occurrences.
   //    4. Displays the updated paragraph.
   //    5. If the word is not found, displays: "The word you are searching for is not found."
   // ====================================================== */

   // var para =
   // "The New Yorker magazine doesn't allow the phrase World War II. ' They say it should be 'the Second World War.' So let's search the following sentence for the banned characters and replace them with the phrase that the New Yorker prefers.";
   // console.log("Original paragraph:\n" + para);

   // var updation = prompt("Which word you choose to update?");
   // var newParaWord = prompt("Enter the new word to replace it with:");

   // var found = false;
   // for (var a = 0; a <= para.length - updation.length; a++) {
   //     if (para.slice(a, a + updation.length) === updation) {
   //         console.log("Found the word '" + updation + "' at index: " + a);
   //         para = para.slice(0, a) + newParaWord + para.slice(a + updation.length);
   //         found = true;
   //         a += newParaWord.length - 1; 
   //     }
   // }

   // if (!found) {
   //     console.log("The word you are searching for is not found.");
   // } else {
   //     console.log("\nUpdated paragraph:\n" + para);
   // }


   /* ======================================================
      Topic 9: String Character Methods
      Question:
      Given a string, find:
      1) The index of a specific character
      2) The character at a specific position
      3) Access a character using bracket notation

      Notes:
      - indexOf() returns position of character
      - charAt() returns character at index
      - Strings are zero-indexed
   ====================================================== */

   // var str = "Hello Wrld"
   // console.log(str.indexOf("W"))   // index of W
   // console.log(str.charAt(0))      // first character
   // console.log(str[4])             // character at index 4



   /* ======================================================
      Topic 10: Math Rounding Methods
      Question:
      Round a decimal number using:
      1) Math.ceil()
   //   2) Math.floor()

      Notes:
      - Math.ceil() rounds UP
      - Math.floor() rounds DOWN
   ====================================================== */

   // var num1 = 504.1
   // console.log(Math.ceil(num1))   // 505
   // console.log(Math.floor(num1))  // 504



   /* ======================================================
      Topic 11: Generate Random Numbers (Specific Ranges)
      Question:
      Generate random numbers:
      1) Between 1 to 10
      2) Between 5 to 20
      3) Between 3 to 10

      Notes:
      - Math.random() gives 0–1
      - Formula: Math.floor(Math.random() * (max - min + 1)) + min
   ====================================================== */

   // 1 to 10
   // var num1 = Math.floor(Math.random() * 10) + 1;
   // console.log(num1);

   // 5 to 20
   // var randomNum = Math.floor(Math.random() * (20 - 5 + 1)) + 5;
   // console.log(randomNum);

   // 3 to 10
   // var randomNum = Math.floor(Math.random() * (10 - 3 + 1)) + 3;
   // console.log(randomNum);



   /* ======================================================
      Topic 12: Dice Game Using Random Numbers
      Question:
      Create a dice game where:
      - System generates a number (1–6)
      - User guesses the number
      - Display Win or Loss

      Notes:
      - Common interview logic question
   ====================================================== */

   // var randomNumber = Math.floor(Math.random() * 6) + 1;
   // var userNumber = +prompt("Enter a number between 1-6");

   // if (userNumber === randomNumber) {
   //     console.log("You are a Winner 🎉")
   // } else {
   //     console.log("You Loss ❌")
   // }



   /* ======================================================
      Topic 13: Type Conversion (String → Number)
      Question:
      Convert string values into numbers using:
      - Number()
   //   - parseInt()
   //   - Unary + operator

      Notes:
      - parseInt removes decimals
      - + is fastest conversion
   ====================================================== */

   // var num1 = "100"
   // var num2 = "200"
   // console.log(typeof Number(num1))
   // console.log(typeof num1)
   // console.log(typeof parseInt(num2))
   // console.log(typeof +num2)



   /* ======================================================
      Topic 14: parseInt vs Unary Plus
      Question:
      Observe how parseInt and + behave with invalid values.

      Notes:
      - parseInt stops at non-numeric character
      - + returns NaN if invalid
   ====================================================== */

   // parseInt("200.75")   // 200
   // parseInt("200abc")   // 200
   // parseInt("abc200")   // NaN

   // +"200.75"            // 200.75
   // +"200abc"            // NaN
   // +"abc200"            // NaN



   /* ======================================================
      Topic 15: Date Object Basics
      Question:
      Display:
      - Current date
      - Local date
      - Time

      Notes:
      - Date() gives full date-time object
   ====================================================== */

   // var now = new Date()
   // console.log(now.toDateString())
   // console.log(now.toLocaleDateString())
   // console.log(now.toTimeString())
   // console.log(now.toLocaleTimeString())



   /* ======================================================
      Topic 16: Extracting Date Components
      Question:
      Extract:
      - Day
      - Month
      - Year

      Notes:
      - getMonth() starts from 0
   ====================================================== */

   // console.log(new Date().getDay())
   // console.log(new Date().getMonth())
   // console.log(new Date().getDate())
   // console.log(new Date().getFullYear())



   /* ======================================================
      Topic 17: Time Difference Calculation
      Question:
      Calculate difference between two dates.

      Notes:
      - Dates are calculated in milliseconds
   ====================================================== */

   // var now = new Date();
   // var oldDate = new Date("13 Oct 2006");

   // var diff = now.getTime() - oldDate.getTime();
   // var years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
   // console.log(years);



   /* ======================================================
      Topic 18: DOB Age Calculator
      Question:
      Ask user for DOB and calculate age in years.

      Notes:
      - Real-world practical use of Date
   ====================================================== */

   // var userDOB = prompt("Enter your DOB", "1 Jan 1992");
   // var dob = new Date(userDOB);
   // var now = new Date();

   // var age = Math.floor((now - dob) / (1000 * 60 * 60 * 24 * 365));
   // console.log("Your age is:", age);



   /* ======================================================
      Topic 19: Function Basics
      Question:
      Create and call a simple function.

      Notes:
      - Functions help reuse code
   ====================================================== */

   // function foo() {
   //     console.log("Hello world");
   // }
   // foo();



   /* ======================================================
      Topic 20: Function with Parameters
      Question:
      Pass arguments into a function and display output.

      Notes:
      - Parameters receive values
   ====================================================== */

   // function greet(name) {
   //     console.log("Hello " + name);
   // }
   // greet("Muhammad Muzammil");



   /* ======================================================
      Topic 21: Calculator Function (Decision Making)
      Question:
      Create a calculator using:
      - if / else
      - operators (+ - * /)

      Notes:
      - Very common interview question
   ====================================================== */

   // function cal(num1, num2, opt) {
   //     if (opt === "+") {
   //         console.log("Addition:", num1 + num2);
   //     }
   //     else if (opt === "-") {
   //         console.log("Subtraction:", num1 - num2);
   //     }
   //     else if (opt === "*") {
   //         console.log("Multiplication:", num1 * num2);
   //     }
   //     else if (opt === "/") {
   //         console.log("Division:", num1 / num2);
   //     }
   //     else {
   //         console.log("Invalid Operator");
   //     }
   // }

   // var num1 = +prompt("Enter number 1");
   // var opt = prompt("Enter operator");
   // var num2 = +prompt("Enter number 2");

   // cal(num1, num2, opt);


   // Task 

   // var marks = [29, 1, 1, 85, 72, 66, 90, 55, 40, 35, 28, 20, 10];
   // document.getElementById("btn").onclick = function () {
   //    var output = "";
   //    var passcount = 0;
   //    var failcount = 0;
   //    for (var i = 0; i < marks.length; i++) {
   //       if (marks[i] >= 40) {
   //          // console.log("Pass", marks[i])
   //          // document.writeln("<h3> Marks:" + " " + marks[i] + " " + " Grade: Pass</h3>")
   //          output += "<h3> Marks:" + " " + marks[i] + " " + " Grade: Pass</h3>"
   //          passcount++
   //       }
   //       else {
   //          // console.log("fail", marks[i])
   //          // document.writeln("<h3> Marks:" + " " + marks[i] + " " + " Grade: Fail</h3>")
   //          output += "<h3> Marks:" + " " + marks[i] + " " + " Grade: Fail</h3>"
   //          failcount++f
   //       }
   //    }

   //    output += "<hr>";
   //    output += "<h4>Total Pass: " + passcount + "</h4>";
   //    output += "<h4>Total Fail: " + failcount + "</h4>";

   //    console.log("Pass:", passcount);
   //    console.log("Fail:", failcount);
   //    document.getElementById("result").innerHTML = output;
   // }

   // result(marks)

   // enter name and roll no  
   // student exits so soiw thier result with name roll no total number and grade
   // teacher enter the roll no so show all student record with roll no

   // var stdRecord = ['Muhammad-Muzammil', 'Ali', 'Ahmed', 'Hadi']
   // var techRecord = ['Jaffar Aman', 'Hammad']
   // var stdRollNo = [1001, 1002, 1003, 1004]
   // var techRollNo = [101, 1002]
   // var marks = [85, 72, 66, 90, 55, 40, 35, 28, 20, 10];

   // var userNo = prompt("Enter a roll no")
   // var userName = prompt("Enter a name")
   // var found = false;
   // function stdReport(stdRecord, stdRollNo, userNo, userName, marks, techRecord, techRollNo) {
   //    for (var i = 0; i < stdRollNo.length; i++) {
   //       if (userNo == stdRollNo[i] && userName.toLowerCase() == stdRecord[i].toLowerCase()) {
   //          console.log("Name", stdRecord[i])
   //          console.log("Roll No", stdRollNo[i])
   //          // console.log('you are in class')
   //          if (marks[i] >= 40) {
   //             // output += "<h3> Marks:" + " " + marks[i] + " " + " Grade: Pass</h3>"
   //             console.log("Pass the exam ")
   //          }
   //          else {
   //             console.log("fail the exam ")
   //          }
   //          found = true;
   //          break;
   //       }
   //       else if (userNo == techRollNo[i] && userName.toLowerCase() == techRecord[i].toLowerCase()) {
   //          for (var a = 0; a < stdRecord.length; a++) {
   //             console.log(stdRecord[a])
   //             console.log(stdRollNo[a])
   //             console.log(marks[a])
   //             found = true;

   //          }
   //       }
   //    }
   //    if (!found) {
   //       console.log("Your are not in CLass")
   //    }
   // }
   // stdReport(stdRecord, stdRollNo, userNo, userName, marks, techRecord, techRollNo) 




   // function getData() {
   //    var num1 = document.getElementById("num1").value;
   //    var num2 = document.getElementById("num2").value;
   //    var opt = document.getElementById("opt").value;
   //    console.log(num1)
   //    console.log(num2)
   //    console.log(opt)

   //    calculation(num1, num2, opt)
   // }
   // function calculation(num1, num2, opt) {
   //    var res;

   //    if (opt == "+") {
   //       res = num1 + num2;
   //    }
   //    else if (opt == "-") {
   //       res = num1 - num2;
   //    }
   //    else if (opt == "*") {
   //       res = num1 * num2;
   //    }
   //    else if (opt == "/") {
   //       res = num1 / num2;
   //    }
   //    else {
   //       res = "Invalid Operator";
   //    }
   //    document.getElementById("result").innerHTML = "Result: " + res;
   // }
   // calculation(getData())

   // function checkAge(){
   //    var userName = document.getElementById("userName").value;
   //    var userRollNo = document.getElementById("userRollNo").value;
   //    var userAge = document.getElementById("userAge").value;
   //    console.log(userName)
   //    console.log(userRollNo)
   //    console.log(userAge)
   //    var months = userAge * 12
   //    var days = userAge * 365
   //    console.log(months)
   //    console.log(days)

   // }


   // function checkAge(){
   // var userName = document.getElementById("userName").value.trim();
   // var userRollNo = document.getElementById("userRollNo").value.trim();
   // var userAge = document.getElementById("userAge").value.trim();

   // Input validation
   // if(!userName || !userRollNo || !userAge){
   //    alert("Please fill all fields!");
   //    return;
   // }

   // if(isNaN(userAge) || userAge <= 0){
   //    alert("Invalid age! Enter a positive number.");
   //    return;
   // }

   // userAge = Number(userAge);
   // var months = userAge * 12;
   // var days = userAge * 365;

   // console.log(userName);
   // console.log(userRollNo);
   // console.log(userAge);
   // console.log(months);
   // console.log(days);

   // var resultDiv = document.getElementById("result");
   // resultDiv.style.display = "block";
   // resultDiv.innerHTML = `
   // //    <strong>${userName} (Roll No: ${userRollNo})</strong><br>
   // //    You are <strong>${userAge} years</strong> old.<br>
   // //    That is equal to:<br>
   // //    <strong>${months} months</strong><br>
   // //    <strong>${days} days</strong>
   // // `;
   // // }`