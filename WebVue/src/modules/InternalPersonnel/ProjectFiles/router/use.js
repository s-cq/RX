import Library from '../Use/Library/Resources/Router/index' // 用-库 子路由
import Use from '../Use/Use/Resources/Router/index' // 用 子路由

export default [
    {
        path: 'UseLibrary',
        component: () => import('../Use/Library/Index.vue'),
        children: Library
    },
    {
        path: 'Use',
        component: () => import('../Use/Use/Index.vue'),
        children: Use
    }
]
