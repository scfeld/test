import vue from 'vue'
import VueRouter from 'vue-router'
vue.use(VueRouter);
import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Login from '@/pages/Login'
import Register from '@/pages/Register'



let originPush = VueRouter.prototype.push;
let originReplace = VueRouter.prototype.replace;
VueRouter.prototype.push = function (location, resolve, reject) {
    if (resolve && reject) {
        originPush.call(this, location, resolve, reject);
    } else {
        originPush.call(this, location, () => {}, () => {});
    }
}
VueRouter.prototype.replace = function (location, resolve, reject) {
    if (reject && resolve) {
        originReplace.call(this.location, resolve, reject)
    } else {
        originReplace.call(this.location, () => {}, () => {})
    }
}


export default new VueRouter({
    routes: [{
        path: "/home",
        component: Home
    }, {
        name: 'search',
        path: "/search/:keyword",
        component: Search,
        props: true
    }, {
        path: "/login",
        component: Login,
        meta: {
            show: true
        }
    }, {
        path: "/register",
        component: Register,
        meta: {
            show: true
        }

    }, {
        //项目开始时默认访问home
        path: "*",
        redirect: "/home"
    }]
})