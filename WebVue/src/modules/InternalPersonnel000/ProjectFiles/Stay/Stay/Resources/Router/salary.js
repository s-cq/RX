export default [
    {
        path: 'salaryBasesalary',
        name: 'salaryBasesalary',
        component: () => import('../../MainPopup/salary/basesalary.vue')
    },
    {
        path: 'salaryResult',
        name: 'salaryResult',
        component: () => import('../../MainPopup/salary/result.vue')
    },
    {
        path: 'salaryProcess',
        name: 'salaryProcess',
        component: () => import('../../MainPopup/salary/process.vue')
    },
    {
        path: 'salaryRewardandpunishment',
        name: 'salaryRewardandpunishment',
        component: () => import('../../MainPopup/salary/rewardandpunishment.vue')
    },
    {
        path: 'salarySocialpublicaffairs',
        name: 'salarySocialpublicaffairs',
        component: () => import('../../MainPopup/salary/socialpublicaffairs.vue')
    },
    {
        path: 'salaryHistory',
        name: 'salaryHistory',
        component: () => import('../../MainPopup/salary/history.vue')
    },
    {
        path: 'salaryComprehensive',
        name: 'salaryComprehensive',
        component: () => import('../../MainPopup/salary/comprehensive.vue')
    },
    {
        path: 'salaryManagement',
        name: 'salaryManagement',
        component: () => import('../../MainPopup/salary/management.vue')
    },
    // 增值服务三段
    {
        path: 'superServerThree',
        component: () => import('../../MainPopup/salary/superServerThree.vue')
    }
]
