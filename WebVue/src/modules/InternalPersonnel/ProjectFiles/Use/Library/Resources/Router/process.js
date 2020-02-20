export default [
    {
        path: 'processOrder',
        name: 'processOrder',
        component: () => import('../../MainPopup/process/order.vue')
    },
    {
        path: 'cameras',
        name: 'cameras',
        component: () => import('../../MainPopup/process/camera.vue')
    }
]
