// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([40.7, -94.5], 4);

//////// Create the map object with a center and zoom level. (similar to previous, diff layout)
//let map = L.map("mapid", {
//    center: [
//      40.7, -94.5
//    ],
//    zoom: 4
//  });

////////////////// We create the tile layer that will be the background of our map. (BASIC SETUP)
//let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
//    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//    maxZoom: 18,
//    id: 'mapbox/streets-v11',
//    tileSize: 512,
//    zoomOffset: -1,
//    accessToken: API_KEY
//});
////////////////// Then we add our 'graymap' tile layer to the map.
//streets.addTo(map);


//////To change the map's style, change the map id using the list of Mapbox ids below:
//mapbox/streets-v11
//mapbox/outdoors-v11
//mapbox/light-v10
//mapbox/dark-v10
//mapbox/satellite-v9
//mapbox/satellite-streets-v11
//mapbox/navigation-day-v1
//mapbox/navigation-night-v1

///////  Add a marker to the map for Los Angeles, California.
//let marker = L.marker([34.0522, -118.2437]).addTo(map);

////////  Add a marker to the map for Los Angeles, California.
//L.circle([34.0522, -118.2437], {
//    radius: 100
// }).addTo(map);

 ////////// Add a marker to the map for Los Angeles, California
 //L.circleMarker([34.0522, -118.2437], {
 //   radius: 300,
 //   color: "black",
 //   fillColor: "#ffffa1"
 //}).addTo(map);

// Get data from cities.js
let cityData = cities;

// Loop through the cities array and create one marker for each city. 
//(also added pop up to show city, state and population)(also added comma to separate thousands)(also changed to circle marker with assigned radius)
cityData.forEach(function(city) {
    console.log(city)
    L.circleMarker(city.location, {
        radius: city.population/100000
    })
    .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
    .addTo(map);
});

// We create the tile layer that will be the background of our map. (USING MAPBOX STYLE APIS)
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});
// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);