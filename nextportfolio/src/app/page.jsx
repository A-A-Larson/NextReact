import ThemeToggle from './components/ThemeToggle'
import Header from './components/Header';
import Content from './components/Content';
import FloatHands from './components/FloatHands';

export default function Home() {
  return (
    <main className="bg-white text-black flex min-h-screen flex-col items-center justify-between
    dark:bg-black dark:text-white">
      <Header />
      <FloatHands />
      <Content />
      <ThemeToggle />
    </main>
  )
}