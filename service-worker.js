const CACHE_NAME='hough-hawks-build-001';
const FILES=["./", "./index.html", "./manifest.json", "./icon-192.png", "./icon-512.png", "./coach-ben.png", "./garage-bg.png", "./map-bg.png", "./truck-front.png", "./truck-interior.png", "./truck-rear.png", "./audio-birds.mp3", "./audio-kettle.wav", "./audio-engine.mp3", "./audio-rain.wav", "./audio-train.wav", "./audio-wind.wav"];
self.addEventListener('install',e=>{self.skipWaiting();e.waitUntil(caches.open(CACHE_NAME).then(c=>c.addAll(FILES).catch(()=>c.addAll(['./','./index.html','./manifest.json','./icon-192.png','./icon-512.png']))))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(keys=>Promise.all(keys.map(k=>k!==CACHE_NAME?caches.delete(k):null))));self.clients.claim()});
self.addEventListener('fetch',e=>{e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)))});
