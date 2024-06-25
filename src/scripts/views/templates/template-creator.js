import CONFIG from '../../globals/config';

// Function to create the restaurant detail template
const createRestaurantDetailTemplate = (restaurant) => `
  <h2 class="restaurant-title">${restaurant.name}</h2>
  <div class="detail-container">
    <div class="restaurant-image">
        <img
        src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}"
        alt="${restaurant.name} image in ${restaurant.city}" 
        crossorigin="anonymous" 
        />
    </div>
    <div class="restaurant-info">
        <h3>Information</h3>
        <div class="restaurant-info-content">
            <h4>Address</h4>
            <p>${restaurant.address}, ${restaurant.city}</p>
            <h4>Rating</h4>
            <p>${restaurant.rating}</p>
            <h4>Category</h4>
            <ul>
                ${restaurant.categories.map((category) => `<li class="category">${category.name}</li>`).join('')}
            </ul>
            <h4>Description</h4>
            <p>${restaurant.description}</p>
        </div>
    </div>
  </div>
  <div class="restaurant-menu">
    <h3>Menu</h3>
    <div class="menu-container">
      <div class="food-menu">
        <h4>Food</h4>
        <ul>
          ${restaurant.menus.foods.map((food) => `<li>${food.name}</li>`).join('')}
        </ul>
      </div>
      <div class="drink-menu">
        <h4>Drinks</h4>
        <ul>
          ${restaurant.menus.drinks.map((drink) => `<li>${drink.name}</li>`).join('')}
        </ul>
      </div>
    </div>
  </div>
  <div class="review">
    <h3>Reviews</h3>
    <div class="review-list">
      ${restaurant.customerReviews.map((review) => `
      <div class="review-item">
        <h4 class="review-name">${review.name}</h4>
        <p class="review-date">${review.date}</p>
        <p class="review-content">${review.review}</p>
      </div>
      `).join('')}
    </div>
  </div>
`;

// Function to create the restaurant item template
const createRestaurantItemTemplate = (restaurant) => `
  <article class="restaurant-item">
    <img class="restaurant-item-thumbnail"
      src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}"
      alt="${restaurant.name} image in ${restaurant.city}" 
      crossorigin="anonymous"
    />
    <div class="restaurant-item-content">
      <h3 class="restaurant-item-title"><a href="#/detail/${restaurant.id}">${restaurant.name}</a></h3>
      <p class="city">${restaurant.city}</p>
      <p class="restaurant-item-rating">
        Rating <span href="#" class="restaurant-item-rating-value">${restaurant.rating}</span>
      </p>
      <p class="restaurant-item-description">${restaurant.description}</p>
    </div>
  </article>
`;

// Function to create the like button template
const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

// Function to create the liked button template
const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
