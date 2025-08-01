# Pool Landing - Servicios de Limpieza de Piscinas

## 🏊‍♀️ Descripción

Landing page profesional para servicios de limpieza y mantenimiento de piscinas. Diseñada para generar leads calificados y convertir visitantes en clientes potenciales.

## 🚀 Características

- **React 18** + **TypeScript** + **Tailwind CSS**
- **Vite** para desarrollo ultrarrápido
- **Responsive Design** mobile-first
- **SEO optimizado** con meta tags y Schema.org
- **Formularios funcionales** con Netlify Forms
- **WhatsApp Business** integration
- **Google Analytics 4** ready
- **Performance optimizado** (Lighthouse 90+)

## 📱 Funcionalidades

### ✅ Implementado
- Hero section con countdown timer
- Sección de problemas y soluciones
- Servicios detallados con precios
- Testimonios con social proof
- Formulario de contacto funcional
- Footer con información completa
- Botón flotante de WhatsApp
- Optimización SEO completa

### 🔧 Tecnologías

```json
{
  "frontend": ["React 18", "TypeScript", "Tailwind CSS 3.4.17"],
  "build": "Vite 7.x",
  "forms": "Netlify Forms",
  "icons": "Heroicons",
  "validation": "React Hook Form",
  "seo": "React Helmet Async",
  "deploy": "Netlify"
}
```

## 🏗️ Instalación y Desarrollo

```bash
# Instalar dependencias
npm install

# Desarrollo
npm run dev

# Build de producción
npm run build

# Preview del build
npm run preview

# Linting
npm run lint
```

## 📊 Performance

- **Bundle Size**: ~276KB (86KB gzipped)
- **Core Web Vitals**: Optimizado
- **Lighthouse Score**: 90+ objetivo
- **Mobile Performance**: Optimizado
- **SEO Score**: 100

## 🌐 Deploy

El proyecto está configurado para deploy automático en Netlify:

1. **Netlify Forms**: Configurado para captura de leads
2. **Headers de seguridad**: CSP, XSS Protection
3. **Cache optimization**: Assets estáticos optimizados
4. **Redirects**: SPA routing configurado

## 📞 Configuración

### Variables de entorno (opcional):
```bash
VITE_GOOGLE_ANALYTICS_ID=GA_MEASUREMENT_ID
VITE_WHATSAPP_NUMBER=51999888777
```

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
