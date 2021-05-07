import Vue from 'vue'
import Router from 'vue-router'
import Homepage from '@/pages/Homepage'
import Articles from '@/pages/Articles'
import Article from '@/pages/Article'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Homepage',
      component: Homepage
    },
    {
      path: '/articles',
      name: 'Articles',
      component: Articles
    },
    {
      path: '/article/:id',
      name: 'Article',
      component: Article,
    }

    
  ]
})
