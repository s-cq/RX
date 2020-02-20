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
        this.src = 'https://tapp.rxjy.com/appNews/news/setNews?cutting=false&type=1&appId=5&userName=' + this.userInfo.as_userName + '&cardNo=' + this.userInfo.as_cardNo
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
