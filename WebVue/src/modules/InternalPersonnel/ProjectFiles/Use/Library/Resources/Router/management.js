export default [
    // 罚款
    {
        path: 'managementPenalty',
        name: 'managementPenalty',
        component: () => import('../../MainPopup/management/penalty.vue')
    },
    // addItem 增项
    {
        path: 'managementAddItem',
        name: 'managementAddItem',
        component: () => import('../../MainPopup/management/addItem.vue')
    },
    // 竣工
    {
        path: 'managemenCompletionUse',
        name: 'managemenCompletionUse',
        component: () => import('../../MainPopup/management/completion.vue')
    },
    // 洽商
    {
        path: 'managementNegotiation',
        name: 'managementNegotiation',
        component: () => import('../../MainPopup/management/negotiation.vue')
    }
]
