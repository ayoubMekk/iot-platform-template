import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

Vue.config.productionTip = false

// Include plugin
Vue.use(VueRouter)

// Initialize your router

import Home from '@/components/Home' 
import Auth from '@/components/Auth' 

const vueRouter = new VueRouter({
   routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/auth',
      name: 'auth',
      component: Auth
    }

   ] // your routes
})

new Vue({
  router:vueRouter,
  render: h => h(App),
}).$mount('#app')
