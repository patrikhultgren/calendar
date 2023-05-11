const a = /* @__PURE__ */ location.pathname.split("/").slice(0, -1).join("/"), l = [
  a + "/_app/immutable/entry/app.e76bfd58.js",
  a + "/_app/immutable/assets/0.4254bdaf.css",
  a + "/_app/immutable/nodes/0.746a1deb.js",
  a + "/_app/immutable/assets/sofiapro-light-webfont.44cf56d3.woff2",
  a + "/_app/immutable/assets/sofiapro-light-webfont.e8624630.woff",
  a + "/_app/immutable/nodes/1.22eb4b7e.js",
  a + "/_app/immutable/assets/2.6bf551a2.css",
  a + "/_app/immutable/nodes/2.47e4f7e4.js",
  a + "/_app/immutable/chunks/Container.a206b44a.js",
  a + "/_app/immutable/chunks/index.1b23dfab.js",
  a + "/_app/immutable/chunks/index.e351a105.js",
  a + "/_app/immutable/chunks/singletons.02b42d43.js",
  a + "/_app/immutable/chunks/stores.f51dc15d.js",
  a + "/_app/immutable/entry/start.3b28b675.js"
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
], r = "1683828845626";
if (a) {
  const n = `cache-${r}`, o = [
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
    e.waitUntil(t());
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
