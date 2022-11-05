const sidebar = require('./sidebar')
const nav = require('./nav')
const t = require('./t')
var moment = require('moment')

import { defineConfig } from 'vitepress'


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
    ]
  ],
  markdown: {
    config: md => {
      // md.use(require('markdown-it-mermaid'))
    }
  },
  extraWatchFiles: [
    // 相对路径貌似不得行，还是用绝对路径ok
    __dirname + '/sidebar.js',
    __dirname + '/nav.js',
  ],
})
