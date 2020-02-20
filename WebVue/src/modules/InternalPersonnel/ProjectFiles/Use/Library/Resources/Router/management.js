export default [
    {
        path: 'managementPenalty',
        component: () => import('../../MainPopup/management/penalty.vue')
    },
    {
        path: 'managementNegotiation',
        component: () => import('../../MainPopup/management/negotiation.vue')
    }
]
