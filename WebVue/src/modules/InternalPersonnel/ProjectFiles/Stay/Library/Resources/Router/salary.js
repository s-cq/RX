export default [
    {
        path: 'salaryBasesalary',
        component: () => import('../../MainPopup/salary/basesalary.vue')
    },
    {
        path: 'salaryProvidentfund',
        component: () => import('../../MainPopup/salary/providentfund.vue')
    },
    {
        path: 'salarySocialsecurity',
        component: () => import('../../MainPopup/salary/socialsecurity.vue')
    },
    {
        path: 'salaryPersonaltax',
        component: () => import('../../MainPopup/salary/personaltax.vue')
    }
]
