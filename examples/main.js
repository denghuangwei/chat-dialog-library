import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ChatDialog from '../packages'
Vue.use(ChatDialog)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
