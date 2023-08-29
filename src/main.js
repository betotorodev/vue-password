import Vue from 'vue'

import App from './App.vue'
import router from './router'
import { createPinia, PiniaVuePlugin } from "pinia"
import './assets/main.css'

Vue.use(PiniaVuePlugin);
const pinia = createPinia();

new Vue({
  router,
  pinia,
  render: (h) => h(App)
}).$mount('#app')
