import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// jQuery und Bootstrap
import jQuery from 'jquery'
global.jQuery = jQuery
global.$ = jQuery

require('bootstrap')

// new Vue({
//     el: '#app',
//     render: h => h(App)
// })

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')