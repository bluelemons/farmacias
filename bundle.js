var L = require('leaflet');
var farmaciaIcon = L.icon({
  iconUrl: 'farmacia.png',
  iconSize: [24, 24],
  iconAnchor: [12, 24],
  shadowUrl: 'shadow.png',
  shadowSize: [51, 37],
  shadowAnchor: [26, 35],
  popupAnchor: [0, -22]
});
var turno = require('dma')('2015-08-09T08:00-0300', 11);
var turno_actual = turno(new Date()) + 1;

var map = L.map('map', {
  center: [-31.6060, -60.7087],
  zoom: 12,
  minZoom: 11,
  maxZoom: 15,
  maxBounds: [[-31.548936, -60.768814],
              [-31.690675, -60.629425]]
})

// add an OpenStreetMap tile layer
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">' +
    'OpenStreetMap</a> contributors'
    }).addTo(map);

var farmaciasReq = new XMLHttpRequest();
farmaciasReq.onload = function() {
  L.geoJson(JSON.parse(this.responseText), {
    pointToLayer: function(feature, latlng) {
      return L.marker(latlng, { icon: farmaciaIcon })
        .bindPopup(buildPopup(feature));
    },
    filter: function(feature) {
      var turno = feature.properties.turno;
      return turno === turno_actual ||
        turno === -1;
    }
  }).addTo(map);
}
farmaciasReq.open("get", "farmacias.json");
farmaciasReq.send();
addTitle();

function buildPopup(feature) {
  var data = feature.properties;
  return '<h3>' + data.name + '</h3>' +
    '<p>' + data.domicilio + '<br/>' +
      data.telefono + '</p>'
}

function addTitle() {
  var title = document.createElement('h1')
    body  = document.body,
  hoy   = new Date();

  title.innerHTML = 'Farmacias de turno' + ' (turno ' + turno_actual + ')';

  body.insertBefore(title, body.childNodes[0]);
}
