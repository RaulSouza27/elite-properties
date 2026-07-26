import { useState } from "react";
import { properties } from "@/data/properties";
import { useLanguage } from "@/hooks/useLanguage";

export function Contact() {
  const { t, language } = useLanguage();
  const [sent, setSent] = useState(false);

  return (
    <section id="contato" className="bg-ink text-ink-foreground">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 py-24 lg:grid-cols-2 lg:gap-24 lg:px-10 lg:py-32">
        <div>
          <p className="eyebrow text-ink-foreground/50">{t("contact.eyebrow")}</p>
          <h2 className="mt-4 text-4xl leading-tight lg:text-5xl">{t("contact.title")}</h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-ink-foreground/65">
            {t("contact.description")}
          </p>
          <div className="mt-12 space-y-4 border-t border-ink-foreground/15 pt-8 text-sm text-ink-foreground/65">
            <p>{t("contact.address")}</p>
            <p>+55 11 4000-2200 · contato@avilaresidencias.com.br</p>
            <p>{t("contact.hours")}</p>
          </div>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
          className="grid gap-px self-start bg-ink-foreground/15"
        >
          <label className="bg-ink px-6 py-5">
            <span className="eyebrow block text-ink-foreground/45">{t("contact.form.name")}</span>
            <input
              required
              type="text"
              placeholder={t("contact.form.namePlaceholder")}
              className="mt-2 w-full bg-transparent text-sm text-ink-foreground outline-none placeholder:text-ink-foreground/30"
            />
          </label>
          <label className="bg-ink px-6 py-5">
            <span className="eyebrow block text-ink-foreground/45">{t("contact.form.phone")}</span>
            <input
              required
              type="tel"
              placeholder={t("contact.form.phonePlaceholder")}
              className="mt-2 w-full bg-transparent text-sm text-ink-foreground outline-none placeholder:text-ink-foreground/30"
            />
          </label>
          <label className="bg-ink px-6 py-5">
            <span className="eyebrow block text-ink-foreground/45">
              {t("contact.form.interest")}
            </span>
            <select className="mt-2 w-full bg-transparent text-sm text-ink-foreground outline-none text-ink-foreground cursor-pointer">
              <option className="text-foreground bg-background">
                {t("contact.form.interestPlaceholder")}
              </option>
              {properties.map((p) => {
                const displayTitle = language === "en" ? p.titleEn : p.title;
                return (
                  <option key={p.id} className="text-foreground bg-background">
                    {displayTitle} — {p.neighborhood}
                  </option>
                );
              })}
            </select>
          </label>
          <button
            type="submit"
            className="bg-petrol px-6 py-5 text-xs uppercase tracking-[0.2em] text-petrol-foreground transition-opacity hover:opacity-90 cursor-pointer"
          >
            {sent ? t("contact.form.success") : t("contact.form.submit")}
          </button>
        </form>
      </div>
    </section>
  );
}
