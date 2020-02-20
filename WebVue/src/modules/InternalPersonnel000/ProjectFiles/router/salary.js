import Salary from '../Salary/Salary/Resources/Router/index' // 薪 子路由
import Area from '../Salary/Area/Resources/Router/index' // 薪 子路由
export default [
    {
        path: 'Salary',
        component: () => import('../Salary/Salary/Index.vue'),
        children: Salary
    },
    {
        path: 'Area',
        component: () => import('../Salary/Area/Index.vue'),
        children: Area
    }
]

