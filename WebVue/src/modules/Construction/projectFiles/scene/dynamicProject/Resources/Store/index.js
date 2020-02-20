import * as types from './types'

/**
 * state
 */
const state = {
    demo: '测试用例 不要使用'
    // status: -10 // 提交的状态
}

/**
 * getters
 */
const getters = {
    // status: state => state.status
}

/**
 * mutations
 */
const mutations = {
    [types.SET_DEMO] (state, playLoad) {
        state.demo = playLoad
    }
    // [types.SET_STATUS] (state, playload) {
    //     state.status = playload || -10
    // }
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
