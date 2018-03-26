import Vue from 'vue'
import Router from 'vue-router'
import StarPage from '@/page/StarPage'
import Home from '@/page/Home'
import Movie from '@/page/Movie'
import Doc from '@/page/Doc'
import About from '@/page/About'
import pageA from '@/components/DocPage/pageA'
import pageB from '@/components/DocPage/pageB'
import pageC from '@/components/DocPage/pageC'
import BottomNav from '@/components/DocPage/BottomNav'
import subpageA from '@/components/DocPage/subPage/subpageA'


Router.prototype.goBack = function () {
  this.isBack = true
  window.history.go(-1)
}

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/Home',//重定向
      component: StarPage,
      children:[
        {
          path:'/Home',
          name: 'Home',
          component: Home
        },
        {
          path:'/Movie',
          name: 'Movie',
          component: Movie
        },
        {
          path:'/Doc',
          redirect: '/pageA',//重定向
          component: Doc,
             children:[
                {
                  
                  path:'/pageA',
                  name:'pageA',
                  component: pageA
                     
                },
                {
                  path:'/pageB',
                  name: 'pageB',
                  component: pageB
                },
                  
                {
                  path:'/pageC',
                  name: 'pageC',
                  component: pageC
                },{
                    path:'/subpageA',
                    name:'subpageA',
                    component: subpageA     
                }
              ]
        },
        {
          path:'/About',
          name: 'About',
          component: About
        }
      ]
    }
  ]
})
