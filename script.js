    /* API */
    const apiKey = "025f61961d051cd8d3c6024587b692ec";
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

    /* for SEARCH function */
    const searchBox = document.querySelector(".search input");
    const searchBtn = document.querySelector(".search button");

    /* for Images changes */
    const weatherIcon = document.querySelector(".weather-icon");

    /* Fetch fro API */
    async function checkWeather(city) {
        const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
        
            /*function if wrong spelling*/
            if(response.status == 404){
                document.querySelector(".error").style.display = "block";
                document.querySelector(".weather").style.display = "none";
            } else {

        var data = await response.json();

            /* DOM HTML */
            document.querySelector(".city").innerHTML = data.name;
            document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
            document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
            document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
        
            /* Image for weather condition*/
            if(data.weather[0].main == "Clouds") {
                weatherIcon.src = "assets/cloudy.png";
            } else if(data.weather[0].main == "Clear") {
                weatherIcon.src = "assets/sunny.png";
            } else if(data.weather[0].main == "Rain") {
                weatherIcon.src = "assets/Rain.png";
            } else if(data.weather[0].main == "Snow") {
                weatherIcon.src = "assets/Snow.png";
            } else if(data.weather[0].main == "Drizzle") {
                weatherIcon.src = "assets/drizzle.png";
            } else if(data.weather[0].main == "Mist") {
                weatherIcon.src = "assets/Mist.png";
            }

            /* To no display default */
            document.querySelector(".weather").style.display = "block";
            document.querySelector(".error").style.display = "none";

        }

        /*details on console*/
        console.log(data);

    }

    /* To function the button */
    searchBtn.addEventListener("click", ()=> {
        checkWeather(searchBox.value);
    })

    