import StaticProject from '../staticProject/Resources/Router/index'

export default [
    {
        path: 'staticProject',
        component: () => import('../staticProject/Index.vue'),
        children: StaticProject
    }

]
