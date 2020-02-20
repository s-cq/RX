// 每一个二段板块的router单分一个js 不属于任何板块的写在这里
// !!! 此示例导入文件 <three> 不要使用 包括示例路由 没用注释掉
// import three from './three'
import state from './state'
import project from './project'
import stageInfo from './stageInfo'
import audit from './audit'
import ready from './ready'
import front from './front'
import safe from './safe'
import image from './image'
import environmental from './environmental'
import data from './data'
import inspection from './inspection'
import order from './order'

export default [
    // ...three,
    ...state,
    ...project,
    ...stageInfo,
    ...audit,
    ...ready,
    ...front,
    ...safe,
    ...image,
    ...environmental,
    ...data,
    ...inspection,
    ...order,
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
