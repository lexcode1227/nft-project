const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content()
  ],
  theme: {
    extend: {
      colors: {
        background: '#2B2B2B',
        'background-secondary': '#3B3B3B',
        text: '#ffffff',
        'text-label': '#858584',
        'call-to-action': '#A259FF',
      },
      fontFamily: {
        primary: ['Work Sans', 'sans-serif'],
        secondary: ['Space Mono', 'serif'],
      },
      fontSize: {
        h1: '67px',
        h2: '51px',
        h3: '38px',
        h4: '28px',
        h5: '22px',
        body: '16px',
        caption: '12px',
      },
    },
  },
  plugins: [
    flowbite.plugin()
  ],
}

