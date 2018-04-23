/***
 * Fizz 2018年4月23日17:05:42
 * 用户接口相关调用
 */
import fetch from '@/utils/fetch'

/**
 * 注册用户
 * @id 公司id
 **/
export function regiseterUser (data) {
  return fetch({
    url: '/api/account/queryAccountDetail',
    method: 'post',
    data
  })
}
