// Inicializar EmailJS con tu User ID
emailjs.init("UJxtThdF5y7vg120J"); // Sustituye por tu User ID

// Manejo del formulario de contacto
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Datos del formulario
    const templateParams = {
        desde_nombre: document.getElementById('name').value,
        desde_correo_electronico: document.getElementById('email').value,
        mensaje: document.getElementById('message').value,
    };

    // Enviar correo a través de EmailJS
    emailjs.send('service_lq7hg09', 'plantilla_6p7qdml', templateParams)
        .then(function (response) {
            console.log('Mensaje enviado exitosamente', response.status, response.text);
            alert('Mensaje enviado exitosamente. Gracias por contactarnos.');
            document.getElementById('contactForm').reset(); // Limpiar el formulario después de enviar
        }, function (error) {
            console.error('Error al enviar el mensaje', error);
            alert('Hubo un error al enviar tu mensaje. Intenta nuevamente.');
        });
});
