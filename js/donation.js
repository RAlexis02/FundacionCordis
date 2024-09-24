// Variables
let selectedAmount = null;  // Ningún valor seleccionado al inicio
const customAmountBtn = document.getElementById('custom-amount-btn');
const customAmountContainer = document.getElementById('custom-amount-container');
const customAmountInput = document.getElementById('custom-amount');
const errorMessage = document.getElementById('error-message');
const donationMessage = document.getElementById('donation-message');
const donationAmountSpan = document.getElementById('donation-amount');
const donationInstruction = document.getElementById('donation-instruction');

// Manejo de la selección de botones de donación
document.querySelectorAll('.donation-btn').forEach(button => {
    button.addEventListener('click', function() {
        selectedAmount = parseFloat(this.getAttribute('data-amount')) || 0;
        customAmountContainer.style.display = selectedAmount === 0 ? 'block' : 'none';
        updateDonationMessage();
    });
});

// Validación del campo de donación personalizada
customAmountInput.addEventListener('input', function() {
    const value = parseFloat(this.value);
    if (value >= 1) {
        selectedAmount = value;
        errorMessage.style.display = 'none';
        updateDonationMessage();
    } else {
        errorMessage.style.display = 'block';
    }
});

// Actualizar el mensaje de donación
function updateDonationMessage() {
    if (selectedAmount !== null) {
        donationMessage.style.display = 'block';
        donationInstruction.style.display = 'block';
        donationMessage.textContent = `Vas a donar $${selectedAmount} USD.`;
        donationAmountSpan.textContent = `$${selectedAmount}`;
    }
}

// Configuración del botón de PayPal
paypal.Buttons({
    createOrder: function(data, actions) {
        return actions.order.create({
            purchase_units: [{
                amount: {
                    value: selectedAmount.toFixed(2)  // Formateado a dos decimales
                }
            }]
        });
    },
    onApprove: function(data, actions) {
        return actions.order.capture().then(function(details) {
            alert('Gracias por tu donación, ' + details.payer.name.given_name + '!');
        });
    }
}).render('#paypal-button-container');
