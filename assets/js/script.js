/*INDEX
1. toggle (Hidden/NotHidden Function)
2. calenderDisplayWeek  (display week calender view)
3. calenderDisplayDayScrollingLong  (display day view on click broswer using scrolling long modal)
*/
/* ------------ [1. toggle (Hidden/NotHidden Function)] ------------ */
var timeDisplayEl = $('#time-display');
var projectDisplayEl = $('#project-display');
var projectModalEl = $('#project-modal');
var projectFormEl = $('#project-form');
var eventNameInputEl = $('#project-name-input');
var startDateInputEl = $('#hourly-rate-input');
var dueDateInputEl = $('#due-date-input');

function toggleWeek() {
  var toggleWeekEl = document.getElementById("toggleWeek");
  if (toggleWeekEl.style.display === "none") {
    toggleWeekEl.style.display = "";
  } else {
    toggleWeekEl.style.display = "none";
  }
  var week1d = moment().subtract(1, 'days').format("dddd, DD");
  $("#1d").text(week1d);
  var week2d = moment().format("dddd, DD");
  $("#2d").text(week2d);
  var week3d = moment().add(1, 'days').format("dddd, DD");
  $("#3d").text(week3d);
  var week4d = moment().add(2, 'days').format("dddd, DD");
  $("#4d").text(week4d);
  var week5d = moment().add(3, 'days').format("dddd, DD");
  $("#5d").text(week5d);
  var week6d = moment().add(4, 'days').format("dddd, DD");
  $("#6d").text(week6d);
  var week7d = moment().add(5, 'days').format("dddd, DD");
  $("#7d").text(week7d);
}

function toggleMonth() {
  var toggleMonthEl = document.getElementById("toggleMonth");
  if (toggleMonthEl.style.display === "none") {
    toggleMonthEl.style.display = "";
  } else {
    toggleMonthEl.style.display = "none";
  }
}
/*Jquery Get/Set Functions
Set: $("#someInputId").val("Value you want it to have here");
Get: $("#someInputId").val(); // returns value of #someInputId */
/*Jquery class manipulation
$('.my_class').removeClass('my_class').addClass('normal_element');*/
function calenderDisplayWeek() {

}

function calenderDisplayDayScrollingLong(dayid) {

}
$(document).ready(function () {

});

function handleProjectFormSubmit(event) {
  event.preventDefault();

  var projectName = projectNameInputEl.val().trim();
  var projectType = projectTypeInputEl.val().trim();
  var hourlyRate = hourlyRateInputEl.val().trim();
  var dueDate = dueDateInputEl.val().trim();

  printProjectData(projectName, projectType, hourlyRate, dueDate);

  projectFormEl[0].reset();
}

projectFormEl.on('submit', handleProjectFormSubmit);
projectDisplayEl.on('click', '.delete-project-btn', handleDeleteProject);
dueDateInputEl.datepicker({ minDate: 1 });
