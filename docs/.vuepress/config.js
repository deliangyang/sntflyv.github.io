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
      { text: 'Home', link: '/' },
    ],
    sidebar: sidebar,
  }
}
