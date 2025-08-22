# 🏊‍♂️ JefraPools - Professional Pool Cleaning Services

**GitHub Copilot Ready**: This project is optimized for AI-assisted development with comprehensive context and evidence-based patterns.

## 🎯 Project Overview

Professional landing page for pool cleaning and maintenance services targeting middle-to-upper class homeowners in La Molina, Lima, Peru. Optimized for mobile-first conversion with WhatsApp integration.

### 🔬 Evidence-Based Development

- **Performance**: Sub-1s load time → 8-10% conversion uplift
- **Mobile**: 70% traffic optimization + 40% higher LATAM sensitivity
- **Accessibility**: WCAG 2.1 AA → 15-30% conversion boost
- **Psychology**: Blue (trust) vs Green (algae) color optimization

## 🚀 Quick Start for GitHub Copilot

### Context Loading

```bash
# Load project context
npm run copilot:context

# Start development
npm run dev
```

### Copilot Commands

```
@workspace Explain the business goals and conversion strategy
@workspace Show me the component architecture patterns
@workspace Help me create a mobile-optimized contact form
```

## �️ Tech Stack

- **Frontend**: React 18 + TypeScript (70-90% bug prevention)
- **Build**: Vite 7.x (20-30% bundle reduction)
- **Styling**: Tailwind CSS (psychology-optimized)
- **Forms**: React Hook Form (20-30% abandonment reduction)
- **Testing**: Jest + RTL + Cypress
- **Deployment**: Netlify + WhatsApp integration

## 📱 Mobile-First Performance

### Targets (Evidence-Based)

- **Load Time**: <1s (conversion correlation)
- **Bundle Size**: <200KB (LATAM mobile networks)
- **Touch Targets**: 48x48dp (25% accuracy improvement)
- **Lighthouse**: Performance >90, Accessibility >95

### LATAM Optimizations

- WhatsApp as primary contact method
- Peru phone number validation (+51 format)
- Local trust signals for La Molina market
- 5-10 Mbps network optimization
- **Netlify** deployment con Forms integration

## 🎨 Psicología de Colores para Piscinas

| Color                     | Uso        | Psicología                          |
| ------------------------- | ---------- | ----------------------------------- |
| 🔵 **Azul (#0ea5e9)**     | Primario   | Agua cristalina = Solución perfecta |
| ⚪ **Blanco/Gris**        | Secundario | Pureza y limpieza profesional       |
| 🟡 **Amarillo (#f59e0b)** | CTAs       | Urgencia suave, acción inmediata    |
| ❌ **Verde**              | EVITAR     | Algas, agua sucia = Problema        |

## 📱 Funcionalidades de Conversión

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
VITE_WHATSAPP_NUMBER=51946398228
```

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
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
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default tseslint.config([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs["recommended-typescript"],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```
