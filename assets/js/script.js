/*INDEX
1. toggle (Hidden/NotHidden Function)
2. calenderDisplayWeek  (display week calender view)
3. calenderDisplayDayScrollingLong  (display day view on click broswer using scrolling long modal)
*/
/* ------------ [1. toggle (Hidden/NotHidden Function)] ------------ */
function toggleWeek() {
  var toggleWeekEl = document.getElementById("toggleWeek");
  if (toggleWeekEl.style.display === "none") {
    toggleWeekEl.style.display = "block";
  } else {
    toggleWeekEl.style.display = "none";
  }
}
/*Jquery Get/Set Functions
Set: $("#someInputId").val("Value you want it to have here");
Get: $("#someInputId").val(); // returns value of #someInputId */
/*Jquery class manipulation
$('.my_class').removeClass('my_class').addClass('normal_element');*/
function calenderDisplayWeek(){
    var todaysDate = moment().format("dddd,MM,DD,YYYY"); // "Sunday,02,14,2010"
    var todayDateNumber = moment().format("DD"); // "14"
    var idDay1 = moment().format("DD");
    var idDay2 = moment().format("DD")+1;
    var idDay3 = moment().format("DD")+2;
    var idDay4 = moment().format("DD")+3;
    var idDay5 = moment().format("DD")+4;
    var idDay6 = moment().format("DD")+5;
    var idDay7 = moment().format("DD")+6;

    var weekArray = [[],["id=idDay2"],["id=idDay3"],["id=idDay4"],["id=idDay5"],["id=idDay6"],["id=idDay7"]]
    //Array Generation
    weekArray.push([idDay1, 0])

}
function calenderDisplayDayScrollingLong(dayid){

}
$(document).ready(function() {
    
    });