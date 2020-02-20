export default [
    // 阶段-审计
    {
        path: 'stageAudit',
        component: () => import('../../MainPopup/stage/audit.vue')
    },
    // 阶段-准备
    {
        path: 'stageReady',
        component: () => import('../../MainPopup/stage/ready.vue')
    },
    // 阶段-施前
    {
        path: 'stageFront',
        component: () => import('../../MainPopup/stage/front.vue')
    },
    // 阶段-施中
    {
        path: 'stageCenter',
        component: () => import('../../MainPopup/stage/center.vue')
    },
    // 阶段-施后
    {
        path: 'stageTail',
        component: () => import('../../MainPopup/stage/tail.vue')
    },
    // 阶段-竣工
    {
        path: 'stageCompleted',
        component: () => import('../../MainPopup/stage/completed.vue')
    },
    // 阶段-完工
    {
        path: 'stageFinished',
        component: () => import('../../MainPopup/stage/finished.vue')
    }
]
