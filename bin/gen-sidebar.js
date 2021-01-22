#!/usr/bin/env node

const fs = require('fs')
const path = require('path')

// 文档目录
const WORK_PATH = process.argv[2] || 'docs'
// 去掉文档前缀 docs/
const re_prefix = new RegExp(`^${WORK_PATH}/?`);

const travel = (dir, callback) => {
  fs.readdirSync(dir).forEach((file) => {
    var pathname = path.join(dir, file)
    if (fs.statSync(pathname).isDirectory()) {
      travel(pathname, callback)
    } else {
      if (/\.md$/.test(pathname) && !/party-api/.test(pathname) && !/IM/.test(pathname)) {
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
    return this.data === 'README'
      ? ''
      : this.data
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

let json_result = JSON.stringify(sidebar)
  .replace(/README/g, '')

console.log(
  'module.exports = ' + json_result
)
