
var showText = document.getElementById("show-text");
var hoursRegistered = document.getElementById("number-of-hours");
var commentToHoursRegistered = document.getElementById("comment");
//var sendHoursButton = document.getElementById("form-button");
var numberOfHours = document.getElementById("number-of-hours");

function saveHours(){
    //Check if validation set in input id="number-of-hours" has passed
    if(numberOfHours.checkValidity()){
    //Prevent form to send and remove the information before it has been saved
        document.getElementById("form-button").addEventListener("click", function(event){
            event.preventDefault()
         });

    //Get the previously saved values
        let timeSheet = JSON.parse(localStorage.getItem("timeSheetForPerson")) || [];
    // Save the current 
        let todaysTimeSheet= {
            hours: hoursRegistered.valueAsNumber,
            comment: commentToHoursRegistered.value
         };
        timeSheet.push(todaysTimeSheet);

        window.localStorage.setItem(`timeSheetForPerson`, JSON.stringify(timeSheet));


         showText.innerHTML = "Timene er lagret";
    };
};




