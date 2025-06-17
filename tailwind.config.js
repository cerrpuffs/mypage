/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class', // Importante: usar 'class' para el modo oscuro manual
  theme: {
    extend: {
      colors: {
        // Colores personalizados para tu tema
        primary: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444', // Tu color rojo principal
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
        },
        // Colores de fondo personalizados
        light: {
          bg: '#fef7ed',
          card: '#ffffff',
          text: '#111827',
        },
        dark: {
          bg: '#0f172a',
          card: '#1e293b',
          text: '#f8fafc',
        }
      },
      fontFamily: {
        'anton': ['Anton', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
        'cascadia': ['Cascadia Mono', 'monospace'],
        'open-sans': ['Open Sans', 'sans-serif'],
      },
      animation: {
        'wave': 'wave 1.5s infinite',
        'rgb-color': 'rgbColor 3s infinite',
        'float1': 'float1 15s ease-in-out infinite',
        'float2': 'float2 18s ease-in-out infinite reverse',
        'pulse-slow': 'pulse 12s ease-in-out infinite',
        'sparkle': 'sparkle 8s linear infinite',
        'typing': 'typing 2s steps(40, end)',
        'blink': 'blink 0.5s step-end infinite alternate',
      },
      keyframes: {
        wave: {
          '0%, 60%, 100%': { transform: 'translateY(0)' },
          '30%': { transform: 'translateY(-10px)' },
        },
        rgbColor: {
          '0%': { color: 'rgb(255, 0, 0)' },
          '33%': { color: 'rgb(0, 255, 0)' },
          '66%': { color: 'rgb(0, 0, 255)' },
          '100%': { color: 'rgb(255, 0, 0)' },
        },
        float1: {
          '0%, 100%': { transform: 'translate(0, 0) rotate(0deg) scale(1)' },
          '25%': { transform: 'translate(50px, -30px) rotate(90deg) scale(1.1)' },
          '50%': { transform: 'translate(100px, 20px) rotate(180deg) scale(0.9)' },
          '75%': { transform: 'translate(30px, 50px) rotate(270deg) scale(1.05)' },
        },
        float2: {
          '0%, 100%': { transform: 'translate(0, 0) rotate(0deg) scale(1)' },
          '20%': { transform: 'translate(-40px, -60px) rotate(72deg) scale(1.1)' },
          '40%': { transform: 'translate(-80px, -20px) rotate(144deg) scale(0.95)' },
          '60%': { transform: 'translate(-60px, 40px) rotate(216deg) scale(1.05)' },
          '80%': { transform: 'translate(-20px, -10px) rotate(288deg) scale(0.9)' },
        },
        sparkle: {
          '0%': { transform: 'translateY(100vh) rotate(0deg)', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { transform: 'translateY(-10px) rotate(360deg)', opacity: '0' },
        },
        typing: {
          'from': { width: '0' },
          'to': { width: '100%' },
        },
        blink: {
          '0%, 50%': { borderColor: 'transparent' },
          '51%, 100%': { borderColor: '#ef4444' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(239, 68, 68, 0.3)',
        'glow-dark': '0 0 20px rgba(248, 113, 113, 0.4)',
      },
    },
  },
  plugins: [],
}