// Obtenemos el nombre del archivo actual
const currentPage = window.location.pathname.split("/").pop();

// Mapeamos los enlaces con su archivo correspondiente
const linksMap = {
    "index.html": "inicio-link",
    "about.html": "about-link",
    "services.html": "services-link",
    "contact.html": "contact-link",

};

// Activamos el enlace correcto
const activeLink = linksMap[currentPage];
if (activeLink) {
    document.getElementById(activeLink).classList.add('active');
}
