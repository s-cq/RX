export default [
    {
        path: 'processSafetyorder5',
        component: () => import('../../MainPopup/process/safetyorder.vue')
    },
    {
        path: 'processImageorder5',
        component: () => import('../../MainPopup/process/imageorder.vue')
    },
    {
        path: 'processEnvironmentorder5',
        name: 'processEnvironmentorder5',
        component: () => import('../../MainPopup/process/environmentorder.vue')
    },
    {
        path: 'processInspectionorder5',
        component: () => import('../../MainPopup/process/inspectionorder.vue')
    },
    {
        path: 'handerProcess5',
        name: 'handerProcess5',
        component: () => import('../../MainPopup/process/handerProcess.vue')
    },
    {
        path: 'worker5',
        name: 'worker5',
        component: () => import('../../MainPopup/process/worker.vue')
    }
]
