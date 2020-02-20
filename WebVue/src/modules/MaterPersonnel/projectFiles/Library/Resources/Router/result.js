export default [
    {
        path: 'resultQiatan',
        component: () => import('../../MainPopup/result/qiatan.vue')
    },
    {
        path: 'resultSatisfaction',
        component: () => import('../../MainPopup/result/satisfaction.vue')
    },
    {
        path: 'resultYangbanjian',
        component: () => import('../../MainPopup/result/yangbanjian.vue')
    }
]
