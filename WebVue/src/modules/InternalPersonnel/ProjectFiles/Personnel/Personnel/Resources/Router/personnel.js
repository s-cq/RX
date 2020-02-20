export default [
    // 入口
    {
        path: 'personnelEntrance1',
        name: 'personnelEntrance1',
        component: () => import('../../MainPopup/personnel/entrance.vue')
    },
    // 信息
    {
        path: 'personnelInformation1',
        name: 'personnelInformation1',
        component: () => import('../../MainPopup/personnel/information.vue')
    },
    // 职务
    {
        path: 'personnelPosition1',
        name: 'personnelPosition1',
        component: () => import('../../MainPopup/personnel/position.vue')
    },
    // 普级
    {
        path: 'personnelGenerallevel1',
        name: 'personnelGenerallevel1',
        component: () => import('../../MainPopup/personnel/generallevel.vue')
    },
    // 管级
    {
        path: 'personnelManagementlevel1',
        name: 'personnelManagementlevel1',
        component: () => import('../../MainPopup/personnel/managementlevel.vue')
    },
    // 攻坚
    {
        path: 'personnelKeypoint1',
        name: 'personnelKeypoint1',
        component: () => import('../../MainPopup/personnel/keypoint.vue')
    },
    // 培训
    {
        path: 'personnelTraining',
        component: () => import('../../MainPopup/personnel/training.vue')
    },
    // 证用
    {
        path: 'personnelCertificate1',
        name: 'personnelCertificate1',
        component: () => import('../../MainPopup/personnel/certificate.vue')
    },
    // 通知
    {
        path: 'personnelNotice1',
        name: 'personnelNotice1',
        component: () => import('../../MainPopup/personnel/notice.vue')
    },
    // 处理
    {
        path: 'personnelHandling1',
        name: 'personnelHandling1',
        component: () => import('../../MainPopup/personnel/handling.vue')
    }
]
