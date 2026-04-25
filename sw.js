const CACHE_VERSION = 'v5.2.0';
const CACHE_NAME = `sabesp-orcamento-cache-${CACHE_VERSION}`;

const urlsToCache = [
  './',
  './index.html',
  './styles.css',
  './version.js',
  './calculos.js',
  './app.js',
  './tests.js',
  './servicos.js',
  './materiais.js',
  './logosabesp.png',
  './manifest.json'
];

self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return Promise.allSettled(urlsToCache.map(url => cache.add(url))).then(results => {
        const failures = results.filter(result => result.status === 'rejected');
        if (failures.length > 0) {
          console.warn(`${failures.length} arquivo(s) nao foram adicionados ao cache inicial.`);
        }
      });
    })
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME && cacheName.startsWith('sabesp-orcamento-cache')) {
            return caches.delete(cacheName);
          }
          return undefined;
        })
      );
    })
  );
  self.clients.claim();
});

// Estrategia "Network First": tenta buscar a versao mais nova antes de usar o cache.
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;

  const requestUrl = new URL(event.request.url);
  if (!['http:', 'https:'].includes(requestUrl.protocol)) return;

  event.respondWith(
    fetch(event.request).then(response => {
      if (!response || !response.ok) return response;

      return caches.open(CACHE_NAME).then(cache => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch(() => {
      return caches.match(event.request).then(cachedResponse => {
        if (cachedResponse) return cachedResponse;
        if (event.request.mode === 'navigate') return caches.match('./index.html');
        return Response.error();
      });
    })
  );
});
