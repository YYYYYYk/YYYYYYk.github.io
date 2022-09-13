module.exports = {
  base: "/blog/",
  title: "首页", // 显示在左上角的网页名称以及首页在浏览器标签显示的title名称
  description: "yk's小屋", // meta 中的描述文字，用于SEO
  // 注入到当前页面的 HTML <head> 中的标签
  head: [
    [
      "link",
      { rel: "icon", href: "/avatar.png" },
      //浏览器的标签栏的网页图标，第一个'/'会遍历public文件夹的文件
    ],
  ],
  markdown: {
    lineNumbers: false, // 是否在每个代码块的左侧显示行号。
  },
  serviceWorker: true, // 缓存页面的内容以供离线使用（仅会在生产环境中启用）
  themeConfig: {
    logo: "/avatar.png",
    // 获取每个文件最后一次 git 提交的 UNIX 时间戳(ms)，同时它将以合适的日期格式显示在每一页的底部
    lastUpdated: "lastUpdate", // string | boolean
    nav: [
      { text: "首页", link: "/" },
      {
        text: "分类",
        ariaLabel: "分类1",
        items: [
          { text: "子分类1", link: "/pages/folder1/test1.md" },
          { text: "子分类2", link: "/pages/folder2/test1.md" },
        ],
      },
      { text: "markdown-demo", link: "/pages/markdown/demo.md" },
      { text: "github", link: "https://github.com/YYYYYYk/blog" },
    ],
    sidebar: {
      "/pages/folder1/": [
        {
          title: "测试菜单1", // 必要的
          collapsable: false, // 可选的, 默认值是 true,
          sidebarDepth: 1, // 可选的, 默认值是 1
          children: [["test1.md", "子菜单1"]],
        },
      ],
    },
  },
}
