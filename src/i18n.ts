import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { en } from "./locales/en";
import { fr } from "./locales/fr";

// Language detection algorithm
const getSavedLanguage = (): string => {
  const saved = localStorage.getItem("portfolio-lang");
  if (saved === "en" || saved === "fr") {
    return saved;
  }
  
  // Hand-rolled browser detection fallback
  const browserLanguage = navigator.language || (navigator as any).userLanguage || "";
  if (browserLanguage.toLowerCase().startsWith("fr")) {
    return "fr";
  }
  
  return "en";
};

const initialLang = getSavedLanguage();

// Ensure high accessibility & SEO: sync HTML lang attribute
document.documentElement.setAttribute("lang", initialLang);

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      fr: { translation: fr },
    },
    lng: initialLang,
    fallbackLng: "en",
    debug: !!(import.meta as any).env?.DEV,
    parseMissingKeyHandler: (key) => {
      console.warn(`[i18n] Missing translation key: "${key}"`);
      return `[MISSING: ${key}]`;
    },
    interpolation: {
      escapeValue: false, // React already safeguards against XSS
    },
  });

// Keep HTML lang attribute in perfect synchronization with active translations state
i18n.on("languageChanged", (lng) => {
  document.documentElement.setAttribute("lang", lng);
  localStorage.setItem("portfolio-lang", lng);
});

export default i18n;
