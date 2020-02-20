export default [
    {
        path: 'issueIssue',
        component: () => import('../../MainPopup/issue/issue.vue')
    },
    {
        path: 'issueUsage',
        component: () => import('../../MainPopup/issue/usage.vue')
    },
    {
        path: 'issueRecord',
        component: () => import('../../MainPopup/issue/record.vue')
    },
    {
        path: 'issueRecycling',
        component: () => import('../../MainPopup/issue/recycling.vue')
    },
    {
        path: 'issueHander',
        component: () => import('../../MainPopup/issue/hander.vue')
    }
]
