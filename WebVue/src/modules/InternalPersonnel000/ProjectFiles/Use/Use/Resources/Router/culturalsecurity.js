export default [
    {
        path: 'culturalsecurityTotal',
        component: () => import('../../MainPopup/culturalsecurity/total.vue')
    },
    {
        path: 'culturalsecurityResult',
        component: () => import('../../MainPopup/culturalsecurity/result.vue')
    },
    {
        path: 'culturalsecurityEnergyefficiency',
        component: () => import('../../MainPopup/culturalsecurity/energyefficiency.vue')
    },
    {
        path: 'culturalsecurityHumanities',
        component: () => import('../../MainPopup/culturalsecurity/humanities.vue')
    },
    {
        path: 'culturalsecurityKeypoint',
        component: () => import('../../MainPopup/culturalsecurity/keypoint.vue')
    },
    {
        path: 'culturalsecurityCulturaltraining',
        component: () => import('../../MainPopup/culturalsecurity/culturaltraining.vue')
    },
    {
        path: 'culturalsecurityMilitarytraining',
        component: () => import('../../MainPopup/culturalsecurity/militarytraining.vue')
    }
]
