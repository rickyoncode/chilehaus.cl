import LogoMark from './LogoMark'

export default function Nav() {
  return (
    <header className="bg-paper border-b border-paper-border">
      <div className="max-w-5xl mx-auto px-6 py-3 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5">
          <LogoMark className="w-7 h-7 text-gold-deep" />
          <span className="font-display font-semibold tracking-[0.18em] text-base text-gold-deep leading-none">
            CHILEHAUS
          </span>
        </a>
        <a
          href="mailto:info@chilehaus.cl"
          className="text-xs text-ink-soft hover:text-gold-deep transition-colors"
        >
          info@chilehaus.cl
        </a>
      </div>
    </header>
  )
}
