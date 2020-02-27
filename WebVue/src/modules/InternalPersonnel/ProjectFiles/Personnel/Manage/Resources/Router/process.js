export default [
    {
        path: 'processSafetyorder1',
        component: () => import('../../MainPopup/process/safetyorder.vue')
    },
    {
        path: 'processImageorder1',
        component: () => import('../../MainPopup/process/imageorder.vue')
    },
    {
        path: 'processEnvironmentorder1',
        name: 'processEnvironmentorder1',
        component: () => import('../../MainPopup/process/environmentorder.vue')
    },
    {
        path: 'processInspectionorder1',
        component: () => import('../../MainPopup/process/inspectionorder.vue')
    },
    {
        path: 'handerProcess1',
        name: 'handerProcess1',
        component: () => import('../../MainPopup/process/handerProcess.vue')
    },
    {
        path: 'worker1',
        name: 'worker1',
        component: () => import('../../MainPopup/process/worker.vue')
    },
    // 增值服务三段
    {
        path: 'superServerThree',
        component: () => import('../../MainPopup/salary/superServerThree.vue')
    }
]
