let carrito = [];
let total = 0;

function comprarEntrada(evento, precio) {
    carrito.push({ evento, precio });
    total += precio;
    actualizarCarrito();
}

function actualizarCarrito() {
    const carritoElement = document.getElementById("carrito");
    carritoElement.innerHTML = "";
    carrito.forEach((item, index) => {
        const li = document.createElement("li");
        li.textContent = `${item.evento} - $${item.precio}`;
        carritoElement.appendChild(li);
    });
    document.getElementById("total").textContent = `Total: $${total}`;
}

function finalizarCompra() {
    if (carrito.length > 0) {
        alert(`¡Compra realizada con éxito! Total pagado: $${total}`);
        carrito = [];
        total = 0;
        actualizarCarrito();
    } else {
        alert("El carrito está vacío.");
    }
}
