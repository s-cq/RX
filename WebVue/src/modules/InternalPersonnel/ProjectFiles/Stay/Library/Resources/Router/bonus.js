export default [
    {
        path: 'bonusReceipt',
        component: () => import('../../MainPopup/bonus/receipt.vue')
    },
    {
        path: 'bonusPreparation',
        component: () => import('../../MainPopup/bonus/preparation.vue')
    },
    {
        path: 'bonusCompletioninspection',
        component: () => import('../../MainPopup/bonus/completioninspection.vue')
    }
]
