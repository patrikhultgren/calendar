const a = /* @__PURE__ */ location.pathname.split("/").slice(0, -1).join("/"), l = [
  a + "/_app/immutable/entry/app.49333866.js",
  a + "/_app/immutable/assets/0.65e54d77.css",
  a + "/_app/immutable/nodes/0.1a5b28e8.js",
  a + "/_app/immutable/assets/sofiapro-light-webfont.44cf56d3.woff2",
  a + "/_app/immutable/assets/sofiapro-light-webfont.e8624630.woff",
  a + "/_app/immutable/nodes/1.a7c78d3d.js",
  a + "/_app/immutable/assets/2.6bf551a2.css",
  a + "/_app/immutable/nodes/2.74905cc0.js",
  a + "/_app/immutable/chunks/Container.28a8949c.js",
  a + "/_app/immutable/chunks/index.1cafa633.js",
  a + "/_app/immutable/chunks/index.7a5423b6.js",
  a + "/_app/immutable/chunks/singletons.8fbd074b.js",
  a + "/_app/immutable/chunks/stores.ef8721a8.js",
  a + "/_app/immutable/entry/start.897daf91.js"
], d = [
  a + "/.nojekyll",
  a + "/android-chrome-192x192.png",
  a + "/android-chrome-512x512.png",
  a + "/api/days/2023/01",
  a + "/api/days/2023/02",
  a + "/api/days/2023/03",
  a + "/api/days/2023/04",
  a + "/api/days/2023/05",
  a + "/api/days/2023/06",
  a + "/api/days/2023/07",
  a + "/apple-touch-icon.png",
  a + "/favicon-16x16.png",
  a + "/favicon-32x32.png",
  a + "/favicon.ico",
  a + "/logo.html",
  a + "/robots.txt",
  a + "/site.webmanifest"
], m = "1684003721332";
if (a) {
  const n = `cache-${m}`, o = [
    ...l,
    // the app itself
    ...d
    // everything in `static`
  ];
  self.addEventListener("install", (e) => {
    async function t() {
      await (await caches.open(n)).addAll(o), self.skipWaiting();
    }
    e.waitUntil(t());
  }), self.addEventListener("activate", (e) => {
    async function t() {
      for (const s of await caches.keys())
        s !== n && await caches.delete(s);
    }
    e.waitUntil(t()), self.clients.claim();
  }), self.addEventListener("fetch", (e) => {
    if (e.request.method !== "GET")
      return;
    async function t() {
      const s = new URL(e.request.url), i = await caches.open(n);
      if (o.includes(s.pathname))
        return i.match(s.pathname);
      const p = await i.match(e.request);
      if (p)
        return p;
      try {
        const c = await fetch(e.request);
        return c.status === 200 && i.put(e.request, c.clone()), c;
      } catch {
      }
      return null;
    }
    e.respondWith(t());
  });
}
