/***
 * 2018年5月12日09:47:11
 * @Fizz
 *evaluate 评价接口
 */
import fetch from '@/utils/fetch'
// 根据id查询详情
export function queryEvaluateById (data) {
  return fetch({
    url: '/api/evaluate/queryById',
    method: 'post',
    data
  })
}

// 评价公共查询
export function commonQueryEvaluate (data) {
  return fetch({
    url: '/api/evaluate/commonQuery',
    method: 'post',
    data
  })
}

// 分页查询评价
export function queryEvaluateByPage (data) {
  return fetch({
    url: '/api/evaluate/queryByPage',
    method: 'post',
    data
  })
}

// 单个创建
export function createOneEvaluate (data) {
  return fetch({
    url: '/api/evaluate/createOne',
    method: 'post',
    data
  })
}

// 批量创建
export function batchCreateEvaluate (data) {
  return fetch({
    url: '/api/evaluate/batchCreate',
    method: 'post',
    data
  })
}

// 删除一个评价
export function delOneEvaluate (data) {
  return fetch({
    url: '/api/evaluate/delOne',
    method: 'post',
    data
  })
}

// 更新一个评价
export function updateOne (data) {
  return fetch({
    url: '/api/evaluate/updateOne',
    method: 'post',
    data
  })
}

// 获取公司评论
export function queryCompanyEvaluate (data) {
  return fetch({
    url: '/api/evaluate/queryCompanyEvaluate',
    method: 'post',
    data
  })
}
