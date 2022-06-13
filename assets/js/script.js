/*INDEX
1. toggle (Hidden/NotHidden Function)
2. calenderDisplayWeek  (display week calender view)
3. calenderDisplayDayScrollingLong  (display day view on click broswer using scrolling long modal)
*/

/* ------------ [0. Arrays (for event storage)] ------------ */
var eventName = ["event name", "2 event name"]
var eventDescription = []
var eventDate = []
var eventStartTime = []
var eventEndTime =[]
/* ------------ [1. toggle (Hidden/NotHidden Function)] ------------ */
var timeDisplayEl = $('#time-display');
var projectDisplayEl = $('#project-display');
var projectModalEl = $('#project-modal');
var projectFormEl = $('#project-form');
var eventNameInputEl = $('#project-name-input');
var startDateInputEl = $('#hourly-rate-input');
var dueDateInputEl = $('#due-date-input');
/* STUFF */
var w1displayEl = $('#1w');
var w2displayEl = $('#2w');
var w3displayEl = $('#3w');
var w4displayEl = $('#4w');
var w5displayEl = $('#5w');
var w6displayEl = $('#6w');
var w7displayEl = $('#7w');

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
function displayEvent(eventName, eventDescription, eventStartTime, eventEndTime){
  //FROM 3RD APIS 18  --- COMMENTING NEEDED
  // var cardColumnEl = $('#1w');
  // cardColumnEl.addClass('col-12 col-sm-4 col-md-3');

  var cardEl = $('<div>');
  // Add a class of .custom-card
  cardEl.addClass('card h-100 custom-card');
  cardEl.appendTo(w1displayEl);

  var cardName = $('<h5>').addClass('card-header custom-card-header').text(eventName);
  cardName.appendTo(cardEl);

  var cardBodyEl = $('<div>');
  cardBodyEl.addClass('card-body');
  cardBodyEl.appendTo(cardEl);

  var cardTimes = $('<p>').addClass('card-text').text(eventStartTime + "->" + eventEndTime);
  var cardComment = $('<p>').addClass('card-text').text(eventDescription);
  cardTimes.appendTo(cardBodyEl);
  cardComment.appendTo(cardBodyEl);

  w1displayEl.append(cardEl);
}
function createEvent(eventName, eventDescription, eventDay, eventTimeStart, eventTimeEnd){
  
}
/*Jquery Get/Set Functions
Set: $("#someInputId").val("Value you want it to have here");
Get: $("#someInputId").val(); // returns value of #someInputId */
/*Jquery class manipulation
$('.my_class').removeClass('my_class').addClass('normal_element');*/
function calenderDisplayWeek(){
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
  for (let i = 0; i < eventEndTime.length; i++) {
    if (week1d === eventStartTime[i]){
      /*Create New Event In 1w*/
      [i]
      
      $("#1w").val(eventDescription)
    }
  }
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
