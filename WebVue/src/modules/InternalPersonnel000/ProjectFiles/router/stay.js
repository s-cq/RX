import Library from '../Stay/Library/Resources/Router/index' // 留-库 子路由
import Stay from '../Stay/Stay/Resources/Router/index' // 留 子路由

export default [
    {
        path: 'StayLibrary',
        component: () => import('../Stay/Library/Index.vue'),
        children: Library
    },
    {
        path: 'Stay',
        component: () => import('../Stay/Stay/Index.vue'),
        children: Stay
    }
]
