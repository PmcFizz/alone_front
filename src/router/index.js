import Vue from 'vue'
import Router from 'vue-router'
import Layout from '../views/shijiang/sj_layout'

const _import = require('./_import_' + process.env.NODE_ENV)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: 'sj/register'
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
      path: '/sj/interfaceDoc',
      name: 'sjInterfaceDoc',
      component: _import('interfaceDoc/sj_interface')
    },
    {
      path: '/sj',
      name: 'home',
      component: Layout,
      children: [
        {
          path: 'index',
          name: 'sjIndex',
          component: _import('shijiang/sj_index')
        },
        {
          path: 'ask',
          name: 'sjAsk',
          component: _import('shijiang/sj_ask')
        },
        {
          path: 'userManage',
          name: 'sjUserManage',
          component: _import('shijiang/user_manage')
        },
        {
          path: 'evaluate',
          name: 'sjEvaluate',
          component: _import('shijiang/sj_evaluate')
        },
        {
          path: 'company/:id',
          name: 'sjCompany',
          component: _import('shijiang/sj_company')
        }
      ]
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
    }
  ]
})
