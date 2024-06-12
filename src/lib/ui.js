import { getWeatherData } from './weather.js';

function initialize() {
    const button = document.querySelector('button[type="submit"]');
    button.addEventListener("click", getWeatherData);
}

async function control(data) {
    console.log(data);
    const city = document.getElementById('city');
    const country = document.getElementById('country');
    const temperature = document.getElementById('temperature');
    const wind = document.getElementById('wind');
    const condition = document.getElementById('condition');

    city.textContent = data.location.name;
    country.textContent = data.location.country;
    temperature.textContent = data.current.heatindex_c + '°C';
    wind.textContent = data.current.wind_kph;
    condition.textContent = data.current.condition.text;

    console.log(data.current.wind_kph);
}

export { initialize, control };