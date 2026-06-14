self.addEventListener('fetch', function(event) {
  // Allows the app to dynamically fetch your live Google Sheet data
  event.respondWith(fetch(event.request));
});
