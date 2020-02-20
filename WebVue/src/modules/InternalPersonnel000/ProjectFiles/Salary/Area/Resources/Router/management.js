export default [
    {
        path: 'managementFine3',
        name: 'managementFine3',
        component: () => import('../../MainPopup/management/fine.vue')
    },
    {
        path: 'managementNegotiation3',
        name: 'managementNegotiation3',
        component: () => import('../../MainPopup/management/negotiation.vue')
    },
    {
        path: 'managementCompletion3',
        name: 'managementCompletion3',
        component: () => import('../../MainPopup/management/completion.vue')
    },
    {
        path: 'managementPreparation3',
        name: 'managementPreparation3',
        component: () => import('../../MainPopup/management/preparation.vue')
    }
]
