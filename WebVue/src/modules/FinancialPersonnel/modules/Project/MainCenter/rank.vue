<template>
<div class="">
    <div class="pr10">
        <div class="analyItem">
            <p class="analyItemTit tx-center">状态</p>
            <div class="analyItemCon">
                <p class="col-md-2">
                    <span class="cGreen fz14">{{leftInfo.stage}}</span>
                </p>
                <p class="col-md-4">
                    <span class="cGreen fz14" title="进入该阶段的日期">--</span>
                </p>
                <p class="col-md-2">
                    <span class="fr cRed fz14">未开启</span>
                </p>
                <span><span class="circlemark circlemark-lightRed">未</span></span>
            </div>
        </div>
    </div>
    <div class="thinScroll pr10" v-scrollHeight="84">
        <div class="analyItem">
            <p class="analyItemTit tx-center" :class="leftInfo.stage === '审计' ? 'select_bgGreen' : ''">审计</p>
            <div class="analyItemCon">
                <p class="col-md-4 lh28">
                    <span class="c999 pr8">审计</span>
                    <span class="cRed pr8">
                        未完
                    </span>
                </p>
                <p class="col-md-4 lh28">
                    <span class="c999 pr8">分配</span>
                    <span class="cRed pr8">未完</span>
                </p>
                <p class="col-md-4 lh28">
                    <span class="c999 pr8">客服</span>
                    <span class="cRed">未完</span>
                </p>
                <p class="col-md-4">
                    <span class="cLightGray pr8">发包</span>
                    <span class="cRed pr8">未完</span>
                </p>
                <p class="col-md-4">
                    <span class="cLightGray pr8">财务</span>
                    <span class="cGreen pr8">完成</span>
                </p>
                <p class="col-md-4">
                    <span class="cLightGray pr8">材料</span>
                    <span class="cGreen pr8">完成</span>
                </p>
                <p class="col-md-4">
                    <span class="cLightGray pr8">设计师</span>
                    <span class="cRed pr8">未完</span>
                </p>
                <span><span class="circlemark circlemark-yellow">异</span></span>
                <i class="projectCtrolSet hide" lkw-settype="gc_set_sj" data-module="1"></i>
                <div class="fixedTrangle"><span href="javascript:" class="fixedtips"></span>
                    <div class="fixedtipscon pt10 pb10"> <i></i>
                        <p>48个小时内未完成发包为异常</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center" :class="leftInfo.stage === '准备' ? 'select_bgGreen' : ''">准备</p>
            <div class="analyItemCon">
                <p class="col-md-4">
                    <span class="cLightGray pr8">监理</span>
                    <span class="cRed">未完</span>
                </p>
                <p class="col-md-4">
                    <span class="cLightGray pr8">客户端</span>
                    <span class="cRed">未完</span>
                </p>
                <p class="col-md-4">
                    <span class="cLightGray pr8">外人</span>
                    <span class="cGreen">完成</span>
                </p>
                <p class="col-md-4">
                    <span class="cLightGray pr8">经理</span>
                    <span class="cRed pr8">未完</span>
                </p>
                <span><span class="circlemark circlemark-lightRed">未</span></span>
                <i class="projectCtrolSet hide" lkw-settype="gc_set_sj" data-module="2"></i>
                <div class="fixedTrangle">
                    <a href="javascript:" class="fixedtips"></a>
                    <div class="fixedtipscon pt10 pb10 tx-center" style="display: none;">
                        <i></i>
                        <p>项目经理、监理7天内没有完成开工前准备工作为异常</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center" :class="leftInfo.stage === '施前' ? 'select_bgGreen' : ''">施前</p>
            <div class="analyItemCon">
                <p class="col-md-4">
                    <span class="cLightGray pr8">监理</span>
                    <span class="cRed pr8">未完</span>
                </p>
                <p class="col-md-4">
                    <span class="cLightGray pr8">项经</span>
                    <span class="cRed pr8">未完</span>
                </p>
                <span><span class="circlemark circlemark-lightRed">未</span></span>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center" :class="leftInfo.stage === '施中' ? 'select_bgGreen' : ''">施中</p>
            <div class="analyItemCon">
                <p class="col-md-4">
                    <span class="cLightGray pr8">监理</span>
                    <span class="cRed pr8">未完</span>
                </p>
                <p class="col-md-4">
                    <span class="cLightGray pr8">项经</span>
                    <span class="cRed pr8">未完</span>
                </p>
                <span><span class="circlemark circlemark-lightRed">未</span></span>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center" :class="leftInfo.stage === '施尾' ? 'select_bgGreen' : ''">施尾</p>
            <div class="analyItemCon">
                <p class="col-md-4">
                    <span class="cLightGray pr8">监理</span>
                    <span class="cRed pr8">未完</span>
                </p>
                <p class="col-md-4">
                    <span class="cLightGray pr8">项经</span>
                    <span class="cRed pr8">未完</span>
                </p>
                <span><span class="circlemark circlemark-lightRed">未</span></span>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center" :class="leftInfo.stage === '竣工' ? 'select_bgGreen' : ''">竣工</p>
            <div class="analyItemCon">
                <p class="col-md-4">
                    <span class="cLightGray pr8">总检</span>
                    <span class="cRed">未完</span>
                </p>
                <p class="col-md-4">
                    <span class="cLightGray pr8">验收</span>
                    <span class="cRed">未完</span>
                </p>
                <p class="col-md-4">
                    <span class="cLightGray pr8">结算</span>
                    <span class="cRed pr8">未完</span>
                </p>
                <span><span class="circlemark circlemark-lightRed">未</span></span>
                <i class="projectCtrolSet hide"></i>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center" :class="leftInfo.stage === '完工' ? 'select_bgGreen' : ''">完工</p>
            <div class="analyItemCon">
                <p class="col-md-4 lh28">
                    <span class="c999 pr8">甲方</span>
                    <span class="cRed pr8">未结算</span>
                </p>
                <p class="col-md-4 lh28">
                    <span class="c999 pr8">丙方</span>
                    <span class="cRed pr8">未结算</span>
                </p>
                <span><span class="circlemark circlemark-lightRed">未</span></span>
                <i class="projectCtrolSet hide"></i>
            </div>
        </div>
    </div>
    <div class="pr10">
        <div class="analyItem">
            <p class="analyItemTit tx-center">综合</p>
            <div class="analyItemCon">
                <p class="col-md-4">&nbsp;</p>
                <!-- <p class="col-md-4"><span class="cGreen bold">方案</span></p> -->
            </div>
        </div>
    </div>
</div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    data () {
        return {
            parmasExample: {
                name: '',
                age: ''
            }
        }
    },
    computed: {
        ...mapGetters(['leftInfo'])
    },
    created () {

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
    }
}
</script>
<style lang="scss" scoped>
    .select_bgGreen {
        background: #14b149 !important;
        color: #fff !important;
    }
</style>
