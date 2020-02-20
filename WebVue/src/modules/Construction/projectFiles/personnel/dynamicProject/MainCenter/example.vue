<template>
<div class="" id="projectLoad">
    <div class="pr10">
        <div class="analyItem">
            <p class="analyItemTit tx-center">状态</p>
            <div class="analyItemCon">

            </div>
        </div>
    </div>
    <div class="thinScroll pr10" v-scrollHeight="10" v-html="loadData"></div>
</div>
</template>
<script>
import rxQrcode from '@rx/packages/qrcode/Index'
import { mapGetters } from 'vuex'
export default {
    data () {
        return {
            pullIndex: undefined,
            loadData: ''
        }
    },
    computed: {
        ...mapGetters(['leftInfo', 'userInfo'])
    },
    created () {
        this.getLoad(this.leftInfo.orderno)
    },
    mounted () {
        this.$nextTick(() => {
            let arrow = document.querySelectorAll('#projectLoad .thinScroll')[0].children
            console.log(arrow)
        })
    },
    components: {
        rxQrcode
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
        // 展开 关闭切换
        pullSwitch (index) {
            if (this.pullIndex === index) {
                this.pullIndex = undefined
            } else {
                this.pullIndex = index
            }
        },
        getLoad (orderno) {
            this.$axios.get('https://gams.rxjy.com/a/ams/workorder/API/GetProjectModule?orderno=' + orderno + '&postType=12').then((result) => {
                this.loadData = result.data
            })
        }
    },
    watch: {
        leftInfo () {
            this.getLoad(this.leftInfo.orderno)
        }
    }
}
</script>
