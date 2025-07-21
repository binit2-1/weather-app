async function fetchWeather() { 
  const response = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${place}/?key=VB6TWKC9V7ZZHGW9RJ6J83C67`,
    { mode: 'cors' }
  );
  const result = await response.json();
  console.log(result);
}
fetchWeather();

export { fetchWeather };
