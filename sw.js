self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(clients.claim());
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        fetch(event.request).catch(() => {
            return new Response("Conexión perdida. Verifica tu red para continuar explorando Literatura y Pensamiento.", {
                headers: { 'Content-Type': 'text/plain; charset=utf-8' }
            });
        })
    );
});
