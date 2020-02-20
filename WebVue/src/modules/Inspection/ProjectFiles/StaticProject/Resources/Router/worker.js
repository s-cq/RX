export default [
    // 审计的工人
    {
        path: 'auditworkerReceive',
        component: () => import('../../MainPopup/worker/threePopup/audit/receive.vue')
    },
    {
        path: 'auditworkerProcess',
        component: () => import('../../MainPopup/worker/threePopup/audit/process.vue')
    },
    {
        path: 'auditworkerResult',
        component: () => import('../../MainPopup/worker/threePopup/audit/result.vue')
    },
    // 准备的工人
    {
        path: 'readyworkerReceive',
        component: () => import('../../MainPopup/worker/threePopup/ready/receive.vue')
    },
    {
        path: 'readyworkerProcess',
        component: () => import('../../MainPopup/worker/threePopup/ready/process.vue')
    },
    {
        path: 'readyworkerResult',
        component: () => import('../../MainPopup/worker/threePopup/ready/result.vue')
    },
    // 施前的工人
    {
        path: 'frontworkerReceive',
        component: () => import('../../MainPopup/worker/threePopup/front/receive.vue')
    },
    {
        path: 'frontworkerProcess',
        component: () => import('../../MainPopup/worker/threePopup/front/process.vue')
    },
    {
        path: 'frontworkerResult',
        component: () => import('../../MainPopup/worker/threePopup/front/result.vue')
    },
    // 施中的工人
    {
        path: 'centerworkerReceive',
        component: () => import('../../MainPopup/worker/threePopup/center/receive.vue')
    },
    {
        path: 'centerworkerProcess',
        component: () => import('../../MainPopup/worker/threePopup/center/process.vue')
    },
    {
        path: 'centerworkerResult',
        component: () => import('../../MainPopup/worker/threePopup/center/result.vue')
    },
    // 施尾的工人
    {
        path: 'tailworkerReceive',
        component: () => import('../../MainPopup/worker/threePopup/tail/receive.vue')
    },
    {
        path: 'tailworkerProcess',
        component: () => import('../../MainPopup/worker/threePopup/tail/process.vue')
    },
    {
        path: 'tailworkerResult',
        component: () => import('../../MainPopup/worker/threePopup/tail/result.vue')
    },
    // 竣工的工人
    {
        path: 'completedworkerReceive',
        component: () => import('../../MainPopup/worker/threePopup/completed/receive.vue')
    },
    {
        path: 'completedworkerProcess',
        component: () => import('../../MainPopup/worker/threePopup/completed/process.vue')
    },
    {
        path: 'completedworkerResult',
        component: () => import('../../MainPopup/worker/threePopup/completed/result.vue')
    },
    // 完工的工人
    {
        path: 'finishworkerReceive',
        component: () => import('../../MainPopup/worker/threePopup/finish/receive.vue')
    },
    {
        path: 'finishworkerProcess',
        component: () => import('../../MainPopup/worker/threePopup/finish/process.vue')
    },
    {
        path: 'finishworkerResult',
        component: () => import('../../MainPopup/worker/threePopup/finish/result.vue')
    }
]
