import ThemeToggle from './components/ThemeToggle'
import Header from './components/Header';
import Content from './components/Content';
import FloatHands from './components/FloatHands';

export default function Home() {
  return (
    <main className="bg-background-light text-textclr-light flex min-h-screen flex-col items-center justify-between
    dark:bg-background-dark dark:text-textclr-dark">
      <Header />
      <FloatHands />
      <Content />
      <ThemeToggle />
    </main>
  )
}