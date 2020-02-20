export default [
    {
        path: 'salaryBasesalary2',
        name: 'salaryBasesalary2',
        component: () => import('../../MainPopup/salary/basesalary.vue')
    },
    {
        path: 'salaryResult2',
        name: 'salaryResult2',
        component: () => import('../../MainPopup/salary/result.vue')
    },
    {
        path: 'salaryProcess2',
        name: 'salaryProcess2',
        component: () => import('../../MainPopup/salary/process.vue')
    },
    {
        path: 'salaryRewardandpunishment2',
        name: 'salaryRewardandpunishment2',
        component: () => import('../../MainPopup/salary/rewardandpunishment.vue')
    },
    {
        path: 'salarySocialpublicaffairs2',
        name: 'salarySocialpublicaffairs2',
        component: () => import('../../MainPopup/salary/socialpublicaffairs.vue')
    },
    {
        path: 'salaryHistory2',
        name: 'salaryHistory2',
        component: () => import('../../MainPopup/salary/history.vue')
    },
    {
        path: 'salaryComprehensive2',
        name: 'salaryComprehensive2',
        component: () => import('../../MainPopup/salary/comprehensive.vue')
    },
    {
        path: 'salaryManagement2',
        name: 'salaryManagement2',
        component: () => import('../../MainPopup/salary/management.vue')
    },
    // 增值服务三段
    {
        path: 'superServerThree',
        component: () => import('../../MainPopup/salary/superServerThree.vue')
    }
]
