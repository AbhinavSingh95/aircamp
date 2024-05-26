mapboxgl.accessToken = mapToken;
const map = new mapboxgl.Map({
container: 'map', // container ID
style: 'mapbox://styles/mapbox/streets-v12', // style URL
center: campground.geometry.coordinates, // starting position [lng, lat]
zoom: 9, // starting zoom
});

map.addControl(new mapboxgl.NavigationControl());

const popup = new mapboxgl.Popup({offset: 25})
    .setLngLat(campground.geometry.coordinates)
    .setHTML(`<h8>${campground.title}</h8><p>${campground.location}</p>`)

new mapboxgl.Marker()
    .setLngLat(campground.geometry.coordinates)
    .setPopup(popup)
    .addTo(map);

