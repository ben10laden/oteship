import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enHome from "./Home/en.json";
import grHome from "./Home/gr.json";
import enLayouts from "./layouts/en.json";
import grLayouts from "./layouts/gr.json";

const resources = {
  en: {
    home: enHome,
    layouts: enLayouts,
  },
  ελ: {
    home: grHome,
    layouts: grLayouts,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  defaultNS: "home",
  interpolation: {
    escapeValue: false,
  },
  ns: ["home", "layouts"],
});

export default i18n;
