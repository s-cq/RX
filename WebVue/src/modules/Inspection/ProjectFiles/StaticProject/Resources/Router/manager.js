export default [
    // 审计经理
    {
        path: 'auditmanagerReceive',
        component: () => import('../../MainPopup/manager/threePopup/audit/receive.vue')
    },
    {
        path: 'auditmanagerProcess',
        component: () => import('../../MainPopup/manager/threePopup/audit/process.vue')
    },
    {
        path: 'auditmanagerResult',
        component: () => import('../../MainPopup/manager/threePopup/audit/result.vue')
    },
    // 准备经理
    {
        path: 'readymanagerReceive',
        component: () => import('../../MainPopup/manager/threePopup/ready/receive.vue')
    },
    {
        path: 'readymanagerProcess',
        component: () => import('../../MainPopup/manager/threePopup/ready/process.vue')
    },
    {
        path: 'readymanagerResult',
        component: () => import('../../MainPopup/manager/threePopup/ready/result.vue')
    },
    // 施前经理
    {
        path: 'frontmanagerReceive',
        component: () => import('../../MainPopup/manager/threePopup/front/receive.vue')
    },
    {
        path: 'frontmanagerProcess',
        component: () => import('../../MainPopup/manager/threePopup/front/process.vue')
    },
    {
        path: 'frontmanagerResult',
        component: () => import('../../MainPopup/manager/threePopup/front/result.vue')
    },
    // 施中经理
    {
        path: 'centermanagerReceive',
        component: () => import('../../MainPopup/manager/threePopup/center/receive.vue')
    },
    {
        path: 'centermanagerProcess',
        component: () => import('../../MainPopup/manager/threePopup/center/process.vue')
    },
    {
        path: 'centermanagerResult',
        component: () => import('../../MainPopup/manager/threePopup/center/result.vue')
    },
    // 施尾经理
    {
        path: 'tailmanagerReceive',
        component: () => import('../../MainPopup/manager/threePopup/tail/receive.vue')
    },
    {
        path: 'tailmanagerProcess',
        component: () => import('../../MainPopup/manager/threePopup/tail/process.vue')
    },
    {
        path: 'tailmanagerResult',
        component: () => import('../../MainPopup/manager/threePopup/tail/result.vue')
    },
    // 竣工经理
    {
        path: 'completedmanagerReceive',
        component: () => import('../../MainPopup/manager/threePopup/completed/receive.vue')
    },
    {
        path: 'completedmanagerProcess',
        component: () => import('../../MainPopup/manager/threePopup/completed/process.vue')
    },
    {
        path: 'completedmanagerResult',
        component: () => import('../../MainPopup/manager/threePopup/completed/result.vue')
    },
    // 完工经理
    {
        path: 'finishmanagerReceive',
        component: () => import('../../MainPopup/manager/threePopup/finish/receive.vue')
    },
    {
        path: 'finishmanagerProcess',
        component: () => import('../../MainPopup/manager/threePopup/finish/process.vue')
    },
    {
        path: 'finishmanagerResult',
        component: () => import('../../MainPopup/manager/threePopup/finish/result.vue')
    }
]
