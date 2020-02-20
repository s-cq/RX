export default [
    {
        path: 'salaryBasesalary1',
        name: 'salaryBasesalary1',
        component: () => import('../../MainPopup/salary/basesalary.vue')
    },
    {
        path: 'salaryResult1',
        name: 'salaryResult1',
        component: () => import('../../MainPopup/salary/result.vue')
    },
    {
        path: 'salaryProcess1',
        name: 'salaryProcess1',
        component: () => import('../../MainPopup/salary/process.vue')
    },
    {
        path: 'salaryRewardandpunishment1',
        name: 'salaryRewardandpunishment1',
        component: () => import('../../MainPopup/salary/rewardandpunishment.vue')
    },
    {
        path: 'salarySocialpublicaffairs1',
        name: 'salarySocialpublicaffairs1',
        component: () => import('../../MainPopup/salary/socialpublicaffairs.vue')
    },
    {
        path: 'salaryHistory1',
        name: 'salaryHistory1',
        component: () => import('../../MainPopup/salary/history.vue')
    },
    {
        path: 'salaryComprehensive1',
        name: 'salaryComprehensive1',
        component: () => import('../../MainPopup/salary/comprehensive.vue')
    },
    {
        path: 'salaryManagement1',
        name: 'salaryManagement1',
        component: () => import('../../MainPopup/salary/management.vue')
    },
    // 增值服务三段
    {
        path: 'superServerThree',
        component: () => import('../../MainPopup/salary/superServerThree.vue')
    }
]
