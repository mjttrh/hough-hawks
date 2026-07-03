const CACHE_NAME = 'hough-hawks-road-trip-usa-v001';
const FILES = ['./','./index.html','./manifest.json','./icon-192.png','./icon-512.png','./coach-ben.png'];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(FILES).catch(() => c.addAll(FILES.filter(f => f !== './coach-ben.png')))));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.map(k => k !== CACHE_NAME ? caches.delete(k) : null))));
});
self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});