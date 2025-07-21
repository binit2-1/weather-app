
# Teru Teru Bozu Weather App

Live Demo: [https://binit2-1.github.io/weather-app/](https://binit2-1.github.io/weather-app/)

## Overview

Teru Teru Bozu is a modern weather web application that allows users to search for weather information by location. Built with JavaScript, Webpack, and Visual Crossing Weather API, it features a clean UI, responsive design, and real-time weather data.

## Features

- **Search by Location:** Enter any city or place to get current weather details.
- **Live Weather Data:** Fetches temperature, humidity, and 'feels like' info from Visual Crossing API.
- **Responsive UI:** Styled with custom CSS for a modern look.
- **Background Image:** Atmospheric background for enhanced user experience.
- **Modular Codebase:** Organized into reusable JS modules.
- **Webpack Build:** Optimized for development and production.
- **Linting & Formatting:** ESLint and Prettier for code quality.

## Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/binit2-1/weather-app.git
   cd weather-app
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Start development server:**
   ```bash
   npm start
   ```
   The app will open at `http://localhost:8080`.
4. **Build for production:**
   ```bash
   npm run build
   ```
   Output will be in the `dist/` directory.

## Usage

1. Enter a location in the search bar and submit.
2. Weather details (temperature in °C, humidity, feels like) will be displayed below.

## File Structure & Description

```
├── src/
│   ├── index.html         # Main HTML template, includes search form and weather info section
│   ├── index.js           # App entry point, initializes search functionality
│   ├── searchInput.js     # Handles search input events and triggers weather fetch
│   ├── searchInput.css    # Styles for the search bar and button
│   ├── showWeather.js     # Renders weather data to the DOM
│   ├── style.css          # Main styles, including background and layout
│   ├── weatherAPI.js      # Fetches weather data from Visual Crossing API
│   └── assets/
│       └── img/
│           └── backgorund.png # Background image for the app
├── webpack.common.js      # Shared Webpack configuration
├── webpack.dev.js         # Development Webpack config
├── webpack.prod.js        # Production Webpack config
├── package.json           # Project metadata, scripts, dependencies
├── eslint.config.js       # ESLint configuration for code quality
├── BEST_PRACTICES.md      # Coding and workflow best practices
└── README.md              # Project documentation
```

### Key Files

- **index.html:** Contains the app layout, search form, and weather info section.
- **index.js:** Initializes the app and search input handler.
- **searchInput.js:** Manages user input and triggers API calls.
- **showWeather.js:** Displays weather data in the UI.
- **weatherAPI.js:** Handles API requests to Visual Crossing.
- **style.css & searchInput.css:** Style the app and search bar.
- **assets/img/backgorund.png:** Background image for visual appeal.
- **webpack.*.js:** Webpack configs for building and serving the app.
- **eslint.config.js:** Linting rules and Prettier integration.
- **BEST_PRACTICES.md:** Guidelines for code quality and workflow.

## Scripts

- `npm start`      - Start development server
- `npm run build`  - Build for production
- `npm run watch`  - Watch mode for development
- `npm run lint`   - Run ESLint
- `npm run lint:fix` - Auto-fix lint issues
- `npm run format` - Format code with Prettier

## API

Weather data is fetched from [Visual Crossing Weather API](https://www.visualcrossing.com/weather-api).

## License

ISC