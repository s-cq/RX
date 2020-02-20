export default [
    {
        path: 'resultCompletion',
        name: 'resultCompletion',
        component: () => import('../../MainPopup/result/completion.vue')
    },
    {
        path: 'resultFine',
        name: 'resultFine',
        component: () => import('../../MainPopup/result/fine.vue')
    },
    {
        path: 'resultNegotiation',
        name: 'resultNegotiation',
        component: () => import('../../MainPopup/result/negotiation.vue')
    }
]
