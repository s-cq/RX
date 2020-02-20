import StaticProject from '../StaticProject/Resources/Router/index'

export default [
    {
        path: 'StaticProject',
        component: () => import('../StaticProject/Index.vue'),
        children: StaticProject
    }

]
