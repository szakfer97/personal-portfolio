import React from 'react';

type TranslationContextType = {
  language: string;
  setLanguage: (lang: string) => void;
  translate: (key: string) => string;
};

export const TranslationContext = React.createContext<TranslationContextType | undefined>(undefined);