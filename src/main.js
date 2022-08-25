import 'bootstrap/dist/css/bootstrap-grid.min.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './vuex';


import pl from './i18n/pl.json';
import en from './i18n/en.json';
import { createI18n } from 'vue-i18n';

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
        return selectedLanguage;
    }
}

console.log('locale lang:' + " " + loadLocales());

const app = createApp(App);

app.use(router);
app.use(store);
app.use(i18n);

app.mount('#app');
