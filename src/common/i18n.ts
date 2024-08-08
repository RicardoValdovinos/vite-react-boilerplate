import i18n, { type InitOptions } from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend, { type HttpBackendOptions } from "i18next-http-backend";

const i18nOptions: InitOptions<HttpBackendOptions> = {
    ns: ["home"],
    fallbackLng: "en",
    debug: true,
    interpolation: {
        escapeValue: false, // not needed for react as it escapes by default
    }
}

await i18n
    .use(initReactI18next)
    .use(LanguageDetector)
    .use(Backend)
    .init<HttpBackendOptions>(i18nOptions);
