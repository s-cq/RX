import Personnel from '../Personnel/Personnel/Resources/Router/index' // 人 子路由
import Account from '../Personnel/Account/Resources/Router/index' // 账 子路由
export default [
    {
        path: 'Personnel',
        component: () => import('../Personnel/Personnel/Index.vue'),
        children: Personnel
    },
    {
        path: 'Account',
        component: () => import('../Personnel/Account/Index.vue'),
        children: Account
    }
]

