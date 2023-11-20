import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enTranslation from "./locales/en.json";
import fiTranslation from "./locales/fi.json";

i18n.use(initReactI18next).init({
  lng: "en",
  resources: {
    en: { translation: enTranslation },
    fi: { translation: fiTranslation },
  },
});

export default i18n;
