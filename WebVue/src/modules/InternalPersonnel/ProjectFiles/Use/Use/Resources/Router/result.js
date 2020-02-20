export default [
    // 结果处理
    {
        path: 'resultProcessing',
        component: () => import('../../MainPopup/result/processing.vue')
    },
    // 结果
    {
        path: 'completionProject',
        component: () => import('../../MainPopup/result/completionProject.vue')
    }
]
