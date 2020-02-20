export default [
    {
        path: 'tagCharacteristics',
        component: () => import('../../MainPopup/tag/characteristics.vue')
    },
    {
        path: 'tagCultivate',
        component: () => import('../../MainPopup/tag/cultivate.vue')
    },
    {
        path: 'tagRight',
        component: () => import('../../MainPopup/tag/right.vue')
    },
    {
        path: 'tagSpecialty',
        component: () => import('../../MainPopup/tag/specialty.vue')
    }
]
