/***
 * Fizz 2018年4月23日17:05:42
 * 用户接口相关调用
 */
import fetch from '@/utils/fetch'

// 注册用户
export function regiseterUser (data) {
  return fetch({
    url: '/api/user/createOne',
    method: 'post',
    data
  })
}

// 分页查询用户
export function queryUserByPage (data) {
  return fetch({
    url: '/api/user/query',
    method: 'post',
    data
  })
}

// 根据id查用户详情
export function queryUserById (data) {
  return fetch({
    url: '/api/user/getUserInfoById',
    method: 'post',
    data
  })
}

// 更新用户信息
export function updateUserInfo (data) {
  return fetch({
    url: '/api/user/queryAccountDetail',
    method: 'post',
    data
  })
}

// 登录
export function login (data) {
  return fetch({
    url: '/api/user/login',
    method: 'post',
    data
  })
}
