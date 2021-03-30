import Vue from 'vue'
import App from './App.vue'
import Toast from './utils/plugins/toast/Toast'
import Loading from './utils/plugins/loading/Loading'
Vue.config.productionTip = false
Vue.use(Toast)
Vue.use(Loading)
new Vue({
  render: h => h(App),
}).$mount('#app')
