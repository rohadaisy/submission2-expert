import 'regenerator-runtime';
import '../styles/scss/main.scss';
import './components/hero-section';
import './components/footer-section';
import App from './views/app';
import swRegister from './utils/sw-register';

// Initialize the app with DOM elements for the button, drawer, and main content
const app = new App({
  button: document.querySelector('#menu'),
  drawer: document.querySelector('#drawer'),
  content: document.querySelector('#maincontent'),
});

// Event listener for hash changes to re-render the page
window.addEventListener('hashchange', () => {
  app.renderPage();
});

// Event listener for window load to render the page and register the service worker
window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
