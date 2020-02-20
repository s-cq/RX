export default [
    {
        path: 'personnelReceive',
        component: () => import('../../MainPopup/personnel/threePopup/receive.vue')
    },
    {
        path: 'personnelProcess',
        component: () => import('../../MainPopup/personnel/threePopup/process.vue')
    },
    {
        path: 'personnelResult',
        component: () => import('../../MainPopup/personnel/threePopup/result.vue')
    }
]
