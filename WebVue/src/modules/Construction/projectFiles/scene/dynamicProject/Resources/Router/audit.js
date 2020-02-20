export default [
    {
        path: 'auditData',
        component: () => import('../../MainPopup/audit/data.vue')
    },
    {
        path: 'auditImage',
        component: () => import('../../MainPopup/audit/image.vue')
    },
    {
        path: 'auditSafe',
        component: () => import('../../MainPopup/audit/safe.vue')
    },
    {
        path: 'auditEnvironmental ',
        component: () => import('../../MainPopup/audit/environmental .vue')
    },
    {
        path: 'auditComprehensive',
        component: () => import('../../MainPopup/audit/comprehensive.vue')
    }
]
