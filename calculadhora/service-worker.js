!function(){"use strict";const e=["client/index.0367abf4.js","client/routesURI.bc6defe3.js","client/about.3867e362.js","client/index.aa0941db.js","client/index.c56581ad.js","client/index.a981937b.js","client/client.7bfefb19.js","client/client.1d955b8f.js","client/index.39521f63.js"].concat(["service-worker-index.html",".DS_Store","favicon.png","global.css","images/person.svg","logo-192.png","logo-512.png","manifest.json","variables.css"]),t=new Set(e);self.addEventListener("install",t=>{t.waitUntil(caches.open("cache1591658411346").then(t=>t.addAll(e)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const t of e)"cache1591658411346"!==t&&await caches.delete(t);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const s=new URL(e.request.url);s.protocol.startsWith("http")&&(s.hostname===self.location.hostname&&s.port!==self.location.port||(s.host===self.location.host&&t.has(s.pathname)?e.respondWith(caches.match(e.request)):"only-if-cached"!==e.request.cache&&e.respondWith(caches.open("offline1591658411346").then(async t=>{try{const s=await fetch(e.request);return t.put(e.request,s.clone()),s}catch(s){const n=await t.match(e.request);if(n)return n;throw s}}))))})}();