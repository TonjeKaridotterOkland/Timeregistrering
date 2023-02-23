// This function loops over all the registrations, and prints out a row with the information, including a delte-button.
// Then it checks for number of hours saved, and alerts if number is above 100
function showTimeSheet() {
  let timeSheet = getTimeSheet();
  for (let registration of timeSheet) {
    counter++;
    document.getElementById("show-the-hours").innerHTML += `
    <div class="row">
        <div class="col-1">${registration.hours}</div>
        <div class="col-1"> ${registration.comment}</div>
    <div class="col-1">
        <button class="btn btn-outline-danger btn-sm" onclick="deleteRow('${counter}')">Slett</button>
    </div>
    </div>
    `;
    hoursCounter += registration.hours;
  }

  if (hoursCounter > 100) {
    alert(
      "Summen av antall registerte timer har oversteget 100. Antall timer registert: " +
        hoursCounter
    );
  }
}

//Deletes the row and updates timesheet
function deleteRow(rowToDelete) {
  let data = getTimeSheet();
  data.splice(rowToDelete, 1);
  setTimeSheet(data);
}

showTimeSheet();
