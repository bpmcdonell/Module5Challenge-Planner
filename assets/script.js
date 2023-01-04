// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
let currentDay = $("#currentDay");

// Display current date in header
function displayDate() {
  let updateTime = () => {
    let rightNow = dayjs().format("dddd, MMMM D YYYY, h:mm:ss a");
    currentDay.text(rightNow);
  }

  updateTime();
  setInterval(updateTime, 1000);
}
displayDate();

function applyClasses() {
  let currentHour = dayjs().format("HH");

  for (let i = 9; i < 18; i++) {
    let element = document.querySelector(`#hour-${i}`);

    if (i < currentHour) {
      element.classList.add('past');
    } else if (i === currentHour) {
      element.classList.add('present');
    } else {
      element.classList.add('future');
    }

    let savedValue = localStorage.getItem(`#hour-${i}`);
    element.querySelector('textarea').value = savedValue;
  }
}
applyClasses();

let saveButtons = document.querySelectorAll('.saveBtn');

// Save user input to local storage
let saveButton = $('.saveBtn');
//function to save user input to local storage
saveButton.click(function(j) { 
  j.preventDefault();
  let textHr = $(this).parent('div').attr('id');
  let textValue = $('#' + textHr).find("textarea").val();
  localStorage.setItem('#' + textHr,'' + textValue);
});
