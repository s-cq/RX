import Vue from 'vue'
import Router from 'vue-router'
import configRx from '@config/index.rx'

import projectChildren from '../projectFiles/project/dynamicProject/Resources/Router/index'
import orderChildren from '../projectFiles/project/orderProject/Resources/Router/index'
import orderStaticChildren from '../projectFiles/project/orderStaticProject/Resources/Router/index'
import personnelChildren from '../projectFiles/personnel/dynamicProject/Resources/Router/index'
import PersonnelLibraryChildren from '../projectFiles/personnel/libraryProject/Resources/Router/index'
import materialChildren from '../projectFiles/material/dynamicProject/Resources/Router/index'
import qualityChildren from '../projectFiles/quality/dynamicProject/Resources/Router/index'
import QualityLibraryChildren from '../projectFiles/quality/libraryProject/Resources/Router/index'
import sceneChildren from '../projectFiles/scene/dynamicProject/Resources/Router/index'
import SceneLibraryChildren from '../projectFiles/scene/libraryProject/Resources/Router/index'
import SceneDataChildren from '../projectFiles/scene/dataProject/Resources/Router/index'

import camera from './camera' // 摄像头
import print from './print' // 打印


// import projectChildren from '../projectFiles/project/Router/index'

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
        // 项目
        {
            path: '/projectFiles',
            redirect: '/projectFiles/Project',
            component: () => import('../Entry.vue'),
            children: [
                { // 项目
                    path: 'Project',
                    component: () => import('../projectFiles/project/dynamicProject/Index.vue'),
                    children: projectChildren
                },
                { // 订单
                    path: 'Order',
                    component: () => import('../projectFiles/project/orderProject/Index.vue'),
                    children: orderChildren
                },
                { // 订单模板
                    path: 'OrderStatic',
                    component: () => import('../projectFiles/project/orderStaticProject/Index.vue'),
                    children: orderStaticChildren
                },
                { // 人员
                    path: 'Personnel',
                    component: () => import('../projectFiles/personnel/dynamicProject/Index.vue'),
                    children: personnelChildren
                },
                { // 人工库
                    path: 'PersonnelLibrary',
                    component: () => import('../projectFiles/personnel/libraryProject/Index.vue'),
                    children: PersonnelLibraryChildren
                },
                { // 材料
                    path: 'Material',
                    component: () => import('../projectFiles/material/dynamicProject/Index.vue'),
                    children: materialChildren
                },
                { // 质量
                    path: 'Quality',
                    component: () => import('../projectFiles/quality/dynamicProject/Index.vue'),
                    children: qualityChildren
                },
                { // 质量库
                    path: 'QualityLibrary',
                    component: () => import('../projectFiles/quality/libraryProject/Index.vue'),
                    children: QualityLibraryChildren
                },
                { // 现场
                    path: 'Scene',
                    component: () => import('../projectFiles/scene/dynamicProject/Index.vue'),
                    children: sceneChildren
                },
                { // 现场库
                    path: 'SceneLibrary',
                    component: () => import('../projectFiles/scene/libraryProject/Index.vue'),
                    children: SceneLibraryChildren
                },
                // 现场库资料
                {
                    path: 'SceneData',
                    component: () => import('../projectFiles/scene/dataProject/Index.vue'),
                    children: SceneDataChildren
                },
                ...camera
            ]
        },
        // 打印
        ...print,
        {
            path: '*',
            component: require('@rx/coreRouter/redirect.vue').default
        }
    ]
})

export default route
