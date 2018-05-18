/***
 * 2018年5月12日09:47:11
 * @Fizz
 *company 公司接口
 */
import fetch from '@/utils/fetch'
// 根据id查询详情
export function queryCompanyById (data) {
  return fetch({
    url: '/api/company/queryById',
    method: 'post',
    data
  })
}

// 公司公共查询
export function commonQuery (data) {
  return fetch({
    url: '/api/company/queryById',
    method: 'post',
    data
  })
}

// 分页查询公司
export function queryCompanyByPage (data) {
  return fetch({
    url: '/api/company/queryByPage',
    method: 'post',
    data
  })
}

// 单个创建
export function createOne (data) {
  return fetch({
    url: '/api/company/createOne',
    method: 'post',
    data
  })
}

// 批量创建
export function batchCreate (data) {
  return fetch({
    url: '/api/company/batchCreate',
    method: 'post',
    data
  })
}

// 删除一个公司
export function delOne (data) {
  return fetch({
    url: '/api/company/delOne',
    method: 'post',
    data
  })
}

// 更新一个公司
export function updateOne (data) {
  return fetch({
    url: '/api/company/updateOne',
    method: 'post',
    data
  })
}

// 分页查询
export function queryByPage (data) {
  return fetch({
    url: '/api/company/queryByPage',
    method: 'post',
    data
  })
}
