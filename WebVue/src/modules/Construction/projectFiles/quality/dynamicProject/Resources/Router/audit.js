export default [
    {
        path: 'auditSite',
        component: () => import('../../MainPopup/audit/site.vue')
    },
    {
        path: 'auditMaterials',
        component: () => import('../../MainPopup/audit/materials.vue')
    },
    {
        path: 'auditProcesses',
        component: () => import('../../MainPopup/audit/processes.vue')
    },
    {
        path: 'auditDuration',
        component: () => import('../../MainPopup/audit/duration.vue')
    },
    {
        path: 'auditTotal',
        component: () => import('../../MainPopup/audit/total.vue')
    },
    {
        path: 'auditCompletion',
        component: () => import('../../MainPopup/audit/completion.vue')
    },
    {
        path: 'auditCompletion',
        component: () => import('../../MainPopup/audit/completion.vue')
    }
]
