var map = L.map("map").setView([39.2658944, -76.7000576], 13);

//create the visual layer for the map
L.tileLayer(
  "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
  {
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: "mapbox/dark-v10",
    tileSize: 512,
    zoomOffset: -1,
    accessToken:
      "pk.eyJ1IjoiaWJ1a3VuLWtveWVyIiwiYSI6ImNrazRoajRyMjAwbjIyb3F0ZTh2cHB3dngifQ.gSIYEAO6YAa367mp18pU0g",
  }
).addTo(map);

var circle = L.circle([39.2658944, -76.7000576], {
  color: "#00000000",
  fillColor: "#257ce6",
  fillOpacity: 0.3,
  radius: 2500,
}).addTo(map);

var marker = L.marker([39.2658944, -76.7000576]).addTo(map);
