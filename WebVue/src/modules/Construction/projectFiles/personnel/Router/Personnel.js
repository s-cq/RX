import dynamicProject from '../dynamicProject/Resources/Router/index'

export default [
    {
        path: 'dynamicProject',
        component: () => import('../dynamicProject/Index.vue'),
        children: dynamicProject
    }
]
