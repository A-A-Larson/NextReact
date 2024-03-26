import AboutMe from './components/AboutMe';
import Landing from './components/Landing';
import Tech from './components/Tech';
import NavButton from './components/NavButton';

export default function Home() {
  return (
    <main 
      className="
        bg-lightBG 
        text-lightTxtClr
        dark:bg-darkBG 
        dark:text-darkTxtClr"
    >     
      <NavButton />       
      <Landing />
      <AboutMe />
      <Tech /> 
    </main>
  )
}