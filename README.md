# Rancho El Temazcal · Portal Web Oficial

Sitio web oficial de **Rancho El Temazcal**, centro de producción acuícola de alto volumen ubicado en la zona montañosa de Tatatila, Veracruz. Especializados en cría y comercialización de trucha fresca de manantial en flujo continuo de cascada natural.

---

## 🐟 Propuesta de Valor y Productos

* **Diferenciador del Agua:** Ecosistema con oxigenación constante gracias al desnivel de la cascada y manantial virgen sin recirculación. Elimina al 100% el sabor y olor a lodo/geosmina típico de peces de estanques estancados.
* **Trucha Arcoíris Tradicional:** Talla 350g a 600g (plato individual). Precio base granja: **$160 MXN / kg**.
* **Trucha Salmonada (Corte Gourmet):** Talla 500g a 1.5 kg con dieta controlada rica en carotenoides naturales. Textura firme y color naranja salmón intenso. Precio base granja: **$180 MXN / kg**.
* **Trucha Viva:** Para siembra y repoblación en granjas acuícolas o restaurantes campestres con estanque.
* **Modelo Logístico Prioritario:**
  - *Abasto por Mayoreo y Toneladas (Corredor Centro – Oriente):* Suministro continuo por tonelada durante todo el año en rejas plásticas calibradas y cajas térmicas hacia La Nueva Viga (CDMX), Puebla, Xalapa y Veracruz puerto.
  - *Ruta Semanal Menudeo (Xalapa y alrededores):* Pedidos con corte los **jueves a las 6:00 PM** para entrega los **viernes** a domicilio o puntos céntricos. (No hay visitas turísticas en rancho por bioseguridad).
* **Contacto Oficial:** Centralizado en WhatsApp al **+52 56 6636 2342** (enlaces directos en 1 solo clic en todo el sitio).

---

## 🎨 Sistema de Diseño: "Del Manantial"

El sitio fue diseñado bajo un concepto **editorial gastronómico y campestre de alta gama**, con fondos crema papel (`#fdfcf7`), acentos en verde bosque (`#325e28`), azul manantial (`#165c6e`) y terracota salmón (`#c05621`).

Consulta la especificación completa en [DESIGN.md](./DESIGN.md).

---

## 🛠️ Stack Tecnológico

* **Framework:** [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
* **Bundler & Tooling:** [Vite 6](https://vitejs.dev/)
* **Estilos:** [Tailwind CSS v4](https://tailwindcss.com/) (integrado vía `@tailwindcss/vite` y directivas `@theme`)
* **Mapa Interactivo:** [Leaflet](https://leafletjs.com/) + [React-Leaflet](https://react-leaflet.js.org/) con capas estilo Google Maps claro (CartoDB Voyager) y círculos concéntricos de cobertura centrados en Tatatila.
* **Componentes UI Accesibles:** [@headlessui/react](https://headlessui.com/) (de Tailwind Labs) para selectores, inputs y paneles desplegables de cotización.
* **Iconos:** [Lucide React](https://lucide.dev/)
* **Tipografías:** *Cormorant Garamond* (display serif renacentista) y *DM Sans* (humanista sans-serif)

---

## 📁 Dónde agregar tus fotografías

Guarda tus imágenes en la carpeta:
```text
public/images/
```

| Archivo | Dónde se muestra |
| :--- | :--- |
| `hero-cascada.jpg` | Portada principal (Hero) |
| `agua-cascada.jpg` | Sección "El Secreto del Agua" |
| `trucha-arcoiris.jpg` | Tarjeta Trucha Arcoíris Tradicional ($160/kg) |
| `trucha-salmonada.jpg` | Tarjeta Trucha Salmonada Gourmet ($180/kg) |
| `trucha-viva.jpg` | Tarjeta Trucha Viva para Estanques |
| `empaque-vacio.jpg` | Presentación de entrega limpia al alto vacío |

*(El sitio cuenta con ilustraciones vectoriales de respaldo automático mientras se colocan las fotos reales).*

---

## 🚀 Instalación y Desarrollo Local

1. **Instalar dependencias:**
   ```powershell
   pnpm install
   ```

2. **Iniciar servidor de desarrollo:**
   ```powershell
   pnpm run dev
   ```
   Abre [http://localhost:5173/](http://localhost:5173/) (o el puerto indicado) en tu navegador.

3. **Compilar para producción:**
   ```powershell
   pnpm run build
   ```
   Genera la carpeta optimizada `dist/` lista para desplegar en Cloudflare Pages, Vercel, Netlify o GitHub Pages.
