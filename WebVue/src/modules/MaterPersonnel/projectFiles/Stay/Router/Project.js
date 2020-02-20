import Project from '../dynamicProject/Resources/Router/index'

export default [
    {
        path: 'Project',
        component: () => import('../dynamicProject/Index.vue'),
        children: Project
    }
]
