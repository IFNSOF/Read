// Минимальный service worker: ничего не кэширует (игре всегда нужен интернет), нужен только для установки как приложение.
self.addEventListener('install',()=>self.skipWaiting());
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('fetch',()=>{});
