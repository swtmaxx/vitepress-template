import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "文档 - swtmax",
  srcDir: 'pages',
  outDir: 'dist',
  ignoreDeadLinks: true,
  cleanUrls: true,
  head: [
    [
      'script',
      {
        defer: '',
        src: 'https://umami.swtmax.top/script.js',
        'data-website-id': '0c712547-e299-4871-95d1-f1d2ae7e4bdc'
      }
    ]
  ],
  themeConfig: {
    nav: [
      { text: '主页', link: '/' }
    ],
  }
})
