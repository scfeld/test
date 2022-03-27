//home模块仓库

// 
import { reqCategoryList } from "@/api"
import { reqBannerList } from "@/api"
import { reqFloorList } from "@/api"
const state={
    categoryList:[],
    bannerList:[],
    floorList:[]
}
const mutations={
    CATEGORYLIST(state,categoryList){
        state.categoryList=categoryList
        state.categoryList.length = 16
    },
    BANNERLIST(state,bannerList){
   // console.log("BANNERLIST")
    state.bannerList=bannerList
    //state.categoryList.length = 16
    },
    FLOORLIST(state,floorList){
        state.floorList=floorList
    },
}


//通过api里面的接口函数调用 给服务器发请求 获取服务器数据
const actions={
    async categoryList({commit}){
        let result =await reqCategoryList()
        //console.log(result) 
        if(result.code==200){
            commit("CATEGORYLIST",result.data)
        }
    },
    async bannerList({commit}){
    console.log("bannerList")

        let result =await reqBannerList()
        //console.log(result) 
        if(result.code==200){
            commit("BANNERLIST",result.data)
        }
    }, 
    async floorList({commit}){
        console.log("floorList")
    
        let result =await reqFloorList()
        //console.log(result) 
        if(result.code==200){
                commit("FLOORLIST",result.data)
        }
    }
}
const getters={}
export default {
    //namespaced:true,
    state,
    mutations,
    actions,
    getters
}