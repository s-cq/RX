export default [
    // 审计材料
    {
        path: 'auditmaterialReceive',
        component: () => import('../../MainPopup/material/threePopup/audit/receive.vue')
    },
    {
        path: 'auditmaterialProcess',
        component: () => import('../../MainPopup/material/threePopup/audit/process.vue')
    },
    {
        path: 'auditmaterialResult',
        component: () => import('../../MainPopup/material/threePopup/audit/result.vue')
    },
    // 准备中的材料
    {
        path: 'readymaterialReceive',
        component: () => import('../../MainPopup/material/threePopup/ready/receive.vue')
    },
    {
        path: 'readymaterialProcess',
        component: () => import('../../MainPopup/material/threePopup/ready/process.vue')
    },
    {
        path: 'readymaterialResult',
        component: () => import('../../MainPopup/material/threePopup/ready/receive.vue')
    },
    // 施前的材料
    {
        path: 'frontmaterialReceive',
        component: () => import('../../MainPopup/material/threePopup/front/receive.vue')
    },
    {
        path: 'frontmaterialProcess',
        component: () => import('../../MainPopup/material/threePopup/front/process.vue')
    },
    {
        path: 'frontmaterialResult',
        component: () => import('../../MainPopup/material/threePopup/front/receive.vue')
    },
    // 施中的材料
    {
        path: 'centermaterialReceive',
        component: () => import('../../MainPopup/material/threePopup/center/receive.vue')
    },
    {
        path: 'centermaterialProcess',
        component: () => import('../../MainPopup/material/threePopup/center/process.vue')
    },
    {
        path: 'centermaterialResult',
        component: () => import('../../MainPopup/material/threePopup/center/receive.vue')
    },
    // 施尾的材料
    {
        path: 'tailmaterialReceive',
        component: () => import('../../MainPopup/material/threePopup/tail/receive.vue')
    },
    {
        path: 'tailmaterialProcess',
        component: () => import('../../MainPopup/material/threePopup/tail/process.vue')
    },
    {
        path: 'tailmaterialResult',
        component: () => import('../../MainPopup/material/threePopup/tail/receive.vue')
    },
    // 竣工的材料
    {
        path: 'completedmaterialReceive',
        component: () => import('../../MainPopup/material/threePopup/completed/receive.vue')
    },
    {
        path: 'completedmaterialProcess',
        component: () => import('../../MainPopup/material/threePopup/completed/process.vue')
    },
    {
        path: 'completedmaterialResult',
        component: () => import('../../MainPopup/material/threePopup/completed/receive.vue')
    },
    // 完工的材料
    {
        path: 'finishmaterialReceive',
        component: () => import('../../MainPopup/material/threePopup/finish/receive.vue')
    },
    {
        path: 'finishmaterialProcess',
        component: () => import('../../MainPopup/material/threePopup/finish/process.vue')
    },
    {
        path: 'finishmaterialResult',
        component: () => import('../../MainPopup/material/threePopup/finish/receive.vue')
    }
]
