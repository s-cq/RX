<template>
<div class="layerRtb layerRtb-threecolumn">
    <three-title :title="{name:'【分项账】详情'}"></three-title>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "137">
        <div class="plr10">
            <div class="analyItem">
                <p class="analyItemTit tx-center">空调款</p>
                <div class="analyItemCon">
                    <p class="fl col-md-4"><span class="cLightGray pr8">应付</span><span class="cGreen">{{workorderSpecial===null? '0.00' : workorderSpecial.KT_publish_fee}}</span></p>
                </div>
            </div>
            <div class="analyItem">
                <p class="analyItemTit tx-center">消防款</p>
                <div class="analyItemCon">
                    <p class="fl col-md-4"><span class="cLightGray pr8">应付</span><span class="cGreen">{{workorderSpecial===null? '0.00' :workorderSpecial.XF_publish_fee}}</span></p>
                </div>
            </div>
            <div class="analyItem">
                <p class="analyItemTit tx-center">钢结构款</p>
                <div class="analyItemCon">
                    <p class="fl col-md-4"><span class="cLightGray pr8">应付</span><span class="cGreen">{{workorderSpecial===null? '0.00' :workorderSpecial.GJG_publish_fee}}</span></p>
                </div>
            </div>
            <div class="analyItem">
                <p class="analyItemTit tx-center">客户代购款</p>
                <div class="analyItemCon">
                    <p class="fl col-md-4"><span class="cLightGray pr8">应付</span><span class="cGreen">{{workorderSpecial===null? '0.00' :workorderSpecial.QT_publish_fee}}</span></p>
                </div>
            </div>
        </div>
    </div>
    <div class="layerRtb-footer">
        <div class="analyItem">
            <p class="analyItemTit tx-center">综合</p>
            <div class="analyItemCon">
                <span class="circlemark circlemark-green">完</span>
            </div>
        </div>
    </div>
</div>
</template>
<script>
import { mapGetters } from 'vuex'
import { getCostSharingThree } from '../../Resources/Api'
export default {
    data () {
        return {
            workorderSpecial: null
        }
    },
    computed: {
        ...mapGetters(['leftInfo'])
    },
    created () {
        this.load()
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
        // 查询回款二段数据
        load () {
            let param = {
                orderNo: this.leftInfo.orderno, // this.leftInfo.orderno
                type: 6
            }
            getCostSharingThree(param).then(results => {
                if (Number(results.data.StatusCode) === 0) {
                    this.workorderSpecial = results.data.Body.workorderSpecial
                }
            }).catch(() => {})
        },
        // 时间转换
        myFormatDate (date) {
            if (date === null || date === '') {
                return '--'
            } else {
                return this.$utils.format('yyyy-MM-dd', date)
            }
        }
    },
    watch: {
        leftInfo () {
            this.load()
        }
    },
    filters: {
        // 时间转换
        myFormatDate (date) {
            if (date === null || date === '') {
                return '--'
            } else {
                return this.$utils.format('yyyy-MM-dd', date)
            }
        }
    }
}
</script>
<style lang="scss" scoped>
    .orderDetailBtn {
       background: #43ccec;
        color: #fff;
        display: block;
        width: 60px;
        border-radius: 4px;
        margin: 0 auto;
        height: 30px;
        line-height: 30px;
        font-size: 15px;
    }
    .staticSRyle {
        width: 25px;
        line-height: 25px!important;
        top: 2px;
        left: 2px;
        background: #000;
        opacity: .6;
        height: 25px;
        position: absolute;
        border-radius: 5px;
        color: #fff;
        text-align: center;
    }
</style>
