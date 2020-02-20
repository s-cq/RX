export default [
    {
        path: 'retentionMaintenance',
        component: () => import('../../MainPopup/retention/maintenance.vue')
    },
    {
        path: 'retentionKeypoint',
        component: () => import('../../MainPopup/retention/keypoint.vue')
    },
    {
        path: 'retentionHonor',
        component: () => import('../../MainPopup/retention/honor.vue')
    },
    {
        path: 'retentionHandling',
        component: () => import('../../MainPopup/retention/handling.vue')
    }
]
