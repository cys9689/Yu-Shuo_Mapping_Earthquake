// Add console.log to check to see if our code is working.
console.log("working");

// Create the title layer that will be background of the map.
let light = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v10/tiles/{z}/{x}/{y}?access_token={accessToken}',{
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
	    maxZoom: 18,
	    accessToken: API_KEY
});
// We create the dark view tile layer that will be an option for our map.
let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18,
	accessToken: API_KEY
});
// Create a base layer that holds both maps.
let baseMaps={
    Light: light,
    Dark: dark
};

// Create the map object with center at the San Francisco airport.
let map=L.map("mapid",{
    center:[44.0,-80.0],
    zoom:4
});

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);

// Accessing the airport GeoJSON URL
let airportData="https://raw.githubusercontent.com/cys9689/Yu-Shuo_Mapping_Earthquake/Simple_Leaflet_Map/majorAirports.json";
// Accessing the Toronto airline routes GeoJSON URL.

let torontoData="https://raw.githubusercontent.com/cys9689/Yu-Shuo_Mapping_Earthquake/Mapping_GeoJSON_Linestrings/torontoRoutes.json";
let myStyle={
    color:"#ffffa1",
    weight:2
}
d3.json(torontoData).then(function(data){
    console.log(data);
    //creating a GeoJson layer with the retrieved data.
    L.geoJson(data,{
      style:myStyle,
      onEachFeature:function(feature,layer){
        layer.bindPopup("<h3>Airline:"+feature.properties.airline+"</h3><hr><h3>Destination:")
        +feature.properties.dst+"</h3>";
      }
    }).addTo(map);
})