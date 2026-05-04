import LogoMark from './LogoMark'

export default function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <LogoMark className="w-9 h-9 text-gold" />
          <span className="flex flex-col leading-none">
            <span className="font-display font-semibold tracking-[0.18em] text-lg text-gold">
              CHILEHAUS
            </span>
            <span className="hidden sm:inline mt-1 text-[9px] tracking-[0.3em] uppercase text-bone/50">
              Arquitectura · Madera
            </span>
          </span>
        </a>

        <a
          href="mailto:info@chilehaus.cl"
          className="text-sm px-5 py-2 border border-gold text-gold hover:bg-gold hover:text-forest-deep transition-all"
        >
          Conversemos
        </a>
      </div>
    </header>
  )
}
