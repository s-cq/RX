import Vue from 'vue'
import Vuex from 'vuex'
import ElementRx from '@rx/coreStore'

import Index from '../modules/Index/Resources/Store/index'

Vue.use(Vuex)

// 创建 store 实例
export default new Vuex.Store({
    strict: process.env.NODE_ENV !== 'production',
    modules: {
        ElementRx,
        // ... at the next lower level
        // Each store should be independent
        Index
    }
})
