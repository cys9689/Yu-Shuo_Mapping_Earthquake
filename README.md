# Yu-Shuo_Mapping_Earthquake


> Final Challenge Submission:

> Background:

> To illustrate the severity of the earthquakes in relation to the tectonic plates, you’ll need to log in to GitHub and access the tectonic plate data from this GitHub repository. (Links to an external site.) You will also need to make an API call to the tectonic plate data using d3.json(), and then add the data as an overlay to the map using the L.geoJSON() layer. In addition to the streets and satelliteStreets maps, you’ll need to add a third map style of your choosing. All map styles must be added to the base layer so that they show up on the map to allow the user to change which layers are visible.


# Objectives & Goal of this Challenge
- Use d3.json() to get tectonic plate data and add the data using the L.geoJSON() layer.
- Style the tectonic plate LineString data to stand out on the map.
- Add the tectonic plate data as an overlay with the earthquake data.
- Add a third map style to allow the user to select from three different maps.

1.  “Earthquake_Challenge." Creation
2. Copy the folders and files from your Earthquakes_past7days branch and add them to the Earthquake_Challenge folder. The folder had the following  structure:
- Earthquake_Challenge folder
- index.html
- static
  - css
    - style.css
  - js
    -  config.js
    -  logic.js

3. Use the GeoJSON/PB2002_boundaries.json data from the GitHub repository (Links to an external site.) for the tectonic plate data. 
    - Repository Link:https://github.com/fraxen/tectonicplates/blob/master/GeoJSON/PB2002_boundaries.json
4. Place the d3.json() call with the L.geoJSON() layer for the tectonic plate data at the end of your code from the Earthquakes_past7days branch.
5. Style the lines with a strong, bright color so the lines show up on the satellite map and are not too light to be seen on the lighter maps.
6. Create the tectonic plate layer for the map.
7. Add the tectonic plate layer to the overlays so that they show up in the tile layer, as shown in the image below.
8. Add the tectonic plate and earthquake data to the map for any map style choice.
9. Edit the base layer so that it holds all three maps.
10. Make the streets map the default map.

# Result and Example
![image](https://user-images.githubusercontent.com/55894774/72284023-e0ead480-35f4-11ea-8e4c-4dfbbcfbb818.png)

