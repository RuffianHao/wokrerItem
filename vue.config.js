/*
 * @Description:
 * @Date: 2020-01-08 15:32:02
 * @LastEditTime : 2020-01-10 15:36:05
 */

const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  lintOnSave: process.env.NODE_ENV === 'development',
  configureWebpack: {
    name: 'vue-element-myAdmin',
    resolve: {
      alias: {
        '@': resolve('src') // 让'@'指向src目录
      }
    }
  }
}
