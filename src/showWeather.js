function showWeather(weatherData){
    const location = weatherData.address
    const currentConditions = weatherData.currentConditions
    const temp = (currentConditions.temp - 32) * 5 / 9 
    const humidity = currentConditions.humidity
    const feelsLike = (currentConditions.feelslike - 32) * 5 / 9    

    const weatherDetails = document.getElementById('weather-details')
    weatherDetails.innerHTML = `
        <h2> ${location} </h2>
        <p>Temperature: ${temp.toFixed(2)}°C</p>
        <p>Humidity: ${humidity}%</p>
        <p>Feels Like: ${feelsLike.toFixed(2)}°C</p>
    `
}

export { showWeather };