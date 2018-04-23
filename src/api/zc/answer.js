/**
 * Created by Fizz on 2018/4/23.
 * 回答相关接口调用
 */
import fetch from '@/utils/fetch'

// 注册回答
export function createAnswer (data) {
  return fetch({
    url: '/api/answer/createOne',
    method: 'post',
    data
  })
}

// 分页查询回答
export function queryAnswerByPage (data) {
  return fetch({
    url: '/api/answer/queryByDataTable',
    method: 'post',
    data
  })
}

// 根据id查回答详情
export function queryAnswerById (data) {
  return fetch({
    url: '/api/answer/queryById',
    method: 'post',
    data
  })
}

// 更新回答信息
export function updateAnswerInfo (data) {
  return fetch({
    url: '/api/answer/updateOne',
    method: 'post',
    data
  })
}
