<template>
    <div class="">
        <div class="pr10">
            <div class="analyItem">
                <p class="analyItemTit tx-center">状态</p>
                <div class="analyItemCon">

                </div>
            </div>
        </div>
        <div class="thinScroll pr10" v-scrollHeight="10" v-html="loadData" id="loadData"></div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    data () {
        return {
            loadData: ''
        }
    },
    computed: {
        ...mapGetters(['leftInfo'])
    },
    created () {
        // if (this.leftInfo.orderno) {
        //     // this.getLoad(this.leftInfo.orderno)
        // }
    },
    methods: {
        // 路由跳转路径拼接
        routerPath (path) {
            return this.$route.matched[1].path + '/' + path
        },
        // 直接进行路由跳转路径
        routerPush (path) {
            this.$router.push(this.$route.matched[1].path + '/' + path)
        },
        getLoad () {
            this.$axios.get('https://gams.rxjy.com/a/ams/workorder/API/GetProjectModule?orderno=18-142207&postType=12').then((resules) => {
                this.loadData = resules.data
            }).catch((error) => {
                console.log(error)
            })
        }
    },
    watch: {
        leftInfo () {
            this.getLoad('18-142207')
        }
    }
}

</script>
