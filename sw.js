/* SarvSeva service worker — Phase 0 offline shell.
   Caches the app shell and interface assets only. Audio and video are left
   to the network so their byte-range requests keep working. */

const CACHE = "sarvseva-shell-v4";

const SHELL = [
  "./",
  "index.html",
  "styles.css",
  "app.js",
  "manifest.json",
  "assets/sarvseva-mark.svg",
  "assets/sarvseva-icon.svg",
  "assets/sarvseva-icon-192.png",
  "assets/sarvseva-icon-512.png",
  "assets/sarvseva-icon-maskable-512.png",
  "assets/sarvseva-apple-touch-180.png",
  "assets/sarvseva-favicon-32.png",
  "assets/yt-cpr-hindi.jpg",
  "assets/yt-cpr-aed.jpg",
  "assets/yt-bcls.jpg",
  "assets/yt-choking.jpg",
  "assets/yt-bleeding.jpg",
  "assets/yt-burns.jpg",
  "assets/yt-snakebite.jpg",
  "assets/fonts/inter-400.woff2",
  "assets/fonts/inter-600.woff2",
  "assets/fonts/plus-jakarta-sans-700.woff2",
];

const MEDIA = /\.(mp3|mp4|m4a|wav|webm)$/i;
// HTML, CSS and JS stay network-first so a deploy is never masked by the cache.
const FRESH = /(\.html|\.css|\.js)$/i;

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE).then(async (cache) => {
      // addAll rejects on a single 404, so add each entry independently.
      await Promise.all(
        SHELL.map((url) => cache.add(url).catch(() => undefined))
      );
      await self.skipWaiting();
    })
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
      )
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const request = event.request;
  if (request.method !== "GET") return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;
  if (MEDIA.test(url.pathname)) return; // keep range requests on the network

  // Navigations and code: prefer fresh, fall back to the cached copy offline.
  if (request.mode === "navigate" || FRESH.test(url.pathname)) {
    event.respondWith(
      fetch(request)
        .then((response) => {
          const copy = response.clone();
          caches.open(CACHE).then((cache) => cache.put(request, copy));
          return response;
        })
        .catch(async () => {
          const cached = await caches.match(request);
          return cached || caches.match("index.html");
        })
    );
    return;
  }

  // Static assets: serve from cache, refresh in the background.
  event.respondWith(
    caches.match(request).then((cached) => {
      const network = fetch(request)
        .then((response) => {
          if (response && response.ok) {
            const copy = response.clone();
            caches.open(CACHE).then((cache) => cache.put(request, copy));
          }
          return response;
        })
        .catch(() => cached);
      return cached || network;
    })
  );
});
