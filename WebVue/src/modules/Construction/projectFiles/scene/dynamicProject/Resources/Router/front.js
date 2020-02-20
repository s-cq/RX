export default [
    // 施前 - 资料
    {
        path: 'frontData',
        component: () => import('../../MainPopup/front/data.vue')
    },
    // 施前 - 施工
    {
        path: 'frontThree',
        component: () => import('../../MainPopup/front/three.vue')
    }
]
