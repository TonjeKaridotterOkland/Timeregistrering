
var showText = document.getElementById("show-text");
var hoursRegistered = document.getElementById("number-of-hours");
var commentToHoursRegistered = document.getElementById("comment");
var numberOfHours = document.getElementById("number-of-hours");
let counter = -1;
var hoursCounter = 0;

showTimeSheet();

function getTimeSheet(){
    //Get the previously saved values
   return JSON.parse(localStorage.getItem("timeSheetForPerson")) || [];
};

function setTimeSheet(a){
   //Set values to localstorage
   window.localStorage.setItem(`timeSheetForPerson`, JSON.stringify(a));
  location.reload();

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

    //Grunnen til at jeg bruker alert er for å vise bruker at timene er lagret før siden reloader.
         alert("timene er lagret");
         setTimeSheet(timeSheet); 
    };
};

function showTimeSheet(){
    let timeSheet = getTimeSheet();
    for (let registration of timeSheet){
        counter++;
document.getElementById("show-the-hours").innerHTML += 
`<div class="row">
<div class="col-1">${registration.hours} </div>
<div class="col-1"> ${registration.comment}</div>
 <div class="col-1">
 <button class="btn btn-outline-danger btn-sm" onclick="deleteRow('${counter}')">Slett</button>
 </div>
 </div>`;
 hoursCounter += registration.hours;     
    };

    
    if(hoursCounter > 100){
        alert("Summen av antall registerte timer har oversteget 100. Antall timer registert: "+ hoursCounter);
     }
   
};

function deleteRow(rowToDelete){
    var data = getTimeSheet();
    data.splice(rowToDelete, 1);
    setTimeSheet(data);
};


