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
        alert('¡Has añadido "${productName}" por ${productPrice} al carrito!');

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
                alert('¡Has añadido "${productName}" a tus favoritos!');
            } else {
                alert('Has eliminado "${productName}" de tus favoritos.');
            }
        });
    });

    // Manejo del botón "Comprar" (ya añadido previamente)
    const buyButtons = document.querySelectorAll('.buy-button');
    buyButtons.forEach((button) => {
        button.addEventListener('click', () => {
            const productName = button.closest('.card').querySelector('.brand').textContent;
            alert('¡Gracias por comprar "${productName}"!');
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

let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

const nextButton = document.getElementById('next-btn');
const prevButton = document.getElementById('prev-btn');
let slideInterval;

function showSlide(index) {
    if (index >= totalSlides) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = index;
    }

    slides.forEach((slide) => {
        slide.classList.remove('active');
    });

    slides[currentSlide].classList.add('active');
}

function startSlideShow() {
    slideInterval = setInterval(() => {
        showSlide(currentSlide + 1);
    }, 5000);
}

function stopSlideShow() {
    clearInterval(slideInterval);
}

// Inicializar el slider
showSlide(currentSlide);
startSlideShow();

// Botones de navegación
nextButton.addEventListener('click', () => {
    stopSlideShow();
    showSlide(currentSlide + 1);
    startSlideShow();
});

prevButton.addEventListener('click', () => {
    stopSlideShow();
    showSlide(currentSlide - 1);
    startSlideShow();
});