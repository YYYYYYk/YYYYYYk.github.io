const utils = require('./utils')

module.exports = {
  base: '/blog/',
  title: '首页', // 显示在左上角的网页名称以及首页在浏览器标签显示的title名称
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
          { text: 'HTML', link: '/pages/html/01_base' },
          { text: 'CSS', link: '/pages/css/01_base' },
          { text: 'js', link: '/pages/js/01_base' },
          { text: 'vue2', link: '/pages/vue2/01_base' },
          { text: 'vue3', link: '/pages/vue3/01_base' },
          { text: 'REACT', link: '/pages/react/01_base' },
          { text: '小程序', link: '/pages/mini/01_base' },
        ],
      },
      {
        text: '前端进阶',
        items: [
          { text: 'webpack', link: '/pages/webpack/01_base' },
          { text: '工程化', link: '/pages/工程化/01' },
          { text: 'nodejs', link: '/pages/服务端/01_nodejs' },
          { text: '其他', link: '/pages/others/01_git' },
        ],
      },
      {
        text: '更多',
        items: [
          { text: '阅读', link: '/pages/reading/01_书籍' },
          { text: 'Leetcode', link: '/pages/leetcode/01_base' },
          // { text: 'TODO', link: '/pages/TODO/01_todolist' },
          { text: 'gwy', link: '/pages/gwy/01_base' },
          { text: 'ai', link: '/pages/gwy/01_对话' },
        ],
      },
      // { text: 'github', link: 'https://github.com/YYYYYYk/blog' },
    ],
    // sidebar: "auto",
    sidebar: utils.inferSiderbars(),
    sidebarDepth: 3,
  },
  plugins: [
    "vuepress-plugin-cat",
  ],
  configureWebpack: {
    resolve: {
      alias: {
        '@css': 'public'
      }
    }
  }
}
