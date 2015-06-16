var L = require('leaflet');
var farmaciaIcon = L.icon({
  iconUrl: 'farmacia.png'
});

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

  title.innerHTML = 'Farmacias de turno' + hoy;

  body.insertBefore(title, body.childNodes[0]);
}

console.log('quiero calcular la cantidad de días que hay entre hoy' +
    ' y una fecha fija');
console.log('vamos a suponer que la fecha fija es 10/03/2015' +
    ' y corresponde al turno 1');
console.log('entonces nosotros mostraríamos hoy: farmacias de turno' +
    ' en santa fe, desde las 8 hs del 15/03/2015 a las 8hs del' +
    ' 16/03/2015 (turno 6)');

console.log((new Date()).getUTCDate());
