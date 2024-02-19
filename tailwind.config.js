/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: { 
      backgroundSize: {
      'cover' : 'cover',
    },
    width: {
      'xl' : '36rem',
    },
  },
    borderWidth: {
      '1': '1px',
      '2': '2px',
      '10' : '10px',
      '13' : '13px',
      '15': '15px',
      '40' : '40px',
      '180' : '180px',
    },
    boxShadow: {
      '4xl': '0px 5px 10px 0px rgba(0,0,0,0.40)',
    },
    fontFamily: {
      'cinzel': ['Cinzel Decorative', 'serif'],
      'syne' : ['Syne','sans-serif'],
      'crimson_pro' : ['Crimson Pro', 'serif'],
    },
    backgroundSize: {
      '150': '130px',
    },
    backgroundPosition: {
      'center_56%' : 'center 46%',
      'center' : 'center',
    },
  },
  plugins: [],
}

