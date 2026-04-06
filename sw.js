const CACHE_NAME = 'bible-app-v1';
const ASSETS = [
  'index.html',
  'manifest.json'
];

// Install the Service Worker and cache the basic files
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

// Intercept network requests to serve files from cache if offline
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
