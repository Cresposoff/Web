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