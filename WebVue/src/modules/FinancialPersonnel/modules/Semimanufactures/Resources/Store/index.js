import * as types from './types'

/**
 * state
 */
const state = {
    demo: '测试用例 不要使用'
}

/**
 * getters
 */
// const getters = {

// }

/**
 * mutations
 */
const mutations = {
    [types.SET_DEMO] (state, playLoad) {
        state.demo = playLoad
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
    // getters,
    mutations,
    actions
}
