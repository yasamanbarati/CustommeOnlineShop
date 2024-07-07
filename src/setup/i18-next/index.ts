import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import translationPersian from "./local-language/persian/translation.json"

const resources = {
  fa: {
    translation: translationPersian,
  },
}

i18n.use(initReactI18next).init({
  resources,
  lng: "fa",
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
})
export default i18n
