const sidebar = require('./sidebar')

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
    nav: [
      { text: '首页', link: '/' },
      { text: '生活', link: '/生活/运动/跑步', },
      { text: '读后感', link: '/读后感/', },
      { text: '一些收藏', link: '/一些收藏/', },
      { text: '意见反馈', link: 'https://github.com/deliangyang/sntflyv.github.io/issues'},
    ],
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
  }
}
