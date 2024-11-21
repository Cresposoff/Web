
// Agregar un efecto visual al hover de los enlaces del header
const navLinks = document.querySelectorAll('.navbar a');

navLinks.forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.color = '#ff9999';
        link.style.transform = 'scale(1.2)';
    });

    link.addEventListener('mouseout', () => {
        link.style.color = '';
        link.style.transform = '';
    });
});

// Selecciona todos los botones de compra
const buyButtons = document.querySelectorAll('.cart-button');

// Agrega un evento de clic a cada botón
buyButtons.forEach(button => {
    button.addEventListener('click', event => {
        // Identifica el producto que se está comprando
        const productCard = event.target.closest('.card'); // Busca el contenedor del producto
        const productName = productCard.querySelector('.brand').textContent;
        const productPrice = productCard.querySelector('.price').textContent;

        // Acción al hacer clic
        alert(`¡Has añadido "${productName}" por ${productPrice} al carrito!`);

        // Aquí puedes añadir más lógica, como enviar datos al servidor o actualizar un carrito en la página.
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // Manejo del botón "Añadir a Favoritos"
    const favoriteCheckboxes = document.querySelectorAll('.favorite-checkbox');
    favoriteCheckboxes.forEach((checkbox) => {
        checkbox.addEventListener('change', (event) => {
            const isChecked = event.target.checked;
            const productName = event.target.closest('.card').querySelector('.brand').textContent;

            if (isChecked) {
                alert(`¡Has añadido "${productName}" a tus favoritos!`);
            } else {
                alert(`Has eliminado "${productName}" de tus favoritos.`);
            }
        });
    });

    // Manejo del botón "Comprar" (ya añadido previamente)
    const buyButtons = document.querySelectorAll('.buy-button');
    buyButtons.forEach((button) => {
        button.addEventListener('click', () => {
            const productName = button.closest('.card').querySelector('.brand').textContent;
            alert(`¡Gracias por comprar "${productName}"!`);
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const modal = document.querySelector('.modal');
    const moreInfoButton = document.querySelector('.more-info-button');
    const closeButton = document.querySelector('.close-button');

    // Abrir modal al hacer clic en el botón
    moreInfoButton.addEventListener('click', () => {
        modal.classList.remove('hidden');
    });

    // Cerrar modal al hacer clic en el botón de cerrar
    closeButton.addEventListener('click', () => {
        modal.classList.add('hidden');
    });

    // Cerrar modal al hacer clic fuera del contenido
    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.classList.add('hidden');
        }
    });
});

//modo oscuro
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Almacena o recupera el modo del usuario
const savedTheme = localStorage.getItem('theme') || 'light';
if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
    themeToggle.textContent = '🌙';
}

// Alternar entre modos
themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const isDarkMode = body.classList.contains('dark-mode');
    themeToggle.textContent = isDarkMode ? '🌙' : '🌞';
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
});