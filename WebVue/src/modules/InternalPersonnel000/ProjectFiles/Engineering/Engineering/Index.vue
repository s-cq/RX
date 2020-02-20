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
        this.src = 'https://tedu.rxjy.com/a/data/dataManage/provide?operateCard=' + this.userInfo.as_cardNo
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
