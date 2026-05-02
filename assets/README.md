# Directorio Assets

Este directorio contiene los archivos estáticos opcionales para tu landing page:

## Archivos recomendados:

- `favicon.ico` - Icono del sitio web (32x32 píxeles)
- `logo.png` - Logo del negocio (opcional)
- `hero-local.jpg` - Imagen de fondo local (opcional)
- `gallery/` - Subdirectorio para imágenes locales de la galería

## Uso de imágenes locales:

Para usar imágenes locales en lugar de URLs externas:

1. Coloca las imágenes en este directorio
2. Actualiza `data.json` con rutas relativas:
   ```json
   "heroImage": "assets/hero-local.jpg",
   "gallery": [
     "assets/gallery/foto1.jpg",
     "assets/gallery/foto2.jpg"
   ]
   ```

## Notas importantes:

- Las imágenes deben estar optimizadas para web (JPEG, PNG, WebP)
- Tamaño recomendado: máximo 1MB por imagen
- Para el hero: 1920x1080 píxeles o similar
- Para galería: 800x600 píxeles o similar
