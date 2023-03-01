import { MockMethod } from 'vite-plugin-mock'
export default [
  {
    url: '/resource-api/user/current',
    method: 'get',
    response: () => {
      return {
        "code": 0,
        "message": "success",
        "data": {
          "userid": "1",
          "username": "admin"
        }
      }
    }
  }
] as MockMethod[]
