/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sentinel: ["Sentinel", "Helvetica"]
      },
      backgroundImage: {
        'plataforma': "linear-gradient(to bottom, rgb(0, 0, 0, 0.5), rgb(0, 0, 0)),url('./plataforma_opt2.webp')"
      },
      transitionProperty: {
        'width': 'width'
      }
    },
  },
  plugins: [],
}

//!! linear - gradient(to bottom, rgb(113, 113, 122, 0.2), rgb(0, 0, 0)) Para gradiente