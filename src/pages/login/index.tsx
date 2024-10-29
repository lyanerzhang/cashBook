import { View } from '@tarojs/components'
import Taro, { useLoad } from '@tarojs/taro'
import './index.scss'
import { AtForm, AtInput, AtButton } from 'taro-ui'
import { useState } from 'react'
import { login } from '@/api/login'

export default function Login() {

  useLoad(() => {
    console.log('Page loaded.')
  })
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const onSubmit = (e) => {
    console.log(e)
    Taro.login({
      success(res) {
        if (res.code) {
          handleLogin(res.code)
          // Taro.getUserInfo({
          //   success(userinfo) {
          //     console.log('获取用户信息', userinfo)
          //     handleLogin(res.code)
          //   },
          //   fail(usererror) {
          //     console.log('获取用户信息失败', usererror)
          //   }
          // })
        }
      },
      fail(err) {
        console.log('登录失败', err)
      }
    })
  }
  const handleLogin = (code) => {
    login({
      username,
      password,
      code
    }).then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
  }

  return (
    <View className='login-wrap'>
      xxxx
      <AtButton onClick={onSubmit}>登录</AtButton>
    </View>
  )
}
