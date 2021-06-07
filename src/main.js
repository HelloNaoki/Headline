import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 导入vant
import './utils/vant'

// 导入amfe-flexible
import 'amfe-flexible'

// 导入全局通用样式
import './styles/base.less'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
