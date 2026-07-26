import { useMemo, useState } from "react";
import { formatPrice, neighborhoods, properties, type PropertyType } from "@/data/properties";

const types: Array<PropertyType | "Todos"> = ["Todos", "Casa", "Apartamento", "Cobertura"];
const bedroomOptions = ["Todos", "2+", "3+", "4+"];
const priceOptions = [
  { label: "Todos", value: Infinity },
  { label: "Até R$ 30 mil", value: 30000 },
  { label: "Até R$ 45 mil", value: 45000 },
  { label: "Acima de R$ 45 mil", value: -1 },
];

export function Listings() {
  const [type, setType] = useState<(typeof types)[number]>("Todos");
  const [hood, setHood] = useState("Todos");
  const [bedrooms, setBedrooms] = useState("Todos");
  const [price, setPrice] = useState(priceOptions[0].label);

  const filtered = useMemo(() => {
    const priceRule = priceOptions.find((p) => p.label === price)!.value;
    return properties.filter((p) => {
      if (type !== "Todos" && p.type !== type) return false;
      if (hood !== "Todos" && p.neighborhood !== hood) return false;
      if (bedrooms !== "Todos" && p.bedrooms < Number(bedrooms[0])) return false;
      if (priceRule === -1) return p.price > 45000;
      if (priceRule !== Infinity && p.price > priceRule) return false;
      return true;
    });
  }, [type, hood, bedrooms, price]);

  return (
    <section id="imoveis" className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
      <div className="grid gap-6 border-b border-hairline pb-10 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
        <div className="min-w-0">
          <p className="eyebrow text-petrol">Seleção atual</p>
          <h2 className="mt-4 text-4xl leading-tight lg:text-5xl">Imóveis em destaque</h2>
        </div>
        <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
          Todo imóvel passa por visita técnica e validação documental antes de entrar
          no portfólio. Nada aqui é anúncio de terceiros.
        </p>
      </div>

      <div className="flex flex-wrap gap-2 border-b border-hairline py-6">
        {types.map((t) => (
          <button
            key={t}
            onClick={() => setType(t)}
            className={`border px-5 py-2.5 text-xs uppercase tracking-[0.16em] transition-colors ${
              type === t
                ? "border-ink bg-ink text-ink-foreground"
                : "border-hairline text-muted-foreground hover:border-ink hover:text-foreground"
            }`}
          >
            {t}
          </button>
        ))}
        <div className="ml-auto grid grid-cols-1 gap-2 sm:grid-cols-3">
          <Select label="Bairro" value={hood} onChange={setHood} options={["Todos", ...neighborhoods]} />
          <Select label="Quartos" value={bedrooms} onChange={setBedrooms} options={bedroomOptions} />
          <Select
            label="Faixa"
            value={price}
            onChange={setPrice}
            options={priceOptions.map((p) => p.label)}
          />
        </div>
      </div>

      {filtered.length === 0 ? (
        <p className="py-24 text-center text-sm text-muted-foreground">
          Nenhum imóvel com esses critérios. Fale com a curadoria — temos opções fora do portfólio público.
        </p>
      ) : (
        <div className="mt-12 grid gap-x-8 gap-y-14 sm:grid-cols-2">
          {filtered.map((p) => (
            <article key={p.id} className="group">
              <div className="relative overflow-hidden bg-muted">
                <img
                  src={p.image}
                  alt={`${p.title} — ${p.neighborhood}, ${p.city}`}
                  loading="lazy"
                  width={1200}
                  height={900}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
                {p.tag && (
                  <span className="eyebrow absolute left-0 top-0 bg-ink px-4 py-2 text-ink-foreground">
                    {p.tag}
                  </span>
                )}
              </div>
              <div className="mt-5 grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4">
                <div className="min-w-0">
                  <p className="eyebrow text-petrol">
                    {p.neighborhood} · {p.city}
                  </p>
                  <h3 className="mt-2 text-2xl leading-snug">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {p.type} · {p.bedrooms} quartos · {p.area} m²
                  </p>
                </div>
                <p className="shrink-0 text-right text-lg">
                  {formatPrice(p.price)}
                  <span className="block text-xs text-muted-foreground">por mês</span>
                </p>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}

function Select({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
}) {
  return (
    <label className="border border-hairline px-4 py-2">
      <span className="eyebrow block text-muted-foreground">{label}</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-transparent text-sm outline-none"
      >
        {options.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
    </label>
  );
}