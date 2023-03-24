const input = document.getElementById("city");
const log = document.getElementById("log");

input.addEventListener("change", updateValue);

function updateValue(e){
  log.textContext = e.target.value;
}

//city.addEventListener
fetch("https://api.openweathermap.org/data/2.5/weather?lat=22.3322605&lon=114.0972116&appid=dcfd08e348f7480d3f394239f6a21af8&units=metric")
.then(resp=> resp.json())
.then(data => {
  //API results are stored in the "data" variable

  // document.getElementById('data').innerHTML= data.main.temp;
  
  let p = document.querySelector("#data")
  p.textContent = "The temperature feels like "+(data.main.feels_like)+" degrees"
  console.log(data);
});

//need to get API key and change form to accept different locations to print specific data sets for a city