import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantDbSource {
  // Fetch the list of restaurants from the API
  static async restaurantList() {
    const response = await fetch(API_ENDPOINT.LIST);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  // Fetch the details of a specific restaurant by its ID from the API
  static async restaurantDetail(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    return responseJson.restaurant;
  }

  // Submit a restaurant review to the API
  static async restaurantReview(data) {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };

    const response = await fetch(API_ENDPOINT.REVIEW, options);
    const responseJson = await response.json();
    return responseJson.customerReviews;
  }
}

export default RestaurantDbSource;
