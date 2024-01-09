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
        'dark': '#232A3C',
        'medium': '#293245',
        'background-light': 'var(--background-light-rgb)',
        'background-dark': 'var(--background-dark-rgb)',
        'textclr-light': 'var(--textclr-light-rgb)',
        'textclr-dark': 'var(--textclr-dark-rgb)',
        'headercolor-light': 'var(--headercolor-light-rgb)',
        'headercolor-dark': 'var(--headercolor-dark-rgb)',
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        mono: ['var(--font-roboto-mono)'],
      },
    },
  },
  plugins: [],
}
