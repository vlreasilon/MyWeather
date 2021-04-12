function formatDate(timestamp) {
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

function displayForecast() {
    let forecastElement = document.querySelector("#forecast");
    let days = ["Sun", "Mon", "Tue", "Wed"];
    let forecastHTML =` <div class="row">`;
    days.forEach(function (day) {
        forecastHTML =
        forecastElement +
            `<div class="col-2">
                <img src="http://openweathermap.org/img/wn/50d@2x.png" alt="" width="42" />
                <div class="Daily-Forecast-temp">
                    <span class="Temp-Max">
                        22°
                    </span>
                    <span class="Temp-Min">
                        11°
                    </span>
                     
                </div>
                <div class="Daily-Forecast-Date">
                    Sun

                </div>
                

            </div>`;

});
forecastHTML = forecastHTML + `</div>`;
forecastElement.innerHTML = forecastHTML;
console.log(forecastHTML);
}


function displayTemp(response) {
    let tempElement = document.querySelector("#temp");
    let cityElement = document.querySelector("#city");
    let descriptionElement = document.querySelector("#description");
    let humidityElement = document.querySelector("#humidity");
    let windElement = document.querySelector("#wind");
    let dateElement = document.querySelector("#date");
    let iconElement = document.querySelector("#icon");


    tempElement.innerHTML = Math.round(response.data.main.temp);
    cityElement.innerHTML = response.data.name;
    descriptionElement.innerHTML = response.data.weather[0].description;
    humidityElement.innerHTML = response.data.main.humidity;
    windElement.innerHTML = Math.round(response.data.wind.speed); 
    dateElement.innerHTML = formatDate(response.data.dt * 1000); 
    iconElement.setAttribute("src",`http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
    iconElement.setAttribute("alt",response.data.weather[0].description);


}
function search(city){
let apiKey = "80c705941c8c0d5f55e120669c8a73f5";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(displayTemp);
}

function handleSubmit(event){
 event.preventDefault();
 let cityInputElement = document.querySelector("#cityInput");
 search(cityInputElement.value);

}

let form = document.querySelector("#search-form");
form.addEventListener("submit", handleSubmit);

search("Tel Aviv");