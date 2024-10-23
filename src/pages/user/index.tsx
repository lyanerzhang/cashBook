import { View, Text, RadioGroup, Radio } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import './index.scss'

export default function Login() {

  useLoad(() => {
    console.log('Page loaded.')
  })

  return (
    <View className='login-wrap'>
      <View>xx</View>
    </View>
  )
}
