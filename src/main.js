import Vue from 'vue'
import App from './App.vue'

//插件
import Toast from './utils/plugins/toast/Toast'
import Loading from './utils/plugins/loading/Loading'
import ZyxButton from './utils/plugins/button/ZyxButton'

//指令
import './utils/directives/focus'
Vue.config.productionTip = false

//插件
Vue.use(Toast)
Vue.use(Loading)
Vue.use(ZyxButton)

new Vue({
  render: h => h(App),
}).$mount('#app')
