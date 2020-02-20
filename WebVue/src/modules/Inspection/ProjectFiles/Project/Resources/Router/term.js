export default [
    {
        path: 'termReceive',
        component: () => import('../../MainPopup/term/threePopup/receive.vue')
    },
    {
        path: 'termProcess',
        component: () => import('../../MainPopup/term/threePopup/process.vue')
    },
    {
        path: 'termResult',
        component: () => import('../../MainPopup/term/threePopup/result.vue')
    }
]
