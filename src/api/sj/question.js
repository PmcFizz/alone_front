/**
 * Created by Fizz on 2018/4/23.
 * 问题相关接口调用
 */
import fetch from '@/utils/fetch'

// 注册问题
export function createQuestion (data) {
  return fetch({
    url: '/api/question/createOne',
    method: 'post',
    data
  })
}

// 分页查询问题
export function queryQuestionByPage (data) {
  return fetch({
    url: '/api/question/queryByDataTable',
    method: 'post',
    data
  })
}

// 根据id查问题详情
export function queryQuestionById (data) {
  return fetch({
    url: '/api/question/queryById',
    method: 'post',
    data
  })
}

// 更新问题信息
export function updateQuestionInfo (data) {
  return fetch({
    url: '/api/question/updateOne',
    method: 'post',
    data
  })
}
