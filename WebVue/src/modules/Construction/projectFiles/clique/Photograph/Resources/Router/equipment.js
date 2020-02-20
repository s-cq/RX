export default [
    {
        path: 'equipmentInformation',
        component: () => import('../../MainPopup/equipment/information.vue')
    },
    {
        path: 'equipmentSetting',
        component: () => import('../../MainPopup/equipment/setting.vue')
    },
    {
        path: 'equipmentStatus',
        component: () => import('../../MainPopup/equipment/status.vue')
    },
    {
        path: 'equipmentHander',
        component: () => import('../../MainPopup/equipment/hander.vue')
    }
]
