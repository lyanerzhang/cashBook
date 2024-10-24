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
          Taro.getUserInfo({
            success(userinfo) {
              console.log('获取用户信息', userinfo)
              handleLogin(res.code)
            },
            fail(usererror) {
              console.log('获取用户信息失败', usererror)
            }
          })
        }
      },
      fail(err) {
        console.log('登录失败', err)
      }
    })
    // if (username && password) {
    //   handleLogin()
    // } else {
    //   Taro.showToast({
    //     title: '请输入账号和密码',
    //     icon: 'none'
    //   })
    // }
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

  const onReset = (e) => {
    console.log(e)
  }
  const usernameChange = (e) => {
    console.log(e)
    setUsername(e)
  }
  const passwordChange = (e) => {
    setPassword(e)
  }

  return (
    <View className='login-wrap'>
      <AtForm
        onSubmit={onSubmit}
        onReset={onReset}
      >
        <AtInput 
          name='value'
          title='用户名' 
          type='text' 
          placeholder='请填写'
          value={username} 
          onChange={usernameChange} 
        />
        <AtInput 
          name='value' 
          title='密码' 
          type='text' 
          placeholder='请填写'
          value={password} 
          onChange={passwordChange} 
        />
        <AtButton formType='submit'>登录</AtButton>
      </AtForm>
    </View>
  )
}
