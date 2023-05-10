const a = /* @__PURE__ */ location.pathname.split("/").slice(0, -1).join("/"), l = [
  a + "/_app/immutable/entry/app.7ac512e0.js",
  a + "/_app/immutable/assets/0.81f1c35c.css",
  a + "/_app/immutable/nodes/0.32bbab76.js",
  a + "/_app/immutable/assets/sofiapro-light-webfont.44cf56d3.woff2",
  a + "/_app/immutable/assets/sofiapro-light-webfont.e8624630.woff",
  a + "/_app/immutable/nodes/1.c38e4650.js",
  a + "/_app/immutable/nodes/2.b5cbef6d.js",
  a + "/_app/immutable/assets/Container.6bf551a2.css",
  a + "/_app/immutable/chunks/Container.3ff5fd01.js",
  a + "/_app/immutable/chunks/index.dc607d88.js",
  a + "/_app/immutable/chunks/singletons.9a8c39bb.js",
  a + "/_app/immutable/chunks/stores.124e1677.js",
  a + "/_app/immutable/entry/start.51436383.js"
], r = [
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
  a + "/robots.txt",
  a + "/site.webmanifest"
], d = "1683753800199", c = `cache-${d}`, p = [
  ...l,
  // the app itself
  ...r
  // everything in `static`
];
self.addEventListener("install", (e) => {
  async function t() {
    await (await caches.open(c)).addAll(p), self.skipWaiting();
  }
  e.waitUntil(t());
});
self.addEventListener("activate", (e) => {
  async function t() {
    for (const s of await caches.keys())
      s !== c && await caches.delete(s);
  }
  e.waitUntil(Promise.all(t(), self.clients.claim()));
});
self.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET")
    return;
  async function t() {
    const s = new URL(e.request.url), n = await caches.open(c);
    if (p.includes(s.pathname))
      return n.match(s.pathname);
    const o = await n.match(e.request);
    if (o)
      return o;
    try {
      const i = await fetch(e.request);
      return i.status === 200 && n.put(e.request, i.clone()), i;
    } catch {
    }
    return null;
  }
  e.respondWith(t());
});
