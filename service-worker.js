const a = /* @__PURE__ */ location.pathname.split("/").slice(0, -1).join("/"), l = [
  a + "/_app/immutable/entry/app.0e2bbc49.js",
  a + "/_app/immutable/assets/0.72c9e66d.css",
  a + "/_app/immutable/nodes/0.5f7e7047.js",
  a + "/_app/immutable/assets/sofiapro-light-webfont.44cf56d3.woff2",
  a + "/_app/immutable/assets/sofiapro-light-webfont.e8624630.woff",
  a + "/_app/immutable/nodes/1.8a5447bf.js",
  a + "/_app/immutable/nodes/2.720ecc1e.js",
  a + "/_app/immutable/assets/Container.6bf551a2.css",
  a + "/_app/immutable/chunks/Container.9a7d2acd.js",
  a + "/_app/immutable/chunks/index.1b23dfab.js",
  a + "/_app/immutable/chunks/index.e351a105.js",
  a + "/_app/immutable/chunks/singletons.7fbb5af0.js",
  a + "/_app/immutable/chunks/stores.26b58beb.js",
  a + "/_app/immutable/entry/start.fb1e43cc.js"
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
  a + "/logo.html",
  a + "/robots.txt",
  a + "/site.webmanifest"
], u = "1683797444503", c = `cache-${u}`, p = [
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
