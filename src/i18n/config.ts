import i18n from "i18next";
import {useTranslation, initReactI18next} from "react-i18next";
import translation_zh from './zh.json';
import translation_en from './en.json';


const resources = {
    en: {
        translation: translation_en
    },
    zh: {
        translation: translation_zh
    }
}


i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        // the translations
        // (tip move them in a JSON file and import them,
        // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
        resources: resources,
        lng: "zh", // if you're using a language detector, do not define the lng option
        // fallbackLng: "en",
        interpolation: {
            escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
        }
    }).then();

export default i18n
