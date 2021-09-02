const CACHE_NAME = "version-1"
const urlsToCache = [ "index.html", "offline.html"]

// links self to this.. that is the service worker
const self = this;

// Install SW
self.addEventListener( 'install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then( (cache) => {
                console.log('opened cache')

                return cache.addAll(urlsToCache)
            })
    )
})

// Lister SW
self.addEventListener( 'fetch', (event) => {
    event.respondWith(
        caches.match(event.target)
            .then( () => {
                return fetch(event.request)
                .catch(
                    () => caches.match('offline.html') 
                )
            })
    )
})

// Activate SW
self.addEventListener( 'activate', (event) => {
    const cacheWhiteList = []
    cacheWhiteList.push(CACHE_NAME);

    event.waitUntil(
        caches.keys()
            .then( (cacheNames) => Promise.all(
                cacheNames.map( (cacheName) => {
                    if(!cacheWhiteList.includes(cacheName)){
                        return caches.delete(cacheName)
                    }
                })
            ))
    )
})