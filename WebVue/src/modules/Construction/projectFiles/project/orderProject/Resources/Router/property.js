export default [
    // 资料植入
    {
        path: 'propertyInfo1',
        name: 'propertyInfo1',
        component: () => import('../../MainPopup/property/propertyInfo1.vue')
    },
    // 资料确认
    {
        path: 'propertyInfo2',
        name: 'propertyInfo2',
        component: () => import('../../MainPopup/property/propertyInfo2.vue')
    },
    // 资料打印
    {
        path: 'propertyInfo3',
        name: 'propertyInfo3',
        component: () => import('../../MainPopup/property/propertyInfo3.vue')
    },
    // 资料盖章
    {
        path: 'propertyInfo4',
        name: 'propertyInfo4',
        component: () => import('../../MainPopup/property/propertyInfo4.vue')
    },
    // 开工证
    {
        path: 'propertyInfo5',
        name: 'propertyInfo5',
        component: () => import('../../MainPopup/property/propertyInfo5.vue')
    },
    // 客户评价
    {
        path: 'propertyInfo6',
        name: 'propertyInfo6',
        component: () => import('../../MainPopup/property/propertyInfo6.vue')
    }
]
