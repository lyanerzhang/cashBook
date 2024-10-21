import { PropsWithChildren } from 'react'
import { useLaunch } from '@tarojs/taro'
import Taro from '@tarojs/taro'
import './app.scss'

function App({ children }: PropsWithChildren<any>) {

  useLaunch(() => {
    console.log('App launched.')
    // 检查是否登录
    if (Taro.getStorageSync('token')) {// 已登录——首页
      Taro.reLaunch({
        url: '/pages/index/index'
      })
    } else {// 未登录——登录页
      Taro.reLaunch({
        url: '/pages/login/index'
      })
    }
  })
  // children 是将要会渲染的页面
  return children
}

export default App
