/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'portrait': { 'raw': '(orientation: portrait)' },
        'landscape': { 'raw': '(orientation: landscape)' },
      },
      fontFamily: {
        sentinel: ["Sentinel", "Helvetica"]
      },
      colors: {
        'b-blue': '#083A59',
        'l-blue': '#1B70A6',
        'b-gray': '#4D4B4C',
        'xl-blue': '#608BA6',
        'm-w': '#D6D6D6'
      },
      backgroundImage: {
        'plataforma': " url('./plataforma.webp')"
      },
      transitionProperty: {
        'width': 'width'
      }
    },
  },
  plugins: [],
}

//!! linear - gradient(to bottom, rgb(113, 113, 122, 0.2), rgb(0, 0, 0)) Para gradiente
//!!linear - gradient(to bottom, rgb(0, 0, 0, 0.5), rgb(0, 0, 0)),