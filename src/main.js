import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 导入vant
import './utils/vant'
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
