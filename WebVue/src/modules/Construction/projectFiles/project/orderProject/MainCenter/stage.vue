<template>
<div class="">
    <div class="pr10">
        <div class="analyItem">
            <p class="analyItemTit tx-center">状态</p>
            <div class="analyItemCon">
                <div class="col-md-12">
                    <div class="col-md-3">
                        <span class="cGreen pr8" title="当前阶段"></span>
                    </div>
                    <div class="col-md-3">
                        <span class="cGreen pr8">未开启</span>
                    </div>
                    <span class="circlemark circlemark-lightGreen">正</span>
                </div>
            </div>
        </div>
    </div>
    <div class="thinScroll pr10" v-scrollHeight="10">
    </div>
</div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    data () {
        return {
        }
    },
    created () {
        this.load()
    },
    computed: {
        ...mapGetters(['leftInfo', 'userInfo'])
    },
    methods: {
        // 路由跳转路径拼接
        routerPath (path) {
            return this.$route.matched[1].path + '/' + path
        },
        // 直接进行路由跳转路径
        routerPush (path) {
            this.$router.push(this.$route.matched[1].path + '/' + path)
        }
    },
    watch: {
        // leftInfo () {
        //     this.load()
        // }
    }
}
</script>
