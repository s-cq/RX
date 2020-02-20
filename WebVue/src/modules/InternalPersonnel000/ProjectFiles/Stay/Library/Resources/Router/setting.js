export default [
    {
        path: 'settingCommission',
        component: () => import('../../MainPopup/setting/commission.vue')
    },
    {
        path: 'settingBonus',
        component: () => import('../../MainPopup/setting/bonus.vue')
    },
    {
        path: 'settingSalary',
        component: () => import('../../MainPopup/setting/salary.vue')
    },
    {
        path: 'settingLevel',
        component: () => import('../../MainPopup/setting/level.vue')
    }
]
