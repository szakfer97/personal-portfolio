import React, { useState, useCallback, useMemo } from "react";
import { TranslationContext } from "./useTranslationContext";
import enTranslations from "../local/EN.json";
import huTranslations from "../local/HU.json";
import roTranslations from "../local/RO.json";

type TranslationsType = { [key: string]: string };

const translations: { [key: string]: TranslationsType } = {
  en: enTranslations,
  hu: huTranslations,
  ro: roTranslations,
};

export const TranslationProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem("language") || "en";
  });

  const translate = useCallback(
    (key: string) => {
      return translations[language][key] || key;
    },
    [language]
  );

  const value = useMemo(
    () => ({
      language,
      setLanguage: (lang: string) => {
        setLanguage(lang);
        localStorage.setItem("language", lang);
      },
      translate,
    }),
    [language, translate]
  );

  return (
    <TranslationContext.Provider value={value}>
      {children}
    </TranslationContext.Provider>
  );
};
