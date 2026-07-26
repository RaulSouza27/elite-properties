import aboutImage from "@/assets/about.jpg";

const stats = [
  { value: "21", label: "anos de mercado" },
  { value: "480+", label: "contratos ativos" },
  { value: "12", label: "bairros atendidos" },
  { value: "97%", label: "renovação de locação" },
];

export function About() {
  return (
    <section id="sobre" className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <img
          src={aboutImage}
          alt="Entrada de residência contemporânea com parede de pedra escura e árvore"
          loading="lazy"
          width={1200}
          height={1400}
          className="aspect-[4/5] w-full object-cover"
        />
        <div>
          <p className="eyebrow text-petrol">A casa</p>
          <h2 className="mt-4 text-4xl leading-tight lg:text-5xl">
            Duas décadas escolhendo endereços em São Paulo e no litoral.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            Começamos em 2004 administrando um único edifício nos Jardins. Hoje cuidamos
            de um portfólio restrito de residências em Jardins, Vila Nova Conceição,
            Higienópolis, Itaim e no litoral norte — sempre com o mesmo critério: se não
            morarímos nele, não colocamos no catálogo.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Trabalhamos com proprietários de longo prazo e inquilinos que valorizam
            discrição, contrato claro e um interlocutor único do primeiro contato à
            entrega das chaves.
          </p>
          <dl className="mt-12 grid grid-cols-2 gap-px border border-hairline bg-hairline sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="bg-background px-5 py-6">
                <dt className="font-display text-3xl">{s.value}</dt>
                <dd className="mt-1 text-xs leading-snug text-muted-foreground">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}