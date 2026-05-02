// ===================================
// CONFIGURACIÓN PRINCIPAL - DATOS DEL NEGOCIO
// ===================================
const businessData = {
    businessName: "Vantu - Desarrollo Web Profesional",
    description: "Creamos sitios web profesionales que potencian tu marca",
    whatsapp: "5491170983414",
    heroImage: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1200&h=600&fit=crop&crop=entropy",
    gallery: [
        "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1200&h=600&fit=crop&crop=entropy",
        "https://images.unsplash.com/photo-1581092791455-5196e305e1b7?w=1200&h=600&fit=crop&crop=entropy"
    ]
};

// ===================================
// VARIABLES GLOBALES
// ===================================
let currentSlide = 0;

// ===================================
// FUNCIÓN PARA REDIRECCIONAR A WHATSAPP
// ===================================
function redirectToWhatsApp(plan) {
    const waClean = businessData.whatsapp.replace(/\D/g, '');
    
    // Confirmar aceptación de términos y condiciones
    const confirmTerms = confirm('¿Aceptás nuestros Términos y Condiciones?\n\nAl hacer clic en "Aceptar", confirmás que:\n• Leíste y entendiste todos los términos\n• Aceptás el modelo de pago 100% adelantado\n• Entendés que el mantenimiento es mensual y obligatorio\n• Aceptás que sin pago mensual el servicio puede ser suspendido\n\n¿Deseas continuar?');
    
    if (!confirmTerms) {
        return; // No hacer nada si no acepta
    }
    
    const message = `¡Hola!%20Vi%20tu%20página%20web%20y%20me%20gustaría%20saber%20más%20sobre%20${plan}%20para%20mi%20negocio.%20Acepto%20los%20términos%20y%20condiciones.%20¿Podemos%20agendar%20una%20consulta?`;
    window.location.href = `https://wa.me/${waClean}?text=${message}`;
}

// ===================================
// MENÚ HAMBURGUESA MOBILE
// ===================================
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
            
            // Animar el botón hamburguesa
            const icon = mobileMenuBtn.querySelector('svg');
            if (mobileMenu.classList.contains('hidden')) {
                // Volver a hamburguesa
                icon.innerHTML = `
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                `;
            } else {
                // Convertir a X
                icon.innerHTML = `
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                `;
            }
        });
        
        // Cerrar menú al hacer clic en enlaces
        const mobileMenuLinks = mobileMenu.querySelectorAll('a');
        mobileMenuLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenu.classList.add('hidden');
                // Volver a hamburguesa
                const icon = mobileMenuBtn.querySelector('svg');
                icon.innerHTML = `
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                `;
            });
        });
        
        // Cerrar menú al hacer clic fuera
        document.addEventListener('click', function(event) {
            if (!mobileMenuBtn.contains(event.target) && !mobileMenu.contains(event.target)) {
                mobileMenu.classList.add('hidden');
                // Volver a hamburguesa
                const icon = mobileMenuBtn.querySelector('svg');
                icon.innerHTML = `
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                `;
            }
        });
    }
    
    // Inicializar otros elementos
    initializePage();
});

// ===================================
// INICIALIZACIÓN PRINCIPAL
// ===================================
function initializePage() {
    // Títulos y Hero
    const businessName = document.getElementById('business-name');
    const businessDescription = document.getElementById('business-description');
    const footerBusinessName = document.getElementById('footer-business-name');
    
    if (businessName) businessName.textContent = businessData.businessName;
    if (businessDescription) businessDescription.textContent = businessData.description;
    if (footerBusinessName) footerBusinessName.textContent = businessData.businessName;
    
    // Configurar botones de WhatsApp
    setupWhatsAppButtons();
    
    // Configurar smooth scroll
    setupSmoothScroll();
    
    // Configurar animaciones al scroll
    setupScrollAnimations();
}

// ===================================
// CONFIGURAR BOTONES DE WHATSAPP
// ===================================
function setupWhatsAppButtons() {
    const waClean = businessData.whatsapp.replace(/\D/g, '');
    
    // Botones de WhatsApp
    const whatsappButtons = document.querySelectorAll('a[href*="wa.me"]');
    whatsappButtons.forEach(button => {
        if (button.href.includes('whatsapp') || button.href.includes('wa.me')) {
            // Ya tienen el enlace configurado, no hacer nada
        }
    });
}

// ===================================
// SMOOTH SCROLL
// ===================================
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 80; // Ajustar por navbar fija
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ===================================
// ANIMACIONES AL SCROLL
// ===================================
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
            }
        });
    }, observerOptions);
    
    // Observar elementos para animación
    const elementsToAnimate = document.querySelectorAll('.group, .faq-item');
    elementsToAnimate.forEach(el => observer.observe(el));
}

// ===================================
// FUNCIONES DE FAQ
// ===================================
function toggleFAQ(element) {
    const answer = element.nextElementSibling;
    const icon = element.querySelector('.faq-icon');
    const allFAQs = document.querySelectorAll('.faq-item');
    
    // Cerrar otros FAQs
    allFAQs.forEach(item => {
        if (item !== element.parentElement) {
            const otherAnswer = item.querySelector('.faq-answer');
            const otherIcon = item.querySelector('.faq-icon');
            otherAnswer.style.maxHeight = '0';
            otherAnswer.style.padding = '0 24px';
            if (otherIcon) otherIcon.style.transform = 'rotate(0deg)';
        }
    });
    
    // Toggle actual
    if (answer.style.maxHeight && answer.style.maxHeight !== '0px') {
        answer.style.maxHeight = '0';
        answer.style.padding = '0 24px';
        if (icon) icon.style.transform = 'rotate(0deg)';
    } else {
        answer.style.maxHeight = answer.scrollHeight + 'px';
        answer.style.padding = '0 24px 24px';
        if (icon) icon.style.transform = 'rotate(45deg)';
    }
}

// ===================================
// FUNCIONES ADICIONALES
// ===================================

// Prevenir scroll en body cuando menú móvil está abierto
function preventBodyScroll() {
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }
}

// Detectar dispositivo móvil
function isMobile() {
    return window.innerWidth <= 768;
}

// Ajustar comportamientos según dispositivo
window.addEventListener('resize', function() {
    if (!isMobile()) {
        // Cerrar menú móvil en desktop
        const mobileMenu = document.getElementById('mobile-menu');
        if (mobileMenu) {
            mobileMenu.classList.add('hidden');
        }
    }
});

// ===================================
// UTILIDADES
// ===================================

// Debounce para optimizar performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Aplicar debounce a resize
window.addEventListener('resize', debounce(function() {
    // Re-evaluar comportamientos responsive
    if (!isMobile()) {
        const mobileMenu = document.getElementById('mobile-menu');
        if (mobileMenu) {
            mobileMenu.classList.add('hidden');
        }
    }
}, 250));

// ===================================
// EXPORTAR FUNCIONES GLOBALES
// ===================================
window.redirectToWhatsApp = redirectToWhatsApp;
window.toggleFAQ = toggleFAQ;
