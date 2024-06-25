import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb'; // Import the favorite restaurant IDB
import { createRestaurantItemTemplate } from '../templates/template-creator'; // Import the restaurant item template

const Favorite = {
  // Render the favorite restaurants page layout
  async render() {
    return `
      <div class="container">
        <div class="restaurant-content">
          <h2>Your Favorite Restaurants</h2>
          <div id="restaurants" class="restaurant-list">
          </div>
        </div>
      </div>
    `;
  },

  // After rendering, fetch and display all favorite restaurants
  async afterRender() {
    // eslint-disable-next-line max-len
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants(); // Fetch all favorite restaurants
    const restaurantContainer = document.querySelector('#restaurants'); // Get the restaurant container element

    // Render each favorite restaurant item in the list
    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Favorite;
