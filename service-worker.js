// =======================
// Service Worker for Flipbook PWA
// =======================
const CACHE_NAME = "vo2max-flipbook-v1";
const urlsToCache = [
  "./",
  "./index.html",
  "./manifest.json",
  "./icons/icon-192.png",
  "./icons/icon-512.png"
];

// インストール（初回アクセス時）
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
  console.log("Service Worker: Installed & Cached");
});

// フェッチ（オフライン対応）
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      // キャッシュにある場合はそれを返す、なければネットワークへ
      return response || fetch(event.request);
    })
  );
});

// アップデート処理
self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log("Service Worker: Old cache deleted");
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
