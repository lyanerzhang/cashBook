import Taro from '@tarojs/taro'

export const httpRequest = (
  url, params, method, customHeader?, isHeaderToken = true
) => {
  let headerObject = {
    'content-type': 'application/json',
    'app-type': '1',
    'token': ''
  }
  if (isHeaderToken) {
    headerObject.token = Taro.getStorageSync('token')
  }
  let header = Object.assign({}, headerObject, customHeader || {})
  return new Promise((resolve, reject) => {
    Taro.request({
      url: process.env.TARO_APP_API + url,
      data: params,
      method,
      header,
      success: (res) => {
        // 处理业务返回的数据
        if (res.data.success) {
          resolve(res.data)
        } else {
          if (res.data.error.code === 'InvalidToken') {
            Taro.reLaunch({
              url: '/pages/login/index'
            })
          } else {
            reject(res.data)
          }
        }
      },
      fail: (error) => {
        console.log('wx.request', error)
        reject(error)
      },
      complete: () => {
      }
    })
  })
}
