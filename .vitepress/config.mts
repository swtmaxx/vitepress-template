import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "文档 - swtmax",
  srcDir: 'pages',
  outDir: 'dist',
  ignoreDeadLinks: true,
  cleanUrls: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    outline: {
      level: [1, 3],    // 显示 h1 到 h3 级别的标题
    },
    nav: [
      { text: '主页', link: '/' },
      { text: '快速开始', link: '/快速开始' },
      { text: '进入服务器', link: '/进入服务器' }
    ],
  }
})
