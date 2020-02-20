import dynamicProject from '../dynamicProject/Resources/Router/index'

export default [
    {
        path: 'Material',
        component: () => import('../dynamicProject/Index.vue'),
        children: dynamicProject
    }
]
