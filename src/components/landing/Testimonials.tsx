import { useLanguage } from "@/hooks/useLanguage";

export function Testimonials() {
  const { t } = useLanguage();

  return (
    <section className="border-y border-hairline bg-secondary">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-28">
        <p className="eyebrow text-petrol">{t("testimonials.eyebrow")}</p>
        <div className="mt-12 grid gap-px bg-hairline md:grid-cols-3">
          {[0, 1, 2].map((index) => (
            <figure key={index} className="bg-secondary p-8 md:p-10">
              <blockquote className="font-display text-2xl leading-snug">
                “{t(`testimonials.quotes.${index}.text`)}”
              </blockquote>
              <figcaption className="mt-8 border-t border-hairline pt-5">
                <span className="block text-sm font-medium">
                  {t(`testimonials.quotes.${index}.name`)}
                </span>
                <span className="mt-1 block text-xs text-muted-foreground">
                  {t(`testimonials.quotes.${index}.role`)}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
