/*
 * @Description:导入需要的element组件
 * @Date: 2020-01-10 15:19:48
 * @LastEditTime : 2020-01-10 16:35:06
 */
// 导入自己需要的组件
import { Container, Header, Main, Footer, Collapse, Button } from 'element-ui'
const element = {
  install: function(Vue) {
    Vue.use(Container)
    Vue.use(Header)
    Vue.use(Main)
    Vue.use(Footer)
    Vue.use(Collapse)
    Vue.use(Button)
  }
}
export default element
