const sidebar = require('./sidebar')
const nav = require('./nav')

module.exports = {
	title: 'sntflyv | 技术博客',
  description: 'thinking,技术分析,日常总结,杂七杂八',
  base: '/',
  themeConfig: {
    repo: 'https://github.com/deliangyang/sntflyv.github.io/tree/master/docs',
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
      md.use(require('markdown-it-mermaid'))
    }
  },
  extraWatchFiles: [
    // 相对路径貌似不得行，还是用绝对路径ok
    __dirname + '/sidebar.js',
    __dirname + '/nav.js',
  ],
}
