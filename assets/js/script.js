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
function newEvent(eventName, eventDescription, eventStartTime, eventEndTime){
  
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
    if (week1d === )

  }
}

function calenderDisplayDayScrollingLong(dayid){

}
$(document).ready(function() {
    
    });