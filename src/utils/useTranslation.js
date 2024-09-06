import { useState, useEffect, useMemo, useCallback } from "react";
import enTranslations from "./EN.json";
import huTranslations from "./HU.json";
import roTranslations from "./RO.json";

export const useTranslation = () => {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem("language") || "en";
  });

  const languageMap = useMemo(
    () => ({
      en: enTranslations,
      hu: huTranslations,
      ro: roTranslations,
    }),
    []
  );

  const [translations, setTranslations] = useState(languageMap[language]);

  useEffect(() => {
    setTranslations(languageMap[language]);
    localStorage.setItem("language", language);
  }, [language, languageMap]);

  const tr = useCallback(
    (key) => {
      return translations[key] || key;
    },
    [translations]
  );

  const changeLanguage = useCallback(
    (lang) => {
      if (languageMap[lang]) {
        setLanguage(lang);
      } else {
        console.warn(`Language "${lang}" is not supported.`);
      }
    },
    [languageMap]
  );

  return { tr, changeLanguage, currentLanguage: language };
};
