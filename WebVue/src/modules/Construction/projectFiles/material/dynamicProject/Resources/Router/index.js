// 每一个二段板块的router单分一个js 不属于任何板块的写在这里
// !!! 此示例导入文件 <three> 不要使用 包括示例路由 没用注释掉
// import three from './three'
import matstage from './matStage'
import matinfoStage from './matinfoStage'

export default [
    // ...three,
    ...matstage,
    ...matinfoStage,
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
        path: 'orderinfo',
        name: 'orderinfo',
        component: () => import('../../MainPopup/orderinfo.vue')
    }
]
