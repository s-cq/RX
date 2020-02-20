export default [
    // 审计的人事
    {
        path: 'auditpersonnelReceive',
        component: () => import('../../MainPopup/personnel/threePopup/audit/receive.vue')
    },
    {
        path: 'auditpersonnelProcess',
        component: () => import('../../MainPopup/personnel/threePopup/audit/process.vue')
    },
    {
        path: 'auditpersonnelResult',
        component: () => import('../../MainPopup/personnel/threePopup/audit/result.vue')
    },
    // 准备的人事
    {
        path: 'readypersonnelReceive',
        component: () => import('../../MainPopup/personnel/threePopup/ready/receive.vue')
    },
    {
        path: 'readypersonnelProcess',
        component: () => import('../../MainPopup/personnel/threePopup/ready/process.vue')
    },
    {
        path: 'readypersonnelResult',
        component: () => import('../../MainPopup/personnel/threePopup/ready/result.vue')
    },
    // 施前的人事
    {
        path: 'frontpersonnelReceive',
        component: () => import('../../MainPopup/personnel/threePopup/front/receive.vue')
    },
    {
        path: 'frontpersonnelProcess',
        component: () => import('../../MainPopup/personnel/threePopup/front/process.vue')
    },
    {
        path: 'frontpersonnelResult',
        component: () => import('../../MainPopup/personnel/threePopup/front/result.vue')
    },
    // 施中的人事
    {
        path: 'centerpersonnelReceive',
        component: () => import('../../MainPopup/personnel/threePopup/center/receive.vue')
    },
    {
        path: 'centerpersonnelProcess',
        component: () => import('../../MainPopup/personnel/threePopup/center/process.vue')
    },
    {
        path: 'centerpersonnelResult',
        component: () => import('../../MainPopup/personnel/threePopup/center/result.vue')
    },
    // 施尾的人事
    {
        path: 'tailpersonnelReceive',
        component: () => import('../../MainPopup/personnel/threePopup/tail/receive.vue')
    },
    {
        path: 'tailpersonnelProcess',
        component: () => import('../../MainPopup/personnel/threePopup/tail/process.vue')
    },
    {
        path: 'tailpersonnelResult',
        component: () => import('../../MainPopup/personnel/threePopup/tail/result.vue')
    },
    // 竣工的人事
    {
        path: 'completedpersonnelReceive',
        component: () => import('../../MainPopup/personnel/threePopup/completed/receive.vue')
    },
    {
        path: 'completedpersonnelProcess',
        component: () => import('../../MainPopup/personnel/threePopup/completed/process.vue')
    },
    {
        path: 'completedpersonnelResult',
        component: () => import('../../MainPopup/personnel/threePopup/completed/result.vue')
    },
    // 完工的人事
    {
        path: 'finishpersonnelReceive',
        component: () => import('../../MainPopup/personnel/threePopup/finish/receive.vue')
    },
    {
        path: 'finishpersonnelProcess',
        component: () => import('../../MainPopup/personnel/threePopup/finish/process.vue')
    },
    {
        path: 'finishpersonnelResult',
        component: () => import('../../MainPopup/personnel/threePopup/finish/result.vue')
    }
]
