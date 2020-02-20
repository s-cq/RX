export default [
    {
        path: 'processSafetyorder',
        component: () => import('../../MainPopup/process/safetyorder.vue')
    },
    {
        path: 'processImageorder',
        component: () => import('../../MainPopup/process/imageorder.vue')
    },
    {
        path: 'processEnvironmentorder',
        name: 'processEnvironmentorder',
        component: () => import('../../MainPopup/process/environmentorder.vue')
    },

    {
        path: 'handerProcess',
        name: 'handerProcess',
        component: () => import('../../MainPopup/process/handerProcess.vue')
    },

    {
        path: 'worker',
        name: 'worker',
        component: () => import('../../MainPopup/process/worker.vue')
    }
]
