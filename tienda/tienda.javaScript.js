// Variables para llevar la cuenta
let cuentaTotal = 0;
let itemsEnCarrito = 0;

function seleccionarProducto(nombre, precio) {
    // 1. Sumamos al total
    cuentaTotal = cuentaTotal + precio;
    
    // 2. Aumentamos el número de pizzas en el icono del carrito
    itemsEnCarrito = itemsEnCarrito + 1;
    document.querySelector(".cart-count").innerText = itemsEnCarrito;
    
    // 3. "Guardamos" el dato en la memoria del navegador (Local Storage)
    // Esto es para que la otra pestaña pueda leer cuánto es el total
    localStorage.setItem("totalDeVenta", cuentaTotal);
    
    // Consola para que tú veas que sí está funcionando
    console.log("Has guardado: " + nombre + " por $" + precio);
    console.log("Total acumulado: $" + cuentaTotal);
}

// --- Aquí sigue tu código anterior de mover el carrito con el mouse ---
const carrito = document.getElementById("carrito");
// ... (tu código de arrastrar el carrito)