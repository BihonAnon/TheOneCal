let arrayOfTemp = [];
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      let lat = position.coords.latitude;
      let long = position.coords.longitude;

      fetchaApi(lat, long)
    });
  }
}

getLocation();

function fetchaApi(lat, long) {
  if (lat) {
    const settings = {
      "async": true,
      "crossDomain": true,
      "url": `https://weatherbit-v1-mashape.p.rapidapi.com/forecast/3hourly?lat=${lat}&lon=-${long}`,
      "method": "GET",
      "headers": {
        "X-RapidAPI-Key": "8cd89d2ee5mshc3539f913d69aefp1b4693jsn3c2e1079babc",
        "X-RapidAPI-Host": "weatherbit-v1-mashape.p.rapidapi.com"
      }
    };

    $.ajax(settings).done(function (response) {
      console.log(response);
      for (i = 0; i < response.data.length - 33; i++) {
        arrayOfTemp.push(response.data[i].temp)
        console.log(arrayOfTemp)
      }
    });
  }
}
