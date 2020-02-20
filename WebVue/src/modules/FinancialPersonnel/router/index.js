import Vue from 'vue'
import Router from 'vue-router'
import configRx from '@config/index.rx'

import ProjectChildren from '../modules/Project/Resources/Router/index'
// import Layout from '../modules/Layout/Resources/Router/index'
// import Manufactor from '../modules/Manufactor/Resources/Router/index'

const routerPush = Router.prototype.push
Router.prototype.push = function push (location) {
    return routerPush.call(this, location).catch(error => error)
}

Vue.use(Router)

export default new Router({
    mode: configRx.mode,
    base: configRx.base,
    routes: [
        // {
        //     path: '/',
        //     redirect: '/login'
        // },
        // // 登录
        // {
        //     path: '/login',
        //     component: () => import('../login/login.vue')
        // },
        {
            path: '/',
            redirect: '/ElementRx/project'
        },
        {
            path: '/ElementRx',
            redirect: '/ElementRx/project',
            component: () => import('../modules/Entry.vue'),
            children: [
                { // 项目
                    path: 'project',
                    component: () => import('../modules/Project/Index.vue'),
                    children: ProjectChildren
                }
                // { // 半成品
                //     path: 'Semimanufactures',
                //     component: () => import('../modules/Semimanufactures/Index.vue'),
                //     children: Index
                // },
                // { // 原料
                //     path: 'RawMaterial',
                //     component: () => import('../modules/RawMaterial/Index.vue'),
                //     children: Index
                // },
                // { // 辅料
                //     path: 'Accessories',
                //     component: () => import('../modules/Accessories/Index.vue'),
                //     children: Index
                // },
                // { // 人工
                //     path: 'Artificial',
                //     component: () => import('../modules/Artificial/Index.vue'),
                //     children: Index
                // },
                // { // 模板-后台
                //     path: 'Admin',
                //     component: () => import('../modules/Admin/Index.vue'),
                //     children: Layout
                // },
                // { // 厂家列表
                //     path: 'Manufactor',
                //     component: () => import('../modules/Manufactor/Index.vue'),
                //     children: Manufactor
                // },
                // { // 厂家列表
                //     path: 'Order',
                //     component: () => import('../modules/Order/Index.vue'),
                //     children: Manufactor
                // }
            ]
        },
        {
            path: '404',
            component: require('@rx/coreRouter/404.vue').default
        },
        {
            path: '*',
            component: require('@rx/coreRouter/redirect.vue').default
        }
    ]
})
