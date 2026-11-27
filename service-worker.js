// PresupuestAPP - Service Worker (Network-First Strategy)
const CACHE_NAME = 'presupuestapp-v3';
const URLS_TO_CACHE = [
  '/presupuestAPP/',
  '/presupuestAPP/index.html',
  '/presupuestAPP/data/precios_presupuestapp.json',
  '/presupuestAPP/precios-referencia.js',
  '/presupuestAPP/manifest.json',
  '/presupuestAPP/icon-192.png',
  '/presupuestAPP/icon-512.png'
];

// Install: pre-cache all assets
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('[SW] Pre-caching assets');
      return cache.addAll(URLS_TO_CACHE);
    })
  );
  self.skipWaiting();
});

// Activate: clean up old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keyList =>
      Promise.all(
        keyList.map(key => {
          if (key !== CACHE_NAME) {
            console.log('[SW] Removing old cache:', key);
            return caches.delete(key);
          }
        })
      )
    )
  );
  self.clients.claim();
});

// Fetch: Network-First, fallback to cache
self.addEventListener('fetch', event => {
  // Only handle GET requests
  if (event.request.method !== 'GET') return;

  event.respondWith(
    fetch(event.request)
      .then(networkResponse => {
        // Update cache with fresh response
        if (networkResponse && networkResponse.status === 200) {
          const responseClone = networkResponse.clone();
          caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, responseClone);
          });
        }
        return networkResponse;
      })
      .catch(() => {
        // Network failed → serve from cache
        return caches.match(event.request).then(cachedResponse => {
          if (cachedResponse) {
            console.log('[SW] Serving from cache:', event.request.url);
            return cachedResponse;
          }
          // Fallback to cached index.html
          return caches.match('/presupuestAPP/index.html');
        });
      })
  );
});
