const swRegister = async () => {
  // Check if the browser supports service workers
  if (!('serviceWorker' in navigator)) {
    console.log('Service Worker not supported in the browser');
    return;
  }

  try {
    // Attempt to register the service worker
    await navigator.serviceWorker.register('./sw.bundle.js');
    console.log('Service worker registered');
  } catch (error) {
    // Log an error message if the registration fails
    console.log('Failed to register service worker', error);
  }
};

export default swRegister;
