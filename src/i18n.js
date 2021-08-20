import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";

i18n
  .use(Backend)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    backend: {
      // 本地端用這個
      // loadPath: "/locales/{{lng}}/{{ns}}.json",
      // github: "/react-i18n-example/locales/{{lng}}/{{ns}}.json"
      loadPath: "/locales/{{lng}}/{{ns}}.json",
    },
    fallbackLng: "zh",
    lng: "zh",
    interpolation: {
      escapeValue: false, // not needed for react!!
    },
    react: {
      useSuspense: false
    },
  });

export default i18n;