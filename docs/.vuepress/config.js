const utils = require('./utils')

module.exports = {
  base: '/blog/',
  title: '前端小屋', // 显示在左上角的网页名称以及首页在浏览器标签显示的title名称
  description: "yk's前端小屋", // meta 中的描述文字，用于SEO
  // 注入到当前页面的 HTML <head> 中的标签
  head: [
    [
      'link',
      { rel: 'icon', href: '/avatar.png' },
      //浏览器的标签栏的网页图标，第一个'/'会遍历public文件夹的文件
    ],
  ],
  markdown: {
    lineNumbers: false, // 是否在每个代码块的左侧显示行号。
  },
  serviceWorker: true, // 缓存页面的内容以供离线使用（仅会在生产环境中启用）
  themeConfig: {
    logo: '/avatar.png',
    // 获取每个文件最后一次 git 提交的 UNIX 时间戳(ms)，同时它将以合适的日期格式显示在每一页的底部
    lastUpdated: '上次更新: ', // string | boolean
    nav: [
      { text: '首页', link: '/' },
      {
        text: '前端基础',
        items: [
          { text: 'HTML', link: '' },
          { text: 'CSS', link: '' },
          { text: 'js', link: '' },
          { text: 'VUE', link: '' },
          { text: 'REACT', link: '' },
          { text: '小程序', link: '' },
        ],
      },
      {
        text: '前端进阶',
        items: [
          { text: 'nodejs', link: '' },
          { text: 'webpack', link: '' },
          { text: '工程化', link: '' },
          { text: '服务端', link: '' },
          { text: '其他', link: '' },
        ],
      },
      {
        text: '面试',
        link: '',
      },
      {
        text: '更多',
        items: [
          { text: '书签', link: '/pages/website/' },
          { text: '阅读', link: '/pages/reading/书籍' },
        ],
      },
      { text: 'github', link: 'https://github.com/YYYYYYk/blog' },
    ],
    // sidebar: "auto",
    sidebar: utils.inferSiderbars(),
    sidebarDepth: 3,
  },
}
