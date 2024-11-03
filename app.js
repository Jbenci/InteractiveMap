// ========== Interactive Map Setup ==========

// Initialize the map with a default view
const map = L.map('map').setView([0, 0], 3);

// ========== Tile Layers ==========

// Define various tile layers
const baseMaps = {
    "Standard OSM": L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }),
    "OSM Hot (Humanitarian)": L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors, Humanitarian OSM Team'
    }),
    "CyclOSM": L.tileLayer('https://{s}.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors, CyclOSM contributors'
    }),
    "OpenTopoMap": L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenTopoMap contributors'
    }),
    "CartoDB Positron": L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors & CartoDB'
    }),
    "CartoDB Dark Matter": L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors & CartoDB'
    })
};

// Add the default tile layer to the map
baseMaps["Standard OSM"].addTo(map);

// Create a dropdown (or layer control) to select between different maps
L.control.layers(baseMaps, null, { position: 'topright' }).addTo(map);

// ========== Global Variables ==========

// Track markers currently displayed on the map
let poiMarkers = [];

// Store layers for country boundaries
let countryLayers = {};

// Track the currently highlighted country on the map
let currentHighlightedCountry = null;

// Initialize Web Worker for handling heavy tasks
let worker = new Worker('worker.js');

// Create a control to display zoom level and country name
const zoomLevelControl = L.control({ position: 'bottomright' });

zoomLevelControl.onAdd = function (map) {
    this._div = L.DomUtil.create('div', 'zoom-level');
    this.update();
    return this._div;
};

zoomLevelControl.update = function (countryName = '') {
    this._div.innerHTML = `<b>Country:</b> ${countryName}<br><b>Zoom Level:</b> ${map.getZoom()}`;
};

zoomLevelControl.addTo(map);

// Create a search box control on the top center
const searchBoxControl = L.control({ position: 'topcenter' });

searchBoxControl.onAdd = function (map) {
    const div = L.DomUtil.create('div', 'search-box');
    div.innerHTML = `
        <input type="text" id="searchInput" placeholder="Search location..." style="width: 200px; padding: 5px;">
        <button id="searchButton" style="padding: 5px;">Search</button>
    `;
    return div;
};

searchBoxControl.addTo(map);

// Add event listener for search box
document.addEventListener('DOMContentLoaded', () => {
    const searchButton = document.getElementById('searchButton');
    const searchInput = document.getElementById('searchInput');

    searchButton.addEventListener('click', () => {
        const location = searchInput.value;
        if (location) {
            const geocodeUrl = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(location)}`;
            fetch(geocodeUrl)
                .then(response => response.json())
                .then(data => {
                    if (data && data.length > 0) {
                        const lat = data[0].lat;
                        const lon = data[0].lon;
                        map.setView([lat, lon], 10);
                    } else {
                        alert("Location not found.");
                    }
                })
                .catch(error => console.error('Error fetching location data:', error));
        }
    });
});

// ========== Functions ==========

// Load Points of Interest (POIs) for a given country
function loadPOIsForCountry(country) {
    const poiFilePath = `countries/${country}.json`;
    fetch(poiFilePath)
        .then(response => {
            if (!response.ok) {
                console.warn(`Failed to load POI data for ${country}`);
                return null;
            }
            return response.json();
        })
        .then(data => {
            if (data && data.features) {
                clearPOIMarkers();
                window.countryPOIs = data.features; // Store all POIs for the country
            } else {
                console.warn(`No POIs found for ${country}`);
            }
        })
        .catch(error => console.error(`Error loading POIs for ${country}:`, error));
}

// Calculate distance between two coordinates
function getDistance(center, coordinates) {
    const R = 6371; // Radius of the Earth in km
    const lat1 = center.lat * Math.PI / 180;
    const lon1 = center.lng * Math.PI / 180;
    const lat2 = coordinates[1] * Math.PI / 180;
    const lon2 = coordinates[0] * Math.PI / 180;
    const dLat = lat2 - lat1;
    const dLon = lon2 - lon1;

    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
              Math.cos(lat1) * Math.cos(lat2) *
              Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c; // Distance in km
}

// Clear POI markers from the map
function clearPOIMarkers() {
    poiMarkers.forEach(marker => map.removeLayer(marker));
    poiMarkers = [];
    console.log("Cleared existing POI markers");
}

// Handle messages from the worker
worker.onmessage = function(e) {
    if (e.data.type === 'nearestPOIs') {
        console.log('Nearest POIs:', e.data.pois);
    }
};

// Fetch Wikipedia summary and image for POI
function fetchWikipediaInfo(poiName, marker) {
    const wikipediaApiUrl = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(poiName)}`;
    fetch(wikipediaApiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to fetch Wikipedia info for ${poiName}`);
            }
            return response.json();
        })
        .then(data => {
            let popupContent = `<b>${data.title}</b><br>`;
            if (data.extract) {
                popupContent += `${data.extract}<br>`;
            }
            if (data.originalimage) {
                popupContent += `<img src="${data.originalimage.source.replace(/\/thumb\//, '/')}" alt="${data.title}" style="width:300px;"><br>`;
            }
            popupContent += `<a href="${data.content_urls.desktop.page}" target="_blank">Read more on Wikipedia</a>`;

            marker.bindPopup(popupContent).openPopup();
        })
        .catch(error => {
            console.error(`Error fetching Wikipedia info for ${poiName}:`, error);
            marker.bindPopup(`<b>${poiName}</b><br>Information not available.`).openPopup();
        });
}

// ========== Event Listeners ==========

// Load POIs for the closest country when zoom level changes
map.on('zoomend', function() {
    const currentZoom = map.getZoom();
    const mapCenter = map.getCenter();
    zoomLevelControl.update(); // Update the zoom level display
    
    if (currentZoom >= 4) {
        // Use reverse geocoding to get the country name based on map center
        const geocodeUrl = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${mapCenter.lat}&lon=${mapCenter.lng}&zoom=5`;
        
        fetch(geocodeUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch country name');
                }
                return response.json();
            })
            .then(data => {
                const countryName = data.address && data.address.country ? data.address.country : 'Unknown';
                zoomLevelControl.update(countryName);
                
                // Load POIs for the country only if the country name is known
                if (countryName !== 'Unknown') {
                    loadPOIsForCountry(countryName);
                }
            })
            .catch(error => console.error('Error fetching country name:', error));
    } else {
        clearPOIMarkers();
        zoomLevelControl.update('');
    }
});

// Follow the cursor and display the 20 closest POIs once every 0.3 seconds
let mouseMoveTimeout;
map.on('mousemove', function(e) {
    clearTimeout(mouseMoveTimeout);
    mouseMoveTimeout = setTimeout(() => {
        if (typeof window.countryPOIs !== 'undefined' && window.countryPOIs.length > 0) {
            clearPOIMarkers();

            // Find 20 closest POIs to the current mouse position
            let sortedPOIs = window.countryPOIs.map(poi => {
                if (!poi.geometry || !poi.geometry.coordinates || poi.geometry.coordinates.length < 2) {
                    console.warn(`Invalid coordinates for POI:`, poi);
                    return null;
                }
                const distance = getDistance(e.latlng, poi.geometry.coordinates);
                return { poi, distance };
            }).filter(poiInfo => poiInfo !== null);

            sortedPOIs.sort((a, b) => a.distance - b.distance);
            const closestPOIs = sortedPOIs.slice(0, 20);

            // Add the 20 closest POIs to the map
            closestPOIs.forEach(({ poi }) => {
                const marker = L.marker([poi.geometry.coordinates[1], poi.geometry.coordinates[0]]).addTo(map);

                // Fetch Wikipedia info when marker is clicked
                marker.on('click', () => {
                    fetchWikipediaInfo(poi.properties.name, marker);
                    clearTimeout(mouseMoveTimeout); // Stop recalculating position while popup is open
                });

                poiMarkers.push(marker);
            });
        }
    }, 300);
});
