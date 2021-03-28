function formatDate(timestamp){
let date = new Date(timestamp);
let hours = date.getHours();
 if (hours < 10) {
    hours = `0${hours}`;
}
let minutes = date.getMinutes();
 if (minutes < 10) {
    minutes = `0${minutes}`;
}
let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
let day = days[date.getDay()];
return `${day} ${hours}:${minutes}`;
}




function displayTemp(response) {
    let tempElement = document.querySelector("#currentTemp");
    let cityElement = document.querySelector("#city");
    let descriptionElement = document.querySelector("#description");
    let humidityElement = document.querySelector("#humidity");
    let windElement = document.querySelector("#wind");
    let dateElement = document.querySelector("#date");
    tempElement.innerHTML = math.round 
    (response.deta.main.temp);
    cityElement.innerHTML = response.data.name;
    descriptionElement.innerHTML = response.deta.weather[0].description;
    humidityElement.innerHTML = response.deta.main.humidity;
    windElement.innerHTML = math.round(response.deta.wind.speed); 
    dateElement.innerHTML = formatDate(response.data.dt*1000); 


}


let apiKey = "80c705941c8c0d5f55e120669c8a73f5";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=tel aviv&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemp);