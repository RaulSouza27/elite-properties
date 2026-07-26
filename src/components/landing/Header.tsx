const links = [
  { href: "#imoveis", label: "Imóveis" },
  { href: "#servico", label: "Serviço" },
  { href: "#sobre", label: "Sobre" },
  { href: "#contato", label: "Contato" },
];

export function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-6 py-6 lg:px-10">
        <a href="#topo" className="min-w-0">
          <span className="font-display text-2xl tracking-tight text-ink-foreground">
            Ávila<span className="text-petrol-foreground/70">&nbsp;·&nbsp;</span>Residências
          </span>
        </a>
        <nav className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-ink-foreground/70 transition-colors hover:text-ink-foreground"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contato"
            className="border border-ink-foreground/30 px-5 py-2.5 text-xs uppercase tracking-[0.18em] text-ink-foreground transition-colors hover:bg-ink-foreground hover:text-ink"
          >
            Agendar visita
          </a>
        </nav>
        <a
          href="#contato"
          className="shrink-0 border border-ink-foreground/30 px-4 py-2 text-xs uppercase tracking-[0.16em] text-ink-foreground md:hidden"
        >
          Visita
        </a>
      </div>
    </header>
  );
}