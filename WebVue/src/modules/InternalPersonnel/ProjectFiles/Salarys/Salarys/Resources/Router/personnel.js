export default [
    // 入口
    {
        path: 'personnelEntrance4',
        name: 'personnelEntrance4',
        component: () => import('../../MainPopup/personnel/entrance.vue')
    },
    // 信息
    {
        path: 'personnelInformation4',
        name: 'personnelInformation4',
        component: () => import('../../MainPopup/personnel/information.vue')
    },
    // 职务
    {
        path: 'personnelPosition4',
        name: 'personnelPosition4',
        component: () => import('../../MainPopup/personnel/position.vue')
    },
    // 普级
    {
        path: 'personnelGenerallevel4',
        name: 'personnelGenerallevel4',
        component: () => import('../../MainPopup/personnel/generallevel.vue')
    },
    // 管级
    {
        path: 'personnelManagementlevel4',
        name: 'personnelManagementlevel4',
        component: () => import('../../MainPopup/personnel/managementlevel.vue')
    },
    // 攻坚
    {
        path: 'personnelKeypoint4',
        name: 'personnelKeypoint4',
        component: () => import('../../MainPopup/personnel/keypoint.vue')
    },
    // 培训
    {
        path: 'personnelTraining4',
        name: 'personnelTraining4',
        component: () => import('../../MainPopup/personnel/training.vue')
    },
    // 证用
    {
        path: 'personnelCertificate4',
        name: 'personnelCertificate4',
        component: () => import('../../MainPopup/personnel/certificate.vue')
    },
    // 通知
    {
        path: 'personnelNotice4',
        name: 'personnelNotice4',
        component: () => import('../../MainPopup/personnel/notice.vue')
    },
    // 处理
    {
        path: 'personnelHandling4',
        name: 'personnelHandling4',
        component: () => import('../../MainPopup/personnel/handling.vue')
    }
]
