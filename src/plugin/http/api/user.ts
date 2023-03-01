import $http from '../index'

export function fetchUserInfo(): any {
  return $http({
    url: '/resource-api/user/current',
    method: 'GET'
  })
}
export function mockLogin(params: Object): any {
  return $http({
    url: '/mobile-api/auth/mock_login',
    method: 'GET',
    params
  })
}
export function fetchProfile(): any {
  return $http({
    url: '/mobile-api/user/profiles_get',
    method: 'GET',
  })
}
