#!/usr/bin/env node

const fs = require('fs')
const path = require('path');
const { exit } = require('process');

// 文档目录
const WORK_PATH = process.argv[2] || 'docs'
// 去掉文档前缀 docs/
const re_prefix = new RegExp(`^${WORK_PATH}/?`);

// 过滤的目录
const re_skip_dir = new RegExp(`/test/`)

const travel = (dir, callback) => {
  fs.readdirSync(dir).forEach((file) => {
    var pathname = path.join(dir, file)
    if (fs.statSync(pathname).isDirectory()) {
      travel(pathname, callback)
    } else {
      if (/\.md$/.test(pathname) && !re_skip_dir.test(pathname)) {
        callback(
          pathname.replace(/\.md$/, '').replace(re_prefix, '')
        )
      }
    }
  })
}

var Node = function() {
  this.data = null
  this.children = {}
}

Node.prototype = {
  toString: function () {
    return this.data
  },

  getData: function() {
    return this.data
  },

  setData: function (ele) {
    this.data = ele
  },

  hasData: function (ele) {
    return ele in this.children
  },

  isEmpty: function () {
    return JSON.stringify(this.children) === '{}'
  },

}

var TireTree = function() {}
TireTree.prototype = {
  insert: function (node, data) {
    data.forEach((datum) => {
      if (!node.hasData(datum)) {
        node.children[datum] = new Node()
      }
      node = node.children[datum]
      node.setData(datum)
    })
  }
}

let tree = new TireTree()
let node = new Node()
travel(WORK_PATH, (pathname) => {
  tree.insert(node, pathname.split('/'))
});

const parseTree = (node, path) => {
  let result = []
  for (let sNode in node.children) {
    const datum = node.children[sNode]
    let children = []
    const title = datum.toString()
    let _path = path + '/' + datum.getData()
    if (datum.children) {
      children.push(...parseTree(datum, _path))
    }

    let hasReadMe = false
    for (let idx in children) {
      if (children[idx].title.toUpperCase() === 'README') {
        hasReadMe = true
        children.splice(idx, 1)
        if (!_path.endsWith('/')) {
          _path += '/'
        }
        break
      }
    }

    if (!hasReadMe) {
      if (children.length > 0) {
        _path = children[0]['path']
      }
  
      if (/^\/[^\/]+$/.test(_path)) {
        try {
          const stat = fs.lstatSync((WORK_PATH + _path).replace(/^\//, ''))
          if (stat.isDirectory()) {
            _path += '/'
          }
        } catch(e) {
          console.error(
            WORK_PATH,
            _path
          )
          continue
        }
      }
    }

    if (title.length <= 0) {
      continue
    }

    let tmp = {
      title: title,
      collapsable: true,
      path: _path,
    }
    if (children.length > 0) {
      tmp['children'] = children
    }
    result.push(tmp)
  }
  return result
}

let sidebar = parseTree(node, '')

let navs = ['生活', '读后感', '一些收藏', '经济', '一些想法', '关于我', ]

let navPath = {}
navs.forEach(function(nav) {
  navPath[nav] = '/' + nav + '/'
})

let newSiderBar = {}
for (let nav in navPath) {
  newSiderBar[navPath[nav]] = []
}
// 字典优先匹配原则
newSiderBar['/t/'] = []

for (let idx in sidebar) {
  let title = sidebar[idx]['title']
  let key = navPath[title] || '/t/'
  newSiderBar[key].push(sidebar[idx])
}

newSiderBar['/t/'] = newSiderBar['/t/'][0].children

let json_result = JSON.stringify(newSiderBar)
  .replace(/README/g, '')

console.log(
  'module.exports = ' + 
  json_result
)
