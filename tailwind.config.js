/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // � AZUL CRISTALINO PRIMARIO = Agua Perfecta/Limpia
        primary: {
          50: '#f0f9ff',   // Azul cristal muy claro
          100: '#e0f2fe',  // Azul cristal claro
          200: '#bae6fd',  // Azul cristal suave
          300: '#7dd3fc',  // Azul cristal medio
          400: '#38bdf8',  // Azul cristal vibrante
          500: '#0ea5e9',  // Azul cristal principal ✅ AGUA PERFECTA
          600: '#0284c7',  // Azul cristal fuerte
          700: '#0369a1',  // Azul cristal oscuro
          800: '#075985',  // Azul cristal muy oscuro
          900: '#0c4a6e',  // Azul cristal profundo
          950: '#082f49',  // Azul cristal negro
        },
        // ⚪ BLANCO/GRIS SECUNDARIO = Pureza/Limpieza
        secondary: {
          50: '#ffffff',   // Blanco puro
          100: '#f8fafc',  // Blanco grisáceo muy claro
          200: '#f1f5f9',  // Blanco grisáceo claro
          300: '#e2e8f0',  // Gris muy claro
          400: '#cbd5e1',  // Gris claro
          500: '#94a3b8',  // Gris medio ✅ PROFESIONAL LIMPIO
          600: '#64748b',  // Gris oscuro
          700: '#475569',  // Gris carbón
          800: '#334155',  // Gris muy oscuro
          900: '#1e293b',  // Gris negro
          950: '#0f172a',  // Negro suave
        },
        // 🟡 AMARILLO ACCENT = Urgencia/CTA (Sin ser agresivo)
        accent: {
          50: '#fffbeb',   // Amarillo muy claro
          100: '#fef3c7',  // Amarillo claro
          200: '#fde68a',  // Amarillo suave
          300: '#fcd34d',  // Amarillo medio
          400: '#fbbf24',  // Amarillo vibrante
          500: '#f59e0b',  // Amarillo principal ✅ URGENCIA SUAVE
          600: '#d97706',  // Amarillo fuerte
          700: '#b45309',  // Amarillo oscuro
          800: '#92400e',  // Amarillo muy oscuro
          900: '#78350f',  // Amarillo profundo
          950: '#451a03',  // Amarillo negro
        },
        // 🔴 ROJO PROBLEMA = Solo para mostrar "antes" (opcional)
        danger: {
          50: '#fef2f2',   // Rojo muy claro
          100: '#fee2e2',  // Rojo claro
          200: '#fecaca',  // Rojo suave
          300: '#fca5a5',  // Rojo medio
          400: '#f87171',  // Rojo vibrante
          500: '#ef4444',  // Rojo principal ⚠️ SOLO PROBLEMAS
          600: '#dc2626',  // Rojo fuerte
          700: '#b91c1c',  // Rojo oscuro
          800: '#991b1b',  // Rojo muy oscuro
          900: '#7f1d1d',  // Rojo profundo
          950: '#450a0a',  // Rojo negro
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'pulse-slow': 'pulse 3s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
