import Hero from './components/Hero';
import Header from './components/Header';
import FloatHands from './components/FloatHands';

export default function Home() {
  return (
    <main className="bg-background-light text-textclr-light flex min-h-screen flex-col items-center justify-between
    dark:bg-background-dark dark:text-textclr-dark">
      <Hero />
      <FloatHands />
      <Header />      
    </main>
  )
}