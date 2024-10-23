import { httpRequest } from '../service/request'

export function checkLogin(params) {
  return httpRequest('api/ec/iam/passport/check_login', params, 'POST')
}
export function login(params) {
  return httpRequest('/api/user/login', params, 'POST')
}