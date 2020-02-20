export default [
    {
        path: 'projectProperties',
        component: () => import('../../MainPopup/project/properties.vue')
    },
    {
        path: 'projectOffer',
        component: () => import('../../MainPopup/project/offer.vue')
    },
    {
        path: 'projectMoney',
        component: () => import('../../MainPopup/project/money.vue')
    }
]
