export default [
    {
        path: 'processRecommended',
        component: () => import('../../MainPopup/process/recommended.vue')
    },
    {
        path: 'processZidai',
        component: () => import('../../MainPopup/process/zidai.vue')
    }
]
