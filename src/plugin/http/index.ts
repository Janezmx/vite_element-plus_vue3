import axios from 'axios'
import router from '@/router'
const env = import.meta.env.MODE // 环境
const $http = axios.create({
  timeout: 15000
})

$http.defaults.headers.post['Content-Type'] = 'application/json; charset=utf-8'
// Add a response interceptor
$http.interceptors.request.use((config) => {
  return config
})
$http.interceptors.response.use(
  function (response) {
      const code = response.data?.code
      if (code === 0) {
          return response.data
      } else {
          return Promise.reject(response.data)
      }
  },
  function (error) {
    // Do something with response error
      const res = error.response || {status: 400}
      let message = res.data && res.data.message ? res.data.message : error
      if (res.status === 404 && res.data) {
          message = 'Not found service: ' + res.data.path
      }
      res.data = {
          code: -res.status,
          message: message
      }
      return Promise.reject(res.data)
  }
)
export default $http
