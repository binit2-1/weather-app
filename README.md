# JavaScript Webpack Boilerplate

A simple and clean webpack boilerplate for modern JavaScript development.

## Features

- Webpack 5 with development and production configurations
- Babel for ES6+ transpilation
- CSS loading and processing
- Development server with Hot Module Replacement
- ESLint and Prettier for code quality
- Asset handling (images, fonts)

## Getting Started

1. **Clone or download this template**

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start development server:**
   ```bash
   npm start
   ```
   Your app will open at `http://localhost:8080`

4. **Build for production:**
   ```bash
   npm run build
   ```
   Optimized files will be in the `dist/` directory

## Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm run watch` - Watch mode for development
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues automatically
- `npm run format` - Format code with Prettier

## Project Structure

```
├── src/
│   ├── index.html      # Main HTML template
│   ├── index.js        # Application entry point
│   └── style.css       # Main stylesheet
├── webpack.common.js   # Shared webpack configuration
├── webpack.dev.js      # Development configuration
├── webpack.prod.js     # Production configuration
└── package.json        # Project dependencies and scripts
```

## License

ISC