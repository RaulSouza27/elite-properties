import { useLanguage } from "@/hooks/useLanguage";

export function Service() {
  const { t } = useLanguage();

  return (
    <section id="servico" className="bg-ink text-ink-foreground">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="eyebrow text-ink-foreground/50">{t("service.eyebrow")}</p>
            <h2 className="mt-4 text-4xl leading-tight lg:text-5xl">{t("service.title")}</h2>
          </div>
          <div className="grid gap-px bg-ink-foreground/15 sm:grid-cols-2">
            {[0, 1, 2, 3].map((index) => (
              <div key={index} className="bg-ink p-8">
                <span className="eyebrow text-petrol-foreground/50">
                  {t(`service.items.${index}.n`)}
                </span>
                <h3 className="mt-4 text-2xl">{t(`service.items.${index}.title`)}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-foreground/65">
                  {t(`service.items.${index}.text`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
