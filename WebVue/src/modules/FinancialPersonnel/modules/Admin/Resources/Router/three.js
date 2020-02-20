export default [
    {
        path: 'layoutLayout',
        component: () => import('../../MainPopup/layout.vue')
    },
    {
        path: 'layoutThree',
        component: () => import('../../MainPopup/layoutThree.vue')
    },
    {
        path: 'layoutThreeQuery',
        component: () => import('../../MainPopup/layoutThree.vue')
    },
    {
        path: 'layoutThreeParmas',
        name: 'elementRxParmasExample',
        component: () => import('../../MainPopup/layoutThree.vue')
    }
]
