export default [
    {
        path: 'resultCompletion',
        name: 'resultCompletion1',
        component: () => import('../../MainPopup/result/completion.vue')
    },
    {
        path: 'resultFine',
        name: 'resultFine1',
        component: () => import('../../MainPopup/result/fine.vue')
    },
    {
        path: 'resultNegotiation',
        name: 'resultNegotiation1',
        component: () => import('../../MainPopup/result/negotiation.vue')
    }
]
