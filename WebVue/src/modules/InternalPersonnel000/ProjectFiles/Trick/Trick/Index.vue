<template>
    <div id="components">
        <iframe :src="src" frameborder="0" width="100%" height="100%"></iframe>
    </div>
</template>
<script>
import {
    mapGetters
} from 'vuex'
export default {
    data () {
        return {
            src: ''
        }
    },
    created () {
    // this.getLoad(this.leftInfo.cardNo, this.userInfo.as_cardNo)
        this.src = 'https://gnrzp.rxjy.com/recruit/out/index'
    },
    mounted () {
    },
    methods: {
    },
    computed: {
        ...mapGetters(['userInfo'])
    },
    watch: {
    }
}
</script>
