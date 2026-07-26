import heroImage from "@/assets/hero.jpg";
import { neighborhoods } from "@/data/properties";

export function Hero() {
  return (
    <section id="topo" className="relative min-h-[92vh] bg-ink">
      <img
        src={heroImage}
        alt="Fachada de residência de alto padrão iluminada ao entardecer, com espelho d'água"
        width={1920}
        height={1280}
        className="absolute inset-0 h-full w-full object-cover opacity-80"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/85 via-ink/45 to-ink/90" />

      <div className="relative mx-auto flex min-h-[92vh] max-w-7xl flex-col justify-end px-6 pb-14 pt-40 lg:px-10 lg:pb-20">
        <p className="eyebrow text-ink-foreground/60">Locação de alto padrão · desde 2004</p>
        <h1 className="mt-6 max-w-3xl text-balance font-display text-5xl leading-[1.05] text-ink-foreground sm:text-6xl lg:text-7xl">
          Endereços selecionados, um a um, para quem não procura o comum.
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-foreground/70">
          Uma curadoria fechada de casas, apartamentos e coberturas para alugar —
          com contrato transparente, suporte jurídico e visita agendada em 24 horas.
        </p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            document.getElementById("imoveis")?.scrollIntoView({ behavior: "smooth" });
          }}
          className="mt-10 grid gap-px border border-ink-foreground/15 bg-ink-foreground/10 backdrop-blur-sm md:grid-cols-[1.2fr_1fr_1fr_auto]"
        >
          <label className="bg-ink/70 px-5 py-4">
            <span className="eyebrow block text-ink-foreground/45">Localização</span>
            <select className="mt-1.5 w-full bg-transparent text-sm text-ink-foreground outline-none">
              <option className="text-foreground">Todas as regiões</option>
              {neighborhoods.map((n) => (
                <option key={n} className="text-foreground">
                  {n}
                </option>
              ))}
            </select>
          </label>
          <label className="bg-ink/70 px-5 py-4">
            <span className="eyebrow block text-ink-foreground/45">Tipo</span>
            <select className="mt-1.5 w-full bg-transparent text-sm text-ink-foreground outline-none">
              {["Todos", "Casa", "Apartamento", "Cobertura"].map((t) => (
                <option key={t} className="text-foreground">
                  {t}
                </option>
              ))}
            </select>
          </label>
          <label className="bg-ink/70 px-5 py-4">
            <span className="eyebrow block text-ink-foreground/45">Valor até</span>
            <select className="mt-1.5 w-full bg-transparent text-sm text-ink-foreground outline-none">
              {["R$ 20 mil", "R$ 35 mil", "R$ 50 mil", "Sem limite"].map((t) => (
                <option key={t} className="text-foreground">
                  {t}
                </option>
              ))}
            </select>
          </label>
          <button
            type="submit"
            className="bg-petrol px-8 py-5 text-xs uppercase tracking-[0.2em] text-petrol-foreground transition-opacity hover:opacity-90"
          >
            Buscar
          </button>
        </form>
      </div>
    </section>
  );
}