document.addEventListener("DOMContentLoaded", function() {
  var map = L.map('map').setView(
      [-31.6060, -60.7087], 12);

  // add an OpenStreetMap tile layer
  L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);

  var farmaciasReq = new XMLHttpRequest();
  farmaciasReq.onload = function() {
    L.geoJson(JSON.parse(this.responseText)).addTo(map);
  }
  farmaciasReq.open("get", "farmacias.json");
  farmaciasReq.send();
});
