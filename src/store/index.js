//引入vue 引入vuex
import Vue from 'vue'
import Vuex from 'vuex'
import home from './home'
import search from './search'
//使用插件
Vue.use(Vuex)
//处理action 可以书写自己的业务逻辑， 也可以处理异步
const actions={}

//修改state的手段
const mutations={}

//仓库存储数据的地方
const state={}

//理解为计算属性，用于简化仓库数据，让组件获取仓库数据更加方便
const getters={}

 //对外暴露Store类的一个实例
export default new Vuex.Store({
   modules:{
        home,
        search
   }
    
})