import './globals.css';
import NavButton from './components/NavButton';
import Script from 'next/script';

export const metadata = {
  title: "Andrew Larson's Portfolio",
  description: "Andrew Larson's Web Developer Portfolio",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <link rel="icon" href="/favicon.ico" sizes="any" />        
      </head>
      <body>                 
          <NavButton /> 
          {children}   
      </body>      
    </html>
  )
}
