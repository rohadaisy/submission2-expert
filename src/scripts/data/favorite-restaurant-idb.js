import { openDB } from 'idb';
import CONFIG from '../globals/config';

// Extract the necessary configuration constants
const { DATABASE_NAME, DATABASE_VERSION, OBJECT_STORE_NAME } = CONFIG;

// Open the IndexedDB database with the specified name and version
const dbPromise = openDB(DATABASE_NAME, DATABASE_VERSION, {
  // Define the database schema upgrade logic
  upgrade(database) {
    // Create an object store with a keyPath of 'id'
    database.createObjectStore(OBJECT_STORE_NAME, { keyPath: 'id' });
  },
});

const FavoriteRestaurantIdb = {
  // Retrieve a restaurant by its ID
  async getRestaurant(id) {
    return (await dbPromise).get(OBJECT_STORE_NAME, id);
  },

  // Retrieve all restaurants from the database
  async getAllRestaurants() {
    return (await dbPromise).getAll(OBJECT_STORE_NAME);
  },

  // Add or update a restaurant in the database
  async putRestaurant(restaurant) {
    return (await dbPromise).put(OBJECT_STORE_NAME, restaurant);
  },

  // Delete a restaurant from the database by its ID
  async deleteRestaurant(id) {
    return (await dbPromise).delete(OBJECT_STORE_NAME, id);
  },
};

export default FavoriteRestaurantIdb;
