self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("news-cache").then(cache => {
      return cache.addAll(["/flashnews-pwa/"]);
    })
  );
});
