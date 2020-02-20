export default [
    {
        path: 'managementFine',
        name: 'managementFine',
        component: () => import('../../MainPopup/management/fine.vue')
    },
    {
        path: 'managementNegotiation',
        name: 'managementNegotiation',
        component: () => import('../../MainPopup/management/negotiation.vue')
    },
    {
        path: 'managementCompletion',
        name: 'managementCompletion',
        component: () => import('../../MainPopup/management/completion.vue')
    },
    {
        path: 'managementPreparation',
        name: 'managementPreparation',
        component: () => import('../../MainPopup/management/preparation.vue')
    }
]
