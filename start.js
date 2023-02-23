let showText = document.getElementById("show-text");
let hoursRegistered = document.getElementById("number-of-hours");
let commentToHoursRegistered = document.getElementById("comment");
let numberOfHours = document.getElementById("number-of-hours");
let counter = -1;
let hoursCounter = 0;

function getTimeSheet() {
  //Get the previously saved values
  return JSON.parse(localStorage.getItem("timeSheetForPerson")) || [];
}

function setTimeSheet(a) {
  //Set values to localstorage
  window.localStorage.setItem(`timeSheetForPerson`, JSON.stringify(a));
  location.reload();
}

function saveHours(event) {
  //Prevent form to send before the information has been saved
  event.preventDefault();

  //Check if validation set in input id="number-of-hours" has passed
  if (numberOfHours.checkValidity()) {
    // Save the current values
    let todaysTimeSheet = {
      hours: hoursRegistered.valueAsNumber,
      comment: commentToHoursRegistered.value,
    };
    // Push the new values to the timeSheet-array and set in localstorage
    let timeSheet = getTimeSheet();
    timeSheet.push(todaysTimeSheet);
    alert("timene er lagret");
    setTimeSheet(timeSheet);
  }
}
