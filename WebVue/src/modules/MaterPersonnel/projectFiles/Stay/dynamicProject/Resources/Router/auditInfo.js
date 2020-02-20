export default [
    {
        path: 'auditInfoAudit',
        component: () => import('../../MainPopup/auditInfo/audit.vue')
    },
    {
        path: 'auditInfoReady',
        component: () => import('../../MainPopup/auditInfo/ready.vue')
    },
    {
        path: 'auditInfoCompleted',
        component: () => import('../../MainPopup/auditInfo/completed.vue')
    },
    {
        path: 'auditInfoFinished',
        component: () => import('../../MainPopup/auditInfo/finished.vue')
    }
]
