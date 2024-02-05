/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: { 
      backgroundSize: {
      'cover' : 'cover',
    },
  },
    borderWidth: {
      '15': '15px',
      '1': '1px',
      '180' : '180px',
      '40' : '40px',
      'prueba' : '280px',
    },
    boxShadow: {
      '4xl': '0px 8px 18px 0px rgba(0,0,0,0.75)',
    },
    fontFamily: {
      'cinzel': ['Cinzel Decorative', 'serif'],
      'syne' : ['Syne','sans-serif'],
      'crimson_pro' : ['Crimson Pro', 'serif'],
    },
    backgroundSize: {
      '150': '150px',
    },
    backgroundPosition: {
      'center_56%' : 'center 46%',
      'center' : 'center',
    },
  },
  plugins: [],
}

