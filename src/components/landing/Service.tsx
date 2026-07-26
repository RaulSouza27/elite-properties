const items = [
  {
    n: "01",
    title: "Curadoria fechada",
    text: "Visitamos e aprovamos cada imóvel. Menos opções, todas relevantes — nenhum anúncio replicado de portais.",
  },
  {
    n: "02",
    title: "Aluguel sem burocracia",
    text: "Análise em até 48 horas, garantia flexível e assinatura digital. Sem fiador presencial, sem filas.",
  },
  {
    n: "03",
    title: "Suporte jurídico próprio",
    text: "Contrato revisado por advogados da casa, com acompanhamento durante toda a locação.",
  },
  {
    n: "04",
    title: "Gestão pós-mudança",
    text: "Um gestor dedicado para manutenção, vistorias e renovação — resposta no mesmo dia útil.",
  },
];

export function Service() {
  return (
    <section id="servico" className="bg-ink text-ink-foreground">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="eyebrow text-ink-foreground/50">O serviço</p>
            <h2 className="mt-4 text-4xl leading-tight lg:text-5xl">
              Alugar bem é um trabalho de precisão.
            </h2>
          </div>
          <div className="grid gap-px bg-ink-foreground/15 sm:grid-cols-2">
            {items.map((i) => (
              <div key={i.n} className="bg-ink p-8">
                <span className="eyebrow text-petrol-foreground/50">{i.n}</span>
                <h3 className="mt-4 text-2xl">{i.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-foreground/65">{i.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}