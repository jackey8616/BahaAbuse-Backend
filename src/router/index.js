import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import ArticleList from '@/components/ArticleList'
import ArticleInfo from '@/components/ArticleInfo'

Vue.use(Router)

export default new Router({
  routes: [
    /* {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    } */
    {
      path: '/article-list',
      name: 'Article-List',
      component: ArticleList
    },
    {
      path: '/article-info/:php/:bsn/:snA/:tnum?',
      name: 'Article-info',
      component: ArticleInfo
    }
  ]
})
