import Salarys from '../Salarys/Salarys/Resources/Router/index' // 薪 子路由
export default [
    {
        path: 'Salarys',
        component: () => import('../Salarys/Salarys/Index.vue'),
        children: Salarys
    }
]

