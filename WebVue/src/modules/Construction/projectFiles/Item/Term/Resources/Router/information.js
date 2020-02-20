export default [
    // 确认
    {
        path: 'informationConfirm',
        component: () => import('../../MainPopup/information/confirm.vue')
    },
    // 拍摄设置
    {
        path: 'informationSetting',
        name: 'informationSetting',
        component: () => import('../../../../clique/Photograph/MainPopup/equipment/setting.vue')
    },
    // 安装
    {
        path: 'informationInstall',
        component: () => import('../../MainPopup/information/install.vue')
    },
    // 拍照
    {
        path: 'informationPhotograph',
        component: () => import('../../MainPopup/information/photograph.vue')
    },
    // 解绑
    {
        path: 'informationUntying',
        component: () => import('../../MainPopup/information/untying.vue')
    },
    // 处理
    {
        path: 'informationHander',
        component: () => import('../../MainPopup/information/hander.vue')
    }
]
