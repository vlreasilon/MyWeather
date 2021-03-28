




function displayTemp(response) {
    console.log(response.data);
    let tempElement = document.querySelector("#currentTemp");
    let cityElement = document.querySelector("#city");
    let descriptionElement = document.querySelector("#description");
    let humidityElement = document.querySelector("#humidity");
    let windElement = document.querySelector("#wind");
    tempElement.innerHTML = math.round 
    (response.deta.main.temp);
    cityElement.innerHTML = response.data.name;
    descriptionElement.innerHTML = response.deta.weather[0].description;
    humidityElement.innerHTML = response.deta.main.humidity;
    windElement.innerHTML = math.round(response.deta.wind.speed); 


}


let apiKey = "80c705941c8c0d5f55e120669c8a73f5"
let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;;

axios.get(apiUrl).then(displayTemp);