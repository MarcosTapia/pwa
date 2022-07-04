self.addEventListener('install', function (event) {
  console.log('SW Installed');
  event.waitUntil(
    caches.open('static')
      .then(function (cache) {
        cache.add('/');
        cache.add('/index.html');
        cache.add('/src/js/app.js');
        cache.addAll([
          '/',
          'index.html',
          'src/js/app.js',
          'src/css/app.css',
          'src/images/pwa.jpg',
          'src/images/icon-512x512.png',
          'https://fonts.googleapis.com/css?family=Raleway:400,700'
        ]);
      })
  );
});

self.addEventListener('activate', function () {
  console.log('SW Activated');
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(res) {
        if (res) {
          return res;
        } else {
          return fetch(event.request);
        }
      })
  );
});

self.addEventListener('push', e => {
  const data = e.data.json();
  console.log(data)
  console.log('Notification Received');
  self.registration.showNotification(data.title, {
      body: data.message,
      icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Archlinux-icon-crystal-64.svg/1024px-Archlinux-icon-crystal-64.svg.png'
  });
});


