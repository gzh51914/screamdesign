import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/utils/rem'
import '@/stylesheets/main.scss'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 加载自定义指令文件directives.js
import '@/utils/directives'
Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
