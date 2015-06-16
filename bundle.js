var L = require('leaflet');
var farmaciaIcon = L.icon({
  iconUrl: 'farmacia.png'
});
var turno = require('dma')('2015-03-09T08:00-0300', 11);
console.log(turno(new Date()) + 1);

var map = L.map('map').setView(
    [-31.6060, -60.7087], 12);

// add an OpenStreetMap tile layer
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">' +
    'OpenStreetMap</a> contributors'
    }).addTo(map);

var farmaciasReq = new XMLHttpRequest();
farmaciasReq.onload = function() {
  L.geoJson(JSON.parse(this.responseText), {
    pointToLayer: function(feature, latlng) {
      return L.marker(latlng, { icon: farmaciaIcon });
    }
  }).addTo(map);
}
farmaciasReq.open("get", "farmacias.json");
farmaciasReq.send();
addTitle();

function addTitle() {
  var title = document.createElement('h1')
    body  = document.body,
  hoy   = new Date();

  title.innerHTML = 'Farmacias de turno' + hoy + ' (turno: ' + (turno(hoy) + 1) + ')';

  body.insertBefore(title, body.childNodes[0]);
}
