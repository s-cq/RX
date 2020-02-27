export default [
    {
        path: 'managementFine',
        name: 'managementFine1',
        component: () => import('../../MainPopup/management/fine.vue')
    },
    {
        path: 'managementNegotiation',
        name: 'managementNegotiation1',
        component: () => import('../../MainPopup/management/negotiation.vue')
    },
    {
        path: 'managementCompletion',
        name: 'managementCompletion1',
        component: () => import('../../MainPopup/management/completion.vue')
    },
    {
        path: 'managementPreparation',
        name: 'managementPreparation1',
        component: () => import('../../MainPopup/management/preparation.vue')
    },
    {
        path: 'achievementThree',
        name: 'achievementThree1',
        component: () => import('../../MainPopup/management/achievementThree.vue')
    }
]
