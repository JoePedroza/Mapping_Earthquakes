// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with center at the San Francisco airport.
let map = L.map('mapid').setView([37.6213, -122.3790], 5);

// Coordinates for each point to be used in the polyline.
let line = [
    [40.6441666667, -73.7822222222],
    [30.1974292, -97.6663058],
    [43.6775, -79.6308333333],
    [29.5311973, -98.46834839999997]
  ];

// Create a polyline using the line coordinates and make the line red.
var polyline = L.polyline(line, {
    color: "blue",
    weight: 4,
    opacity: "0.5"
  }).addTo(map);

  map.fitBounds(polyline.getBounds());

/// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        accessToken: API_KEY
    });
// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);