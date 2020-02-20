export default [
    {
        path: 'managementFine4',
        name: 'managementFine4',
        component: () => import('../../MainPopup/management/fine.vue')
    },
    {
        path: 'managementNegotiation4',
        name: 'managementNegotiation4',
        component: () => import('../../MainPopup/management/negotiation.vue')
    },
    {
        path: 'managementCompletion4',
        name: 'managementCompletion4',
        component: () => import('../../MainPopup/management/completion.vue')
    },
    {
        path: 'managementPreparation4',
        name: 'managementPreparation4',
        component: () => import('../../MainPopup/management/preparation.vue')
    }
]
