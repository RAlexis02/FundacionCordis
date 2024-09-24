// Inicializar el mapa
var map = L.map('map').setView([-0.29333697912868756, -78.46542933435826], 15); // Coordenadas actualizadas

// Cargar los tiles del mapa (OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Agregar un marcador en la ubicación de la fundación
var marker = L.marker([-0.29333697912868756, -78.46542933435826]).addTo(map);

// Agregar un pop-up con información (puedes añadir la imagen de la fachada en el "img src")
marker.bindPopup(`
    <div style="text-align:center;">
        <img src ="img/contact1.jpg" alt="Fundación Cordis" style="width:100px; height:auto; margin-bottom:10px;">
        <h5>Fundación Cordis</h5>
        <p>Urb. La Armenia<br> Quito, Ecuador</p>
        <a href="https://www.google.com/maps/dir/?api=1&destination=-0.29333697912868756,-78.46542933435826" target="_blank" class="btn btn-primary btn-sm">
            Obtener Direcciones
        </a>
    </div>
`).openPopup();

// Control para cambiar el tipo de mapa (Calle o Satelital)
var baseMaps = {
    "Calle": L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'),
    "Satelital": L.tileLayer('https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png')
};
L.control.layers(baseMaps).addTo(map);
