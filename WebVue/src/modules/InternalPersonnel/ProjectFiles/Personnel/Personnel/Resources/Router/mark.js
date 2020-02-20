export default [
    {
        path: 'markPosition',
        component: () => import('../../MainPopup/mark/position.vue')
    },
    {
        path: 'markCultivation',
        component: () => import('../../MainPopup/mark/cultivation.vue')
    },
    {
        path: 'markCharacteristics',
        component: () => import('../../MainPopup/mark/characteristics.vue')
    },
    {
        path: 'markSpecialty',
        component: () => import('../../MainPopup/mark/specialty.vue')
    },
    {
        path: 'markAuthority',
        component: () => import('../../MainPopup/mark/authority.vue')
    },
    {
        path: 'markRight',
        component: () => import('../../MainPopup/mark/right.vue')
    },
    {
        path: 'markHandling',
        component: () => import('../../MainPopup/mark/handling.vue')
    }
]
