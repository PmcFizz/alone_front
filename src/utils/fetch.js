/**
 * Created by Fizz on 2018/4/22.
 */
import axios from 'axios'
import { Modal } from 'iview'
import router from '../router'
// 创建axios实例
const service = axios.create({
  baseURL: process.env.BASE_API, // api的base_url
  timeout: 5000 // 请求超时时间
})

// request拦截器
service.interceptors.request.use(config => {
  return config
}, error => {
  // Do something with request error
  console.log(error) // for debug
  Promise.reject(error)
})

// respone拦截器
service.interceptors.response.use(
  response => {
    if (response.data.code !== 0) {
      // 1004 登录过期或未登录
      if (response.data.code === 10004) {
        Modal.confirm({
          title: '提示框',
          content: '<p>请先登录</p>',
          loading: true,
          onOk: () => {
            Modal.remove()
            router.push({ name: 'sjLogin' })
          }
        })
      } else {
        return response
      }
    } else {
      return response
    }
  },
  error => {
    console.log('err' + error)// for debug
    return Promise.reject(error)
  }
)

export default service
