self.addEventListener('install', function(e) {
    self.skipWaiting();
});

self.addEventListener('activate', function(e) {
    e.waitUntil(clients.claim());
});

self.addEventListener('fetch', function(e) {
    e.respondWith(
        caches.match(e.request).then(function(cached) {
            return cached || fetch(e.request).then(function(response) {
                return caches.open('ktour-v1').then(function(cache) {
                    if (e.request.method === 'GET') {
                        cache.put(e.request, response.clone());
                    }
                    return response;
                });
            });
        }).catch(function() {
            return caches.match('/tourist-attractions-korea/');
        })
    );
});
