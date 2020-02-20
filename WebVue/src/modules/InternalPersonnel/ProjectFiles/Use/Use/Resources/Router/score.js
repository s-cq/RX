export default [
    // 入口
    {
        path: 'personnelEntrance2',
        name: 'personnelEntrance2',
        component: () => import('../../MainPopup/score/entrance.vue')
    },
    // 信息
    {
        path: 'personnelInformation2',
        name: 'personnelInformation2',
        component: () => import('../../MainPopup/score/information.vue')
    },
    // 职务
    {
        path: 'personnelPosition2',
        name: 'personnelPosition2',
        component: () => import('../../MainPopup/score/position.vue')
    },
    // 普级
    {
        path: 'personnelGenerallevel2',
        name: 'personnelGenerallevel2',
        component: () => import('../../MainPopup/score/generallevel.vue')
    },
    // 管级
    {
        path: 'personnelManagementlevel2',
        name: 'personnelManagementlevel2',
        component: () => import('../../MainPopup/score/managementlevel.vue')
    },
    // 攻坚
    {
        path: 'personnelKeypoint2',
        name: 'personnelKeypoint2',
        component: () => import('../../MainPopup/score/keypoint.vue')
    },
    // 培训
    {
        path: 'personnelTraining2',
        name: 'personnelTraining2',
        component: () => import('../../MainPopup/score/training.vue')
    },
    // 证用
    {
        path: 'personnelCertificate2',
        name: 'personnelCertificate2',
        component: () => import('../../MainPopup/score/certificate.vue')
    },
    // 通知
    {
        path: 'personnelNotice2',
        name: 'personnelNotice2',
        component: () => import('../../MainPopup/score/notice.vue')
    },
    // 处理
    {
        path: 'personnelHandling2',
        name: 'personnelHandling2',
        component: () => import('../../MainPopup/score/handling.vue')
    }
]
