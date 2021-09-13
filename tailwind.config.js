module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {   
      aspectRatio: {
        1: '1',
        2: '2',
        3: '3',
        4: '4',
      }
    },
    variants: {
      aspectRatio: ['responsive', 'hover']
    },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}
