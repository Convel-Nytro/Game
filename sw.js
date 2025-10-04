const CACHE_NAME = "block-puzzle-v1";
const FILES_TO_CACHE = [
  "index.html",
  "about.html",
  "style.css",
  "script.js",
  "manifest.json",
  "simple-acoustic-folk-138360.mp3"
];

// Install & cache all files
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(FILES_TO_CACHE))
  );
});

// Serve cached files when offline
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => response || fetch(event.request))
  );
});