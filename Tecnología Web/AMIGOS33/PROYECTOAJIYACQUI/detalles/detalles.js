document.addEventListener('DOMContentLoaded', () => {
    const addCartButton = document.querySelector('.add-cart');
    const buyNowButton = document.querySelector('.buy-now');

    addCartButton.addEventListener('click', () => {
        alert('Producto añadido al carrito.');
    });

    buyNowButton.addEventListener('click', () => {
        alert('Cargando el pedido a la base de datos...');
        // Redirigir a una página de compra, si es necesario.
        // window.location.href = "comprar.html";
    });
});

