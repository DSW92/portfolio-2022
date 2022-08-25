import { createI18n } from 'vue-i18n';
import pl from './pl.json';
import en from './en.json';

const i18n = createI18n({
    messages: {
        pl: pl,
        en: en,
    },
    locale: loadLocales(),
    fallbackLocale: 'pl',
});

function loadLocales() {
    let selectedLanguage = navigator.language;

    if (localStorage.getItem('lang') === 'pl') {
        return 'pl';
    } else if(localStorage.getItem('lang') === 'en') {
        return 'en';
    } else {
        return selectedLanguage.substring(0, 2);
    }
}

export default i18n
