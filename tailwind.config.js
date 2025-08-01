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
        // ⚪ SAGE SECONDARY = Natural calm and simplicity (Wabi-sabi inspired)
        secondary: {
          50: '#fafafa',   // Pure light
          100: '#f4f5f6',  // Soft neutral
          200: '#e8eaed',  // Gentle gray
          300: '#d1d5db',  // Light stone
          400: '#9ca3af',  // Soft stone
          500: '#6b7280',  // Natural stone ✅ CALM PROFESSIONALISM
          600: '#4b5563',  // Deep stone
          700: '#374151',  // Charcoal
          800: '#1f2937',  // Deep charcoal
          900: '#111827',  // Near black
          950: '#030712',  // Natural black
        },
        // 🟡 SOFT ACCENT = Natural warmth (Wabi-sabi inspired)
        accent: {
          50: '#fefdfb',   // Warm off-white
          100: '#fef7ed',  // Soft cream
          200: '#fde8cc',  // Gentle sand
          300: '#fbd49a',  // Natural ochre
          400: '#f8b968',  // Soft gold
          500: '#e6a855',  // Muted earth tone ✅ NATURAL WARMTH
          600: '#cd9042',  // Deeper earth
          700: '#a67431',  // Rich earth
          800: '#855d28',  // Dark earth
          900: '#6b4a22',  // Deep earth
          950: '#3d2a15',  // Earth shadow
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
