import { useMemo, useState } from "react";
import { formatPrice, neighborhoods, properties, type PropertyType } from "@/data/properties";
import { useLanguage } from "@/hooks/useLanguage";

const types: Array<PropertyType | "Todos"> = ["Todos", "Casa", "Apartamento", "Cobertura"];
const bedroomOptions = ["Todos", "2+", "3+", "4+"];
const priceOptions = [
  { labelKey: "listings.priceAll", value: Infinity },
  { labelKey: "listings.price30", value: 30000 },
  { labelKey: "listings.price45", value: 45000 },
  { labelKey: "listings.priceAbove45", value: -1 },
];

export function Listings() {
  const { t, language } = useLanguage();
  const [type, setType] = useState<(typeof types)[number]>("Todos");
  const [hood, setHood] = useState("Todos");
  const [bedrooms, setBedrooms] = useState("Todos");
  const [price, setPrice] = useState(priceOptions[0].value);

  const filtered = useMemo(() => {
    return properties.filter((p) => {
      if (type !== "Todos" && p.type !== type) return false;
      if (hood !== "Todos" && p.neighborhood !== hood) return false;
      if (bedrooms !== "Todos" && p.bedrooms < Number(bedrooms[0])) return false;
      if (price === -1) return p.price > 45000;
      if (price !== Infinity && p.price > price) return false;
      return true;
    });
  }, [type, hood, bedrooms, price]);

  const getTypeLabel = (tType: string) => {
    if (tType === "Todos") return t("listings.all");
    if (tType === "Casa") return t("hero.house");
    if (tType === "Apartamento") return t("hero.apartment");
    if (tType === "Cobertura") return t("hero.penthouse");
    return tType;
  };

  const getTranslatedType = (tType: PropertyType) => {
    if (tType === "Cobertura") return t("hero.penthouse");
    if (tType === "Apartamento") return t("hero.apartment");
    if (tType === "Casa") return t("hero.house");
    return tType;
  };

  return (
    <section id="imoveis" className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
      <div className="grid gap-6 border-b border-hairline pb-10 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
        <div className="min-w-0">
          <p className="eyebrow text-petrol">{t("listings.eyebrow")}</p>
          <h2 className="mt-4 text-4xl leading-tight lg:text-5xl">{t("listings.title")}</h2>
        </div>
        <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
          {t("listings.description")}
        </p>
      </div>

      <div className="flex flex-wrap gap-2 border-b border-hairline py-6">
        {types.map((tButton) => (
          <button
            key={tButton}
            onClick={() => setType(tButton)}
            className={`border px-5 py-2.5 text-xs uppercase tracking-[0.16em] transition-colors cursor-pointer ${
              type === tButton
                ? "border-ink bg-ink text-ink-foreground"
                : "border-hairline text-muted-foreground hover:border-ink hover:text-foreground"
            }`}
          >
            {getTypeLabel(tButton)}
          </button>
        ))}
        <div className="ml-auto grid grid-cols-1 gap-2 sm:grid-cols-3">
          <Select
            label={t("listings.neighborhood")}
            value={hood}
            onChange={setHood}
            options={[t("listings.all"), ...neighborhoods]}
          />
          <Select
            label={t("listings.bedrooms")}
            value={bedrooms}
            onChange={setBedrooms}
            options={bedroomOptions.map((o) => (o === "Todos" ? t("listings.all") : o))}
          />
          <Select
            label={t("listings.priceRange")}
            value={String(price)}
            onChange={(v) => setPrice(Number(v))}
            options={priceOptions.map((pOpt) => ({
              label: t(pOpt.labelKey),
              value: String(pOpt.value),
            }))}
          />
        </div>
      </div>

      {filtered.length === 0 ? (
        <p className="py-24 text-center text-sm text-muted-foreground">{t("listings.empty")}</p>
      ) : (
        <div className="mt-12 grid gap-x-8 gap-y-14 sm:grid-cols-2">
          {filtered.map((p) => {
            const displayTitle = language === "en" ? p.titleEn : p.title;
            const displayCity = language === "en" ? p.cityEn : p.city;
            const displayTag = language === "en" ? p.tagEn : p.tag;

            return (
              <article key={p.id} className="group">
                <div className="relative overflow-hidden bg-muted">
                  <img
                    src={p.image}
                    alt={`${displayTitle} — ${p.neighborhood}, ${displayCity}`}
                    loading="lazy"
                    width={1200}
                    height={900}
                    className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                  {displayTag && (
                    <span className="eyebrow absolute left-0 top-0 bg-ink px-4 py-2 text-ink-foreground">
                      {displayTag}
                    </span>
                  )}
                </div>
                <div className="mt-5 grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4">
                  <div className="min-w-0">
                    <p className="eyebrow text-petrol">
                      {p.neighborhood} · {displayCity}
                    </p>
                    <h3 className="mt-2 text-2xl leading-snug">{displayTitle}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {getTranslatedType(p.type)} · {p.bedrooms} {t("listings.bedroomText")} ·{" "}
                      {p.area} {t("listings.areaText")}
                    </p>
                  </div>
                  <div className="shrink-0 text-right text-lg">
                    {formatPrice(p.price, language)}
                    <span className="block text-xs text-muted-foreground">
                      {t("listings.perMonth")}
                    </span>
                  </div>
                </div>
              </article>
            );
          })}
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
  options: Array<{ label: string; value: string } | string>;
}) {
  return (
    <label className="border border-hairline px-4 py-2">
      <span className="eyebrow block text-muted-foreground">{label}</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-transparent text-sm outline-none cursor-pointer"
      >
        {options.map((o) => {
          const optVal = typeof o === "string" ? o : o.value;
          const optLabel = typeof o === "string" ? o : o.label;
          return (
            <option key={optVal} value={optVal} className="text-foreground bg-background">
              {optLabel}
            </option>
          );
        })}
      </select>
    </label>
  );
}
