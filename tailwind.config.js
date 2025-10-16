// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  // 1. **CRUCIAAL: Content-sectie**
  // Zorg ervoor dat ALLE paden naar je .vue, .js, .ts, .html bestanden hier staan.
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Optioneel: Als je hier custom kleuren hebt toegevoegd,
      // check dan of je de standaardkleuren van Tailwind niet per ongeluk
      // hebt verwijderd in een eerdere stap.
    },
  },
  plugins: [],
}
