console.log("This is index.js");
// Todos"
// 1. Store all the data to the localStorage
// 2. Give another column as an option to delete the book
// 3. Add a scroll bar to the view

// Constructor
function Book(name, author, type) {
   this.name = name;
   this.author = author;
   this.type = type;
}

// Display Constructor
function Display() {

}






// Add methods to display prototype
Display.prototype.add = function (book) {
   console.log("Adding to UI");


   let notes = localStorage.getItem("notes");
   if (notes == null) {
      notesObj = [];
   } else {
      notesObj = JSON.parse(notes);
      console.log(notesObj);
   }
   tableBody = document.getElementById('tableBody');

   let uiString = '';
   notesObj.forEach(function (element, index) {
      uiString +=
         `<tr>
                        <td>${element.name}</td>
                        <td>${element.author}</td>
                        <td>${element.type}</td>
                    </tr>`;

   })
   tableBody.innerHTML = uiString;

   if (notesObj.length != 0) {
      tableBody.innerHTML = uiString;
   } else {
      tableBody.innerHTML = `<h3>Nothing to show! Use "Add a Note" section above to add notes.</h3>`;
   }
}

// using this method we can clear any form input tag data after submit the form....
// Implement the clear function
Display.prototype.clear = function () {
   let libraryForm = document.getElementById('libraryForm');
   libraryForm.reset();
}



// Implement the validate function
Display.prototype.validate = function (book) {
   if (book.name.length < 5 || book.author.length < 5) {
      return false
   }
   else {
      return true;
   }
}





Display.prototype.show = function (type, displayMessage) {
   let message = document.getElementById('message');
   message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
                            <strong>Messge:</strong> ${displayMessage}
                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">×</span>
                            </button>
                        </div>`;
   setTimeout(function () {
      message.innerHTML = ''
   }, 2000);

}


// Add submit event listener to libraryForm
let libraryForm = document.getElementById('libraryForm');
libraryForm.addEventListener('submit', libraryFormSubmit);

function libraryFormSubmit(e) {
   console.log('YOu have submitted library form');
   let name = document.getElementById('bookName').value;
   let author = document.getElementById('author').value;
   let type;
   let fiction = document.getElementById('fiction');
   let programming = document.getElementById('programming');
   let cooking = document.getElementById('cooking');

   if (fiction.checked) {
      type = fiction.value;
   }
   else if (programming.checked) {
      type = programming.value;
   }
   else if (cooking.checked) {
      type = cooking.value;
   }


   let book = new Book(name, author, type);

   let notes = localStorage.getItem("notes");
   if (notes == null) {
      notesObj = [];
   } else {

      notesObj = JSON.parse(notes);
   }


   console.log(book);

   let display = new Display();

   if (display.validate(book)) {
      notesObj.push(book);
      localStorage.setItem("notes", JSON.stringify(notesObj));
      display.add(book);

      display.clear();
      display.show('success', 'Your book has been successfully added')
   }
   else {
      // Show error to the user
      display.show('danger', 'Sorry you cannot add this book');
   }

   e.preventDefault();
}












// addBtn.addEventListener("click", function (e) {
//    let addTxt = document.getElementById("addTxt");
//    let addTitle = document.getElementById("addTitle");

//    if (addTxt.value && addTitle.value) {
//       let notes = localStorage.getItem("notes");
//       if (notes == null) {
//          notesObj = [];
//       } else {
//          // JSON.parse() takes a JSON string and transforms it into a JavaScript object. but here we have multiple objects so it returns a array of objects......
//          notesObj = JSON.parse(notes);
//       }
//       let myObj = {
//          title: addTitle.value,
//          text: addTxt.value
//       }
//       // we can consider notesObj as an array of objects....
//       notesObj.push(myObj);
//       localStorage.setItem("notes", JSON.stringify(notesObj));
//       // here we clear the form input section if we dont do this then previous data is visible there after clicking on the button...
//       addTxt.value = "";
//       addTitle.value = "";
//       //   console.log(notesObj);
//       showNotes();
//    } else {
//       alert("the title and description can not be empty..")
//    }


// });




// // // Function to show elements from localStorage
// function showNotes() {
//    let notes = localStorage.getItem("notes");
//    if (notes == null) {
//       notesObj = [];
//    } else {
//       notesObj = JSON.parse(notes);
//       console.log(notesObj);
//    }
//    let html = "";
//    // here the index is for the foreach loop , we use that in our button to give a unique id ....
//    notesObj.forEach(function (element, index) {
//       html += `
//             <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
//                     <div class="card-body">
//                         <h5 class="card-title">${element.title}</h5>
//                         <p class="card-text"> ${element.text}</p>
//                         <button id="${index}"onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
//                     </div>
//                 </div>`;
//    });
//    let notesElm = document.getElementById("notes");
//    if (notesObj.length != 0) {
//       notesElm.innerHTML = html;
//    } else {
//       notesElm.innerHTML = `<h3>Nothing to show! Use "Add a Note" section above to add notes.</h3>`;
//    }
// }
   // let notes = localStorage.getItem("notes");
   // if (notes == null) {
   //    notesObj = [];
   // } else {
   //    notesObj = JSON.parse(notes);
   //    console.log(notesObj);
   // }



   // let addTxt = document.getElementById("addTxt");
   // let addTitle = document.getElementById("addTitle");

   // if (addTxt.value && addTitle.value) {
   //    let notes = localStorage.getItem("notes");
   //    if (notes == null) {
   //       notesObj = [];
   //    } else {
   //       // JSON.parse() takes a JSON string and transforms it into a JavaScript object. but here we have multiple objects so it returns a array of objects......
   //       notesObj = JSON.parse(notes);
   //    }
   //    let myObj = {
   //       title: addTitle.value,
   //       text: addTxt.value
   //    }
   //    // we can consider notesObj as an array of objects....
   //    notesObj.push(myObj);
   //    localStorage.setItem("notes", JSON.stringify(notesObj));
