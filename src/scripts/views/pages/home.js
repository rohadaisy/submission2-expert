import RestaurantDbSource from '../../data/restaurantdb-source'; // Import the restaurant data source
import { createRestaurantItemTemplate } from '../templates/template-creator'; // Import the restaurant item template

const skipLink = document.getElementById('skipLink');
const mainContent = document.getElementById('maincontent');

skipLink.addEventListener('focus', () => {
  mainContent.focus();
});

const Home = {
  // Render the home page layout
  async render() {
    return `
    <section class="restaurant-content">
      <div class="content-title">
        <h2>Explore Restaurant</h2>
      </div>
      <div id="restaurants" class="restaurant-list">
      </div>
    </section>
    `;
  },

  // After rendering, fetch and display the restaurant list
  async afterRender() {
    const restaurants = await RestaurantDbSource.restaurantList(); // Fetch the list of restaurants
    const restaurantContainer = document.querySelector('#restaurants'); // Get the restaurant container element

    // Render each restaurant item in the list
    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Home;
