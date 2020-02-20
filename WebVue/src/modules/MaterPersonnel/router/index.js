import Vue from 'vue'
import Router from 'vue-router'
import configRx from '@config/index.rx'

import personChildren from '../projectFiles/Person/dynamicProject/Resources/Router/index'
// import personnelChildren from '../projectFiles/personnel/dynamicProject/Resources/Router/index'
// import materialChildren from '../projectFiles/material/dynamicProject/Resources/Router/index'
// import qualityChildren from '../projectFiles/quality/dynamicProject/Resources/Router/index'
// import sceneChildren from '../projectFmeetingChildreniles/scene/dynamicProject/Resources/Router/index'

import meetingChildren from '../projectFiles/Meeting/dynamicProject/Resources/Router/index'
import Library from '../projectFiles/Library/Resources/Router/index'
import UseChildren from '../projectFiles/Use/dynamicProject/Resources/Router/index'
import praemfngChildren from '../projectFiles/praemfng/dynamicProject/Resources/Router/index'

import StayChildren from '../projectFiles/Stay/dynamicProject/Resources/Router/index'

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
            redirect: '/projectFiles'
        },
        // 项目
        {
            path: '/projectFiles',
            redirect: '/projectFiles/Person',
            component: () => import('../Entry.vue'),
            children: [
                { // 人事
                    path: 'Person',
                    component: () => import('../projectFiles/Person/dynamicProject/Index.vue'),
                    children: personChildren
                },
                { // 招聘
                    path: 'Recruit',
                    component: () => import('../projectFiles/Recruit/Index.vue')
                },
                { // 培训
                    path: 'Cultivate',
                    component: () => import('../projectFiles/Cultivate/Index.vue')
                },
                { // 留
                    path: 'Stay',
                    component: () => import('../projectFiles/Stay/dynamicProject/Index.vue'),
                    children: StayChildren
                },
                { // 用
                    path: 'Use',
                    component: () => import('../projectFiles/Use/dynamicProject/Index.vue'),
                    children: UseChildren
                },
                { // 库
                    path: 'praemfng',
                    component: () => import('../projectFiles/praemfng/dynamicProject/Index.vue'),
                    children: praemfngChildren
                },
                { // 离职
                    path: 'Quit',
                    component: () => import('../projectFiles/Quit/Index.vue')
                },
                { // 罚款
                    path: 'Fine',
                    component: () => import('../projectFiles/Fine/Index.vue')
                },
                { // 押金
                    path: 'Deposit',
                    component: () => import('../projectFiles/Deposit/Index.vue')
                },
                { // 新闻后台
                    path: 'Journalism',
                    component: () => import('../projectFiles/Journalism/Index.vue')
                },
                { // 城
                    path: 'City',
                    component: () => import('../projectFiles/City/Index.vue')
                },
                { // 项目
                    path: 'Meeting',
                    component: () => import('../projectFiles/Meeting/dynamicProject/Index.vue'),
                    children: meetingChildren
                },
                { // 库
                    path: 'Library',
                    component: () => import('../projectFiles/Library/Index.vue'),
                    children: Library
                }
            ]
        },
        {
            path: '/Library',
            redirect: '/projectFiles/Library',
            component: () => import('../Entry.vue'),
            children: [
                { // 库
                    path: 'Library',
                    component: () => import('../projectFiles/Library/Index.vue')
                }
            ]
        },
        {
            path: '*',
            component: require('@rx/coreRouter/redirect.vue').default
        }
    ]
})

export default route
