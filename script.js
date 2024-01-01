
const apiKey = 'f5d6c2d0ecb86abd7c347e30750bcbca';

function getWeather() {
    const locationInput = document.getElementById('locationInput').value;

    if (locationInput) {
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${locationInput}&appid=${apiKey}&units=metric`;


        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                displayWeather(data);
            })
            .catch(error => {
                console.error('Error fetching weather data:', error);
                alert('Error fetching weather data. Please try again.');
            });
    } else {
        alert('Please enter a location.');
    }
}

function displayWeather(data) {
    const weatherInfo = document.getElementById('weatherInfo');

    const cityName = data.name;
    const temperature = data.main.temp;
    const description = data.weather[0].description;

    weatherInfo.innerHTML = `<h2>Weather in ${cityName}</h2>
                             <p>Temperature: ${temperature}°C</p>
                             <p>Description: ${description}</p>`;
}