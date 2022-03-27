import Vue from 'vue'
import App from './App.vue'
// 引入路由
import router from '@/router'
// 引入全局组件
import 'swiper/css/swiper.css'
import TypeNav from '@/components/TypeNav'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
// C:\Users\Public\Desktop\project-SHP\app\src\components\TypeNav copy
//C:\Users\Public\Desktop\project-SHP\app\src\components\Carousel
import Carousel from '@/components/Carousel/'
//引入虚拟api
import '@/mock/mockServe'
import Swiper from "swiper";



//引入仓库
import store from '@/store'

// 注册全局组件
Vue.component(TypeNav.name, TypeNav)
Vue.component(Header.name, Header)
Vue.component(Footer.name, Footer)
Vue.component(Carousel.name, Carousel)
//
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  beforeCreate(){
    Vue.prototype.$bus=this
  },
  //注册路由信息 组件上会多属性 $route $router
  router,
  // 注册仓库 组件会多一个属性$store属性
  store,
}).$mount('#app')
