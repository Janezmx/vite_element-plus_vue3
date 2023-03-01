import $http from '../index'

export function fetchList(): any {
    return $http({
        url: '/resource-api/list',
        method: 'GET'
    })
}
export function submitForm(params: Object): any {
    return $http({
        url: '/resource-api/submit',
        method: 'POST',
        data: params
    })
}
