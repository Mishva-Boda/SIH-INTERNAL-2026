/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: '#F7F3ED',
        surface: {
          DEFAULT: '#FFFFFF',
          cream: '#F7F3ED',
          beige: '#EDE6DA',
          alt: '#E6DDD0',
        },
        brand: {
          green: '#2F5D50',
          greenHover: '#24493F',
          beige: '#EDE6DA',
          beigeHover: '#E2D7C7',
          gold: '#C8A97E',
          cream: '#F7F3ED',
          dark: '#1F2933',
          border: '#E2D9CD',
          50: '#F7F3ED',
          100: '#EDE6DA',
          200: '#E2D7C7',
          300: '#C8A97E',
          400: '#3D7767',
          500: '#2F5D50',
          600: '#24493F',
          700: '#1F2933',
        },
        txt: {
          primary: '#1F2933',
          body: '#4B5563',
          muted: '#9CA3AF',
        },
        border: {
          soft: '#E2D9CD',
          hover: '#CBD5E1',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        heading: ['Outfit', '"Plus Jakarta Sans"', 'sans-serif'],
        display: ['Outfit', 'Poppins', 'sans-serif'],
      },
      borderRadius: {
        '16': '16px',
        '20': '20px',
        '24': '24px',
        '32': '32px',
        'full': '9999px',
      },
      boxShadow: {
        'soft-sm': '0 4px 14px rgba(47, 93, 80, 0.04), 0 2px 6px rgba(0, 0, 0, 0.02)',
        'soft-md': '0 8px 24px rgba(47, 93, 80, 0.07), 0 4px 10px rgba(0, 0, 0, 0.03)',
        'soft-lg': '0 16px 36px rgba(47, 93, 80, 0.09), 0 8px 16px rgba(0, 0, 0, 0.04)',
      },
    },
  },
  plugins: [],
}
