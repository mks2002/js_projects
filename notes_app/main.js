console.log("Welcome to notes app. This is app.js");
showNotes();



// If user adds a note, add it to the localStorage
let addBtn = document.getElementById("addBtn");

addBtn.addEventListener("click", function (e) {
   let addTxt = document.getElementById("addTxt");
   let addTitle = document.getElementById("addTitle");

   if (addTxt.value && addTitle.value) {
      let notes = localStorage.getItem("notes");
      if (notes == null) {
         notesObj = [];
      } else {
         // JSON.parse() takes a JSON string and transforms it into a JavaScript object. but here we have multiple objects so it returns a array of objects......
         notesObj = JSON.parse(notes);
      }
      let myObj = {
         title: addTitle.value,
         text: addTxt.value
      }
      // we can consider notesObj as an array of objects....
      notesObj.push(myObj);
      localStorage.setItem("notes", JSON.stringify(notesObj));
      // here we clear the form input section if we dont do this then previous data is visible there after clicking on the button...
      addTxt.value = "";
      addTitle.value = "";
      //   console.log(notesObj);
      showNotes();
   } else {
      alert("the title and description can not be empty..")
   }


});




// Function to show elements from localStorage
function showNotes() {
   let notes = localStorage.getItem("notes");
   if (notes == null) {
      notesObj = [];
   } else {
      notesObj = JSON.parse(notes);
      console.log(notesObj);
   }
   let html = "";
   // here the index is for the foreach loop , we use that in our button to give a unique id ....
   notesObj.forEach(function (element, index) {
      html += `
            <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">${element.title}</h5>
                        <p class="card-text"> ${element.text}</p>
                        <button id="${index}"onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
                    </div>
                </div>`;
   });
   let notesElm = document.getElementById("notes");
   if (notesObj.length != 0) {
      notesElm.innerHTML = html;
   } else {
      notesElm.innerHTML = `<h3>Nothing to show! Use "Add a Note" section above to add notes.</h3>`;
   }
}

// Function to delete a note
function deleteNote(index) {
   //   console.log("I am deleting", index);

   let notes = localStorage.getItem("notes");
   if (notes == null) {
      notesObj = [];
   } else {
      notesObj = JSON.parse(notes);
   }

   notesObj.splice(index, 1);
   localStorage.setItem("notes", JSON.stringify(notesObj));
   showNotes();
}


let search = document.getElementById('searchTxt');
search.addEventListener("input", function () {

   let inputVal = search.value.toLowerCase();
   // console.log('Input event fired!', inputVal);
   let noteCards = document.getElementsByClassName('noteCard');
   Array.from(noteCards).forEach(function (element) {
      let cardTxt = element.getElementsByTagName("p")[0].innerText;
      if (cardTxt.includes(inputVal)) {
         element.style.display = "block";
      }
      else {
         element.style.display = "none";
      }
      // console.log(cardTxt);
   })
})
