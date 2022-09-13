import 'bootstrap/dist/css/bootstrap-grid.min.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './vuex';
import i18n from './i18n/index';
import ScrollAnimation from './directives/scrollanimation';

const app = createApp(App);

app.directive('scrollanimation', ScrollAnimation);

app.use(router);
app.use(store);
app.use(i18n);

app.mount('#app');
