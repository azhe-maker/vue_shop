import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/global.css'
import ElementUi from 'element-ui'
import './plugins/element.js'
import 'element-ui/lib/theme-chalk/index.css'
// 导入字体资源
import './assets/fonts/iconfont.css'
import axios from 'axios'
Vue.prototype.$http = axios
// 配置项目请求的根路径
axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/'
Vue.config.productionTip = false
Vue.use(ElementUi)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
