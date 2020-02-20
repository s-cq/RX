// 每一个二段板块的router单分一个js 不属于任何板块的写在这里
// !!! 此示例导入文件 <three> 不要使用 包括示例路由 没用注释掉
// import three from './three'
import status from './status'
import project from './project'
import stage from './stage'
import audit from './audit'
import manager from './manager'
import term from './term'
import material from './material'
import finance from './finance'
import worker from './worker'
import personnel from './personnel'


export default [
    // ...three,
    ...audit,
    ...status,
    ...project,
    ...stage,
    ...manager,
    ...term,
    ...material,
    ...finance,
    ...worker,
    ...personnel,
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
