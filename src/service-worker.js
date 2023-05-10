/// <reference types="@sveltejs/kit" />
import { build, files, version } from '$service-worker'

// Create a unique cache name for this deployment
const CACHE = `cache-${version}`

const ASSETS = [
	...build, // the app itself
	...files // everything in `static`
]

self.addEventListener('install', (event) => {
	// Create a new cache and add all files to it
	async function addFilesToCache() {
		const cache = await caches.open(CACHE)
		await cache.addAll(ASSETS)
	}

	event.waitUntil(addFilesToCache())
})

self.addEventListener('activate', (event) => {
	// Remove previous cached data from disk
	async function deleteOldCaches() {
		for (const key of await caches.keys()) {
			if (key !== CACHE) {
				await caches.delete(key)
			}
		}
	}

	// The claim should remove the need of reloading the page before the new service worker is activated
	event.waitUntil(Promise.allSettled(deleteOldCaches(), self.clients.claim()))
})

self.addEventListener('fetch', (event) => {
	// Ignore POST requests etc
	if (event.request.method !== 'GET') {
		return
	}

	async function respond() {
		const url = new URL(event.request.url)
		const cache = await caches.open(CACHE)

		// `build`/`files` can always be served from the cache
		if (ASSETS.includes(url.pathname)) {
			return cache.match(url.pathname)
		}

		// Try get response from cache before fetch
		const responseFromCache = await cache.match(url.pathname)

		if (responseFromCache) {
			return responseFromCache
		}

		// Nothing in cache, let's try fetch
		try {
			const response = await fetch(event.request)

			if (response.status === 200) {
				cache.put(event.request, response.clone())
			}

			return response
		} catch {}

		return null
	}

	event.respondWith(respond())
})

self.addEventListener('message', (event) => {
	if (event.data && event.data.type === 'SKIP_WAITING') {
		self.skipWaiting()
	}
})
