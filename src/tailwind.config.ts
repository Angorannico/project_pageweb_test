import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Tu paleta personalizada exacta
        primary: {
          50: '#f0f8ff',   // Azul muy claro
          100: '#e0f2fe',  // Azul claro
          200: '#bae6fd',  // Azul suave
          300: '#7dd3fc',  // Azul medio-claro
          400: '#38bdf8',  // Azul medio
          500: '#2A6FA1',  // Azul cerámico principal
          600: '#1e5a8a',  // Azul más oscuro
          700: '#1e40af',  // Azul profundo
          800: '#1e3a8a',  // Azul muy oscuro
          900: '#1e293b',  // Azul casi negro
        },
        secondary: {
          50: '#f9fafb',   // Gris muy claro
          100: '#f3f4f6',  // Gris claro
          200: '#E5E7EB',  // Gris claro (tu color)
          300: '#d1d5db',  // Gris medio-claro
          400: '#9ca3af',  // Gris medio
          500: '#6b7280',  // Gris
          600: '#4b5563',   // MEJORADO: Gris medio-oscuro para texto secundario
          700: '#374151',   // MEJORADO: Gris más oscuro para texto importante
          800: '#1f2937',   // MEJORADO: Gris muy oscuro para texto principal 
          900: '#111827',   // MEJORADO: Casi negro para títulos principales
        },
        accent: {
          50: '#fef7ed',   // Terracota muy claro
          100: '#fef3e2',  // Terracota claro
          200: '#fde4c4',  // Terracota suave claro
          300: '#fbd5a6',  // Terracota medio-claro
          400: '#f9c088',  // Terracota medio
          500: '#C97E63',  // Terracota suave (tu color)
          600: '#b86b4f',  // Terracota más oscuro
          700: '#a7583b',  // Terracota oscuro
          800: '#964527',  // Terracota muy oscuro
          900: '#6B4E3D',  // Marrón del logo
        },
        // Colores específicos de tu marca
        'ceramic-blue': '#2A6FA1',
        'dark-gray': '#333333',
        'light-gray': '#E5E7EB',
        'pure-white': '#FFFFFF',
        'soft-terracotta': '#C97E63',
        'logo-brown': '#6B4E3D',
        'text-primary': '#1f2937',      // Gris muy oscuro para texto principal
        'text-secondary': '#374151',    // Gris oscuro para texto secundario  
        'text-muted': '#4b5563',        // Gris medio para texto auxiliar
        'text-light': '#6b7280',       // Gris claro para texto menos importante
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'scale-in': 'scaleIn 0.2s ease-out',
        'bounce-subtle': 'bounceSubtle 0.6s ease-out',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        bounceSubtle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-4px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(201, 126, 99, 0.3)' },
          '100%': { boxShadow: '0 0 20px rgba(201, 126, 99, 0.6)' },
        },
      },
      boxShadow: {
        'ceramic': '0 4px 6px -1px rgba(42, 111, 161, 0.1), 0 2px 4px -1px rgba(42, 111, 161, 0.06)',
        'terracotta': '0 4px 6px -1px rgba(201, 126, 99, 0.1), 0 2px 4px -1px rgba(201, 126, 99, 0.06)',
        'ceramic-lg': '0 10px 15px -3px rgba(42, 111, 161, 0.1), 0 4px 6px -2px rgba(42, 111, 161, 0.05)',
        'terracotta-lg': '0 10px 15px -3px rgba(201, 126, 99, 0.1), 0 4px 6px -2px rgba(201, 126, 99, 0.05)',
      },
    },
  },
  plugins: [],
}

export default config
