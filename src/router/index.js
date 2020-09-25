import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '@/components/Index'
import Map from '@/components/canvas/map'
import Calculator from '@/components/calculator/index'
import Video from '@/components/video/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }, {
      path: '/index',
      name: 'index',
      component: Index
    }, {
      path: '/canvas/map',
      name: 'map',
      component: Map
    }, {
      path: '/calculator/index',
      name: 'calculator',
      component: Calculator
    }, {
      path: '/video/index',
      name: 'video',
      component: Video
    }
  ]
})
