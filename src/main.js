import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/utils/rem'
import '@/stylesheets/main.scss'
import '../src/utils/directive'
import axios from "axios";

// axios.defaults.baseURL = "http://114.215.128.76:3000";
Vue.config.productionTip = false
Vue.prototype.$axios = axios;

new Vue({
  router,
  store,

  render: h => h(App)
}).$mount('#app')
