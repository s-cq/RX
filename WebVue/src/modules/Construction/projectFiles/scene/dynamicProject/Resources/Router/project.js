export default [
    // 项目 - 现场
    {
        path: 'projectScene',
        component: () => import('../../MainPopup/project/scene.vue')
    },
    // 项目 - 资料
    {
        path: 'projectData',
        component: () => import('../../MainPopup/project/data.vue')
    }
]
