import localFont from 'next/font/local';
import './globals.css';
import NavButton from './components/NavButton';

const myFont = localFont({
  src: './font/Inter-VariableFont_slnt,wght.ttf',
  display: 'swap',
})

export const metadata = {
  title: "Andrew Larson's Portfolio",
  description: "Andrew Larson's Web Developer Portfolio",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={myFont.className}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>        
        <NavButton /> 
          {children}
      </body>
    </html>
  )
}
