/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FDFBF7',
          100: '#FAF6EE',
          200: '#F4ECE0',
          300: '#EDE2D0',
          400: '#DECFB6',
          500: '#CEBC9D',
        },
        terracotta: {
          100: '#F7DFD6',
          200: '#EEC0B1',
          300: '#DC8F76',
          400: '#CB6948',
          500: '#B8522E', // Boho signature warm rust
          600: '#9E4424',
          700: '#7E341A',
        },
        olive: {
          100: '#E7ECE3',
          200: '#C9D5C2',
          300: '#A4B799',
          400: '#7B946E',
          500: '#5F7652',
          600: '#4C6040',
        },
        espresso: {
          800: '#3D2C25',
          900: '#2A1D18',
          950: '#1D130F',
        },
        brass: {
          300: '#E6CF8B',
          400: '#D4B35D',
          500: '#BFA047',
          600: '#9E8232',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        accent: ['"Marcellus"', 'Georgia', 'serif'],
      },
      boxShadow: {
        'soft': '0 10px 30px -10px rgba(42, 29, 24, 0.08)',
        'elevated': '0 20px 40px -15px rgba(42, 29, 24, 0.12)',
      }
    },
  },
  plugins: [],
}

