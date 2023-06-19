const sidebar = require('./sidebar')
const nav = require('./nav')
const t = require('./t')
var moment = require('moment')
import { readmorePlugin } from 'vuepress-plugin-readmore-popular-next'
import { defineConfig } from 'vitepress'
import { MermaidMarkdown } from './theme/mermaid-markdown'

export default defineConfig({
	title: 'sntflyv的技术博客',
  description: 'thinking,技术分析,日常总结,杂七杂八',
  base: '/',
  lastUpdated: true,
  themeConfig: {
    appearance: 'dark',
    search: true,
    searchMaxSuggestions: 10,
    editLink: {
      pattern: "https://github.com/deliangyang/sntflyv.github.io/edit/master/docs/:path",
      text: "Edit this page on Github"
    },
    repo: 'https://github.com/deliangyang/sntflyv.github.io/tree/master/docs',
    repoLabel: '更新:' + moment(t.lastTime).utcOffset("+08:00").format('YYYY-MM-DD HH:mm:ss'),
    docsRepo: 'https://github.com/deliangyang/sntflyv.github.io',
		docsDir: 'docs',
    docsBranch: 'master',
    editLinks: true,
    editLinkText: 'Edit this page on GitLab',
    nav: nav,
    sidebar: sidebar,
  },
  plugins: [
    [
      '@vuepress/last-updated',
      {
        dateOptions:{
          hour12: false
        }
      }
    ],
    '@vuepress/back-to-top',
    'mermaidjs',
    [ 
      '@vuepress/search', {
        searchMaxSuggestions: 10,
        searchHotkeys: ['/', 's'],
      }
    ],
    readmorePlugin({
      // 已申请的博客 ID
      blogId: '68666-8681174435998-054',
      // 已申请的微信公众号名称
      name: 'sntflyv',
      // 已申请的微信公众号回复关键词
      keyword: '验证码',                    
      // 已申请的微信公众号二维码链接
      qrcode: 'https://blog.sourcedev.cc/assets/gzh.4626a00e.png',
      // 文章内容的 JS 选择器，若使用的不是官方默认主题，则需要根据第三方的主题来设置
      selector: 'div.theme-default-content',
      // 自定义的 JS 资源链接，可用于 CDN 加速
      libUrl: 'https://qiniu.techgrow.cn/readmore/dist/readmore.js',
      // 自定义的 CSS 资源链接，可用于适配不同风格的博客
      cssUrl: 'https://qiniu.techgrow.cn/readmore/dist/vuepress2.css',
      // 文章排除添加引流工具的 URL 规则，支持使用路径、通配符、正则表达式的匹配规则
      excludes: { strExp: [], regExp: [] },
      // 是否反转 URL 排除规则的配置，即只有符合排除规则的文章才会添加引流工具
      reverse: false,
      // 文章内容的预览高度(例如 300)
      height: 'auto',
      // 文章解锁后凭证的有效天数
      expires: 365,
      // 定时校验凭证有效性的时间间隔（秒）
      interval: 60,
      // 每篇文章随机添加引流工具的概率，有效范围在 0.1 ~ 1 之间，1 则表示所有文章默认都自动添加引流工具
      random: 1
    })
  ],
  markdown: {
    lineNumbers: true,
    toc: { level: [1, 2, 3] },
    config: md => {
      // md.use(require('markdown-it-mermaid'))
      md.use(MermaidMarkdown)
    }
  },
  extraWatchFiles: [
    // 相对路径貌似不得行，还是用绝对路径ok
    __dirname + '/sidebar.js',
    __dirname + '/nav.js',
  ],
})
