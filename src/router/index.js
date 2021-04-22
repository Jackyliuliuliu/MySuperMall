import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

const Home = () => import('../views/home/Home')
const Category = () => import('../views/category/Category')
const Cart = () => import('../views/cart/Cart')
const Profile = () => import('../views/profile/Profile')
const Detail = () => import('../views/details/Detail')


const routes = [
    {
        path: '',
        redirect: '/home'
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/category',
        component: Category
    },
    {
        path: '/cart',
        component: Cart
    },
    {
        path: '/profile',
        component: Profile
    },
    {
        path: '/detail/:id',
        component: Detail
    }
]
export default new Router({
    routes
})

/*
import(specifier) 动态加载
import函数的参数specifier，指定所要加载的模块的位置
Es6 import()返回一个Promise对象
import()函数可以用在任何地方，不仅仅是模块，非模块的脚本也可以使用，它是运行时执行，什么时候运行到了这一句，也会加载指定的
*/
