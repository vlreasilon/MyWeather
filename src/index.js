function displayTemp(response){
    let tempElement = document.querySelector("#currentTemp");
    tempElement.innerHTML = math.round(response.deta.main.temp);

}


let apiKey = "b9ce1431880d9b98b3e9bb639a33c0b3"
let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=Tel Aviv&appid= ${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemp);