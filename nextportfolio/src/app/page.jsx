import ThemeToggle from './components/ThemeToggle'
import Header from './components/Header';

export default function Home() {
  return (
    <main className="bg-white text-black flex min-h-screen flex-col items-center justify-between
    dark:bg-black text-white">
      <Header />
      <ThemeToggle />
    </main>
  )
}