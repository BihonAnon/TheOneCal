/*INDEX
1. toggle (Hidden/NotHidden Function)
2. calenderDisplayWeek  (display week calender view)
3. calenderDisplayDayScrollingLong  (display day view on click broswer using scrolling long modal)
*/

/* ------------ [0. Arrays (for event storage)] ------------ */
var eventName = ["name for Sunday, 12", "2 event name"]
var eventDescription = ["desc for Sunday, 12", "desc for Monday"]
var eventDate = ["Sunday, 12","Monday, 13"]
var eventStartTime = ["00:00","01:00"]
var eventEndTime = ["00:10","02:00"]
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
var notesDisplayEl = $("#notesdisplay")

var week1d = moment().subtract(1, 'days').format("dddd, DD");
var week2d = moment().format("dddd, DD");
var week3d = moment().add(1, 'days').format("dddd, DD");
var week4d = moment().add(2, 'days').format("dddd, DD");
var week5d = moment().add(3, 'days').format("dddd, DD");
var week6d = moment().add(4, 'days').format("dddd, DD");
var week7d = moment().add(5, 'days').format("dddd, DD");

function toggleWeek() {
  var toggleWeekEl = document.getElementById("toggleWeek");
  if (toggleWeekEl.style.display === "none") {
    toggleWeekEl.style.display = "";
  } else {
    toggleWeekEl.style.display = "none";
  }
  // var week1d = moment().subtract(1, 'days').format("dddd, DD");
  $("#1d").text(week1d);
  var week2d = moment().format("dddd, DD");
  $("#2d").text(week2d);
  var week3d = moment().add(1, 'days').format("dddd, DD")
  $("#3d").text(week3d);
  var week4d = moment().add(2, 'days').format("dddd, DD");
  $("#4d").text(week4d);
  var week5d = moment().add(3, 'days').format("dddd, DD");
  $("#5d").text(week5d);
  var week6d = moment().add(4, 'days').format("dddd, DD");
  $("#6d").text(week6d);
  var week7d = moment().add(5, 'days').format("dddd, DD");
  $("#7d").text(week7d);
  for (let i = 0; i < eventDate.length; i++) {
    if (week1d === eventDate[i]){
      console.log(eventName[i], eventDescription[i], eventStartTime[i], eventEndTime[i])
      displayEventw1(eventName[i], eventDescription[i], eventStartTime[i], eventEndTime[i])
    } else if (week2d === eventDate[i]){
      displayEventw2(eventName[i], eventDescription[i], eventStartTime[i], eventEndTime[i])
    } else if (week3d === eventDate[i]){
      displayEventw3(eventName[i], eventDescription[i], eventStartTime[i], eventEndTime[i])
    } else if (week4d === eventDate[i]){
      displayEventw4(eventName[i], eventDescription[i], eventStartTime[i], eventEndTime[i])
    } else if (week5d === eventDate[i]){
      displayEventw5(eventName[i], eventDescription[i], eventStartTime[i], eventEndTime[i])
    } else if (week6d === eventDate[i]){
      displayEventw6(eventName[i], eventDescription[i], eventStartTime[i], eventEndTime[i])
    } else if (week7d === eventDate[i]){
      displayEventw7(eventName[i], eventDescription[i], eventStartTime[i], eventEndTime[i])
    }
  }
}
displayEventw1("name", "desc", "00:00", "00:01");
function toggleMonth() {
  var toggleMonthEl = document.getElementById("toggleMonth");
  if (toggleMonthEl.style.display === "none") {
    toggleMonthEl.style.display = "";
  } else {
    toggleMonthEl.style.display = "none";
  }
}
function displayEventw1(eventName, eventDescription, eventStartTime, eventEndTime){
//APPENDS cardEl to "display" //EVENT DISPLAY FUNCTIONS START
w1displayEl.empty();  
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
function displayEventw2(eventName, eventDescription, eventStartTime, eventEndTime){
  //APPENDS cardEl to "display"
  w2displayEl.empty()
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
  
    w2displayEl.append(cardEl);
}
function displayEventw3(eventName, eventDescription, eventStartTime, eventEndTime){
    //APPENDS cardEl to "display"
    w3displayEl.empty();  
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
    
      w3displayEl.append(cardEl);
}
function displayEventw4(eventName, eventDescription, eventStartTime, eventEndTime){
      //APPENDS cardEl to "display"
      w4displayEl.empty();  
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
      
        w4displayEl.append(cardEl);
}
function displayEventw5(eventName, eventDescription, eventStartTime, eventEndTime){
        //APPENDS cardEl to "display"
        w5displayEl.empty();  
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
        
          w5displayEl.append(cardEl);
}
function displayEventw6(eventName, eventDescription, eventStartTime, eventEndTime){
          //APPENDS cardEl to "display"
          w6displayEl.empty();  
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
          
            w6displayEl.append(cardEl);
}
function displayEventw7(eventName, eventDescription, eventStartTime, eventEndTime){
            //APPENDS cardEl to "display"
            w7displayEl.empty();  
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
            
              w7displayEl.append(cardEl);
}
//EVENT DISPLAY FUNCTIONS DONE
/*Jquery Get/Set Functions
Set: $("#someInputId").val("Value you want it to have here");
Get: $("#someInputId").val(); // returns value of #someInputId */
/*Jquery class manipulation
$('.my_class').removeClass('my_class').addClass('normal_element');*/
/* -------------------------------- [STICKY NOTES API 1] --------------------------- */
var requestUrl = 'https://api.imgflip.com/get_memes';

var responseText = document.getElementById('response-text');
var memeImgURL
function getApi(requestUrl) {
  fetch(requestUrl)
    .then(function (response){
      return response.json()
    })
    .then(function (response) {
      console.log(response);
      memeImgURL = response.data.memes[0].url;
      console.log(memeImgURL);
      createSticky("null","null","true")
    });
} //FINISH THIS

getApi(requestUrl);

function createSticky(eventName, eventDescription, isMeme){
  if(isMeme === 'true'){
    console.log(memeImgURL);
    var cardEl = $('<div>'); //ambigous Card
    cardEl.addClass('card h-25 w-25 custom-card'); //add styling
    cardEl.addClass('img-fluid');
    var memeImgEl = $('<img>'); //add image tag 
    memeImgEl.attr('src', memeImgURL);
    memeImgEl.appendTo(cardEl);
    cardEl.appendTo(notesDisplayEl);
  } else {
  var cardEl = $('<div>');
  // Add a class of .custom-card
  cardEl.addClass('card h-100 custom-card');
  cardEl.appendTo(notesDisplayEl);
  var cardName = $('<h5>').addClass('card-header custom-card-header').text(eventName);
  cardName.appendTo(cardEl);

  var cardBodyEl = $('<div>');
  cardBodyEl.addClass('card-body');
  cardBodyEl.appendTo(cardEl);

  var cardComment = $('<p>').addClass('card-text').text(eventDescription);
  cardComment.appendTo(cardBodyEl);

  notesDisplayEl.append(cardEl);
  }
} // FINISH THIS

function handleProjectFormSubmit(event) {
  event.preventDefault();

  var projectName = projectNameInputEl.val().trim();
  var projectType = projectTypeInputEl.val().trim();
  var hourlyRate = hourlyRateInputEl.val().trim();
  var dueDate = dueDateInputEl.val().trim();

  printProjectData(projectName, projectType, hourlyRate, dueDate);

  projectFormEl[0].reset();
}

