const sidebar = require('./sidebar')

module.exports = {
	title: 'sntflyv',
  description: 'thinking',
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
      { text: 'Github', link: 'https://blog.sourcedev.cc' },
    ],
    sidebar: sidebar,
  }
}
