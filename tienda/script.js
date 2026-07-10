let totalGeneral = 0;
let contadorPizzas = 0;

// Función para sumar productos
function agregarAlCarrito(nombre, precio) {
    totalGeneral += precio;
    contadorPizzas++;
    
    // Actualizar burbuja
    document.querySelector(".cart-count").innerText = contadorPizzas;
    // Actualizar número en el modal
    document.getElementById("total-dinero").innerText = totalGeneral;
    
    console.log("Agregaste: " + nombre + " ($" + precio + ")");
}

// Abrir y cerrar ventana de pago
const modal = document.getElementById("modal-pago");
const carritoBtn = document.getElementById("carrito");

carritoBtn.onclick = function() {
    modal.style.display = "block";
}

function cerrarCaja() {
    modal.style.display = "none";
}

function calificar(emoji) {
    alert("¡Gracias por tu calificación " + emoji + "! Estamos para servirte.");
    cerrarCaja();
}

// Cerrar si hace clic fuera de la ventana
window.onclick = function(e) {
    if (e.target == modal) cerrarCaja();
}

// Mover el carrito con el ratón
let moviendo = false;
let offset = [0,0];

carritoBtn.addEventListener('mousedown', function(e) {
    moviendo = true;
    offset = [
        carritoBtn.offsetLeft - e.clientX,
        carritoBtn.offsetTop - e.clientY
    ];
}, true);

document.addEventListener('mouseup', function() {
    moviendo = false;
}, true);

document.addEventListener('mousemove', function(e) {
    if (moviendo) {
        carritoBtn.style.left = (e.clientX + offset[0]) + 'px';
        carritoBtn.style.top  = (e.clientY + offset[1]) + 'px';
    }
}, true);