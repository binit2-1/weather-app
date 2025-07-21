import { fetchWeather } from './weatherAPI.js';
import { showWeather } from './showWeather.js';

let currentSearch = '';
let weatherData = null;

function handleSearchInput() {
    const search = document.querySelector(".search__input");
    const btnClick = document.querySelector(".search__button");
    const form = document.querySelector("form");
    
    
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        currentSearch = search.value.trim();
        const result = await fetchWeather(currentSearch);

        if (currentSearch) {
            console.log('Searching for:', currentSearch);
            await fetchWeather(currentSearch);

            if (result) {
                weatherData = result;
                showWeather(weatherData);
            }
        }
    });
    
    
    btnClick.addEventListener('click', async (e) => {
        e.preventDefault();
        currentSearch = search.value.trim();
        const result = await fetchWeather(currentSearch);

        if (currentSearch) {
            console.log('Searching for:', currentSearch);
            await fetchWeather(currentSearch);

            if (result) {
                weatherData = result;
                showWeather(weatherData);
            }
        }
    });
}

export { currentSearch, handleSearchInput };