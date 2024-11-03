// worker.js
importScripts('https://cdnjs.cloudflare.com/ajax/libs/Turf.js/6.5.0/turf.min.js');

self.onmessage = function(e) {
    if (e.data.type === 'findNearestPOIs') {
        const point = turf.point([e.data.location.lng, e.data.location.lat]);
        const nearestPOIs = e.data.pois
            .map(poi => ({ ...poi, distance: turf.distance(point, poi.geometry) }))
            .sort((a, b) => a.distance - b.distance)
            .slice(0, 10);

        self.postMessage({
            type: 'nearestPOIs',
            pois: nearestPOIs
        });
    }
};