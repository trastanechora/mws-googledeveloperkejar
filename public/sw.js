(function () {
  'use strict';
  const version = "0.0.87";
  const staticCacheName = `MyApp-${version}`;
  self.addEventListener('install', e => {
    e.waitUntil(
      caches.open(staticCacheName).then(cache => {
        return cache.addAll([
        '/',
        // '/sw.js',
        // '/index.html',
        '/grid3.html',
        // '/404.html',
        '/images/photo.jpg',
        '/images/icon.png',
        '/images/mws.png',
        // '/images/inixindo.png',
        // '/img/bandara.jpg',
        // '/img/inixindo.jpg',
        // '/img/keraton.jpg',
        // '/img/malioboro.jpg',
        // '/img/pantai.jpg',
        // '/img/perambanan.jpg',
        // '/img/sinergi.jpg',
        // '/img/terminal.jpg',
        // '/img/5.jpg',
        // '/img/6.jpg',
        '/project1/add2numbers.html',
        '/project1/add2numbers.js',
        // '/project2/index.html',
        '/project2/blank.html',
        '/project2/place.html',
        '/project2/css/styles.css',
        '/project2/js/dbhelper.js',
        '/project2/js/main.js',
        '/project2/js/restaurant_info.js',
        '/project2/data/restaurants.json',
        ])
          .then(() => self.skipWaiting());
      })
    );
  });

  self.addEventListener('fetch', function (event) {
    console.log('Fetch event for ', event.request.url);
    event.respondWith(
      caches.match(event.request).then(function (response) {
        if (response) {
          console.log('Found ', event.request.url, ' in cache');
          return response;
        }
        console.log('Network request for ', event.request.url);
        return fetch(event.request).then(function (response) { //kalau url yg diminta tidak ada maka tampilkan 404
          if (response.status === 404) {
            return caches.match('/404.html');
          }
          return caches.open(staticCacheName).then(function (cache) { // menambahkan ke cache jika belum terdaftar di local cache
            if (event.request.url.indexOf('test') < 0) {
              cache.put(event.request.url, response.clone());
            }
            return response;
          });
        });
      }).catch(function (error) {
        console.log('Error, ', error);
        return caches.match('project2/blank.html');
      })
    );
  });

  self.addEventListener('activate', function (event) {
    console.log('Activating new service worker...');

    var cacheWhitelist = [staticCacheName];

    event.waitUntil(
      caches.keys().then(function (cacheNames) {
        return Promise.all(
          cacheNames.map(function (cacheName) {
            if (cacheWhitelist.indexOf(cacheName) === -1) {
              return caches.delete(cacheName);
            }
          })
        );
      })
    );
  });
})();