import Vue from 'vue'
import Router from 'vue-router'

const _import = require('./_import_' + process.env.NODE_ENV)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'sjRegister',
      component: _import('shijiang/register')
    },
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
      path: '/shijiang/index',
      name: 'sjIndex',
      component: _import('shijiang/sj_index')
    },
    {
      path: '/sj/ask',
      name: 'sjAsk',
      component: _import('shijiang/sj_ask')
    },
    {
      path: '/sj/register',
      name: 'sjRegister',
      component: _import('shijiang/register')
    },
    {
      path: '/sj/login',
      name: 'sjLogin',
      component: _import('shijiang/login')
    },
    {
      path: '/sj/userManage',
      name: 'sjUserManage',
      component: _import('shijiang/user_manage')
    }
  ]
})
