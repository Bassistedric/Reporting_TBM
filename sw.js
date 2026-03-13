const CACHE_NAME = 'tbpm-cache-v2';
const ASSETS = [
  './',
  './tbpm.html',
  './attestation.html',
  './reporting_pms.html',
  './sheetConfig.js',
  './manifest.webmanifest',
  './icon-192.png',
  './icon-512.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.map(k => (k === CACHE_NAME ? null : caches.delete(k))))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;

  const url = new URL(req.url);
  const isSheetCsv =
    url.hostname === 'docs.google.com' &&
    url.pathname.includes('/spreadsheets/') &&
    url.searchParams.get('output') === 'csv';
  const isDynamicConfig = url.pathname.endsWith('/sheetConfig.js');

  // Données dynamiques : prioriser le réseau pour éviter une application bloquée
  // sur une ancienne semaine en cas de cache PWA stale.
  if (isSheetCsv || isDynamicConfig) {
    event.respondWith(
      fetch(req)
        .then((res) => {
          const copy = res.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(req, copy));
          return res;
        })
        .catch(() => caches.match(req))
    );
    return;
  }

  event.respondWith(
    caches.match(req).then(cached => {
      const fetchPromise = fetch(req).then(res => {
        // met à jour le cache en arrière-plan
        const copy = res.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(req, copy));
        return res;
      }).catch(() => cached);

      // stratégie: cache d’abord, puis réseau
      return cached || fetchPromise;
    })
  );
});
