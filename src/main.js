import { createApp } from 'vue'
import App from './App.vue'
import router from '@/services/router';
import store from '@/services/store';
import Vuex from 'vuex';
import 'jquery';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import '@/assets/topnav.styles.css';
const app = createApp(App)
app.use(Vuex)
app.use(store)
app.use(router)

app.mount('#app')

store.dispatch('setUserFromStorage');
