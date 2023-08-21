// /** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/*.{js,ts,jsx,tsx,html}",
    "./src/**/*.{js,ts,jsx,tsx,html}",
    "./src/animation/*.{js,ts,jsx,tsx,html}",
  ],
  darkMode: 'class',
  theme: {
    container: {

    },
    extend: {
      spacing: {
        'mobile': '1rem',
      },
      keyframes: {
        sideways: {
          "0%": { opacity: 0 },
          "20%": { opacity: 1 },
          "80%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        rotate : {
          "from" : {
            transform: "rotate(0deg)",
          },
          "to" :{
            transform: "rotate(360deg)",
          },
        }
        ,
      },
      animation: {
        sideways: "sideways 2s ease-in infinite",
        rotated : "rotate  1.5s linear infinite",

      },

      fontFamily: {
        'roboto': ['Roboto', 'Padauk'],
        'poppins': ['Poppins', 'Padauk']
      },
      fontSize: {
      },
      colors: {
        black: {
          100: "#d1d2d5",
          200: "#a3a6ab",
          300: "#767980",
          400: "#484d56",
          500: "#1a202c",
          600: "#151a23",
          700: "#10131a",
          800: "#0a0d12",
          900: "#050609"
        },
        primary: {
          100: "#cfe2ff",
          200: "#9ec5fe",
          300: "#6ea8fe",
          400: "#3d8bfd",
          500: "#0d6efd",
          600: "#0a58ca",
          700: "#084298",
          800: "#052c65",
          900: "#031633"
        },
        'secondary': '#6c757d',
        'success': '#198754',
        'danger': '#dc3545',
        'warning': '#ffc107',
        'info': '#0dcaf0',
        'light': '#f8f9fa',
        'dark': '#343a40',
        dark: {
          primary: '#1A202C',
          secondary: '#27374D',
          tertiary: '#526D82',
          pure: '#000000',
        }
      }
    },
    screens: {
      'sm': '576px',
      'md': '768px',
      'lg': '992px',
      'xl': '1200px',
      'xxl': '1400px'
    },

  },
  plugins: [],
}