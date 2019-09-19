import Vue from 'vue'
import App from './App.vue'
import store from './store'
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/style.css'

Vue.config.productionTip = false
Vue.use(ElementUI, { locale })

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
