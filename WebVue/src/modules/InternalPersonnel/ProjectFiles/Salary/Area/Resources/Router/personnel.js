export default [
    // 入口
    {
        path: 'personnelEntrance3',
        name: 'personnelEntrance3',
        component: () => import('../../MainPopup/personnel/entrance.vue')
    },
    // 信息
    {
        path: 'personnelInformation3',
        name: 'personnelInformation3',
        component: () => import('../../MainPopup/personnel/information.vue')
    },
    // 职务
    {
        path: 'personnelPosition3',
        name: 'personnelPosition3',
        component: () => import('../../MainPopup/personnel/position.vue')
    },
    // 普级
    {
        path: 'personnelGenerallevel3',
        name: 'personnelGenerallevel3',
        component: () => import('../../MainPopup/personnel/generallevel.vue')
    },
    // 管级
    {
        path: 'personnelManagementlevel3',
        name: 'personnelManagementlevel3',
        component: () => import('../../MainPopup/personnel/managementlevel.vue')
    },
    // 攻坚
    {
        path: 'personnelKeypoint3',
        name: 'personnelKeypoint3',
        component: () => import('../../MainPopup/personnel/keypoint.vue')
    },
    // 培训
    {
        path: 'personnelTraining3',
        name: 'personnelTraining3',
        component: () => import('../../MainPopup/personnel/training.vue')
    },
    // 证用
    {
        path: 'personnelCertificate3',
        name: 'personnelCertificate3',
        component: () => import('../../MainPopup/personnel/certificate.vue')
    },
    // 通知
    {
        path: 'personnelNotice3',
        name: 'personnelNotice3',
        component: () => import('../../MainPopup/personnel/notice.vue')
    },
    // 处理
    {
        path: 'personnelHandling3',
        name: 'personnelHandling3',
        component: () => import('../../MainPopup/personnel/handling.vue')
    }
]
