import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import store from './store/store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// 插件
import Toast from './utils/plugins/toast/Toast'
import Loading from './utils/plugins/loading/Loading'
import ZyxButton from './utils/plugins/button/ZyxButton'
import Empty from './utils/plugins/empty/Empty'
// 指令
import './utils/directives/focus'
import './utils/directives/permission'
import router from './router'

Vue.config.productionTip = false
Vue.use(ElementUI)
// 插件
Vue.use(Toast)
Vue.use(Loading)
Vue.use(ZyxButton)
Vue.use(Empty)

Vue.use(Vuex)

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
