const input = document.getElementById("city");
const log = document.getElementById("log");

function updateValue(e){
  log.textContext = e.target.value;
}

//time display in card
const dt = new Date();
const options = { timeZone: 'America/New_York' }; // set to your desired time zone
const dateStr = dt.toLocaleString('en-US', options);
document.getElementsByClassName("time")[0].innerHTML= ("It is " + dateStr);

// input.addEventListener("change", updateValue);
//need to get API key and change form to accept different locations to print specific data sets for a city

let weather = {
  apiKey: "dcfd08e348f7480d3f394239f6a21af8",
  fetchWeather: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" 
      + city 
      + "&units=imperial&appid=" 
      + this.apiKey
    )
      .then((response) => response.json())
      .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data){
      const { name } = data;
      const { icon, description } = data.weather[0];
      const { temp, humidity } = data.main;
      const { speed } = data.wind;
      console.log(name, icon, description, temp, humidity, speed);
      document.querySelector(".city").innerText = "Weather in " + name;
      document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
      document.querySelector(".description").innerText = description;
      document.querySelector(".temp").innerText = temp + "ºF";
      document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
      document.querySelector(".wind").innerText = "Wind speed: " + speed + "miles/h";
      document.querySelector(".weather").classList.remove("loading");
      document.body.style.backgroundImage = "url('https://source.unsplash.com/3456x2234/?" + name + "')"
    },
    search: function(){
      this.fetchWeather(document.querySelector(".search-bar").value);
    },
  };

  document.querySelector(".search button").addEventListener("click", function(){
    weather.search();
  });

  document.querySelector(".search-bar").addEventListener("keyup", function(event){
    if(event.key == "Enter") {
      weather.search();
    } 
  });

  weather.fetchWeather();