import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { VueMasonryPlugin } from 'vue-masonry'
import './assets/css/style.css'

Vue.config.productionTip = false
Vue.use(VueMasonryPlugin)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
