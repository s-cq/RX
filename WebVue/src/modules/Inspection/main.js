import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import axios from 'axios'

// import outer css
import 'element-ui/lib/theme-chalk/index.css'
import 'viewerjs/dist/viewer.css'

// import outer components
import VueMeta from 'vue-meta'
import ElementUi from 'element-ui'
import ElementRx from '@/element-rx'

// Use Config
Vue.use(VueMeta)
Vue.use(ElementUi, {
    size: 'mini'
})
Vue.use(ElementRx, {
    department: 'gc', // department ID,
    loading: false // Whether or not to open loading true/false
})

// prototype Config
Vue.prototype.$axios = axios

/* eslint-disable no-new */
new Vue({
    el: '#app',
    store,
    router,
    components: { App },
    template: '<App/>'
})
