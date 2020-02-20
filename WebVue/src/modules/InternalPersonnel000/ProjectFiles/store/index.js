import * as types from './types'

/**
 * state
 */
const state = {
    demo: '测试用例不要使用'
}

/**
 * getters
 */
const getters = {
    // 能用 state 不要用 getters
}

/**
 * mutations
 */
const mutations = {
    [types.SET_DEMO] (state, demo) {
        state.demo = demo
    }
}

/**
 * actions
 */
let actions = {

}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}
