// 每一个二段板块的router单分一个js 不属于任何板块的写在这里
// !!! 此示例导入文件 <three> 不要使用 包括示例路由 没用注释掉
// import three from './three'
import scene from './scene'

export default [
    // ...three,
    ...scene,
    {
        path: 'list',
        components: {
            right: () => import('../../MainPopup/list.vue')
        }
    },
    {
        path: 'hander',
        component: () => import('../../MainPopup/hander.vue')
    },
    {
        path: 'default',
        component: () => import('../../MainPopup/default.vue')
    },
    {
        path: 'personOrder',
        name: 'personOrder',
        component: () => import('../../MainPopup/personOrderInfo.vue')
    },
    // 材料
    {
        path: 'material1',
        component: () => import('../../MainPopup/material/material1.vue')
    },
    {
        path: 'material2',
        component: () => import('../../MainPopup/material/material2.vue')
    },
    {
        path: 'material3',
        component: () => import('../../MainPopup/material/material3.vue')
    },
    {
        path: 'material4',
        component: () => import('../../MainPopup/material/material4.vue')
    },
    {
        path: 'material5',
        component: () => import('../../MainPopup/material/material5.vue')
    },
    // 质量
    {
        path: 'quality',
        component: () => import('../../MainPopup/quality/quality.vue')
    },
    // 摄像头
    {
        path: 'camera',
        component: () => import('../../MainPopup/camera/camera.vue')
    },
    // 基础
    {
        path: 'baseInfo',
        component: () => import('../../MainPopup/base/baseInfo.vue')
    },
    // 管理
    {
        path: 'administration',
        component: () => import('../../MainPopup/administration.vue')
    },
    // 客服
    {
        path: 'customerThree',
        component: () => import('../../MainPopup/customer/customerThree.vue')
    },
    {
        path: 'customerLookThree',
        component: () => import('../../MainPopup/customer/customerLookThree.vue')
    }
]
