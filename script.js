let weather = {
    apiKey: "cdc24483fe6657247450dd243bbc20d3",
    fetchWeather: function (city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="+city+"&units=metric&appid=cdc24483fe6657247450dd243bbc20d3"
        ).then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },

 displayWeather: funtion(data) {
    const { name } = data;
    const { icon, description } = data.weather;
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    console.log(name, icon, description, temp, humidity, speed)
 }
};