export default [
    {
        path: 'commissionFine',
        component: () => import('../../MainPopup/commission/fine.vue')
    },
    {
        path: 'commissionNegotiation',
        component: () => import('../../MainPopup/commission/negotiation.vue')
    },
    {
        path: 'commissionCompletion',
        component: () => import('../../MainPopup/commission/completion.vue')
    }
]
