<template>
    <div class="layerRtb layerRtb-threecolumn">
        <three-title :title="{name:'结果'}"></three-title>
        <div class="layerRtb-scroll thinScroll" v-scrollHeight="137">
            <div class="analyItem">
                <p class="analyItemTit tx-center">竣工</p>
                <div class="analyItemCon">
                    <p class="col-md-3"><span class="cLightGray pr8">项目数</span>{{projectSum}}</p>
                    <p class="col-md-5"><span class="cLightGray pr8">绩效金额</span>{{completion_money.toFixed(2)}}</p>
                    <p class="col-md-4"><span class="cLightGray pr8">级别提成</span>{{comprehensive_completion.toFixed(2)}}</p>
                </div>
            </div>
            <div class="analyItem">
                <p class="analyItemTit tx-center">罚款</p>
                <div class="analyItemCon">
                    <p class="col-md-3"><span class="cLightGray pr8">项目数</span>{{projectSum}}</p>
                    <p class="col-md-5"><span class="cLightGray pr8">罚款金额</span>{{fine_money.toFixed(2)}}</p>
                    <p class="col-md-4"><span class="cLightGray pr8">级别提成</span>{{comprehensive_fine.toFixed(2)}}</p>
                </div>
            </div>
            <div class="analyItem">
                <p class="analyItemTit tx-center">洽商</p>
                <div class="analyItemCon">
                    <p class="col-md-3"><span class="cLightGray pr8">项目数</span>{{projectSum}}</p>
                    <p class="col-md-5"><span class="cLightGray pr8">洽商利润</span>{{negotiate_profit.toFixed(2)}}</p>
                    <p class="col-md-4"><span class="cLightGray pr8">级别提成</span>{{comprehensive_negotiate.toFixed(2)}}</p>
                </div>
            </div>
        </div>
        <div class="layerRtb-footer">
            <div class="analyItem">
                <p class="analyItemTit tx-center">综合</p>
                <div class="analyItemCon">
                    <div class="col-md-10">
                        <p class="col-md-3">竣工提成</p>
                        <p class="col-md-3">罚款提成</p>
                        <p class="col-md-3">洽商提成</p>
                        <p class="col-md-3">&nbsp;</p>
                        <p class="col-md-3 cGreen">{{comprehensive_completion.toFixed(2)}}</p>
                        <p class="col-md-3 cGreen">{{comprehensive_fine.toFixed(2)}}</p>
                        <p class="col-md-3 cGreen">{{comprehensive_negotiate.toFixed(2)}}</p>
                        <p class="col-md-3">&nbsp;</p>
                    </div>
                    <div class="col-md-2">
                        <p><span class="cLightGray pr8">合计</span></p>
                        <p>{{Number(comprehensive_completion+comprehensive_fine+comprehensive_negotiate).toFixed(2)}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            completionList: {},
            // 项目总数
            projectSum: 0,
            // 竣工金额
            completion_money: 0,
            // 竣工提成
            comprehensive_completion: 0,
            // 罚款金额
            fine_money: 0,
            // 罚款提成
            comprehensive_fine: 0,
            // 洽商金额
            negotiate_profit: 0,
            // 洽商提成
            comprehensive_negotiate: 0,
            tradeDetail: {},
            stayCompleteState: 5,
            stayCarryState: 5,
            stayDiscussState: 5
        }
    },
    created () {
        this.completionList = this.$route.params.stayStayResult
        this.load()
    },
    methods: {
        load () {
            for (var i = 0; i < this.completionList.length; i++) {
                this.projectSum++
                this.completion_money += this.completionList[i].completion_money
                this.comprehensive_completion += this.completionList[i].comprehensive_completion
                this.fine_money += this.completionList[i].fine_money
                this.negotiate_profit += this.completionList[i].negotiate_profit
                this.comprehensive_fine += this.completionList[i].comprehensive_fine
                this.comprehensive_negotiate += this.completionList[i].comprehensive_negotiate
            }
        }

    },
    // 路由跳转路径拼接
    routerPath (path) {
        return this.$route.matched[1].path + '/' + path
    },
    // 直接进行路由跳转路径
    routerPush (path) {
        this.$router.push(this.$route.matched[1].path + '/' + path)
    }
}
</script>
