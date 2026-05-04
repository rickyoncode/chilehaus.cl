import './index.css'
import Nav from './components/Nav'
import Footer from './sections/Footer'
import LogoMark from './components/LogoMark'

export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-forest-deep">
      <Nav />

      <main className="flex-1 flex flex-col items-center justify-center px-6 text-center">
        <LogoMark className="w-20 h-20 text-gold/60 mb-10" />

        <p className="text-[10px] tracking-[0.4em] uppercase text-gold/60 mb-6">
          Arquitectura e Ingeniería en Madera
        </p>

        <h1 className="font-display text-4xl md:text-6xl font-semibold text-bone tracking-wide leading-tight mb-6">
          Sitio en mantención
        </h1>

        <p className="text-bone/50 text-sm md:text-base max-w-sm leading-relaxed">
          Estamos preparando algo especial. Mientras tanto, escríbenos.
        </p>

        <a
          href="mailto:info@chilehaus.cl"
          className="mt-10 text-sm px-8 py-3 border border-gold text-gold hover:bg-gold hover:text-forest-deep transition-all"
        >
          info@chilehaus.cl
        </a>
      </main>

      <Footer />
    </div>
  )
}
