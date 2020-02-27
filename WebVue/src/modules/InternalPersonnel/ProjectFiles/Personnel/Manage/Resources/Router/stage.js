export default [
    {
        path: 'stageThree',
        component: () => import('../../MainPopup/stage/stageThree.vue')
    },
    {
        path: 'stageThreeGuan',
        component: () => import('../../MainPopup/stage/stageThreeGuan.vue')
    },
    {
        path: 'stageThreeHander',
        component: () => import('../../MainPopup/stage/stageThreeHander.vue')
    },
    {
        path: 'handerState',
        name: 'handerState',
        component: () => import('../../MainPopup/state/hander.vue')
    }
]
