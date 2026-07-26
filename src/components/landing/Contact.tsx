import { useState } from "react";
import { properties } from "@/data/properties";

export function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contato" className="bg-ink text-ink-foreground">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 py-24 lg:grid-cols-2 lg:gap-24 lg:px-10 lg:py-32">
        <div>
          <p className="eyebrow text-ink-foreground/50">Agende uma visita</p>
          <h2 className="mt-4 text-4xl leading-tight lg:text-5xl">
            Conte o que procura. Respondemos em até um dia útil.
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-ink-foreground/65">
            Um consultor da curadoria retorna com as opções disponíveis — inclusive
            imóveis que não publicamos no site.
          </p>
          <div className="mt-12 space-y-4 border-t border-ink-foreground/15 pt-8 text-sm text-ink-foreground/65">
            <p>Rua Bela Cintra, 1.200 — Jardins, São Paulo</p>
            <p>+55 11 4000-2200 · contato@avilaresidencias.com.br</p>
            <p>Seg a sex, 9h às 19h · sábado com hora marcada</p>
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
            <span className="eyebrow block text-ink-foreground/45">Nome</span>
            <input
              required
              type="text"
              placeholder="Seu nome completo"
              className="mt-2 w-full bg-transparent text-sm text-ink-foreground outline-none placeholder:text-ink-foreground/30"
            />
          </label>
          <label className="bg-ink px-6 py-5">
            <span className="eyebrow block text-ink-foreground/45">Telefone</span>
            <input
              required
              type="tel"
              placeholder="(11) 90000-0000"
              className="mt-2 w-full bg-transparent text-sm text-ink-foreground outline-none placeholder:text-ink-foreground/30"
            />
          </label>
          <label className="bg-ink px-6 py-5">
            <span className="eyebrow block text-ink-foreground/45">Imóvel de interesse</span>
            <select className="mt-2 w-full bg-transparent text-sm text-ink-foreground outline-none">
              <option className="text-foreground">Ainda não sei — quero orientação</option>
              {properties.map((p) => (
                <option key={p.id} className="text-foreground">
                  {p.title} — {p.neighborhood}
                </option>
              ))}
            </select>
          </label>
          <button
            type="submit"
            className="bg-petrol px-6 py-5 text-xs uppercase tracking-[0.2em] text-petrol-foreground transition-opacity hover:opacity-90"
          >
            {sent ? "Recebido — retornaremos em breve" : "Solicitar contato"}
          </button>
        </form>
      </div>
    </section>
  );
}