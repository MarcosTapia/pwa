const PUBLIC_VAPID_KEY =
  "BNBZYTse3GG6kodGXolZi1BsjESZV0dP4TmtcJXCSrs2bD7OvM1CX9j6R-GpjP76qY7WZ5UU5ksXd_m74s_i3rA";

self.addEventListener('install', function (event) {
  console.log('SW Installed');
  event.waitUntil(
    caches.open('static')
      .then(function (cache) {
        cache.add('index.html');
        cache.add('src/js/app.js');
        
        
      })
  );
});

self.addEventListener('activate', function () {
const subscription = await register.pushManager.subscribe({
    userVisibleOnly: true,
    applicationServerKey: urlBase64ToUint8Array(PUBLIC_VAPID_KEY)
  });  
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
/*
self.addEventListener('push', e => {
  const data = e.data.json();
  console.log(data)
  console.log('Notification Received');
  self.registration.showNotification(data.title, {
      body: data.message,
      icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Archlinux-icon-crystal-64.svg/1024px-Archlinux-icon-crystal-64.svg.png'
  });
});
*/


console.log('Service Worker Works');

self.addEventListener('push', e => {
    const data = e.data.json();
    console.log(data)
    console.log('Notification Received');
    self.registration.showNotification(data.title, {
        body: data.message,
        icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Archlinux-icon-crystal-64.svg/1024px-Archlinux-icon-crystal-64.svg.png'
    });
});


