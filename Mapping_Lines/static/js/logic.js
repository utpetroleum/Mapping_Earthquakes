// Add console.log to check to see if our code is working.
console.log("working");

// // Create the map object with center at the San Francisco airport.
// let map = L.map('mapid').setView([37.6213, -122.3790], 5);

//skill drill 13.4.3
// Create the map object with center at the Austin-Bergstrom International Airport (AUS) airport.
let map = L.map('mapid').setView([30.1975, -97.6664], 4);


// // Coordinates for each point to be used in the polyline.
// let line = [
//     [33.9416, -118.4085],
//     [37.6213, -122.3790],
//     [40.7899, -111.9791],
//     [47.4502, -122.3088]
//   ];

//skill drill 13.4.3
// Coordinates for each point to be used in the polyline.
let line = [
    [37.6213, -122.3790],
    [30.1975, -97.6664],
    [29.9902, -95.3368],
    [43.6777, -79.6248],
    [40.6413, -73.7781]
  ];

// Create a polyline using the line coordinates and make the line yellow.
L.polyline(line, {
    color: "blue",
    weight: 4,
    fillOpacity: 0.5,
    dashArray: '2, 10',
 }).addTo(map);

// Get data from cities.js
let cityData = cities;

// Loop through the cities array and create one marker for each city.
cityData.forEach(function(city) {
    console.log(city)
    L.circleMarker(city.location, {
        radius: city.population/200000,
        color: 'orange',
        fillColor: '#FF8C00',
        weight: 4
    })
    .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
  .addTo(map);
});

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY,
    id: 'light-v10'
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);