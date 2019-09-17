import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.config.productionTip = false
Vue.use(Router)
Vue.use(BootstrapVue)
new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')


