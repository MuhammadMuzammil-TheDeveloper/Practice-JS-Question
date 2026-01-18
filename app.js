// let studentNames = [
//     "Faheem",
//     "Nasir",
//     "Hammad",
//     "Hamza",
//     "Abdullah",
//     "Ali",
//     "Rizwan",
//     "Ahmed",
//     "Bilal",
//     "Usman",
//     "Ayaan",
//     "Saad",
//     "Zain",
//     "Huzaifa",
//     "Talha",
//     "Danish",
//     "Areeb",
//     "Sameer",
//     "Fahad",
//     "Ibrahim"
// ];  

// for(var i=0; i<studentNames.length; i++){
//     console.log(studentNames[i]);
//     document.writeln("Index:" + i + " " +studentNames[i] + "<br>");
// }


// let number  = [1,2,3,4,5,6,7,8,9,10];
// let found=false;
// for(var i=0; i<number.length; i++){
//     if(5 === number[i]){
//         found=true;
//         break;
//     }
// }
// if(found){
//     document.writeln("<h1>[Found -- " + found +"] "+ "Number 5 is Found in array</h1>");
// }
// else{
//     document.writeln("<h1>[NotFound -- " + found+"] " + "Number 5 is NotFound in array </h1>");
// }


// let students = ["Faheem","Nasir","Hammad","Hamza","Abdullah","Ali","Rizwan","Ahmed","Bilal","Usman"];

// let isAliPresent = false;

// for(var i=0; i<students.length; i++){
//     if(students[i] ==="Ali"){
//         isAliPresent = true;
//         break;
//     }
// }
// if(isAliPresent){
//     console.log("Ali is present in the class.");
// }
// else{
//     console.log("Ali is not present in the class.");
// }


// let number  = [1,2,3,4,51,68,7,8,9,10];
// let isGreater = false;

// for ( var i = 0; i<=number.length; i++){
//     if(number[i] > 50){
//         console.log("Number greater than 50 found: " + number[i]);
//         isGreater = true;
//         // break;
//     }
// }
// if(!isGreater){
//     console.log("No number greater than 50 found in the array.");
// }

// let Bakery = ["Bread", "Cake", "Pastry", "Cookies", "Muffins"];
// let Price = [40, 500, 150, 200, 1000];

// var searchItem = prompt("Welcome to the Bakery! What would you like to order?")
// var itemFound = false;

// for (var i =0; i<Bakery.length; i++){
//     if(Bakery[i].toLowerCase() === searchItem.toLowerCase()){
//         alert(searchItem +" "+" Is available :" + Price[i] +"Rs")
//      itemFound =true;
//     }
// }

// if(!itemFound){
//         alert(searchItem + " "+ "Not available :")
// }


// var str = "MUHAMMAD-  MUZAMMIL";
// var copy = str.slice(0, 7)

// console.log(copy)
// console.log(str[0])

// var firstLetter = str[0].toUpperCase();
// var RemainLetter= str.slice(1).toLowerCase();

// var FullName = firstLetter + RemainLetter;
// console.log(FullName)


// var neww = str[0].toUpperCase() + str.slice(1).toLowerCase();
// console.log(neww)

// var str1 = prompt("Enter a name:")


// for(var i=0; i<=str1.length; i++){
//     console.log(str1.slice(i, i+2))
//     if(str1.slice(i, i+2) == "  "){
//         alert("Double space found")
//         break
//     }
// }




var para =
  "The New Yorker magazine doesn't allow the phrase World War II. ' They say it should be 'the Second World War.' So let's search the following sentence for the banned characters and replace them with the phrase that the New Yorker prefers.";

console.log(para);
for (var i=0; i<para.length; i++){
    if(para.slice(i, i+3) == "New"){
        console.log("Found the word 'allow' at index: " + i);
        
    }
}