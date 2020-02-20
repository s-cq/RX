export default [
    {
        path: 'financeReceive',
        component: () => import('../../MainPopup/finance/threePopup/receive.vue')
    },
    {
        path: 'financeProcess',
        component: () => import('../../MainPopup/finance/threePopup/process.vue')
    },
    {
        path: 'financeResult',
        component: () => import('../../MainPopup/finance/threePopup/result.vue')
    }
]
