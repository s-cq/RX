export default [
    // 准备 - 资料
    {
        path: 'readyData',
        component: () => import('../../MainPopup/ready/data.vue')
    },
    // 准备 - 形象
    {
        path: 'readyImage',
        component: () => import('../../MainPopup/ready/image.vue')
    },
    // 准备 - 安全
    {
        path: 'readySafe',
        component: () => import('../../MainPopup/ready/safe.vue')
    },
    // 准备 - 工种
    {
        path: 'readywork',
        component: () => import('../../MainPopup/ready/work.vue')
    }
]
