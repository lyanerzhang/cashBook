export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/login/index',
    'pages/user/index',
    'pages/bookkeep/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    "list": [
      {
        "pagePath": "pages/index/index",
        "text": "账单"
      },
      {
        "pagePath": "pages/bookkeep/index",
        "text": "记一笔"
      },
      {
        "pagePath": "pages/user/index",
        "text": "我的"
      }
    ]
  }
})
