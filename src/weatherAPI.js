async function fetchWeather(place) { 
  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${place}/?key=VB6TWKC9V7ZZHGW9RJ6J83C67`,
      { mode: 'cors' }
    );
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const result = await response.json();
    console.log('Weather data:', result);
    return result;
  } catch (error) {
    console.error('Error fetching weather:', error);
  }
}

export { fetchWeather };
