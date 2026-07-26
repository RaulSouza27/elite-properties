import aboutImage from "@/assets/about.jpg";
import { useLanguage } from "@/hooks/useLanguage";

export function About() {
  const { t } = useLanguage();

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
          <p className="eyebrow text-petrol">{t("about.eyebrow")}</p>
          <h2 className="mt-4 text-4xl leading-tight lg:text-5xl">{t("about.title")}</h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">{t("about.text1")}</p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">{t("about.text2")}</p>
          <dl className="mt-12 grid grid-cols-2 gap-px border border-hairline bg-hairline sm:grid-cols-4">
            {[0, 1, 2, 3].map((index) => (
              <div key={index} className="bg-background px-5 py-6">
                <dt className="font-display text-3xl">{t(`about.stats.${index}.value`)}</dt>
                <dd className="mt-1 text-xs leading-snug text-muted-foreground">
                  {t(`about.stats.${index}.label`)}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
