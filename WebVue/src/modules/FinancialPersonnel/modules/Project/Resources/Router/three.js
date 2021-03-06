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
    },

    // 人工审计三段
    {
        path: 'workerDetailThree',
        component: () => import('../../MainPopup/worker/workerDetailThree.vue')
    },
    // 人工除审计三段
    {
        path: 'workerDetailOtherThree',
        component: () => import('../../MainPopup/worker/workerDetailOtherThree.vue')
    },
    // 人工除审计综合三段
    {
        path: 'workerDetailThreeHandle',
        component: () => import('../../MainPopup/worker/workerDetailThreeHandle.vue')
    },
    // 材料储值卡三段
    {
        path: 'marCardThree',
        component: () => import('../../MainPopup/material/marCardThree.vue')
    },
    // 待接单页面三段
    {
        path: 'marStageThree',
        component: () => import('../../MainPopup/material/marStageThree.vue')
    },
    // 待接单页面三段
    {
        path: 'marStageThreeHander',
        component: () => import('../../MainPopup/material/marStageThreeHander.vue')
    },
    // 成本分账 合同账三段
    {
        path: 'costDetailThreeHT',
        component: () => import('../../MainPopup/cost/costDetailThreeHT.vue')
    },
    // 成本分账 成本账三段
    {
        path: 'costDetailThreeCB',
        component: () => import('../../MainPopup/cost/costDetailThreeCB.vue')
    },
    // 成本分账 人工三段
    {
        path: 'costDetailThreeRG',
        component: () => import('../../MainPopup/cost/costDetailThreeRG.vue')
    },
    // 成本分账 材料三段
    {
        path: 'costDetailThreeCL',
        component: () => import('../../MainPopup/cost/costDetailThreeCL.vue')
    },
    // 成本分账 奖罚三段
    {
        path: 'costDetailThreeJF',
        component: () => import('../../MainPopup/cost/costDetailThreeJF.vue')
    },
    // 成本分账 分项三段
    {
        path: 'costDetailThreeFX',
        component: () => import('../../MainPopup/cost/costDetailThreeFX.vue')
    },
    // 成本分账 盈余三段
    {
        path: 'costDetailThreeYY',
        component: () => import('../../MainPopup/cost/costDetailThreeYY.vue')
    },
    // 成本分账 成处理三段
    {
        path: 'costDetailThreeHandel',
        component: () => import('../../MainPopup/cost/costDetailThreeHandel.vue')
    },
    // 回款批次 收三段
    {
        path: 'returnDetailThree',
        component: () => import('../../MainPopup/return/returnDetailThree.vue')
    },
    // 回款批次 洽商 收三段
    {
        path: 'returnDetailThreeQS',
        component: () => import('../../MainPopup/return/returnDetailThreeQS.vue')
    },
    // 回款批次 收处理三段
    {
        path: 'returnDetailThreeHander',
        component: () => import('../../MainPopup/return/returnDetailThreeHander.vue')
    },
    // 支款账务 支三段
    {
        path: 'payDetailThree',
        component: () => import('../../MainPopup/pay/payDetailThree.vue')
    },
    // 支款账务 支 合计三段
    {
        path: 'payDetailThreeHJ',
        component: () => import('../../MainPopup/pay/payDetailThreeHJ.vue')
    },
    // 支款账务 支 人工款三段
    {
        path: 'payDetailThreeRG',
        component: () => import('../../MainPopup/pay/payDetailThreeRG.vue')
    },
    // 支款账务 支 材料款三段
    {
        path: 'payDetailThreeCL',
        component: () => import('../../MainPopup/pay/payDetailThreeCL.vue')
    },
    // 支款账务 支 增项款三段
    {
        path: 'payDetailThreeZX',
        component: () => import('../../MainPopup/pay/payDetailThreeZX.vue')
    },
    // 支款账务 支 结算款三段
    {
        path: 'payDetailThreeJS',
        component: () => import('../../MainPopup/pay/payDetailThreeJS.vue')
    },
    // 支款账务 支 增项协调费三段
    {
        path: 'payDetailThreeZXX',
        component: () => import('../../MainPopup/pay/payDetailThreeZXX.vue')
    },
    // 支款账务 支处理三段
    {
        path: 'payDetailThreeHander',
        component: () => import('../../MainPopup/pay/payDetailThreeHander.vue')
    },
    // 增减项洽谈 洽三段
    {
        path: 'zjtalkDetailThree',
        component: () => import('../../MainPopup/zjtalk/zjtalkDetailThree.vue')
    },
    // 增减项洽谈 洽处理三段
    {
        path: 'zjtalkDetailThreeHander',
        component: () => import('../../MainPopup/zjtalk/zjtalkDetailThreeHander.vue')
    },
    // 项目绩效核算合同 绩三段
    {
        path: 'jxitemHeDetailThree',
        component: () => import('../../MainPopup/jxItem/jxitemHeDetailThree.vue')
    },
    // 项目绩效核算其他 绩三段
    {
        path: 'jxitemOtherDetailThree',
        component: () => import('../../MainPopup/jxItem/jxitemOtherDetailThree.vue')
    },
    // 项目绩效核算 绩处理三段
    {
        path: 'jxitemDetailThreeHandel',
        component: () => import('../../MainPopup/jxItem/jxitemDetailThreeHandel.vue')
    },
    // 其他分项支出 其三段
    {
        path: 'otpayDetailThree',
        component: () => import('../../MainPopup/otpay/otpayDetailThree.vue')
    },
    // 其他分项支出 其处理三段
    {
        path: 'otpaytDetailThreeHandel',
        component: () => import('../../MainPopup/otpay/otpaytDetailThreeHandel.vue')
    },
    // 项目订单 订三段
    {
        path: 'ordertDetailThree',
        component: () => import('../../MainPopup/order/ordertDetailThree.vue')
    },
    // 项目订单 订处理三段
    {
        path: 'orderDetailThreeHandel',
        component: () => import('../../MainPopup/order/orderDetailThreeHandel.vue')
    },
    // 项目资料 资三段
    {
        path: 'dataDetailThree',
        component: () => import('../../MainPopup/data/dataDetailThree.vue')
    },
    // 项目资料 资处理三段
    {
        path: 'dataDetailThreeHandel',
        component: () => import('../../MainPopup/data/dataDetailThreeHandel.vue')
    }
]
