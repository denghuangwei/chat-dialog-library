import Vue from 'vue'
import App from './App.vue'

import ChatDialog from '../packages'
Vue.use(ChatDialog)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
