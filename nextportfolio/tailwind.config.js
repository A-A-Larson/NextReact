/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {    
    extend: {
      screens: {
        'xs': '330px'
      },
      colors: {
        'lightBG': 'var(--backgroundLight)',
        'darkBG': 'var(--backgroundDark)',
        'lightAccent': 'var(--backgroundLightAccent)',
        'lightTxtClr': 'var(--textcolorLight)',
        'darkTxtClr': 'var(--textcolorDark)',
        'lightHdrClr': 'var(--headercolorLight)',
        'darkHdrClr': 'var(--headercolorDark)',
        'lightBttnBG': 'var(--buttonColorLight)',
        'darkBttnBG': 'var(--buttonColorDark)',
        'darkIcon': 'var(--iconcolorDark)'
      },      
    },
  },
  plugins: [],
}
