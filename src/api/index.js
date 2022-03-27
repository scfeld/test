import requests from "./request";
import mockRequests from "./mockRequest";
//三级联动接口
///api/xx/x/xx get 无参数
export const reqCategoryList=()=> requests.get('/product/getBaseCategoryList')
export const reqSearchList=(params)=> requests({url:"/list",method:"post",data:params})
export const reqBannerList=()=> mockRequests({url:'/banner'})
export const reqFloorList=()=> mockRequests({url:'/floor'})


