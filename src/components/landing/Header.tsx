import { useState, useRef, useEffect } from "react";
import { useLanguage } from "@/hooks/useLanguage";
import { Globe, ChevronDown } from "lucide-react";

const links = [
  { href: "#imoveis", labelKey: "nav.listings" },
  { href: "#servico", labelKey: "nav.service" },
  { href: "#sobre", labelKey: "nav.about" },
  { href: "#contato", labelKey: "nav.contact" },
];

export function Header() {
  const { t, language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <div className="mx-auto flex items-center justify-between gap-4 px-6 py-6 lg:px-10">
        <a href="#topo" className="min-w-0">
          <span className="font-display text-2xl tracking-tight text-ink-foreground">
            Maviestays
          </span>
        </a>

        <div className="flex items-center gap-4 md:gap-9">
          <nav className="hidden items-center gap-9 md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-ink-foreground/70 transition-colors hover:text-ink-foreground"
              >
                {t(l.labelKey)}
              </a>
            ))}
            <a
              href="#contato"
              className="border border-ink-foreground/30 px-5 py-2.5 text-xs uppercase tracking-[0.18em] text-ink-foreground transition-colors hover:bg-ink-foreground hover:text-ink"
            >
              {t("nav.scheduleVisit")}
            </a>
          </nav>

          <a
            href="#contato"
            className="shrink-0 border border-ink-foreground/30 px-4 py-2 text-xs uppercase tracking-[0.16em] text-ink-foreground md:hidden"
          >
            {t("nav.visit")}
          </a>

          {/* Language Switcher Dropdown */}
          <div ref={dropdownRef} className="relative z-30">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center gap-1.5 border border-ink-foreground/30 px-3 py-2 text-xs uppercase tracking-[0.12em] text-ink-foreground hover:bg-ink-foreground/10 transition-colors cursor-pointer"
            >
              <Globe className="h-3.5 w-3.5" />
              <span>{language === "pt" ? "PT" : "EN"}</span>
              <ChevronDown className="h-3 w-3 opacity-60" />
            </button>
            {isOpen && (
              <div className="absolute right-0 mt-1 w-32 border border-ink-foreground/15 bg-ink text-ink-foreground shadow-lg animate-in fade-in slide-in-from-top-1 duration-200">
                <button
                  onClick={() => {
                    setLanguage("pt");
                    setIsOpen(false);
                  }}
                  className={`w-full px-4 py-2.5 text-left text-xs uppercase tracking-wider hover:bg-ink-foreground/15 transition-colors cursor-pointer ${
                    language === "pt" ? "bg-ink-foreground/10 font-medium" : ""
                  }`}
                >
                  Português
                </button>
                <button
                  onClick={() => {
                    setLanguage("en");
                    setIsOpen(false);
                  }}
                  className={`w-full px-4 py-2.5 text-left text-xs uppercase tracking-wider hover:bg-ink-foreground/15 transition-colors cursor-pointer ${
                    language === "en" ? "bg-ink-foreground/10 font-medium" : ""
                  }`}
                >
                  English
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
