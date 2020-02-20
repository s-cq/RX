export default [
    {
        path: 'phaseCompletion',
        component: () => import('../../MainPopup/phase/completion.vue')
    },
    {
        path: 'phaseDeposit',
        component: () => import('../../MainPopup/phase/deposit.vue')
    },
    {
        path: 'phaseGuarantee',
        component: () => import('../../MainPopup/phase/guarantee.vue')
    },
    {
        path: 'phaseOrder',
        component: () => import('../../MainPopup/phase/order.vue')
    },
    {
        path: 'phaseSecurity',
        component: () => import('../../MainPopup/phase/security.vue')
    }
]
