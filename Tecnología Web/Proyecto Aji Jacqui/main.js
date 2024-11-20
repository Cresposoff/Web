// Obtener el botón y el cuerpo de la página
const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

// Verificar si hay una preferencia guardada en el almacenamiento local
if (localStorage.getItem('dark-mode') === 'enabled') {
    body.classList.add('dark-mode');
    darkModeToggle.classList.add('active');
}

// Cambiar el modo al hacer clic
darkModeToggle.addEventListener('click', () => {
    // Alternar entre clases de modo oscuro
    body.classList.toggle('dark-mode');
    darkModeToggle.classList.toggle('active');

    // Guardar la preferencia en el almacenamiento local
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('dark-mode', 'enabled');
    } else {
        localStorage.setItem('dark-mode', 'disabled');
    }
});

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