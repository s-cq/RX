export default [
    // 审核中的审计
    {
        path: 'auditdataPush',
        component: () => import('../../MainPopup/audit/threePopup/audit/dataPush.vue')
    },
    {
        path: 'auditexamine',
        component: () => import('../../MainPopup/audit/threePopup/audit/examine.vue')
    },
    {
        path: 'auditProcess',
        component: () => import('../../MainPopup/audit/threePopup/audit/process.vue')
    },
    // 准备中的审计
    {
        path: 'readydataPush',
        component: () => import('../../MainPopup/audit/threePopup/ready/dataPush.vue')
    },
    {
        path: 'readyexamine',
        component: () => import('../../MainPopup/audit/threePopup/ready/examine.vue')
    },
    // 施前的审计
    {
        path: 'frontdataPush',
        component: () => import('../../MainPopup/audit/threePopup/front/dataPush.vue')
    },
    {
        path: 'frontexamine',
        component: () => import('../../MainPopup/audit/threePopup/front/examine.vue')
    },
    // 施中的审计
    {
        path: 'centerdataPush',
        component: () => import('../../MainPopup/audit/threePopup/center/dataPush.vue')
    },
    {
        path: 'centerexamine',
        component: () => import('../../MainPopup/audit/threePopup/center/examine.vue')
    },
    // 施尾的审计
    {
        path: 'taildataPush',
        component: () => import('../../MainPopup/audit/threePopup/tail/dataPush.vue')
    },
    {
        path: 'tailexamine',
        component: () => import('../../MainPopup/audit/threePopup/tail/examine.vue')
    },
    // 竣工审计
    {
        path: 'completeddataPush',
        component: () => import('../../MainPopup/audit/threePopup/completed/dataPush.vue')
    },
    {
        path: 'completedexamine',
        component: () => import('../../MainPopup/audit/threePopup/completed/examine.vue')
    },
    // 完工审计
    {
        path: 'finishdataPush',
        component: () => import('../../MainPopup/audit/threePopup/finish/dataPush.vue')
    },
    {
        path: 'finishexamine',
        component: () => import('../../MainPopup/audit/threePopup/finish/examine.vue')
    }
]
