import { httpRequest } from '../service/request'

export function checkLogin(params) {
  return httpRequest('api/ec/iam/passport/check_login', params, 'POST')
}