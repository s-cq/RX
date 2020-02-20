export default [
    // 资料 - 现场资料
    {
        path: 'dataScene',
        component: () => import('../../MainPopup/data/data.vue')
    },
    // 资料 - 其他
    {
        path: 'dataFront',
        component: () => import('../../MainPopup/data/three.vue')
    }
]

