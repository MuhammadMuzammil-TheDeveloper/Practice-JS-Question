// console.log("Hello WORLD")

// var h1Element = document.createElement("h1");
// var text = document.createTextNode("Hello World");

// h1Element.innerHTML="HelloWorld"
// console.log(h1Element)

// h1Element.appendChild(text);
// console.log(h1Element)


// var userName ='Muzammil'

// var firstName = `Muhammad`
// var lasttName = `Muzammil`
// document.writeln(`My name is ${firstName} ${lasttName} `)


// print 10 time card using loop (Method 1)
// var parent = document.getElementById("parent");
// for (var i = 1; i <= 10; i++) {
//     var parentDiv = document.createElement("div");
//     parentDiv.className = 'card';
//     parentDiv.style.width = "18rem";

//     var cardImage = document.createElement("img");
//     cardImage.className = "card-img-top";
//     cardImage.src = "https://picsum.photos/400/200";


//     var cardBody = document.createElement("div");
//     cardBody.className = "card-body";

//     var cardTitle = document.createElement("h5");
//     cardTitle.className = "card-title";
//     cardTitle.innerHTML = `Card Title ${i}`;

//     cardBody.appendChild(cardTitle);
//     cardImage.appendChild(cardBody);
//     parentDiv.appendChild(cardImage);
//     parent.appendChild(parentDiv);
// }

// print 10 time card using loop (Method 2)
// var parent = document.getElementById("parent");
// for(var i=1; i<=10; i++){
//     var parentDiv = `<div class="card" style="width: 18rem;">
//   <img src="https://picsum.photos/400/200" class="card-img-top" alt="...">
//   <div class="card-body">
//     <h5 class="card-title">Card title</h5>
//     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
//     <a href="#" class="btn btn-primary">Go somewhere</a>
//   </div>
// </div>`
//     parent.innerHTML += parentDiv;
// }

var parent = document.getElementById("parent");

function addNote() {
    var input = document.getElementById("input");
    if (input.value.length < 5) {
        alert("Invlaid data note")
    }
    else {
        var noteUi = `<div class="card" style="width: 18rem;">
  <img src="https://picsum.photos/400/200" " class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">${input.value}</p>
      <button class="btn btn-info"
      onclick="editNote(this)">Edit</button>
                <button class="btn btn-danger" onclick="deleteNote(this)">Delete</button>
  </div>
</div>`
        parent.innerHTML += noteUi;
        input.value = "";
    }
}

function deleteNote(delBtn) {
    delBtn.parentNode.parentNode.remove();
}

function editNote(editBtn) {
    console.log(editBtn.previousElementSibling.innerHTML)
    var newValue = prompt("Enter new value", editBtn.previousElementSibling.innerHTML);
    editBtn.previousElementSibling.innerHTML = newValue;
}

function deleteAll(){
//  console.log(e)
 parent.innerHTML= "";
}