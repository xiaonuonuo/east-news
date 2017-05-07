import Vue from 'vue'
import Router from 'vue-router'
import contentList from '@/components/contentList'
import contentShow from '@/components/contentShow'
import contentTest from '@/components/contentTest'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'contentList',
      component: contentList
    },
    {
    path: '/show',
    name: 'contentShow',
    component: contentShow
    },
    // {
    //   path: '/test',
    //   name: 'contentTest',
    //   component: contentTest
    // }
  ]
})
