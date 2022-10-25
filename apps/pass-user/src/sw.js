/* eslint-disable no-restricted-globals */

self.addEventListener("install", (event) => {
	event.waitUntil(
		caches.open("v-0.0.1")
			// .then((cache) => {
			// 	cache.addAll([
			// 		"/",
			// 		"/index.html"
			// 	]);
			// })
	)
})

self.addEventListener("activate", (e) => {
	console.log("Activate sW", e)
	return self.clients.claim()
})

// self.addEventListener("fetch", (event) => {
// 	event.respondWith(
// 		caches.match(event.request)
// 			.then((response) => {
// 				if (response) {
// 					return response;
// 				} else {
// 					return fetch(event.request)
// 						.then((res) => {
// 							caches.open("v-0.0.1")
// 							.then((cache) => {
// 								cache.put(event.request.url, res.clone());
// 								return res;
// 							})
// 						})
// 				}
// 			})
// 	);
// })
