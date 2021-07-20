module.exports = [
  { text: '技术', link: '/t/' },
  { 
    text: '生活', 
    ariaLabel: '生活&运动',
    items: [
      {
        text: '运动',
        items: [
          {
            text: '跑步',
            link: '/生活/运动/跑步', 
          },
          {
            text: '羽毛球',
            link: '/生活/运动/羽毛球', 
          }
        ]
      },
      {
        text: '经济',
        items: [
          {
            text: '股票',
            link: '/经济/股票研究/',
          }
        ]
      }
    ],
  },
  { text: '读后感', link: '/读后感/', },
  { text: '一些收藏', link: '/一些收藏/', },
  { text: '意见反馈', link: 'https://github.com/deliangyang/sntflyv.github.io/issues/new'},
]