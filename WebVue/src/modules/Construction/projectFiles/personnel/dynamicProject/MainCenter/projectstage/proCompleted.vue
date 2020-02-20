<template>
<div class="">
    <div class="analyItem">
        <p class="analyItemTit tx-center">总计</p>
        <div class="analyItemCon">
            <div class="col-md-3"><span class="cLightGray pr8">总金额</span><span>0元</span></div>
            <div class="col-md-3"><span class="cLightGray pr8">已付款</span><span>0元</span></div>
            <div class="col-md-3"><span class="cLightGray pr8">待付款</span><span>0元</span></div>
        </div>
    </div>
    <div class="analyItem">
        <p class="analyItemTit tx-center">总检</p>
        <div class="analyItemCon">
            <div class="col-md-3"><span class="cLightGray pr8">已完成</span><span>0</span></div>
            <div class="col-md-3"><span class="cLightGray pr8">合格</span><span>0</span></div>
            <div class="col-md-3"><span class="cLightGray pr8">整改</span><span>0</span></div>
        </div>
    </div>
    <div class="analyItem">
        <p class="analyItemTit tx-center">花名册</p>
        <div class="analyItemCon">
            <div class="col-md-3"><span class="cLightGray pr8">人数</span><span>0</span></div>
            <div class="col-md-3"><span class="cLightGray pr8">总金额</span><span>0元</span></div>
            <div class="col-md-3"><span class="cLightGray pr8">已发</span><span>0元</span></div>
            <div class="col-md-3"><span class="cLightGray pr8">未发</span><span>0元</span></div>
        </div>
    </div>
</div>
</template>
<script>
import { mapGetters } from 'vuex'
import { } from '../../Resources/Api/proStage'
export default {
    data () {
        return {
            auditList: [], // 项目审计列表
            workerTypeList: [] // 人工列表

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
        },
        // 加载
        load () {

        }

    },
    watch: {
        leftInfo () {
            this.load()
        }
    },
    filters: {
        stage (parone) {
            let value = ''
            switch (parone) {
            case 0:
            case 10:
                value = '审计'
                break
            case 20:
                value = '准备'
                break
            case 30:
                value = '在施'
                break
            case 31:
                value = '施前'
                break
            case 32:
                value = '施中'
                break
            case 33:
                value = '施尾'
                break
            case 40:
                value = '竣工'
                break
            case 50:
                value = '完工'
                break
            case 60:
                value = '历史'
                break
            case 70:
                value = '坏账'
                break
            case 80:
                value = '退单'
                break
            }
            return value
        }
    }
}
</script>
