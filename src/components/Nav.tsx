export default function Nav() {
  return (
    <header className="bg-paper border-b border-paper-border">
      <div className="max-w-5xl mx-auto px-6 py-3 flex items-center justify-between">
        <a href="#" className="flex items-center">
          <img src="/logo-horizontal.png" alt="CHILEHAUS" className="h-10 w-auto" />
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
