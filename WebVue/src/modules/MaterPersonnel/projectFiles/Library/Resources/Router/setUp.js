export default [
    {
        path: 'setUpBasic',
        component: () => import('../../MainPopup/setUp/basic.vue')
    },
    {
        path: 'setUpManage',
        component: () => import('../../MainPopup/setUp/manage.vue')
    },
    {
        path: 'setUpProcess',
        component: () => import('../../MainPopup/setUp/process.vue')
    },
    {
        path: 'setUpResult',
        component: () => import('../../MainPopup/setUp/result.vue')
    },
    {
        path: 'setUpTraining',
        component: () => import('../../MainPopup/setUp/training.vue')
    }
]
