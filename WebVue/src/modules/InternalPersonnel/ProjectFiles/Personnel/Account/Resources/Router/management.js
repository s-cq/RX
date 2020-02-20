export default [
    {
        path: 'managementFine5',
        name: 'managementFine5',
        component: () => import('../../MainPopup/management/fine.vue')
    },
    {
        path: 'managementNegotiation5',
        name: 'managementNegotiation5',
        component: () => import('../../MainPopup/management/negotiation.vue')
    },
    {
        path: 'managementCompletion5',
        name: 'managementCompletion5',
        component: () => import('../../MainPopup/management/completion.vue')
    },
    {
        path: 'managementPreparation5',
        name: 'managementPreparation5',
        component: () => import('../../MainPopup/management/preparation.vue')
    }
]
