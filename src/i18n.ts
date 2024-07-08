import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import translationsEN from "./locales/en/translations.json";
import translationsPT from "./locales/pt/translations.json";

const resources = {
	en: {
		translation: translationsEN,
	},
	pt: {
		translation: translationsPT,
	},
};

void i18next.use(initReactI18next).init({
	resources,
	lng: "en", //default language
});

export { default } from "i18next";
