import './style.css';
import './searchInput.css';
import { handleSearchInput } from './searchInput.js';

document.addEventListener('DOMContentLoaded', () => {
  handleSearchInput();
  console.log('App initialized');
});
