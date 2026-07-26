import heroImage from "@/assets/hero.jpg";
import { neighborhoods } from "@/data/properties";
import { useLanguage } from "@/hooks/useLanguage";

export function Hero() {
  const { t } = useLanguage();

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
        <p className="eyebrow text-ink-foreground/60">{t("hero.eyebrow")}</p>
        <h1 className="mt-6 max-w-3xl text-balance font-display text-5xl leading-[1.05] text-ink-foreground sm:text-6xl lg:text-7xl">
          {t("hero.title")}
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-foreground/70">
          {t("hero.description")}
        </p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            document.getElementById("imoveis")?.scrollIntoView({ behavior: "smooth" });
          }}
          className="mt-10 grid gap-px border border-ink-foreground/15 bg-ink-foreground/10 backdrop-blur-sm md:grid-cols-[1.2fr_1fr_1fr_auto]"
        >
          <label className="bg-ink/70 px-5 py-4">
            <span className="eyebrow block text-ink-foreground/45">{t("hero.location")}</span>
            <select className="mt-1.5 w-full bg-transparent text-sm text-ink-foreground outline-none">
              <option className="text-foreground">{t("hero.allRegions")}</option>
              {neighborhoods.map((n) => (
                <option key={n} className="text-foreground">
                  {n}
                </option>
              ))}
            </select>
          </label>
          <label className="bg-ink/70 px-5 py-4">
            <span className="eyebrow block text-ink-foreground/45">{t("hero.type")}</span>
            <select className="mt-1.5 w-full bg-transparent text-sm text-ink-foreground outline-none">
              {["all", "house", "apartment", "penthouse"].map((typeKey) => (
                <option key={typeKey} className="text-foreground">
                  {t(`hero.${typeKey}`)}
                </option>
              ))}
            </select>
          </label>
          <label className="bg-ink/70 px-5 py-4">
            <span className="eyebrow block text-ink-foreground/45">{t("hero.priceUpTo")}</span>
            <select className="mt-1.5 w-full bg-transparent text-sm text-ink-foreground outline-none">
              <option className="text-foreground">{t("hero.prices.20k")}</option>
              <option className="text-foreground">{t("hero.prices.35k")}</option>
              <option className="text-foreground">{t("hero.prices.50k")}</option>
              <option className="text-foreground">{t("hero.noLimit")}</option>
            </select>
          </label>
          <button
            type="submit"
            className="bg-petrol px-8 py-5 text-xs uppercase tracking-[0.2em] text-petrol-foreground transition-opacity hover:opacity-90 cursor-pointer"
          >
            {t("hero.search")}
          </button>
        </form>
      </div>
    </section>
  );
}
