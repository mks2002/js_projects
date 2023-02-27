


function updateName() {
  let nameInput = document.getElementById("name");
  let outputName = document.getElementById("outputName");

  outputName.innerHTML = nameInput.value;
}

function updateQualification() {
  let qualificationInput = document.getElementById("qualification");
  let outputQualification = document.getElementById("outputQualification");

  outputQualification.innerHTML = qualificationInput.value;
}

function updateHobbies() {
  let hobbiesInput = document.getElementById("hobbies");
  let outputHobbies = document.getElementById("outputHobbies");

  let hobbiesList = hobbiesInput.value.split(",");

  if (hobbiesList.length === 1) {
      outputHobbies.innerHTML = hobbiesList[0] + ".";
  } else if (hobbiesList.length === 2) {
      outputHobbies.innerHTML = hobbiesList[0] + " & " + hobbiesList[1] + ".";
  } else if (hobbiesList.length === 3) {
      outputHobbies.innerHTML = hobbiesList[0] + ", " + hobbiesList[1] + " & " + hobbiesList[2] + ".";
  } else {
      outputHobbies.innerHTML = "";
  }

  let nameInput = document.getElementById("name");
  let outputName2 = document.getElementById("outputName2");

  outputName2.innerHTML = nameInput.value;
}

