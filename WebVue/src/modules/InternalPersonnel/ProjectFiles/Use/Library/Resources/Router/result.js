export default [
    {
        path: 'resultCompletionUse',
        name: 'resultCompletionUse',
        component: () => import('../../MainPopup/result/completion.vue')
    },
    {
        path: 'customerReviewss',
        name: 'customerReviewss',
        component: () => import('../../MainPopup/result/customerReviewss.vue')
    },
    // addItem 增项
    {
        path: 'resultAddItemUse',
        name: 'resultAddItemUse',
        component: () => import('../../MainPopup/result/addItem.vue')
    },
    //   Penalty 罚款
    {
        path: 'resultPenaltyUse',
        name: 'resultPenaltyUse',
        component: () => import('../../MainPopup/result/penalty.vue')
    }

]
