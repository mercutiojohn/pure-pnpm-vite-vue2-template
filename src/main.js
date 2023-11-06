import Vue from 'vue'
import App from './App.vue'

// Style
import './style.css'

// i18n support
import i18n from './plugin/i18n'

// Vuex
import store from "@/store"

// VueRouter
import router from '@/router'

// plugins
import '@/plugin'

Vue.config.productionTip = false

new Vue({
  store,
  router,
  i18n,
  render: h => h(App),
}).$mount('#app')

