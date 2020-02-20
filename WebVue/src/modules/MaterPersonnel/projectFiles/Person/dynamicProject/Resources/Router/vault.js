export default [
    {
        path: 'vaultSettlement',
        component: () => import('../../MainPopup/vault/settlement.vue')
    },
    {
        path: 'vaultDeposit',
        component: () => import('../../MainPopup/vault/deposit.vue')
    }
]
