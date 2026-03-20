self.addEventListener('fetch', function(event) {
  event.respondWith(
    fetch(event.request).catch(function() {
      return new Response("Lectura no disponible sin conexión temporalmente.");
    })
  );
});
