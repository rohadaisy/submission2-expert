import DrawerInitiator from '../utils/drawer-initiator';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';

class App {
  constructor({ button, drawer, content }) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;

    this._initialAppShell(); // Initialize the app shell
  }

  // Initialize the app shell with the drawer
  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
    });
  }

  // Render the page based on the active URL
  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner(); // Parse the active URL with the combiner
    const page = routes[url]; // Get the corresponding page from the routes configuration
    this._content.innerHTML = await page.render(); // Render the page content
    await page.afterRender(); // Perform any additional rendering tasks for the page

    // Add event listener for skip link to focus on main content
    const skipLink = document.querySelector('.skip-link');
    skipLink.addEventListener('click', (event) => {
      event.preventDefault();
      document.querySelector('#maincontent').focus();
    });
  }
}

export default App;
