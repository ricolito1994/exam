import { createApp } from 'vue'
import App from './App.vue'
import router from '@/services/router';
import store from '@/services/store';
import Vuex from 'vuex';
import "../node_modules/bootstrap/dist/css/bootstrap.css";


const app = createApp(App)
app.use(Vuex)
app.use(store)
app.use(router)

app.mount('#app')

store.dispatch('setUserFromStorage');
