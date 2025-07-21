import { fetchWeather } from './weatherAPI.js';

let currentSearch = '';

function handleSearchInput() {
    const search = document.querySelector(".search__input");
    const btnClick = document.querySelector(".search__button");
    const form = document.querySelector("form");
    
    
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        currentSearch = search.value.trim();
        
        if (currentSearch) {
            console.log('Searching for:', currentSearch);
            await fetchWeather(currentSearch);
        }
    });
    
    
    btnClick.addEventListener('click', async (e) => {
        e.preventDefault();
        currentSearch = search.value.trim();
        
        if (currentSearch) {
            console.log('Searching for:', currentSearch);
            await fetchWeather(currentSearch);
        }
    });
}

export { currentSearch, handleSearchInput };