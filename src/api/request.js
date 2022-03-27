import axios from "axios";
//1.引入进度条
import nprogress from "nprogress";
//2. 引入进度条样式
import 'nprogress/nprogress.css'

//start:进度条开始 done:进度条结束
const requests =axios.create({
    baseURL:"/api",
    timeout:5000,
});
requests.interceptors.request.use((config)=>{
    nprogress.start();
    return config;
});
requests.interceptors.response.use((res)=>{
    nprogress.done();
    return res.data;
},(error)=>{ 
    return Promise.reject(new Error('faile'));
});
export default requests;