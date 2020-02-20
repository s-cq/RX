// 每一个二段板块的router单分一个js 不属于任何板块的写在这里
// !!! 此示例导入文件 <three> 不要使用 包括示例路由 没用注释掉
// import three from './three'
import state from './state'
import twoTab1 from './twoTab1'
import twoTab2 from './twoTab2'

export default [
    // ...three,
    ...state,
    ...twoTab1,
    ...twoTab2,
    {
        path: 'addPage',
        components: {
            center: () => import('../../MainPopup/layout.vue')
        }
    },
    {
        path: 'list',
        components: {
            right: () => import('../../MainPopup/list.vue')
        }
    },
    {
        path: 'hander',
        component: () => import('../../MainPopup/hander.vue')
    }
]
