$.ajax({
    URL: "./api/getWeather",
    data: {
        zipcode: 90640;
    },
    success: function(result) {
        $("weather.com  ").html ("<strong>" + result + "</strong> degrees");
    }
})