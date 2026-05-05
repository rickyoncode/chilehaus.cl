import './index.css'
import Nav from './components/Nav'
import Footer from './sections/Footer'

export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-paper">
      <Nav />

      <main className="flex-1 flex flex-col items-center justify-center px-6 py-20 text-center">
        <img src="/logo-vertical.png" alt="CHILEHAUS" className="h-52 w-auto mb-2 opacity-90" />

        <h1 className="font-display text-4xl md:text-5xl font-semibold text-ink tracking-tight leading-tight">
          Sitio en mantención
        </h1>

        <p className="mt-4 text-ink-dim text-sm md:text-base max-w-sm leading-relaxed">
          Estamos trabajando en algo nuevo. Volvemos pronto.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm">
          <a
            href="mailto:info@chilehaus.cl"
            className="px-6 py-2.5 bg-ink text-bone hover:bg-ink-soft transition-colors tracking-wide"
          >
            Escríbenos
          </a>
          <a
            href="https://wa.me/56954085135"
            target="_blank"
            rel="noopener"
            className="text-ink-dim hover:text-gold-deep transition-colors border-b border-paper-border hover:border-gold-deep pb-0.5"
          >
            WhatsApp →
          </a>
        </div>
      </main>

      <Footer />
    </div>
  )
}
