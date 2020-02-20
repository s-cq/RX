// 每一个二段板块的router单分一个js 不属于任何板块的写在这里
// !!! 此示例导入文件 <three> 不要使用 包括示例路由 没用注释掉
// import three from './three'
import personStage from './personStage'
import example from './example'
import stage from './stage'

export default [
    // ...three,
    ...personStage,
    ...example,
    ...stage,
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
        path: 'Jobinformation',
        name: 'Jobinformation',
        component: () => import('../../MainPopup/Jobinformation.vue')
    },
    {
        path: 'order',
        name: 'order',
        component: () => import('../../MainPopup/orderInfo.vue')
    }
]
