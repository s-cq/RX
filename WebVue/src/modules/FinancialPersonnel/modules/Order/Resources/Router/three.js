export default [
    { // 基础-基础
        path: 'basicsParameter',
        component: () => import('../../MainPopup/basics/parameter.vue')
    },
    { // 基础-尺寸
        path: 'basicsSize',
        component: () => import('../../MainPopup/basics/size.vue')
    },
    { // 基础-计价
        path: 'basicsValuation',
        component: () => import('../../MainPopup/basics/valuation.vue')
    },
    { // 材料-材料
        path: 'materialMaterial',
        component: () => import('../../MainPopup/material/material.vue')
    },
    { // 人工-人工
        path: 'artificialType',
        component: () => import('../../MainPopup/artificial/artificial.vue')
    },
    { // 辅料-辅料
        path: 'accessoriesAccessories',
        component: () => import('../../MainPopup/accessories/accessories.vue')
    },
    { // 成本-成本
        path: 'constConst',
        component: () => import('../../MainPopup/const/const.vue')
    },
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
