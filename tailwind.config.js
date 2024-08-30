/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}",], 
  theme: {
    extend: {
      colors: {
        'mi-morado': 'bg-purple-100', // Define tu color morado personalizado
      },
    },
  },
  plugins: [],
}

