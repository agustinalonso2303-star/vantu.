// ===================================
// CONFIGURACIÓN PRINCIPAL - DATOS DEL NEGOCIO
// ===================================
const businessData = {
    businessName: "Te hago una página web para que consigas clientes por WhatsApp",
    description: "Ideal para negocios que quieren vender más sin complicarse",
    whatsapp: "5491170983414",
    heroImage: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1200&h=600&fit=crop&crop=entropy",
    gallery: [
        "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1200&h=600&fit=crop&crop=entropy",
        "https://images.unsplash.com/photo-1581092791455-5196e305e1b7?w=1200&h=600&fit=crop&crop=entropy"
    ],
    address: "Ugly American Cookie - Caamaño, Pilar",
    hours: "Lunes a Sábado: 10:00 - 20:00\nDomingos: 11:00 - 19:00",
    mapEmbed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.0169878456!2d-58.8465404!3d-34.4146432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bc9def838aae49:0x7b644701047a389c!2sUgly+American+Cookie!5e0!3m2!1ses!2sar!4v1234567890" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
    pedidosYa: "https://www.pedidosya.com.ar/restaurantes/pilar/ugly-american-cookie--la-lonja-409087dc-b507-47a7-bc70-156c118de30d-menu"
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
// BOTÓN DE WHATSAPP PRINCIPAL (en pantalla principal)
// ===================================
function setupMainWhatsApp() {
    const waClean = businessData.whatsapp.replace(/\D/g, '');
    const heroWaBtn = document.getElementById('hero-whatsapp');
    
    if (heroWaBtn) {
        heroWaBtn.href = `https://wa.me/${waClean}`;
        heroWaBtn.target = "_blank";
    }
}

// ===================================
// BOTÓN FLOTANTE DE WHATSAPP (abajo a la derecha)
// ===================================
function setupFloatWhatsApp() {
    const waClean = businessData.whatsapp.replace(/\D/g, '');
    const floatWaBtn = document.getElementById('whatsapp-float');
    
    if (floatWaBtn) {
        floatWaBtn.href = `https://wa.me/${waClean}`;
        floatWaBtn.target = "_blank";
    }
}

// ===================================
// BOTÓN DE PEDIDOSYA
// ===================================
function setupPedidosYa() {
    const pyBtn = document.getElementById('hero-pedidosya');
    
    if (pyBtn) {
        pyBtn.href = businessData.pedidosYa;
        pyBtn.target = "_blank";
    }
}

// ===================================
// SECCIÓN "¿PARA QUIÉN ES?" - TEXTO CLICKABLE
// ===================================
function setupWhoIsForSection() {
    const whoIsForText = `
        <div class="who-is-for-section">
            <h3>¿Para quién es este servicio?</h3>
            <div class="who-is-for-content">
                <!-- Peluquerías -->
                <div class="for-item">
                    <div onclick="showForDetails('peluquerias')">
                        <h4>💇‍♀️ Peluquerías</h4>
                        <p>Para salones de belleza que quieren recibir turnos por WhatsApp</p>
                    </div>
                    <button class="demo-button" onclick="toggleDemoOptions('peluquerias')">Ver Opciones</button>
                    <div class="demo-options" id="demo-peluquerias" style="display: none;">
                        <div class="demo-option">
                            <h5>💎 Básica</h5>
                            <p>Página simple con información y WhatsApp</p>
                            <button class="mini-demo-btn" onclick="showBasicDemo('peluqueria')">Ver Demo</button>
                        </div>
                        <div class="demo-option">
                            <h5>⭐ Normal</h5>
                            <p>Precios, servicios, galería y reseñas</p>
                            <button class="mini-demo-btn" onclick="showNormalDemo('peluqueria')">Ver Demo</button>
                        </div>
                        <div class="demo-option">
                            <h5>🚀 Pro</h5>
                            <p>Catálogo, pedidos auto y apps</p>
                            <button class="mini-demo-btn" onclick="showProDemo('peluqueria')">Ver Demo</button>
                        </div>
                    </div>
                </div>
                
                <!-- Servicios Varios -->
                <div class="for-item">
                    <div onclick="showForDetails('servicios')">
                        <h4>🔧 Servicios Varios</h4>
                        <p>Perfecto para electricistas, plomeros y todo tipo de servicios</p>
                    </div>
                    <button class="demo-button" onclick="toggleDemoOptions('servicios')">Ver Opciones</button>
                    <div class="demo-options" id="demo-servicios" style="display: none;">
                        <div class="demo-option">
                            <h5>💎 Básica</h5>
                            <p>Página simple con información y WhatsApp</p>
                            <button class="mini-demo-btn" onclick="showBasicDemo('servicios')">Ver Demo</button>
                        </div>
                        <div class="demo-option">
                            <h5>⭐ Normal</h5>
                            <p>Precios, servicios, imágenes y mapa</p>
                            <button class="mini-demo-btn" onclick="showNormalDemo('servicios')">Ver Demo</button>
                        </div>
                        <div class="demo-option">
                            <h5>🚀 Pro</h5>
                            <p>Catálogo, pedidos auto y apps</p>
                            <button class="mini-demo-btn" onclick="showProDemo('servicios')">Ver Demo</button>
                        </div>
                    </div>
                </div>
                
                <!-- Emprendimientos -->
                <div class="for-item">
                    <div onclick="showForDetails('emprendimientos')">
                        <h4>🚀 Emprendimientos</h4>
                        <p>Ideal para nuevos negocios que quieren empezar a vender online</p>
                    </div>
                    <button class="demo-button" onclick="toggleDemoOptions('emprendimientos')">Ver Opciones</button>
                    <div class="demo-options" id="demo-emprendimientos" style="display: none;">
                        <div class="demo-option">
                            <h5>💎 Básica</h5>
                            <p>Página simple con información y WhatsApp</p>
                            <button class="mini-demo-btn" onclick="showBasicDemo('emprendimiento')">Ver Demo</button>
                        </div>
                        <div class="demo-option">
                            <h5>⭐ Normal</h5>
                            <p>Catálogo, galería, mapa y reseñas</p>
                            <button class="mini-demo-btn" onclick="showNormalDemo('emprendimiento')">Ver Demo</button>
                        </div>
                        <div class="demo-option">
                            <h5>🚀 Pro</h5>
                            <p>Tienda online, pagos y panel admin</p>
                            <button class="mini-demo-btn" onclick="showProDemo('emprendimiento')">Ver Demo</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Insertar después del hero
    const hero = document.getElementById('hero');
    hero.insertAdjacentHTML('afterend', whoIsForText);
}

// ===================================
// INICIALIZACIÓN PRINCIPAL
// ===================================
function initializePage() {
    // Títulos y Hero
    document.getElementById('business-name').textContent = businessData.businessName;
    document.getElementById('business-description').textContent = businessData.description;
    document.getElementById('footer-business-name').textContent = businessData.businessName;
    // document.getElementById('hero').style.backgroundImage = `url('${businessData.heroImage}')`; // Comentado para mantener color sólido
    document.title = businessData.businessName;

    // Configurar botones principales
    setupMainWhatsApp();
    setupPedidosYa();

    // Agregar sección "¿Para quién es?"
    setupWhoIsForSection();

    // Info de contacto y Mapa - Verificar si los elementos existen
    const businessAddress = document.getElementById('business-address');
    if (businessAddress) {
        businessAddress.textContent = businessData.address;
    }
    
    const businessHours = document.getElementById('business-hours');
    if (businessHours) {
        businessHours.innerHTML = businessData.hours.replace(/\n/g, '<br>');
    }
    
    const mapEmbed = document.getElementById('map-embed');
    if (mapEmbed) {
        mapEmbed.innerHTML = businessData.mapEmbed;
    }

    // Cargar carrusel completo
    loadCarouselImages();
}

// ===================================
// FUNCIÓN PARA MOSTRAR DETALLES CLICKABLE
// ===================================
function showForDetails(type) {
    const details = {
        'peluquerias': {
            title: '💇‍♀️ Peluquerías',
            description: 'Sistema de turnos online con WhatsApp para que tus clientes reserven fácilmente. Catálogo de servicios y galería de trabajos incluidos.'
        },
        'servicios': {
            title: '🔧 Servicios Varios',
            description: 'Web profesional para electricistas, plomeros y técnicos. Formulario de contacto directo a WhatsApp y descripción de servicios.'
        },
        'emprendimientos': {
            title: '🚀 Emprendimientos',
            description: 'Página web completa para nuevos negocios. Diseño moderno, contacto por WhatsApp y optimizada para atraer clientes desde el inicio.'
        }
    };

    const detail = details[type];
    if (detail) {
        alert(`${detail.title}\n\n${detail.description}`);
    }
}

function toggleDemoOptions(type) {
    const demoOptions = document.getElementById(`demo-${type}`);
    const allOptions = document.querySelectorAll('.demo-options');
    
    // Cerrar todas las demás opciones
    allOptions.forEach(option => {
        if (option.id !== `demo-${type}`) {
            option.style.display = 'none';
        }
    });
    
    // Toggle las opciones actuales
    if (demoOptions.style.display === 'none' || demoOptions.style.display === '') {
        demoOptions.style.display = 'block';
    } else {
        demoOptions.style.display = 'none';
    }
}

function showBasicDemo(type) {
    updatePageContent('basic', type);
}

function showNormalDemo(type) {
    updatePageContent('normal', type);
}

function showProDemo(type) {
    updatePageContent('pro', type);
}

function updatePageContent(level, type) {
    const content = {
        basic: {
            peluqueria: {
                title: '💇‍♀️ Belleza Salon - Plan Básico',
                description: 'Tu peluquería de confianza con el mejor servicio de turnos online',
                features: [
                    { icon: '📍', title: 'Ubicación', desc: 'Av. Corrientes 576, CABA<br>Horarios: Lun a Sáb 9:00-19:00' },
                    { icon: '📞', title: 'Contacto', desc: 'Tel: (011) 1234-5678<br>Email: info@bellesasalon.com' },
                    { icon: '💇‍♀️', title: 'Servicios', desc: 'Corte, tintura, peinado, tratamientos<br>Y mucho más para tu belleza' }
                ]
            },
            servicios: {
                title: '🔧 Servicios Profesionales - Plan Básico',
                description: 'Calidad y confianza para tu hogar u oficina',
                features: [
                    { icon: '📍', title: 'Ubicación', desc: 'Av. Principal 1234, Pilar<br>Horarios: Lun a Vie 8:00-18:00' },
                    { icon: '📞', title: 'Contacto', desc: 'Tel: (011) 4567-8901<br>Email: info@serviciosprof.com<br>WhatsApp: +54 9 1234-5678' },
                    { icon: '🔧', title: 'Servicios', desc: 'Electricidad, plomería, gas<br>Climatización y refrigeración<br>Reparaciones y mantenimiento' }
                ]
            },
            emprendimiento: {
                title: '🚀 Mi Emprendimiento - Plan Básico',
                description: 'Tu negocio online con presencia profesional y clientes directos',
                features: [
                    { icon: '📦', title: 'Mis Productos', desc: 'Venta de artesanías y productos únicos<br>Hecho a mano con materiales premium<br>Envíos a todo el país' },
                    { icon: '💳', title: 'Formas de Pago', desc: 'Transferencia bancaria<br>Mercado Pago<br>Efectivo en entregas' },
                    { icon: '📞', title: 'Contacto Directo', desc: 'Tel: (011) 4567-8901<br>Email: info@miemprendimiento.com<br>WhatsApp: +54 9 1234-5678' }
                ]
            }
        },
        normal: {
            peluqueria: {
                title: '💇‍♀️ Belleza Salon - Plan Normal',
                description: 'Transformamos tu look, realzamos tu belleza',
                features: [
                    { icon: '�', title: 'Ubicación', desc: 'Av. Corrientes 576, CABA<br>Horarios: Lun a Sáb 9:00-19:00' },
                    { icon: '📞', title: 'Contacto', desc: 'Tel: (011) 1234-5678<br>Email: info@bellesasalon.com' },
                    { icon: '💇‍♀️', title: 'Servicios', desc: 'Corte, tintura, peinado, tratamientos<br>Y mucho más para tu belleza' },
                    { icon: '�', title: 'Galería', desc: 'Imágenes de trabajos realizados' },
                    { icon: '📍', title: 'Mapa', desc: 'Ubicación exacta con GPS' },
                    { icon: '⭐', title: 'Reseñas', desc: 'Opiniones de clientes satisfechos' }
                ]
            },
            servicios: {
                title: '🔧 Servicios Profesionales - Plan Normal',
                description: 'Calidad y confianza para tu hogar u oficina',
                features: [
                    { icon: '📍', title: 'Ubicación', desc: 'Av. Principal 1234, Pilar<br>Horarios: Lun a Vie 8:00-18:00' },
                    { icon: '📞', title: 'Contacto', desc: 'Tel: (011) 4567-8901<br>Email: info@serviciosprof.com<br>WhatsApp: +54 9 1234-5678' },
                    { icon: '🔧', title: 'Servicios', desc: 'Electricidad, plomería, gas<br>Climatización y refrigeración<br>Reparaciones y mantenimiento' },
                    { icon: '💎', title: 'Galería', desc: 'Proyectos completados' },
                    { icon: '📍', title: 'Mapa', desc: 'Ubicación con dirección exacta' },
                    { icon: '⭐', title: 'Reseñas', desc: 'Testimonios de clientes' }
                ]
            },
            emprendimiento: {
                title: '🚀 Mi Emprendimiento - Plan Normal',
                description: 'Tienda online completa para vender tus productos por todo el país',
                features: [
                    { icon: '�', title: 'Productos', desc: 'Venta de artesanías y productos únicos<br>Hecho a mano con materiales premium<br>Envíos a todo el país' },
                    { icon: '�', title: 'Pagos', desc: 'Transferencia bancaria<br>Mercado Pago<br>Efectivo en entregas' },
                    { icon: '�', title: 'Contacto', desc: 'Tel: (011) 4567-8901<br>Email: info@miemprendimiento.com<br>WhatsApp: +54 9 1234-5678' },
                    { icon: '💎', title: 'Galería', desc: 'Catálogo visual de productos' },
                    { icon: '📍', title: 'Mapa', desc: 'Ubicación del emprendimiento' },
                    { icon: '⭐', title: 'Reseñas', desc: 'Opiniones de clientes' }
                ]
            }
        },
        pro: {
            peluqueria: {
                title: '💇‍♀️ Belleza Salon Pro',
                description: 'Plataforma completa con catálogo, pedidos automáticos e integración con apps',
                features: [
                    { icon: '🧴', title: 'Shampoo Profesional', price: '$3.500', desc: 'Shampoo de alta calidad para todo tipo de cabello' },
                    { icon: '💧', title: 'Acondicionador Premium', price: '$2.800', desc: 'Acondicionador con aceite de argán y proteínas silk' },
                    { icon: '✨', title: 'Serum Reparador', price: '$4.200', desc: 'Serum con ácido hialurónico y colágeno' },
                    { icon: '🎭', title: 'Máscara Capilar', price: '$1.900', desc: 'Máscara de tratamiento profundo con keratina' },
                    { icon: '📍', title: 'Ubicación', desc: 'Av. Corrientes 576, CABA<br>Horarios: Lun a Sáb 9:00-19:00' },
                    { icon: '📞', title: 'Contacto', desc: 'Tel: (011) 1234-5678<br>Email: info@bellesasalon.com' },
                    { icon: '💇‍♀️', title: 'Servicios', desc: 'Corte, tintura, peinado, tratamientos<br>Y mucho más para tu belleza' },
                    { icon: '💎', title: 'Galería', desc: 'Imágenes de trabajos realizados' },
                    { icon: '📍', title: 'Mapa', desc: 'Ubicación exacta con GPS' },
                    { icon: '⭐', title: 'Reseñas', desc: 'Opiniones de clientes satisfechos' },
                    { icon: '🛒', title: 'Pedidos Automáticos', desc: 'Sistema de pedidos por WhatsApp' },
                    { icon: '📱', title: 'Apps', desc: 'Integración con PedidosYa y otras plataformas' }
                ]
            },
            servicios: {
                title: '🔧 Servicios Profesionales Pro',
                description: 'Plataforma completa con catálogo, pedidos automáticos e integración con apps',
                features: [
                    { icon: '⚡', title: 'Instalación Eléctrica', price: '$15.000', desc: 'Instalación completa de sistema eléctrico residencial' },
                    { icon: '🔧', title: 'Reparación General', price: '$8.000', desc: 'Diagnóstico y reparación de problemas eléctricos' },
                    { icon: '🌡️', title: 'Refrigeración', price: '$10.000', desc: 'Instalación y mantenimiento de aire acondicionado' },
                    { icon: '🧹', title: 'Plomería Completa', price: '$12.000', desc: 'Instalación y reparación de sistemas de plomería' },
                    { icon: '📍', title: 'Ubicación', desc: 'Av. Principal 1234, Pilar<br>Horarios: Lun a Vie 8:00-18:00' },
                    { icon: '📞', title: 'Contacto', desc: 'Tel: (011) 4567-8901<br>Email: info@serviciosprof.com<br>WhatsApp: +54 9 1234-5678' },
                    { icon: '🔧', title: 'Servicios', desc: 'Electricidad, plomería, gas<br>Climatización y refrigeración<br>Reparaciones y mantenimiento' },
                    { icon: '💎', title: 'Galería', desc: 'Proyectos completados' },
                    { icon: '📍', title: 'Mapa', desc: 'Ubicación con dirección exacta' },
                    { icon: '⭐', title: 'Reseñas', desc: 'Testimonios de clientes' },
                    { icon: '🛒', title: 'Pedidos Automáticos', desc: 'Sistema de pedidos por WhatsApp' },
                    { icon: '📱', title: 'Apps', desc: 'Integración con PedidosYa y otras plataformas' }
                ]
            },
            emprendimiento: {
                title: '🚀 Mi Emprendimiento Pro',
                description: 'Tienda online completa con pagos, pedidos automáticos y gestión de inventario',
                features: [
                    { icon: '�', title: 'Catálogo', price: '$5.500', desc: 'Joyería de plata 925 con piedras preciosas' },
                    { icon: '👜', title: 'Accesorios', price: '$3.800', desc: 'Billeteras y cinturones de cuero vegano' },
                    { icon: '👕', title: 'Ropa', price: '$4.200', desc: 'Ropa de algodón orgánico certificado' },
                    { icon: '🧴', title: 'Cosméticos', price: '$2.900', desc: 'Cosméticos veganos sin químicos' },
                    { icon: '📍', title: 'Ubicación', desc: 'Ubicación del emprendimiento' },
                    { icon: '📞', title: 'Contacto', desc: 'Tel: (011) 4567-8901<br>Email: info@miemprendimiento.com<br>WhatsApp: +54 9 1234-5678' },
                    { icon: '💳', title: 'Pagos', desc: 'Tarjetas de crédito<br>Mercado Pago<br>Transferencia<br>Crypto' },
                    { icon: '💎', title: 'Galería', desc: 'Catálogo visual completo' },
                    { icon: '📍', title: 'Mapa', desc: 'Ubicación con GPS integrado' },
                    { icon: '⭐', title: 'Reseñas', desc: 'Testimonios verificados' },
                    { icon: '🛒', title: 'Pedidos Automáticos', desc: 'Formulario de pedidos automático' },
                    { icon: '📱', title: 'Apps', desc: 'Aplicación móvil propia' },
                    { icon: '📊', title: 'Análisis', desc: 'Panel de estadísticas y ventas' }
                ]
            }
        }
    };

    const pageContent = content[level][type];
    if (!pageContent) return;

    // Actualizar el hero
    document.getElementById('business-name').textContent = pageContent.title;
    document.getElementById('business-description').textContent = pageContent.description;
    
    // Actualizar el contenido principal
    const mainContent = document.getElementById('main-content') || document.querySelector('main');
    if (!mainContent) {
        const main = document.createElement('main');
        main.id = 'main-content';
        main.style.cssText = `
            padding: 80px 20px;
            max-width: 1200px;
            margin: 0 auto;
        `;
        document.body.appendChild(main);
    }
    
    // Generar el HTML según el nivel
    let htmlContent = '';
    
    if (level === 'basic') {
        htmlContent = `
            <div class="info-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 30px; margin-top: 40px;">
                ${pageContent.features.map(feature => `
                    <div class="info-card" style="background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%); padding: 30px; border-radius: 15px; border: 1px solid rgba(0,0,0,0.05); transition: all 0.3s ease;">
                        <h3 style="color: #667eea; margin-bottom: 15px; font-size: 1.3rem;">${feature.icon} ${feature.title}</h3>
                        <p style="color: #666; line-height: 1.6;">${feature.desc}</p>
                    </div>
                `).join('')}
            </div>
        `;
    } else if (level === 'normal') {
        htmlContent = `
            <div class="services-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px; margin-top: 40px;">
                ${pageContent.features.map(feature => `
                    <div class="service-card" style="background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%); padding: 30px; border-radius: 15px; border: 1px solid rgba(0,0,0,0.05); box-shadow: 0 5px 15px rgba(0,0,0,0.1); transition: all 0.3s ease; text-align: center;">
                        <div style="font-size: 3rem; margin-bottom: 20px;">${feature.icon}</div>
                        <h3 style="font-size: 1.5rem; font-weight: 600; color: #667eea; margin-bottom: 15px;">${feature.title}</h3>
                        <div style="font-size: 2rem; font-weight: 700; color: #4CAF50; margin-bottom: 15px;">${feature.price}</div>
                        <a href="https://wa.me/5491170983414?text=Hola!%20Quiero%20información%20sobre%20${encodeURIComponent(feature.title)}" style="background: linear-gradient(135deg, #25d366 0%, #128c7e 100%); color: white; padding: 12px 24px; border-radius: 25px; text-decoration: none; display: inline-block; font-weight: 600; transition: all 0.3s ease; box-shadow: 0 4px 15px rgba(37, 211, 102, 0.3);" target="_blank">
                            Consultar
                        </a>
                    </div>
                `).join('')}
            </div>
        `;
    } else if (level === 'pro') {
        htmlContent = `
            <div class="catalog-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 30px; margin-top: 40px;">
                ${pageContent.features.map(feature => `
                    <div class="product-card" style="background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%); border-radius: 15px; overflow: hidden; box-shadow: 0 5px 15px rgba(0,0,0,0.1); transition: all 0.3s ease;">
                        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; text-align: center;">
                            <h3 style="font-size: 1.3rem; font-weight: 600; margin-bottom: 10px;">${feature.title}</h3>
                            <div style="font-size: 1.5rem; font-weight: 700; margin-bottom: 15px;">${feature.price}</div>
                            <p style="color: white; margin-bottom: 20px; line-height: 1.5;">${feature.desc}</p>
                        </div>
                        <div style="padding: 20px;">
                            <a href="https://wa.me/5491170983414?text=Hola!%20Quiero%20ordenar%20${encodeURIComponent(feature.title)}" style="background: linear-gradient(135deg, #25d366 0%, #128c7e 100%); color: white; border: none; padding: 12px 20px; border-radius: 8px; font-weight: 600; cursor: pointer; transition: all 0.3s ease; text-decoration: none; display: block; width: 100%;" target="_blank">
                                📱 WhatsApp
                            </a>
                        </div>
                    </div>
                `).join('')}
            </div>
            <div style="text-align: center; margin-top: 60px;">
                <button onclick="restoreOriginalContent()" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; border: none; padding: 15px 40px; border-radius: 10px; font-size: 1.1rem; font-weight: 600; cursor: pointer; transition: all 0.3s ease; box-shadow: 0 5px 15px rgba(102, 126, 234, 0.3);">
                    ← Volver a la página principal
                </button>
            </div>
        `;
    }
    
    mainContent.innerHTML = htmlContent;
    
    // Ocultar la sección original de "¿Para quién es este servicio?"
    const whoIsForSection = document.querySelector('.who-is-for-section');
    if (whoIsForSection) {
        whoIsForSection.style.display = 'none';
    }
    
    // Ocultar el botón flotante de WhatsApp original y mostrar uno nuevo
    const existingFloat = document.querySelector('.whatsapp-float');
    if (existingFloat) {
        existingFloat.style.display = 'none';
    }
    
    // Crear nuevo botón flotante
    const newFloat = document.createElement('a');
    newFloat.href = 'https://wa.me/5491170983414?text=Hola!%20Quiero%20información%20sobre%20el%20plan%20${level}';
    newFloat.className = 'whatsapp-float';
    newFloat.target = '_blank';
    newFloat.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 60px;
        height: 60px;
        background: linear-gradient(135deg, #25d366 0%, #128c7e 100%);
        color: white;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        z-index: 999;
        transition: all 0.3s ease;
        box-shadow: 0 10px 25px rgba(37, 211, 102, 0.3);
        cursor: pointer;
    `;
    newFloat.innerHTML = `
        <svg viewBox="0 0 24 24" fill="currentColor" style="width: 30px; height: 30px;">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
    `;
    document.body.appendChild(newFloat);
}

function restoreOriginalContent() {
    // Restaurar el contenido original recargando la página
    location.reload();
}

// ===================================
// FUNCIÓN PARA MOSTRAR/OCULTAR MENÚ DE DEMOS POR CATEGORÍA
// ===================================
let currentOpenCategory = null; // Variable para rastrear la categoría abierta

function toggleCategoryMenu(category) {
    const targetMenu = document.getElementById(`${category}-demos`);
    
    // Si el menú ya está abierto, cerrarlo
    if (currentOpenCategory === category && targetMenu.style.display === 'block') {
        targetMenu.style.display = 'none';
        currentOpenCategory = null;
        return;
    }
    
    // Ocultar todos los menús primero
    const allDemoMenus = document.querySelectorAll('.demo-links');
    allDemoMenus.forEach(menu => {
        menu.style.display = 'none';
    });
    
    // Mostrar el menú de la categoría seleccionada
    if (targetMenu) {
        targetMenu.style.display = 'block';
        targetMenu.style.animation = 'categoryMenuSlide 0.3s ease';
        currentOpenCategory = category; // Actualizar categoría abierta
    }
}

// Agregar soporte para volver atrás con teclado
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' || event.key === 'Backspace') {
        const mainContent = document.getElementById('main-content');
        if (mainContent) {
            // Si estamos viendo contenido de demo, volver a la página principal
            restoreOriginalContent();
        }
    }
});

// ===================================
// FUNCIÓN SIMPLE DE REDIRECCIÓN A WHATSAPP
// ===================================
function redireccionar(url) {
    console.log('Redireccionando a:', url);
    window.open(url, '_blank');
}

// ===================================
// CARRUSEL DE TESTIMONIOS
// ===================================
let currentTestimonial = 0;
const testimonials = document.querySelectorAll('.testimonial-slide');
const indicators = document.querySelectorAll('.indicator');

function showTestimonial(index) {
    // Ocultar todos los testimonios
    testimonials.forEach((testimonial, i) => {
        testimonial.classList.remove('active');
        indicators[i].classList.remove('active');
    });
    
    // Mostrar el testimonio actual
    testimonials[index].classList.add('active');
    indicators[index].classList.add('active');
}

function changeTestimonial(direction) {
    currentTestimonial += direction;
    
    // Ciclo infinito
    if (currentTestimonial < 0) {
        currentTestimonial = testimonials.length - 1;
    } else if (currentTestimonial >= testimonials.length) {
        currentTestimonial = 0;
    }
    
    showTestimonial(currentTestimonial);
}

function goToTestimonial(index) {
    currentTestimonial = index;
    showTestimonial(currentTestimonial);
}

// Auto-avanzar testimonios cada 5 segundos
setInterval(() => {
    changeTestimonial(1);
}, 5000);

// Inicializar el carrusel cuando la página cargue
document.addEventListener('DOMContentLoaded', function() {
    if (testimonials.length > 0) {
        showTestimonial(0);
    }
});

function showDemo(type) {
    const demoUrls = {
        'peluquerias': 'demo-peluqueria.html',
        'servicios': 'demo-servicios.html',
        'emprendimientos': 'demo-emprendimientos.html'
    };
    
    const url = demoUrls[type];
    if (url) {
        window.open(url, '_blank');
    }
}

// ===================================
// CARRUSEL - IMÁGENES Y CONTROLES
// ===================================
function loadCarouselImages() {
    const carousel = document.getElementById('carousel');
    carousel.innerHTML = ''; 
    businessData.gallery.forEach((url) => {
        const slide = document.createElement('div');
        slide.className = 'carousel-slide';
        const img = document.createElement('img');
        img.src = url;
        slide.appendChild(img);
        carousel.appendChild(slide);
    });

    // Crear indicadores
    const indicatorsContainer = document.getElementById('carousel-indicators');
    indicatorsContainer.innerHTML = '';
    businessData.gallery.forEach((_, index) => {
        const indicator = document.createElement('button');
        indicator.className = 'indicator';
        indicator.onclick = () => goToSlide(index);
        indicatorsContainer.appendChild(indicator);
    });

    // Configurar botones del carrusel
    document.getElementById('prev-btn').addEventListener('click', moveSlide);
    document.getElementById('next-btn').addEventListener('click', moveSlide);

    // Inicializar primera diapositiva
    updateCarousel();
}

// ===================================
// FUNCIÓN PARA IR A UNA DIAPÓSITIVA ESPECÍFICA
// ===================================
function goToSlide(index) {
    currentSlide = index;
    updateCarousel();
}

// ===================================
// FUNCIÓN PARA ACTUALIZAR EL CARRUSEL
// ===================================
function updateCarousel() {
    const slides = document.querySelectorAll('.carousel-slide');
    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(${(index - currentSlide) * 100}%)`;
    });
}

// ===================================
// FUNCIÓN PARA MOVER EL CARRUSEL
// ===================================
function moveSlide() {
    const step = this.id === 'next-btn' ? 1 : -1;
    currentSlide = (currentSlide + step + businessData.gallery.length) % businessData.gallery.length;
    updateCarousel();
}

// ===================================
// ARRANCAR CUANDO LA WEB ESTÉ LISTA
// ===================================
document.addEventListener('DOMContentLoaded', function() {
    loadDarkModePreference(); // Cargar preferencia de modo oscuro
    initializePage();
    
    // Agregar event listeners para botones de planes
    const planButtons = document.querySelectorAll('.pricing-cta[data-plan]');
    console.log('Found plan buttons:', planButtons.length);
    console.log('Plan buttons:', planButtons);
    
    planButtons.forEach((button, index) => {
        console.log(`Button ${index}:`, button);
        console.log(`Button ${index} data-plan:`, button.getAttribute('data-plan'));
        
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const planType = this.getAttribute('data-plan');
            console.log('Button clicked with plan:', planType);
            console.log('Event target:', e.target);
            redirectToWhatsApp(planType);
        });
        
        // También agregar evento de mouse para verificar que el botón responde
        button.addEventListener('mouseenter', function() {
            console.log('Mouse entered button:', this.getAttribute('data-plan'));
        });
    });
});
