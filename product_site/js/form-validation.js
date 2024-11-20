var validName = false;

var nameInput = document.getElementById("fullName");
var feedbackDiv = document.getElementById("feedback");

nameInput.addEventListener("focus", function () {
  feedbackDiv.innerHTML = "Please enter your full name (First and Last)";
});

nameInput.addEventListener("blur", function () {
  // Check if the input is empty
  if (!nameInput.value) {
    validName = false;
    nameInput.style.borderColor = "red";
    feedbackDiv.innerHTML = "You did not enter a name. Please try again.";
  } else {
    // Check if the input contains at least two words (assuming names have at least first and last)
    if (nameInput.value.split(" ").length < 2) {
      validName = false;
      nameInput.style.borderColor = "red";
      feedbackDiv.innerHTML = "You did not enter your full name. Please try again.";
    } else {
      validName = true; // Set validName to true if both conditions are met
      nameInput.style.borderColor = ""; // Remove border color if valid
      feedbackDiv.innerHTML = ""; // Clear feedback if valid
    }
  }

  // Update border color based on validName after all checks
  if (validName) {
    nameInput.style.borderColor = "green";
  }
});

var validSubject = false; // Add the missing line to declare validSubject