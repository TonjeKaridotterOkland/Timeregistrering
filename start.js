
var showText = document.getElementById("show-text");
var hoursRegistered = document.getElementById("number-of-hours");
var commentToHoursRegistered = document.getElementById("comment");
var numberOfHours = document.getElementById("number-of-hours");

function getTimeSheet(){
    //Get the previously saved values
   return JSON.parse(localStorage.getItem("timeSheetForPerson")) || [];
};

function setTimeSheet(a){
   //Set values to localstorage
   window.localStorage.setItem(`timeSheetForPerson`, JSON.stringify(a));
};

function saveHours(event){
//Prevent form to send before the information has been saved
    event.preventDefault()

//Check if validation set in input id="number-of-hours" has passed
    if(numberOfHours.checkValidity()){

    // Save the current values
        let todaysTimeSheet= {
            hours: hoursRegistered.valueAsNumber,
            comment: commentToHoursRegistered.value
         };
        
    // Push the new values to the timeSheet-array and set in localstorage
         let timeSheet = getTimeSheet();
         timeSheet.push(todaysTimeSheet);
         setTimeSheet(timeSheet);
         showText.innerHTML = "Timene er lagret";
    };
};

function showTimeSheet(){
    let timeSheet = getTimeSheet();
    for (let registration of timeSheet){

document.getElementById("show-the-hours").innerHTML += `<div class="row"><div class="col-2">${registration.hours} </div><div class="col-2"> ${registration.comment}</div> <div class="col-2"><button>x</button></div></div>`;     
// document.getElementById("show-the-comments").innerHTML += `<div class="">${registration.comment} </div>`;     
// document.getElementById("show-delete-button").innerHTML += `<button>x</button>`;     
        console.log("timer " +registration.hours);
        console.log("kommentar " +registration.comment);

    }
}
showTimeSheet();