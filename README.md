<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome to Store Pizza</title>
    <link rel="stylesheet" href="tienda.css">
</head>
<body>

    <div class="top-bar">
        <div class="search-mini">
            <input type="text" placeholder="Busca tu menu">
            <button>🔍</button>
        </div>
    </div>

    <!-- Carrito Flotante (Haz clic para ver el total) -->
    <div id="carrito" class="draggable-cart">
        🛒 <span class="cart-count">0</span>
    </div>

    <div class="main-container">
        <header class="header-store">
            <div class="titulo-container">
                <h1 class="titulo-premium">Welcome to Store Pizza</h1>
                <div class="linea-decorativa"></div>
            </div>
            <img src="https://img.icons8.com/emoji/96/pizza-emoji.png" alt="Pizza" class="pizza-icon">
        </header>

        <nav class="menu-categorias">
            <ul>
                <li><a href="#">Pizza Plato Principal</a></li>
                <li><a href="#">Pollo Frito</a></li>
                <li><a href="#">Pizza Mediana</a></li>
                <li><a href="#">Pizza Pequeña</a></li>
                <li><a href="#">Papita Frita</a></li>
            </ul>
        </nav>

        <section class="galeria-pizzas">
            <div class="pizza-item" onclick="agregarAlCarrito('Pizza Especial', 15)">
                <img src="pizza.webp" alt="Pizza de la casa">
                <div class="overlay-efecto"></div>
                <div class="info-pizza">
                    <p>Pizza Especial</p>
                    <span class="precio">$15</span>
                </div>
            </div>

            <div class="pizza-item" onclick="agregarAlCarrito('Pepperoni Clásico', 12)">
                <img src="pizza1.jpg" alt="Pizza de pepperoni">
                <div class="overlay-efecto"></div>
                <div class="info-pizza">
                    <p>Pepperoni Clásico</p>
                    <span class="precio">$12</span>
                </div>
            </div>

            <div class="pizza-item" onclick="agregarAlCarrito('Cuatro Quesos', 14)">
                <img src="pizza1.webp" alt="Pizza de queso">
                <div class="overlay-efecto"></div>
                <div class="info-pizza">
                    <p>Cuatro Quesos</p>
                    <span class="precio">$14</span>
                </div>
            </div>

            <div class="pizza-item" onclick="agregarAlCarrito('Vegetariana Suprema', 11)">
                <img src="pizza3.jpg" alt="Pizza vegetariana">
                <div class="overlay-efecto"></div>
                <div class="info-pizza">
                    <p>Vegetariana Suprema</p>
                    <span class="precio">$11</span>
                </div>
            </div>

            <div class="pizza-item" onclick="agregarAlCarrito('Hawaiana Tropical', 13)">
                <img src="pizze.webp" alt="Pizza hawaiana">
                <div class="overlay-efecto"></div>
                <div class="info-pizza">
                    <p>Hawaiana Tropical</p>
                    <span class="precio">$13</span>
                </div>
            </div>

            <div class="pizza-item" onclick="agregarAlCarrito('Pollo BBQ', 16)">
                <img src="pollo obs.webp" alt="Pizza BBQ">
                <div class="overlay-efecto"></div>
                <div class="info-pizza">
                    <p>Pollo BBQ</p>
                    <span class="precio">$16</span>
                </div>
            </div>
        </section>

        <div class="action-section">
            <a href="pedidos.html" target="_blank" class="btn-siguiente">Ir a Pedidos</a>
        </div>
    </div>

    <!-- VENTANA DE PAGO (MODAL) -->
    <div id="modal-pago" class="modal-pago">
        <div class="modal-contenido">
            <span class="cerrar" onclick="cerrarCaja()">&times;</span>
            <h2>Tu Cuenta 🍕</h2>
            <div class="caja-total">
                <p>Total a pagar:</p>
                <span class="monto-final">$<span id="total-dinero">0</span></span>
            </div>
            
            <a href="https://www.paypal.com" target="_blank" class="link-pago">Finalizar y Pagar</a>

            <div class="estado-animo">
                <p>¿Qué tal te pareció?</p>
                <button onclick="calificar('😀')">😀</button>
                <button onclick="calificar('😐')">😐</button>
                <button onclick="calificar('☹️')">☹️</button>
                <button onclick="calificar('😡')">😡</button>
            </div>
        </div>

        /* Reset básico */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Arial', sans-serif;
}

/* Fondo blanco y centrado total */
body {
    background-color: #ffffff;
    display: flex;
    justify-content: center;
    padding: 20px;
}

/* El borde amarillo que rodea la tienda */
.site-wrapper {
    width: 100%;
    max-width: 1200px;
    border: 5px solid #FFD700; /* Borde amarillo */
    min-height: 90vh;
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    align-items: center; /* Centra todo el contenido */
}

/* Menú de arriba (Desarrollo, Menú, Ex) */
.navbar {
    padding: 40px 0;
}

.nav-links {
    list-style: none;
    display: flex;
    gap: 40px; /* Espacio entre palabras */
}

.nav-links a {
    text-decoration: none;
    color: #333;
    font-size: 1.2rem;
    font-weight: bold;
    text-transform: uppercase;
}

/* Efecto Dorado y Animación de Entrada */
.hero {
    margin-top: 50px;
    text-align: center;
}

.gold-text-animate {
    font-size: 4rem;
    color: #D4AF37; /* Dorado */
    text-shadow: 1px 1px 2px rgba(0,0,0,0.1);
    letter-spacing: -1px;
    
    /* Animación */
    animation: fadeInDown 1.2s ease-out;
}

@keyframes fadeInDown {
    0% {
        opacity: 0;
        transform: translateY(-20px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Cuadrícula de productos centrada */
.content {
    width: 80%;
    margin-top: 50px;
}

.product-grid {
    display: flex;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
}

.card {
    border: 2px solid #FFD700; /* Borde amarillo en tarjetas */
    width: 250px;
    padding: 15px;
    text-align: center;
    border-radius: 10px;
}

.img-placeholder {
    width: 100%;
    height: 150px;
    background-color: #f0f0f0;
    margin-bottom: 10px;
}
