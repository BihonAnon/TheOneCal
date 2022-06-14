let arrayOfTemp = [];
let temp = 0;
let city = "";
let iconcode;
let iconUrl;
let humidity;
let feelsLike;
// function getLocation() {
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(function (position) {
//       let lat = position.coords.latitude;
//       let long = position.coords.longitude;


//     });
//   }
// }
let lat;
let long;
fetchaApi(lat, long)

function fetchaApi(lat, long) {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '8cd89d2ee5mshc3539f913d69aefp1b4693jsn3c2e1079babc',
      'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com'
    }
  };

  fetch('https://community-open-weather-map.p.rapidapi.com/weather?q=Los%20Angeles&units=imperial', options)
    .then(response => response.json())
    .then(function (data) {
      temp = data.main.temp;
      city = data.name;
      iconcode = data.weather[0].icon
      iconUrl = "http://openweathermap.org/img/w/" + iconcode + ".png";
      humidity = data.main.humidity;
      feelsLike = data.main.feels_like;

      displayWeather();
    })
    .catch(err => console.error(err));
}

function displayWeather() {
  let monday = $('#monday')
  let firstDiv = $('#first-day')
  let weatherDiv = $('<div>')
  let cityElement = $("<div>")
  let spanEl = $('<span>')
  let humidityElement = $('<span>')
  let feelsLikeElement = $('<span>')


  let iconEl = $('<img>')

  firstDiv.attr("class", "card-body col-sm-12 col-md-6")
  weatherDiv.attr("class", "container col-sm-12 col-md-6 solution_card")
  monday.css("display", "flex")
  monday.css("flex-direction", "row")
  spanEl.attr("class", "wheather-city")
  iconEl.attr("src", iconUrl)
  iconEl.attr("class", "icoon")
  humidityElement.attr("class", "wheather-city")
  feelsLikeElement.attr("class", "wheather-city")


  spanEl.append(city + "      " + temp + "°")
  humidityElement.append("Humidity: " + humidity + "°")
  feelsLikeElement.append("Feels Like: " + feelsLike + "°")

  cityElement.append(spanEl, iconEl)
  weatherDiv.append(cityElement, humidityElement, feelsLikeElement)
  monday.append(weatherDiv)
}
