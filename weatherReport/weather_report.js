
const apiKey = '';
const weatherDiv = document.getElementById('weatherInfo');
const locationDiv = document.getElementById('locationInfo');
const cityInput = document.getElementById('city');

function getWeatherDetails(datas) {

    //console.log(datas);

    for (const data of datas) {

        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${data.lat}&lon=${data.lon}&appid=${apiKey}&units=metric`;

        fetch(apiUrl)
            .then(res => res.json())
            .then((weather) => {
                const locationInfo = document.createElement('div');

                console.log("Location Data");
                console.log(data);
                locationInfo.innerHTML = `<h2>Name ${data.name}</h2>
                                        <p>Country: ${data.country}</p>
                                        <p>State: ${data.state}</p>
                                        <p>Latitute: ${data.lat}</p>
                                        <p>Longitude: ${data.lon}</p>
                                        <a target="_blank" href="https://www.google.com/maps/search/?api=1&query=${data.lat}%2C${data.lon}">Google Map</a>`;
                locationDiv.appendChild(locationInfo);

                console.log("Weather Data");
                console.log(weather, "\n");

                const weatherInfo = document.createElement('div');

                weatherInfo.innerHTML = `<h2>Weather in ${weather.name}</h2>
                                        <p>Temperature: ${weather.main.temp} &#8451;</p>
                                        <p>Weather: ${weather.weather[0].description}</p>
                                        <p>Latitute: ${weather.coord.lat}</p>
                                        <p>Longitude: ${weather.coord.lon}</p>`;
                weatherDiv.appendChild(weatherInfo);
            });

    }

}


function getLocationDetails(event) {
    event.preventDefault();
    weatherDiv.innerHTML = '';
    locationDiv.innerHTML = '';

    const city = cityInput.value;

    const geoUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${apiKey}`
    fetch(geoUrl)
        .then(response => response.json())
        .then((data) => {
            getWeatherDetails(data);
            //console.log(data);
        });
}

document.getElementById('weatherForm').addEventListener('submit', getLocationDetails);
