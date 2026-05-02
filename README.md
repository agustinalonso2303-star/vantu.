# Vantu - Desarrollo Web Profesional

Landing page moderna y responsive creada con Tailwind CSS, optimizada para móviles y diseñada para atraer clientes a través de WhatsApp.

## 🚀 Características

- **Mobile-First**: Diseño optimizado para dispositivos móviles (375px y superiores)
- **Tailwind CSS**: Estilizado moderno con utilidades de Tailwind CSS vía CDN
- **Diseño Premium**: Fondo oscuro (bg-slate-950) con efectos glass y gradientes
- **Interacciones**: Botones con efectos hover y active (scale-95)
- **Responsive**: Layout adaptativo con grid system (1 columna móvil, 3 columnas desktop)
- **Autónoma**: Todo incluido en la carpeta, sin dependencias externas

## 📁 Estructura del Proyecto

```
vantu-github-final/
├── index.html          # Página principal con Tailwind CSS
├── script.js           # Funcionalidades JavaScript
├── assets/             # Recursos estáticos
│   ├── barberia-cursor.svg
│   ├── cafe-cursor.svg
│   ├── gestion-cursor.svg
│   ├── pizza-cursor.png
│   ├── pizza-cursor.svg
│   └── tijeras-cursor.svg
├── barberia.html       # Demo Barbería
├── barberia.css        # Estilos Barbería
├── cafeteria.html      # Demo Cafetería
├── cafeteria.css       # Estilos Cafetería
├── categoria.html      # Página de categorías
├── categoria-styles.css # Estilos categorías
├── dark-mode.js        # Modo oscuro
├── data.json           # Datos del negocio
├── pizzeria.html       # Demo Pizzería
├── pizzeria.css        # Estilos Pizzería
├── privacidad.html     # Política de privacidad
├── styles.css          # Estilos adicionales
├── terminos.html       # Términos y condiciones
└── README.md          # Este archivo
```

## 🎯 Secciones Principales

### 1. Hero Section
- Título principal con gradientes
- Descripción del servicio
- Botones CTA (Ver Planes, Contactar)
- Demostraciones visuales de rubros

### 2. Rubros
- **Pizzerías**: Menú digital, pedidos por WhatsApp
- **Cafeterías**: Carta digital, sistema de reservas
- **Barberías**: Turnos online, galería de trabajos

### 3. Planes y Precios
- **Plan Básico**: $80.000 - Página simple con WhatsApp
- **Plan Profesional**: $150.000 - Galería, servicios, mapa
- **Plan Premium**: $250.000 - Catálogo, reservas, panel admin

### 4. FAQ
- Preguntas frecuentes con respuestas expandibles
- Diseño acordeón animado

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Semántica y accesibilidad
- **Tailwind CSS**: Framework de estilos CSS (vía CDN)
- **JavaScript Vanilla**: Interactividad y funcionalidades
- **Google Fonts**: Montserrat y Roboto para tipografía

## 📱 Responsive Design

- **Mobile** (375px+): Una columna centrada
- **Tablet** (768px+): Layout adaptativo
- **Desktop** (1024px+): Tres columnas con contenido completo

## 🎨 Estilos y Animaciones

- **Gradientes**: Efectos degradados modernos
- **Glass Effect**: Backdrop blur y transparencias
- **Animaciones**: Fade-in, slide-up, floating effects
- **Interacciones**: Hover states, active states, transitions

## 🚀 Despliegue

### GitHub Pages
1. Sube esta carpeta a tu repositorio GitHub
2. Ve a Settings → Pages
3. Selecciona la rama main y carpeta root
4. Tu sitio estará disponible en: `https://[username].github.io/[repo]/`

### Vercel/Netlify
1. Conecta tu repositorio
2. Configura el directorio raíz
3. Despliega automáticamente

## ⚙️ Personalización

### Cambiar Información del Negocio
Edita las variables en `script.js`:

```javascript
const businessData = {
    businessName: "Tu Nombre de Negocio",
    description: "Tu descripción",
    whatsapp: "5491123456789",
    // ... más configuraciones
};
```

### Modificar Colores
Busca las clases de Tailwind en `index.html`:
- `bg-slate-950`: Fondo oscuro
- `gradient-text`: Texto con gradiente
- `glass-effect`: Efecto cristal

## 📄 Páginas de Demo

El proyecto incluye páginas de demostración para diferentes rubros:
- **Pizzería**: `pizzeria.html` - Menú interactivo y pedidos
- **Cafetería**: `cafeteria.html` - Carta digital y reservas
- **Barbería**: `barberia.html` - Turnos online y galería

## 📞 Contacto

- **WhatsApp**: +54 9 11 7098-3414
- **Email**: info@vantu.com

---

© 2024 Vantu - Desarrollo Web Profesional
