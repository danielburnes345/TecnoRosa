var map = L.map('map', {
  minZoom: 5,
  maxBounds: [
    [14.0, -120.0],
    [33.0, -86.0]
  ]
}).setView([23.6345, -102.5528], 5);

//mapa
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
}).addTo(map);

//coord de hospis:
var lugares = [
  {
    nombre: "Oncológica Aguascalientes",
    coords: [21.8853, -102.2916],
    tipo: "quimio"
  },
  {
    nombre: "Instituto Nacional de Cancerología",
    coords: [19.2906, -99.155],
    tipo: "radio"
  },
  {
    nombre: "Hospital Ángeles Tijuana",
    coords: [32.5149, -117.0382],
    tipo: "radio"
  }
];

var marcadores = [];

// función
function cargarMarcadores(filtro) {
  marcadores.forEach(m => map.removeLayer(m));
  marcadores = [];

  lugares.forEach(lugar => {
    if (filtro === "todos" || lugar.tipo === filtro) {

      var marker = L.marker(lugar.coords)
        .addTo(map)
        .bindPopup(`
          <b>${lugar.nombre}</b><br>
          Tipo: ${lugar.tipo}
        `);

      marcadores.push(marker);
    }
  });
}

function filtrar(tipo) {
  cargarMarcadores(tipo);
}

cargarMarcadores("todos");