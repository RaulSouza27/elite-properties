const quotes = [
  {
    text: "Assinamos o contrato em quatro dias, do primeiro contato às chaves. A curadoria poupou semanas de visitas inúteis.",
    name: "Renata Miquelin",
    role: "Inquilina · Vila Nova Conceição",
  },
  {
    text: "É a primeira imobiliária em que o jurídico explica o contrato antes de eu perguntar. Isso muda a relação inteira.",
    name: "Eduardo Sanches",
    role: "Inquilino · Jardins",
  },
  {
    text: "Administram meu imóvel há seis anos. Nunca fiquei um mês sequer sem locação nem sem retorno.",
    name: "Cláudia Bertoni",
    role: "Proprietária · Higienópolis",
  },
];

export function Testimonials() {
  return (
    <section className="border-y border-hairline bg-secondary">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-28">
        <p className="eyebrow text-petrol">Quem já alugou</p>
        <div className="mt-12 grid gap-px bg-hairline md:grid-cols-3">
          {quotes.map((q) => (
            <figure key={q.name} className="bg-secondary p-8 md:p-10">
              <blockquote className="font-display text-2xl leading-snug">“{q.text}”</blockquote>
              <figcaption className="mt-8 border-t border-hairline pt-5">
                <span className="block text-sm font-medium">{q.name}</span>
                <span className="mt-1 block text-xs text-muted-foreground">{q.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}