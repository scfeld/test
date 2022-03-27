import axios from "axios";
//1.引入进度条
import nprogress from "nprogress";
//2. 引入进度条样式
import 'nprogress/nprogress.css'

//start:进度条开始 done:进度条结束
const mockRequests =axios.create({
    baseURL:"/mock",
    timeout:5000,
});
mockRequests.interceptors.request.use((config)=>{
    nprogress.start();
    return config;
});
mockRequests.interceptors.response.use((res)=>{
    nprogress.done();
    //console.log( res.data)
    return res.data;
},(error)=>{ 
    return Promise.reject(new Error('faile'));
});
export default mockRequests;