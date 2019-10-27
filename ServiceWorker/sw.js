const expectedCaches = ['static-v2'];

self.addEventListener('install', event => {
  console.log('V2 installing…');
  event.waitUntil(
    caches.open('static-v3').then(cache => cache.add('/demo3.png'))
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.map(key => {
        if (!expectedCaches.includes(key)) {
          return caches.delete(key);
        }
      })
    )).then(() => {
      console.log('V2 now ready to handle fetches!');
    })
  );
});

self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  console.log('event', event)
  // event.waitUntil(
  //   caches.open('static-v3').then(cache => cache.add('/demo3.png'))
  // );
  if (url.origin == location.origin && url.pathname == '/demo1.jpg') {
    event.respondWith(caches.match('/demo3.png'));
  }
  // if (url.origin == location.origin && url.pathname == '/preFetch.html') {
  //   event.respondWith(caches.match('/preFetch.html'))
  // }
});