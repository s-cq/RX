import Vue from 'vue'
import Router from 'vue-router'
import configRx from '@config/index.rx'
import projectChildren from '../ProjectFiles/Router/index.js'

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
            redirect: '/ProjectFiles'
        },
        {
            path: '/ProjectFiles',
            redirect: '/ProjectFiles/Project',
            component: () => import('../Entry.vue'),
            children: projectChildren
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
