import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import mdiVue from 'mdi-vue'
import * as mdijs from '@mdi/js'

Vue.use(mdiVue, {
  icons: mdijs
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
