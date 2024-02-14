import AboutMe from './components/AboutMe';
import ThemeToggle from './components/ThemeToggle';
import Landing from './components/Landing';

export default function Home() {
  return (
    <main 
      className="
        bg-lightBG 
        text-lightTxtClr
        dark:bg-darkBG 
        dark:text-darkTxtClr"
    >      
      <ThemeToggle />
      <Landing />
      <AboutMe />    
    </main>
  )
}