/*
 * @Description:plop 需要 npm i plop  自动生产文件目录 npm run new
 * @Date: 2020-01-09 11:55:31
 * @LastEditTime : 2020-01-09 13:44:13
 */

const viewGenerator = require('./plop-templates/view/prompt')
const componentGenerator = require('./plop-templates/component/prompt')
const storeGenerator = require('./plop-templates/store/prompt.js')

module.exports = function(plop) {
  plop.setGenerator('view', viewGenerator)
  plop.setGenerator('component', componentGenerator)
  plop.setGenerator('store', storeGenerator)
}

