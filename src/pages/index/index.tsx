import { View, Text } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import './index.scss'

export default function Index() {

  useLoad(() => {
    console.log('Page loaded.')
  })
  const toLogin = function() {
    console.log('xxx')
  }

  return (
    <View className='index'>
      <Text onClick={toLogin}>Hello world!</Text>
    </View>
  )
}
