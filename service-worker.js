const validCaches = ['static-v2'];

const CACHE_NAME = 'static-v2';  
const urlsToCache = [ 
  '/',
  'index.html',
  'js/main.js',
  'css/styles.css',
];

self.addEventListener('install', event => {
  console.log(CACHE_NAME)
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
      .then(function() {
        console.log('WORKER: install completed');
      })
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  console.log('Service worker is now activating...');
  event.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.map(key => {
        if (!validCaches.includes(key)) {
          return caches.delete(key);
        }
      })
    )).then(() => {
      console.log('V2 now running! Boom!');
    })
  );
})

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
    .then(response => {
      if (response) {
        console.log('Found ', event.request.url, ' in cache');
        return response;
      }
      console.log('Network request for ', event.request.url);
      return fetch(event.request)
      .then(response => {
        return caches.open(CACHE_NAME).then(cache => {
          cache.put(event.request.url, response.clone());
          return response;
        });
      });
    }).catch(error => {
      console.log('No cache no network, Houston, we have a problem')
    })
  );
});