import React, { createContext, useContext, useState, useEffect } from "react";
import { translations } from "../lib/translations";

export type Language = "pt" | "en";

interface LanguageContextProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string, values?: Record<string, string | number>) => string;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("language");
      if (saved === "pt" || saved === "en") {
        return saved;
      }

      // Optional: use browser default language
      const locale = navigator.language;
      if (locale.startsWith("pt")) {
        return "pt";
      }
    }
    return "pt";
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== "undefined") {
      localStorage.setItem("language", lang);
      document.documentElement.lang = lang;
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      document.documentElement.lang = language;
    }
  }, [language]);

  const t = (key: string, values?: Record<string, string | number>): string => {
    const keys = key.split(".");
    let current: unknown = translations[language];

    for (const k of keys) {
      if (current && typeof current === "object" && k in (current as object)) {
        current = (current as Record<string, unknown>)[k];
      } else {
        // Fallback to PT if key is missing in EN, otherwise return key
        let ptFallback: unknown = translations["pt"];
        let foundPT = true;
        for (const ptK of keys) {
          if (ptFallback && typeof ptFallback === "object" && ptK in (ptFallback as object)) {
            ptFallback = (ptFallback as Record<string, unknown>)[ptK];
          } else {
            foundPT = false;
            break;
          }
        }
        if (foundPT && typeof ptFallback === "string") {
          current = ptFallback;
          break;
        }
        return key;
      }
    }

    if (typeof current !== "string") {
      return key;
    }

    let result = current;
    if (values) {
      for (const [vKey, vVal] of Object.entries(values)) {
        result = result.replace(new RegExp(`{{\\s*${vKey}\\s*}}`, "g"), String(vVal));
      }
    }

    return result;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
