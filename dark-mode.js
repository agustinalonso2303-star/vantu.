// ===================================
// MODO NOCTURNO - FUNCIONES GLOBALES
// ===================================

function toggleDarkMode() {
    const body = document.body;
    const moonIcon = document.querySelector('.moon-icon');
    const sunIcon = document.querySelector('.sun-icon');
    
    body.classList.toggle('dark-mode');
    
    if (body.classList.contains('dark-mode')) {
        moonIcon.style.display = 'none';
        sunIcon.style.display = 'block';
        localStorage.setItem('darkMode', 'enabled');
    } else {
        moonIcon.style.display = 'block';
        sunIcon.style.display = 'none';
        localStorage.setItem('darkMode', 'disabled');
    }
}

// Cargar preferencia del usuario
function loadDarkModePreference() {
    const darkMode = localStorage.getItem('darkMode');
    const moonIcon = document.querySelector('.moon-icon');
    const sunIcon = document.querySelector('.sun-icon');
    
    if (darkMode === 'enabled') {
        document.body.classList.add('dark-mode');
        moonIcon.style.display = 'none';
        sunIcon.style.display = 'block';
    }
}

// Inicializar modo oscuro en todas las páginas
document.addEventListener('DOMContentLoaded', function() {
    loadDarkModePreference();
});
