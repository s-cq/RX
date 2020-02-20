export default [
    // 审计项经
    {
        path: 'audittermReceive',
        component: () => import('../../MainPopup/term/threePopup/audit/receive.vue')
    },
    {
        path: 'audittermProcess',
        component: () => import('../../MainPopup/term/threePopup/audit/process.vue')
    },
    {
        path: 'audittermResult',
        component: () => import('../../MainPopup/term/threePopup/audit/result.vue')
    },
    // 准备项经
    {
        path: 'readytermReceive',
        component: () => import('../../MainPopup/term/threePopup/ready/receive.vue')
    },
    {
        path: 'readytermProcess',
        component: () => import('../../MainPopup/term/threePopup/ready/Process.vue')
    },
    {
        path: 'readytermResult',
        component: () => import('../../MainPopup/term/threePopup/ready/result.vue')
    },
    // 施前项经
    {
        path: 'fronttermReceive',
        component: () => import('../../MainPopup/term/threePopup/front/receive.vue')
    },
    {
        path: 'fronttermProcess',
        component: () => import('../../MainPopup/term/threePopup/front/Process.vue')
    },
    {
        path: 'fronttermResult',
        component: () => import('../../MainPopup/term/threePopup/front/result.vue')
    },
    // 施中项经
    {
        path: 'centertermReceive',
        component: () => import('../../MainPopup/term/threePopup/center/receive.vue')
    },
    {
        path: 'centertermProcess',
        component: () => import('../../MainPopup/term/threePopup/center/Process.vue')
    },
    {
        path: 'centertermResult',
        component: () => import('../../MainPopup/term/threePopup/center/result.vue')
    },
    // 施尾项经
    {
        path: 'tailtermReceive',
        component: () => import('../../MainPopup/term/threePopup/tail/receive.vue')
    },
    {
        path: 'tailtermProcess',
        component: () => import('../../MainPopup/term/threePopup/tail/Process.vue')
    },
    {
        path: 'tailtermResult',
        component: () => import('../../MainPopup/term/threePopup/tail/result.vue')
    },
    // 竣工项经
    {
        path: 'completedtermReceive',
        component: () => import('../../MainPopup/term/threePopup/completed/receive.vue')
    },
    {
        path: 'completedtermProcess',
        component: () => import('../../MainPopup/term/threePopup/completed/Process.vue')
    },
    {
        path: 'completedtermResult',
        component: () => import('../../MainPopup/term/threePopup/completed/result.vue')
    },
    // 完工项经
    {
        path: 'finishtermReceive',
        component: () => import('../../MainPopup/term/threePopup/finish/receive.vue')
    },
    {
        path: 'finishtermProcess',
        component: () => import('../../MainPopup/term/threePopup/finish/Process.vue')
    },
    {
        path: 'finishtermResult',
        component: () => import('../../MainPopup/term/threePopup/finish/result.vue')
    }
]
