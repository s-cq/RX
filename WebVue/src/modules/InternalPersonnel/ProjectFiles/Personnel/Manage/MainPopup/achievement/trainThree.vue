<template>
    <div class="layerRtb layerRtb-threecolumn">
        <three-title :title="{name:'培训'}"></three-title>
         <div class="thinScroll pr10" v-scrollHeight="0">
              <iframe :src="getUrl" frameborder="0" width="100%" height="100%"></iframe>
         </div>

    </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    data () {
        return {
            getUrl: null // 获取的Url
        }
    },
    computed: {
        ...mapGetters(['leftInfo', 'userInfo'])
    },
    created () {
        this.getUrl = this.$route.query.pathUrl
    },
    methods: {
    },
    watch: {
        $route () {
            this.getUrl = this.$route.query.pathUrl
        }
    }

}

</script>

