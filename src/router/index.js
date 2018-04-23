import Vue from 'vue'
import Router from 'vue-router'

const _import = require('./_import_' + process.env.NODE_ENV)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'zcLogin',
      component: _import('zc/login')
    },
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
      path: '/wxdl',
      name: 'WxdlHome',
      component: _import('wxdl/Home')
    },
    {
      path: '/wxdl/login',
      name: 'WxdlLogin',
      component: _import('wxdl/Login')
    },
    {
      path: '/wxdl/writeArticle',
      name: 'WxdlWriteArticle',
      component: _import('wxdl/WriteArticle')
    },
    {
      path: '/wxdl/articleDetail',
      name: 'WxdlArticleDetail',
      component: _import('wxdl/ArticleDetail')
    },
    {
      path: '/zc/index',
      name: 'zcIndex',
      component: _import('zc/zc_index')
    },
    {
      path: '/zc/ask',
      name: 'zcAsk',
      component: _import('zc/zc_ask')
    },
    {
      path: '/zc/register',
      name: 'zcRegister',
      component: _import('zc/register')
    },
    {
      path: '/zc/login',
      name: 'zcLogin',
      component: _import('zc/login')
    }
  ]
})
