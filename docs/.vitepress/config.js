const sidebar = require('./sidebar')
const nav = require('./nav')
const t = require('./t')
var moment = require('moment')
var taskLists = require('markdown-it-task-lists');
import { defineConfig } from 'vitepress'
import { MermaidMarkdown } from './theme/mermaid-markdown'
import mathMarkdown from 'markdown-it-mathjax3'

export default defineConfig({
  title: 'sntflyv的技术博客',
  description: 'thinking,技术分析,日常总结,杂七杂八',
  base: '/',
  lastUpdated: true,
  head: [
    ['link', { rel: 'stylesheet', href: 'https://qiniu.techgrow.cn/readmore/dist/readmore.css' },],
    ['script', { src: 'https://qiniu.techgrow.cn/readmore/dist/readmore.js', type: 'text/javascript' }],
    ['script', {}, `var regex = /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
    var isMobile = navigator.userAgent.match(regex);
    if (!isMobile) {
        try {
            var plugin = new ReadmorePlugin();
            plugin.init({
                blogId: "68666-8681174435998-054",
                name: "sntflyv",
                keyword: "验证码",
                qrcode: "https://blog.sourcedev.cc/assets/qrcode.68d8a560.jpeg",
                type: "vuepress v2",
                height: "auto",
                expires: "365",
                interval: "60",
                random: "1",
                pjaxSelector: "main.main"
            })
        } catch (e) {
            console.warn("readmore plugin occurred error: " + e.name + " | " + e.message);
        }
    }`],
  ],
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
        dateOptions: {
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
  ],
  markdown: {
    math: true,
    lineNumbers: true,
    toc: { level: [1, 2, 3] },
    config: md => {
      // md.use(require('markdown-it-mermaid'))
      md.use(MermaidMarkdown).use(taskLists).use(mathMarkdown)
    }
  },
  extraWatchFiles: [
    // 相对路径貌似不得行，还是用绝对路径ok
    __dirname + '/sidebar.js',
    __dirname + '/nav.js',
  ],
})
