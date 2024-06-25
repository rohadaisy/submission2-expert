import 'regenerator-runtime'; // Import regenerator-runtime for async/await support
import CacheHelper from './utils/cache-helper'; // Import cache helper utility

// List of assets to cache
const assetsToCache = [
  './',
  './images/icon.png',
  './images/hero-image.jpg',
  './images/app-icon/72x72.png',
  './images/app-icon/96x96.png',
  './images/app-icon/128x128.png',
  './images/app-icon/144x144.png',
  './images/app-icon/152x152.png',
  './images/app-icon/192x192.png',
  './images/app-icon/256x256.png',
  './images/app-icon/512x512.png',
  './index.html',
  './app.bundle.js',
  './app.webmanifest',
  './sw.bundle.js',
];

// Event listener for the 'install' event to cache app shell assets
self.addEventListener('install', (event) => {
  event.waitUntil(CacheHelper.cachingAppShell([...assetsToCache]));
});

// Event listener for the 'activate' event to delete old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(CacheHelper.deleteOldCache());
});

// Event listener for the 'fetch' event to revalidate the cache for each request
self.addEventListener('fetch', (event) => {
  event.respondWith(CacheHelper.revalidateCache(event.request));
});
