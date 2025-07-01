import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // IMPORTANTE: Usar nombres sin guiones para mejor compatibilidad
        primary: {
          50: '#f0f8ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#2A6FA1',
          600: '#1e5a8a',
          700: '#1e40af',
          800: '#1e3a8a',
          900: '#1e293b',
        },
        secondary: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#E5E7EB',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        },
        accent: {
          50: '#fef7ed',
          100: '#fef3e2',
          200: '#fde4c4',
          300: '#fbd5a6',
          400: '#f9c088',
          500: '#C97E63',
          600: '#b86b4f',
          700: '#a7583b',
          800: '#964527',
          900: '#6B4E3D',
        },
        // CORREGIDO: Colores específicos con nombres válidos
        ceramicBlue: '#2A6FA1',
        hoverBlue: '#0B5ED7',
        darkGray: '#1f2937',
        lightGray: '#E5E7EB',
        pureWhite: '#FFFFFF',
        softTerracotta: '#C97E63',
        logoBrown: '#6B4E3D',
        textPrimary: '#1f2937',
        textSecondary: '#374151',
        textMuted: '#4b5563',
        textLight: '#6b7280',
        borderLight: '#d1d5db',
        borderMedium: '#9ca3af',
        borderDark: '#6b7280',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-categories': 'linear-gradient(135deg, #f0f8ff 0%, #e0f2fe 50%, #bae6fd 100%)',
        'gradient-terracotta': 'linear-gradient(135deg, #C97E63 0%, #b86b4f 100%)',
        'gradient-hero': 'linear-gradient(135deg, #f9fafb 0%, #ffffff 50%, #f3f4f6 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'scale-in': 'scaleIn 0.2s ease-out',
        'bounce-subtle': 'bounceSubtle 0.6s ease-out',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 3s ease-in-out infinite',
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
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      boxShadow: {
        'ceramic': '0 4px 6px -1px rgba(42, 111, 161, 0.1), 0 2px 4px -1px rgba(42, 111, 161, 0.06)',
        'terracotta': '0 4px 6px -1px rgba(201, 126, 99, 0.1), 0 2px 4px -1px rgba(201, 126, 99, 0.06)',
        'ceramic-lg': '0 10px 15px -3px rgba(42, 111, 161, 0.1), 0 4px 6px -2px rgba(42, 111, 161, 0.05)',
        'terracotta-lg': '0 10px 15px -3px rgba(201, 126, 99, 0.1), 0 4px 6px -2px rgba(201, 126, 99, 0.05)',
        'hover-glow': '0 8px 25px -8px rgba(11, 94, 215, 0.4)',
      },
    },
  },
  plugins: [],
}

export default config

