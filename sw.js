

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


self.addEventListener('push', e => {
  const data = e.data.json();
  console.log(data)
  console.log('Notification Received');
  self.registration.showNotification(data.title, {
      body: data.message,
      icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Archlinux-icon-crystal-64.svg/1024px-Archlinux-icon-crystal-64.svg.png'
  });
});



