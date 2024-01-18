import Hero from './components/Hero';
import Header from './components/Header';
import FloatHands from './components/FloatHands';
import Filler from './components/Filler';

export default function Home() {
  return (
    <main 
      className="
        bg-lightBG 
        text-lightTxtClr
        flex 
        flex-col
        items-center
        justify-between
        min-h-screen       
        dark:bg-darkBG 
        dark:text-darkTxtClr">
      <Hero />
      <FloatHands />
      <Header />
      <Filler />    
    </main>
  )
}