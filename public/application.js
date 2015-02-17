document.addEventListener("DOMContentLoaded", function() {
  var map = L.map('map').setView(
      [-31.6060, -60.7087], 12);

  // add an OpenStreetMap tile layer
  L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);

  var geoJSON = {
    "type": "FeatureCollection",
    "features": [
    {
      "type": "Feature",
      "properties": {
        "id": 1,
        "domicilio": "Blas Parera 7831",
        "localidad_id": 4807,
        "name": "Menapace",
        "telefono": "4890660",
        "turno": 7
      },
      "geometry": {
        "type": "Point",
        "coordinates": [-60.724, -31.5916]
      }
    }
    ]
  }

  L.geoJson(geoJSON).addTo(map);
});
