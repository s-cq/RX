export default [
    {
        path: 'audio',
        component: () => import('../../MainPopup/project/threePopup/audio.vue')
    },
    {
        path: 'manager',
        component: () => import('../../MainPopup/project/threePopup/manager.vue')
    },
    {
        path: 'projectManager',
        component: () => import('../../MainPopup/project/threePopup/projectManager.vue')
    },
    {
        path: 'Material',
        component: () => import('../../MainPopup/project/threePopup/Material.vue')
    },
    {
        path: 'Finance',
        component: () => import('../../MainPopup/project/threePopup/Finance.vue')
    },
    {
        path: 'worker',
        component: () => import('../../MainPopup/project/threePopup/worker.vue')
    },
    {
        path: 'EngineeringPersonnel',
        component: () => import('../../MainPopup/project/threePopup/EngineeringPersonnel.vue')
    }
]
