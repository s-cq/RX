export default [
    {
        path: 'audit',
        component: () => import('../../MainPopup/stage/threePopup/audit.vue')
    },
    {
        path: 'ready',
        component: () => import('../../MainPopup/stage/threePopup/ready.vue')
    },
    {
        path: 'constructionFront',
        component: () => import('../../MainPopup/stage/threePopup/constructionFront.vue')
    },
    {
        path: 'constructionCenter',
        component: () => import('../../MainPopup/stage/threePopup/constructionCenter.vue')
    },
    {
        path: 'constructionTail',
        component: () => import('../../MainPopup/stage/threePopup/constructionTail.vue')
    },
    {
        path: 'completed',
        component: () => import('../../MainPopup/stage/threePopup/completed.vue')
    },
    {
        path: 'finished',
        component: () => import('../../MainPopup/stage/threePopup/finished.vue')
    }
]
