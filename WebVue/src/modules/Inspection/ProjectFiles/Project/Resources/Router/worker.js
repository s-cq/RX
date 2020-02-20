export default [
    {
        path: 'workerReceive',
        component: () => import('../../MainPopup/worker/threePopup/receive.vue')
    },
    {
        path: 'workerProcess',
        component: () => import('../../MainPopup/worker/threePopup/process.vue')
    },
    {
        path: 'workerResult',
        component: () => import('../../MainPopup/worker/threePopup/result.vue')
    }
]
