import Vue from 'vue'
import Router from 'vue-router'
import configRx from '@config/index.rx'
import routerChildren from '../ProjectFiles/router/index'

Vue.use(Router)
const originalPush = Router.prototype.push
Router.prototype.push = function push (location) {
    return originalPush.call(this, location).catch(err => err)
}

const route = new Router({
    mode: configRx.mode,
    base: configRx.base,
    routes: [
        {
            path: '/',
            redirect: '/login'
        },
        // 登录
        {
            path: '/login',
            component: () => import('../login/login.vue')
        },
        {
            path: '/Engineering',
            redirect: '/Engineering/Personnel',
            component: () => import('../Entry.vue'),
            children: routerChildren
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

export default route
