const cacheName = 'fonseca-v2';
const assets = ['./', './index.html', './manifest.json'];
self.addEventListener('install', async e => {
  const cache = await caches.open(cacheName);
  await cache.addAll(assets);
});
self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(res => res || fetch(e.request)));
});
