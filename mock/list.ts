import { MockMethod } from 'vite-plugin-mock'
export default [
    {
        url: '/resource-api/list',
        method: 'get',
        response: () => {
            return {
                "code": 0,
                "message": "error",
                "data": [
                    {
                        "id": "1",
                        "name": "admin"
                    },
                    {
                        "id": "3",
                        "name": "manager"
                    }
                ]
            }
        }
    },
    {
        url: '/resource-api/submit',
        method: 'post',
        response: () => {
            return {
                "code": 0,
                "message": "success"
            }
        }
    }
] as MockMethod[]
