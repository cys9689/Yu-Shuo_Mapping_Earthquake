# Yu-Shuo_Mapping_Earthquake
Final Challenge Submission:
Background:
To illustrate the severity of the earthquakes in relation to the tectonic plates, you’ll need to log in to GitHub and access the tectonic plate data from this GitHub repository. (Links to an external site.) You will also need to make an API call to the tectonic plate data using d3.json(), and then add the data as an overlay to the map using the L.geoJSON() layer. In addition to the streets and satelliteStreets maps, you’ll need to add a third map style of your choosing. All map styles must be added to the base layer so that they show up on the map to allow the user to change which layers are visible.
Objectives
Goal of this Challenge
-Use d3.json() to get tectonic plate data and add the data using the L.geoJSON() layer.
-Style the tectonic plate LineString data to stand out on the map.
-Add the tectonic plate data as an overlay with the earthquake data.
-Add a third map style to allow the user to select from three different maps.
To complete this challenge, follow these steps:

Create a new folder on your Mapping_Earthquakes repository and name it “Earthquake_Challenge.”
Copy the folders and files from your Earthquakes_past7days branch and add them to the Earthquake_Challenge folder. The folder should have this structure:
Earthquake_Challenge folder
index.html
static
css
style.css
js
config.js
logic.js
Use the GeoJSON/PB2002_boundaries.json data from the GitHub repository (Links to an external site.) for the tectonic plate data. You’ll need to log into GitHub to access the GeoJSON data.
Place the d3.json() call with the L.geoJSON() layer for the tectonic plate data at the end of your code from your Earthquakes_past7days branch.
Style the lines with a strong, bright color so the lines show up on the satellite map and are not too light to be seen on the lighter maps.
Create the tectonic plate layer for the map.
Add the tectonic plate layer to the overlays so that they show up in the tile layer, as shown in the image below.
Add the tectonic plate and earthquake data to the map for any map style choice.
Edit the base layer so that it holds all three maps.
Make the streets map the default map.
The final JPG of the website
<img width="1528" alt="Screen Shot 2020-01-13 at 2 11 17 AM" src="https://user-images.githubusercontent.com/55894774/72247591-0ef6f700-35aa-11ea-8abe-dc60fb733df8.png">
