import translationEN from "./en/transltion.json";
import translationAR from "./ar/transltion.json";
//مهمة مشان i18n
export const resources = {
  en: {
    translation: translationEN,
    label: "Eng",
  },
  ar: {
    translation: translationAR,
    label: "Ar",
  },
};
// مهمة مشان الكبسة يلي بتبدل اللغة
export const languages = [
  {
    key: "en",
    label: "English",
  },
  {
    key: "ar",
    label: "العربية",
  },
];
