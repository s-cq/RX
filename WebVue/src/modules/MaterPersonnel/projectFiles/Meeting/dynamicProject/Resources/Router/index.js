// 每一个二段板块的router单分一个js 不属于任何板块的写在这里
// !!! 此示例导入文件 <three> 不要使用 包括示例路由 没用注释掉
// import three from './three'
import result from './result'
import income from './income'
import expenditure from './expenditure'
import vault from './vault'
import division from './division'
import withdrawal from './withdrawal'
import personnel from './personnel'

export default [
    // ...three,
    ...result,
    ...income,
    ...expenditure,
    ...vault,
    ...division,
    ...withdrawal,
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
