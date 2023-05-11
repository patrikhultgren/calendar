const a = /* @__PURE__ */ location.pathname.split("/").slice(0, -1).join("/"), l = [
  a + "/_app/immutable/entry/app.bd8384d2.js",
  a + "/_app/immutable/assets/0.00bca0b5.css",
  a + "/_app/immutable/nodes/0.9ba575bf.js",
  a + "/_app/immutable/assets/sofiapro-light-webfont.44cf56d3.woff2",
  a + "/_app/immutable/assets/sofiapro-light-webfont.e8624630.woff",
  a + "/_app/immutable/nodes/1.6e77986e.js",
  a + "/_app/immutable/nodes/2.0a44c96f.js",
  a + "/_app/immutable/assets/Container.6bf551a2.css",
  a + "/_app/immutable/chunks/Container.91e47810.js",
  a + "/_app/immutable/chunks/index.1b171547.js",
  a + "/_app/immutable/chunks/index.8d4eeac8.js",
  a + "/_app/immutable/chunks/singletons.ee676757.js",
  a + "/_app/immutable/chunks/stores.213d291a.js",
  a + "/_app/immutable/entry/start.f63e0110.js"
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
], u = "1683793213229", c = `cache-${u}`, p = [
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
  e.waitUntil(t());
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
