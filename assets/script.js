// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

var currentDay = $("#currentDay");

//function to display current date in header
function displayDate() {
  function repeat() {
    var rightNow = dayjs().format("dddd, MMMM D YYYY, h:mm:ss a");
    currentDay.text(rightNow);
  }
  repeat();
  setInterval(repeat, 1000);
}
displayDate();

//function to change color of time blocks based on time of day
//is there a more efficient way to do this? I feel like there is a better way to do this but I can't figure it out.
function changeColor() {
  var currentHour = dayjs().format("HH");
  if (currentHour > 9) {
    $("#hour-9").addClass("past");
  }
  if (currentHour === 9) {
    $("#hour-9").addClass("present");
  }
  if (currentHour < 9) {
    $("#hour-9").addClass("future");
  }
  if (currentHour > 10) {
    $("#hour-10").addClass("past");
  }
  if (currentHour === 10) {
    $("#hour-10").addClass("present");
  }
  if (currentHour < 10) {
    $("#hour-10").addClass("future");
  }
  if (currentHour > 11) {
    $("#hour-11").addClass("past");
  }
  if (currentHour === 11) {
    $("#hour-11").addClass("present");
  }
  if (currentHour < 11) {
    $("#hour-11").addClass("future");
  }
  if (currentHour > 12) {
    $("#hour-12").addClass("past");
  }
  if (currentHour === 12) {
    $("#hour-12").addClass("present");
  }
  if (currentHour < 12) {
    $("#hour-12").addClass("future");
  }
  if (currentHour > 13) {
    $("#hour-13").addClass("past");
  }
  if (currentHour === 13) {
    $("#hour-13").addClass("present");
  }
  if (currentHour < 13) {
    $("#hour-13").addClass("future");
  }
  if (currentHour > 14) {
    $("#hour-14").addClass("past");
  }
  if (currentHour === 14) {
    $("#hour-14").addClass("present");
  }
  if (currentHour < 14) {
    $("#hour-14").addClass("future");
  }
  if (currentHour > 15) {
    $("#hour-15").addClass("past");
  }
  if (currentHour === 15) {
    $("#hour-15").addClass("present");
  }
  if (currentHour < 15) {
    $("#hour-15").addClass("future");
  }
  if (currentHour > 16) {
    $("#hour-16").addClass("past");
  }
  if (currentHour === 16) {
    $("#hour-16").addClass("present");
  }
  if (currentHour < 16) {
    $("#hour-16").addClass("future");
  }
  if (currentHour > 17) {
    $("#hour-17").addClass("past");
  }
  if (currentHour === 17) {
    $("#hour-17").addClass("present");
  }
  if (currentHour < 17) {
    $("#hour-17").addClass("future");
  }
}
changeColor();

//function to save user input to local storage
addEventListener("click", function (event) {});

$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
