export default [
    {
        path: 'managerReceive',
        component: () => import('../../MainPopup/manager/threePopup/receive.vue')
    },
    {
        path: 'managerProcess',
        component: () => import('../../MainPopup/manager/threePopup/process.vue')
    },
    {
        path: 'managerResult',
        component: () => import('../../MainPopup/manager/threePopup/result.vue')
    }
]
