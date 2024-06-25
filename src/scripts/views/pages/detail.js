import UrlParser from '../../routes/url-parser'; // Import URL parser
import RestaurantDbSource from '../../data/restaurantdb-source'; // Import restaurant data source
import { createRestaurantDetailTemplate } from '../templates/template-creator'; // Import restaurant detail template
import LikeButtonInitiator from '../../utils/favorite-initiator'; // Import like button initiator

const Detail = {
  // Render the detail page layout
  async render() {
    return `
      <div class="container">
        <div class="restaurant-content">
          <div id="restaurants" class="favorite-restaurant-list">
          </div>
          <div id="likeButtonContainer"></div>
        </div>
      </div>
    `;
  },

  // After rendering, fetch and display restaurant details, and initialize like button
  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner(); // Parse the active URL
    // eslint-disable-next-line max-len
    const restaurant = await RestaurantDbSource.restaurantDetail(url.id); // Fetch restaurant details
    const restaurantContainer = document.querySelector('#restaurants'); // Get the restaurant container element
    // eslint-disable-next-line max-len
    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant); // Render the restaurant detail template

    // Initialize the like button for the restaurant
    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        pictureId: restaurant.pictureId,
        city: restaurant.city,
        rating: restaurant.rating,
        description: restaurant.description,
      },
    });
  },
};

export default Detail;
