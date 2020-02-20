export default [
    {
        path: 'materialReceive',
        component: () => import('../../MainPopup/material/threePopup/receive.vue')
    },
    {
        path: 'materialProcess',
        component: () => import('../../MainPopup/material/threePopup/process.vue')
    },
    {
        path: 'materialResult',
        component: () => import('../../MainPopup/material/threePopup/result.vue')
    }
]
