export default [
    // 安全 - 设备
    {
        path: 'safeEnv',
        component: () => import('../../MainPopup/safe/envInfo.vue')
    },
    // 安全 - 人员
    {
        path: 'safePer',
        component: () => import('../../MainPopup/safe/perInfo.vue')
    },
    // 安全 - 用电
    {
        path: 'safeElec',
        component: () => import('../../MainPopup/safe/elecInfo.vue')
    }
]
