# 🇵🇪 PERÚ STYLE - Tienda de Moda Peruana

Una tienda de comercio electrónico moderna y responsive desarrollada con React, especializada en moda peruana de alta calidad.

## 🎯 Descripción del Proyecto

PERÚ STYLE es una plataforma de e-commerce que ofrece una colección exclusiva de ropa inspirada en la vibrante cultura peruana. Con diseño responsive, tipografía atractiva y funcionalidades completas de carrito de compras.

---

## 🛠️ Tecnologías Utilizadas

### Frontend
- **React 18.3.1** - Biblioteca de interfaz de usuario
- **React Router DOM 7.0.2** - Enrutamiento de aplicación
- **Vite 6.0.1** - Bundler y servidor de desarrollo

### Estilos
- **Tailwind CSS 4.1.17** - Framework de CSS utility-first
- **@tailwindcss/postcss 4.1.17** - Plugin PostCSS para Tailwind
- **@tailwindcss/vite 4.1.17** - Plugin Vite para Tailwind
- **PostCSS 8.5.6** - Herramienta de transformación CSS
- **Autoprefixer 10.4.22** - Prefijos automáticos CSS

### Iconos
- **React Icons 5.5.0** - Librería de iconos SVG
  - AiOutlineShoppingCart, AiOutlineMenu, AiOutlineClose
  - FiSearch

### Tipografía
- **Google Fonts**
  - Poppins (300, 400, 500, 600, 700, 800, 900)
  - Playfair Display (700, 800, 900)

### Animaciones
- **AOS 2.3.4** - Animate On Scroll (animaciones al desplazarse)

### Desarrollo
- **ESLint 9.15.0** - Linter de JavaScript
- **Vite 6.0.1** - Servidor de desarrollo con HMR

---

## 📁 Estructura del Proyecto

```
ecommerce/
├── public/
│   └── images/
│       └── hero-portada.jpg
├── src/
│   ├── Components/
│   │   ├── Navbar.jsx              # Barra de navegación con menú hamburguesa
│   │   ├── Hero.jsx                # Sección hero con título y imagen
│   │   ├── ProductList.jsx         # Lista de productos con filtros y ordenamiento
│   │   ├── DetailsProduct.jsx      # Página de detalles del producto
│   │   ├── Cart.jsx                # Carrito de compras
│   │   ├── CartContext.jsx         # Context API para gestionar carrito
│   │   ├── Footer.jsx              # Pie de página con información de contacto
│   │   └── Home.jsx                # Página principal
│   ├── data/
│   │   └── db.json                 # Base de datos de productos
│   ├── img/                        # Carpeta de imágenes
│   ├── App.jsx                     # Componente principal
│   ├── main.jsx                    # Punto de entrada
│   └── index.css                   # Estilos globales
├── index.html                      # HTML principal
├── vite.config.js                  # Configuración de Vite
├── eslint.config.js                # Configuración de ESLint
├── tailwind.config.js              # Configuración de Tailwind CSS
├── postcss.config.js               # Configuración de PostCSS
├── package.json                    # Dependencias del proyecto
└── README.md                       # Este archivo
```

---

## 🎨 Componentes Principales

### **Navbar** (`Navbar.jsx`)
- Logo de PERÚ STYLE con tipografía decorativa
- Menú de navegación responsivo (hamburguesa en móvil)
- Buscador
- Carrito con contador de items
- Sticky (fijo en la parte superior)

### **Hero** (`Hero.jsx`)
- Título grande con fuente Playfair Display
- Descripción de la marca
- Imagen destacada de alta calidad
- Gradiente de fondo ámbar a blanco
- Totalmente responsive

### **ProductList** (`ProductList.jsx`)
- Grid responsive de productos (1-2-3-4 columnas)
- Barra lateral de filtros (ocultable en móvil)
- Filtros por categoría (Hombres, Mujeres, Niños)
- Filtros por tipo (Prendas de abrigo, Ropa interior, Calzado)
- Ordenamiento (Novedades, Precio asc/desc)
- Precios en soles (S/)

### **DetailsProduct** (`DetailsProduct.jsx`)
- Vista detallada del producto
- Selector de tallas (S, M, L, XL)
- Botón "Agregar al Carrito"
- Información de garantía y devoluciones
- Layout responsive (1 columna en móvil, 2 en desktop)

### **Cart** (`Cart.jsx`)
- Listado de productos en el carrito
- Controles para aumentar/disminuir cantidad
- Botón de eliminar item
- Cálculo automático de total
- Botón "Proceder al Pago"
- Diseño responsive y adaptable

### **CartContext** (`CartContext.jsx`)
- Gestión global del carrito con Context API
- Funciones: agregarAlCarrito, eliminarDelCarrito, actualizarCantidad
- Almacenamiento en localStorage

### **Footer** (`Footer.jsx`)
- Información de contacto (dirección, email, teléfono, WhatsApp)
- Enlaces rápidos
- Redes sociales
- Copyright con año dinámico
- Datos específicos de Perú

---

## 🚀 Características

✅ **Responsive Design** - Se adapta perfectamente a móviles, tablets y desktops
✅ **Carrito de Compras** - Gestión completa con Context API
✅ **Filtros Avanzados** - Por categoría y tipo de producto
✅ **Ordenamiento** - Por precio (ascendente/descendente) y novedades
✅ **Menú Móvil** - Hamburguesa para navegación en dispositivos pequeños
✅ **Precios en Soles** - Moneda peruana (S/)
✅ **Tipografía Premium** - Google Fonts (Poppins y Playfair Display)
✅ **Diseño Moderno** - Colores vibrantes (teal y ámbar)
✅ **Accesible** - Semántica HTML correcta
✅ **SEO Amigable** - Meta tags y estructura apropiada

---

## 📱 Breakpoints Responsive

```
- Móvil:      < 640px (predeterminado)
- sm:         ≥ 640px (tablets pequeñas)
- md:         ≥ 768px (tablets)
- lg:         ≥ 1024px (laptops)
- xl:         ≥ 1280px (pantallas grandes)
```

---

## 🎨 Paleta de Colores

| Color | Uso |
|-------|-----|
| Teal-600 | Primario (botones, destacados) |
| Amber-600 | Secundario (acentos, "STYLE") |
| Gray-900 | Texto principal |
| Gray-700 | Texto secundario |
| White | Fondo principal |
| Gray-50 | Fondos alternativos |

---

## 📦 Scripts Disponibles

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo con HMR
npm run dev

# Compilar para producción
npm run build

# Previsualizar la compilación
npm run preview

# Ejecutar linter
npm run lint
```

---

## 🔗 Rutas de la Aplicación

```
/                    → Página principal (Home)
/carrito             → Carrito de compras
/producto/:id        → Detalles del producto
```

---

## 💾 Base de Datos

Los productos se cargan desde `src/data/db.json` con la siguiente estructura:

```json
{
  "products": [
    {
      "id": 1,
      "nombre": "Nombre del Producto",
      "precio": 99.99,
      "categoria": "Hombres",
      "tipo": "Prendas de abrigo",
      "image": "/images/producto.jpg",
      "descripcion": "Descripción detallada del producto"
    }
  ]
}
```

---

## 📝 Información de Contacto

**PERÚ STYLE - Tienda de Moda Peruana**

📍 Av. Javier Prado Este 4200, Santiago de Surco, Lima - Perú
📧 contacto@perustyle.pe
☎️ +51 (01) 234 5678
📱 WhatsApp: +51 987 654 321

---

## 👨‍💻 Autor

Desarrollado con ❤️ para PERÚ STYLE
**Fecha**: 11 de noviembre de 2024

---

## 📄 Licencia

Este proyecto es de uso exclusivo de PERÚ STYLE.

---

## 🙏 Agradecimientos

- React por la excelente librería
- Vite por el bundler rápido
- Tailwind CSS por el framework de estilos
- Google Fonts por las tipografías premium
- React Icons por los iconos SVG

---

**Hecho en Perú 🇵🇪**
