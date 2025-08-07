const CACHE_NAME = 'cnhs-file-depot-v2';
const urlsToCache = [
  '/',
  'index.html',
  'sw.js',
  'icons/cogon192.png',
  'icons/cogon512.png',
  'favicon.ico',
  'manifest.json',
  'icons/cogon.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
 
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache');
  
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(

    caches.match(event.request)
      .then((response) => {
        if (response) {
          return response;
        }

        return fetch(event.request);
      }
    )
  );

});

