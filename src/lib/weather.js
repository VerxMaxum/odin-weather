import { control } from './ui.js';
async function getWeatherData(event) {
    event.preventDefault();
    const location = document.querySelector('input[name="city"]').value;
    let data;
    try {
        const apiKey = 'ec2e776303e34e65be234520241206';
        const fetched = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${location}`,
            {mode: 'cors'});
        if(!fetched.ok)
            throw new Error("Invalid location. Try again.");
        data = await fetched.json();

    } catch(error) {
        alert(error);
    }

    control(data);
}

export { getWeatherData };