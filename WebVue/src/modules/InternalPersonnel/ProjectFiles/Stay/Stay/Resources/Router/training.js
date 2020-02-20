export default [
    {
        path: 'trainingNewperson',
        component: () => import('../../MainPopup/training/newperson.vue')
    },
    {
        path: 'trainingLongplan',
        component: () => import('../../MainPopup/training/longplan.vue')
    },
    {
        path: 'trainingPromotion',
        component: () => import('../../MainPopup/training/promotion.vue')
    },
    {
        path: 'trainingHandling',
        component: () => import('../../MainPopup/training/handling.vue')
    }
]
