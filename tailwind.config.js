/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        custom: ['inter', 'sans-serif'],
      },
      backgroundImage: {
        'launch-button-gradient':
          'linear-gradient(90deg, #F6C001 0%, #BB7C06 100%)',
        'special-offer-gradient':
          'linear-gradient(180deg, #2C1F01 0%, #121214 29%)',
      },
      text: {
        'custom': 'linear-gradient(90deg, #F6C001 0%, #BB7C06 100%)',
      },
    },
  },
  plugins: [],
}

