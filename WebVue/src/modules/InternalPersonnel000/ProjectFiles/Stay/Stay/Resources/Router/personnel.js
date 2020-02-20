export default [
    // 入口
    {
        path: 'personnelEntrance',
        name: 'personnelEntrance',
        component: () => import('../../MainPopup/personnel/entrance.vue')
    },
    // 信息
    {
        path: 'personnelInformation',
        name: 'personnelInformation',
        component: () => import('../../MainPopup/personnel/information.vue')
    },
    // 职务
    {
        path: 'personnelPosition',
        name: 'personnelPosition',
        component: () => import('../../MainPopup/personnel/position.vue')
    },
    // 普级
    {
        path: 'personnelGenerallevel',
        name: 'personnelGenerallevel',
        component: () => import('../../MainPopup/personnel/generallevel.vue')
    },
    // 管级
    {
        path: 'personnelManagementlevel',
        name: 'personnelManagementlevel',
        component: () => import('../../MainPopup/personnel/managementlevel.vue')
    },
    // 攻坚
    {
        path: 'personnelKeypoint',
        name: 'personnelKeypoint',
        component: () => import('../../MainPopup/personnel/keypoint.vue')
    },
    // 培训
    {
        path: 'personnelTraining',
        name: 'personnelTraining',
        component: () => import('../../MainPopup/personnel/training.vue')
    },
    // 证用
    {
        path: 'personnelCertificate',
        name: 'personnelCertificate',
        component: () => import('../../MainPopup/personnel/certificate.vue')
    },
    // 通知
    {
        path: 'personnelNotice',
        name: 'personnelNotice',
        component: () => import('../../MainPopup/personnel/notice.vue')
    },
    // 处理
    {
        path: 'personnelHandling',
        name: 'personnelHandling',
        component: () => import('../../MainPopup/personnel/handling.vue')
    }
]
