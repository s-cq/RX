export default [
    // 过程
    {
        path: 'processOrder',
        component: () => import('../../MainPopup/process/order.vue')
    },
    // 处理
    {
        path: 'processProcessing',
        component: () => import('../../MainPopup/process/processing.vue')
    }
]
