import Project from '../Project/Resources/Router/index'

export default [
    {
        path: 'Project',
        component: () => import('../Project/Index.vue'),
        children: Project
    }

]
