

self.addEventListener('install', function (event) {
  console.log('SW Installed');
  event.waitUntil(
    caches.open('static')
      .then(function (cache) {
        cache.add('index.html');      
        
        
      })
  );
});


self.addEventListener('activate', function () {
  console.log('SW Activated');
});


self.addEventListener('push', function (e) {
  console.log('SW Activated');
});




