export default [
    // 订单 - 三段订单详情
    {
        path: 'orderDetails',
        component: () => import('../../MainPopup/order/orderDetails.vue')
    },
    // 订单 - 三段定时订单
    {
        path: 'threeTimeOrder',
        component: () => import('../../MainPopup/order/threeTimeOrder.vue')
    }
]
