export default [
    // 审计中的财务
    {
        path: 'auditfinanceReceive',
        component: () => import('../../MainPopup/finance/threePopup/audit/receive.vue')
    },
    {
        path: 'auditfinanceProcess',
        component: () => import('../../MainPopup/finance/threePopup/audit/process.vue')
    },
    {
        path: 'auditfinanceResult',
        component: () => import('../../MainPopup/finance/threePopup/audit/result.vue')
    },
    // 准备中的财务
    {
        path: 'readyfinanceReceive',
        component: () => import('../../MainPopup/finance/threePopup/ready/receive.vue')
    },
    {
        path: 'readyfinanceProcess',
        component: () => import('../../MainPopup/finance/threePopup/ready/process.vue')
    },
    {
        path: 'readyfinanceResult',
        component: () => import('../../MainPopup/finance/threePopup/ready/result.vue')
    },
    // 施前的财务
    {
        path: 'frontfinanceReceive',
        component: () => import('../../MainPopup/finance/threePopup/front/receive.vue')
    },
    {
        path: 'frontfinanceProcess',
        component: () => import('../../MainPopup/finance/threePopup/front/process.vue')
    },
    {
        path: 'frontfinanceResult',
        component: () => import('../../MainPopup/finance/threePopup/front/result.vue')
    },
    // 施中的财务
    {
        path: 'centerfinanceReceive',
        component: () => import('../../MainPopup/finance/threePopup/center/receive.vue')
    },
    {
        path: 'centerfinanceProcess',
        component: () => import('../../MainPopup/finance/threePopup/center/process.vue')
    },
    {
        path: 'centerfinanceResult',
        component: () => import('../../MainPopup/finance/threePopup/center/result.vue')
    },
    // 施尾的财务
    {
        path: 'tailfinanceReceive',
        component: () => import('../../MainPopup/finance/threePopup/tail/receive.vue')
    },
    {
        path: 'tailfinanceProcess',
        component: () => import('../../MainPopup/finance/threePopup/tail/process.vue')
    },
    {
        path: 'tailfinanceResult',
        component: () => import('../../MainPopup/finance/threePopup/tail/result.vue')
    },
    // 竣工的财务
    {
        path: 'completedfinanceReceive',
        component: () => import('../../MainPopup/finance/threePopup/completed/receive.vue')
    },
    {
        path: 'completedfinanceProcess',
        component: () => import('../../MainPopup/finance/threePopup/completed/process.vue')
    },
    {
        path: 'completedfinanceResult',
        component: () => import('../../MainPopup/finance/threePopup/completed/result.vue')
    },
    // 完工的财务
    {
        path: 'finishfinanceReceive',
        component: () => import('../../MainPopup/finance/threePopup/finish/receive.vue')
    },
    {
        path: 'finishfinanceProcess',
        component: () => import('../../MainPopup/finance/threePopup/finish/process.vue')
    },
    {
        path: 'finishfinanceResult',
        component: () => import('../../MainPopup/finance/threePopup/finish/result.vue')
    }
]
