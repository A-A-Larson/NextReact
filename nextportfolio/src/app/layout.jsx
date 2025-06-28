import './globals.css';
import NavButton from './components/NavButton';
import { ThemeProvider } from "./context/ThemeContext";
import { just_Another_Hand, inter } from './font/fonts';

export const metadata = {
  title: "Andrew Larson's Portfolio",
  description: "Andrew Larson's Developer Portfolio",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`bg-lightBG text-lightTxtClr dark:bg-darkBG dark:text-darkTxtClr ${just_Another_Hand.variable} ${inter.variable}`}>
      <head>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <link rel="icon" href="/favicon.ico" sizes="any" />        
      </head>
      <body>          
        <ThemeProvider>       
          <NavButton /> 
          {children} 
        </ThemeProvider>  
      </body>      
    </html>
  )
}
