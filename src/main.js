import 'bootstrap/dist/css/bootstrap-grid.min.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './vuex';

const app = createApp(App);

app.use(router);
app.use(store);

app.mount('#app');
