import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  base: '/',
  routes: [
    {
      path: '/',
      component: require('@/pages/index')
    },
    {
      path: '/download',
      component: require('@/pages/download'),
    }]
})