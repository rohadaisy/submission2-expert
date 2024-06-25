import CONFIG from '../globals/config';

const CacheHelper = {
  // Cache the app shell (static assets)
  async cachingAppShell(requests) {
    const cache = await this._openCache();
    cache.addAll(requests);
  },

  // Delete old caches that don't match the current cache name
  async deleteOldCache() {
    const cacheNames = await caches.keys();
    cacheNames
      .filter((name) => name !== CONFIG.CACHE_NAME)
      .map((filteredName) => caches.delete(filteredName));
  },

  // Revalidate cache by checking if the request is in the cache and fetching it if not
  async revalidateCache(request) {
    const response = await caches.match(request);

    if (response) {
      this._fetchRequest(request);
      return response;
    }
    return this._fetchRequest(request);
  },

  // Open the cache with the name specified in the configuration
  async _openCache() {
    return caches.open(CONFIG.CACHE_NAME);
  },

  // Fetch the request from the network and add it to the cache if successful
  async _fetchRequest(request) {
    const response = await fetch(request);

    if (!response || response.status !== 200) {
      return response;
    }

    await this._addCache(request);
    return response;
  },

  // Add the request to the cache
  async _addCache(request) {
    const cache = await this._openCache();
    cache.add(request);
  },
};

export default CacheHelper;
