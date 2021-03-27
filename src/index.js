function displayTemp(response){
    let tempElement = document.querySelector("#currentTemp");
    let cityElement = document.querySelector("#city");
    let descriptionElement = document.querySelector("#description");
    let humidityElement = document.querySelector("#Humidity");
    tempElement.innerHTML = math.round 
    (response.deta.main.temp);
    cityElement.innerHTML = response.data.name;
    descriptionElement.innerHTML = response.deta.weather[0].description;
    humidityElement.innerHTML = response.deta.main.humidity;


}


let apiKey = "80c705941c8c0d5f55e120669c8a73f5"
let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=Tel Aviv&appid= ${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemp);