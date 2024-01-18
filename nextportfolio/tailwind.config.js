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
      colors: {
        'lightBG': 'var(--backgroundLight)',
        'darkBG': 'var(--backgroundDark)',
        'lightTxtClr': 'var(--textcolorLight)',
        'darkTxtClr': 'var(--textcolorDark)',
        'lightHdrClr': 'var(--headercolorLight)',
        'darkHdrClr': 'var(--headercolorDark)',
        'lightBttnBG': 'var(--buttonColorLight)',
        'darkBttnBG': 'var(--buttonColorDark)',
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        mono: ['var(--font-roboto-mono)'],
      },
    },
  },
  plugins: [],
}
