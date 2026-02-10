const CACHE_NAME = "love-app-v1";

const FILES_TO_CACHE = [
  "./",
  "./index.html",
  "./music.mp3",
  "./voice.mp3",
  "./her.jpg",
  "./me.jpg",
  "./icon-192.png",
  "./icon-512.png"
];

self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(FILES_TO_CACHE))
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});
