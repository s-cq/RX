export default [
    // 订单
    {
        path: 'order2',
        name: 'order2',
        component: () => import('../../MainPopup/level/order.vue')
    },
    // 持有证书
    {
        path: 'holdingACertificate2',
        name: 'holdingACertificate2',
        component: () => import('../../MainPopup/level/holdingACertificate.vue')
    },
    // 客户评价
    {
        path: 'customerReviews2',
        name: 'customerReviews2',
        component: () => import('../../MainPopup/level/customerReviews.vue')
    },
    // 竣工
    {
        path: 'managementPreparation2',
        name: 'managementPreparation2',
        component: () => import('../../MainPopup/level/managementPreparation.vue')
    },
    // 培训
    {
        path: 'training2',
        name: 'training2',
        component: () => import('../../MainPopup/level/training.vue')
    }
    // // 普级
    // {
    //     path: 'personnelGenerallevel2',
    //     name: 'personnelGenerallevel2',
    //     component: () => import('../../MainPopup/score/generallevel.vue')
    // },
    // // 管级
    // {
    //     path: 'personnelManagementlevel2',
    //     name: 'personnelManagementlevel2',
    //     component: () => import('../../MainPopup/score/managementlevel.vue')
    // },
    // // 攻坚
    // {
    //     path: 'personnelKeypoint2',
    //     name: 'personnelKeypoint2',
    //     component: () => import('../../MainPopup/score/keypoint.vue')
    // },
    // // 培训
    // {
    //     path: 'personnelTraining2',
    //     name: 'personnelTraining2',
    //     component: () => import('../../MainPopup/score/training.vue')
    // },
    // // 证用
    // {
    //     path: 'personnelCertificate2',
    //     name: 'personnelCertificate2',
    //     component: () => import('../../MainPopup/score/certificate.vue')
    // },
    // // 通知
    // {
    //     path: 'personnelNotice2',
    //     name: 'personnelNotice2',
    //     component: () => import('../../MainPopup/score/notice.vue')
    // },
    // // 处理
    // {
    //     path: 'personnelHandling2',
    //     name: 'personnelHandling2',
    //     component: () => import('../../MainPopup/score/handling.vue')
    // }
]
