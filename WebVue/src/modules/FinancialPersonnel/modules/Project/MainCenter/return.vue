<template>
<div class="">
    <div class="pr10">
        <!-- 状态 -->
        <div class="analyItem ">
            <p class="analyItemTit tx-center">状态</p>
            <div class="analyItemCon ">
                     <p class="col-md-4 fl">
                        <span class="pr8 c999">应回</span><br>
                        <span class="pr8 c999">{{getReceive.period}}</span>
                     </p>
                     <p class="col-md-4">
                        <span class="c999 pr8">剩余</span><br>
                        <span>{{getReceive.days}}</span>天
                     </p>
                     <p class="col-md-4 fl">
                         <span class="c999 pr8">未收</span><br>
                         <span>{{getReceive.notReceived.toFixed(2)}}</span>
                     </p>
                     <span class="circlemark circlemark-lightRed">未</span>
            </div>
        </div>
        <!-- 合计 -->
        <!-- <div class="analyItem">
                <p class="analyItemTit tx-center">合计</p>
                <div class="analyItemCon">
                    <p class="col-md-4">
                        <span class="cLightGray pr8" data-title="应收总额 = 所有期数的应收-减项金额 合计">应总</span><br>
                        <span class="cGreen">{{getReceive.contractFee}}</span>
                    </p>
                    <p class="col-md-4">
                        <span class="cLightGray pr8" data-title="已收总额 = 所有期数的已收合计">已总</span><br>
                        <span class="cGreen">{{getReceive.sumReceived}}</span>
                    </p>
                    <p class="fl col-md-4">
                        <span class="cLightGray pr8" data-title="差额 = 应收总额 - 已收总额">差额 </span><br>
                        <span class="cGreen">{{getReceive.notReceived}}</span>
                    </p>
                </div>
        </div> -->
    </div>
    <div class="thinScroll pr10" v-scrollHeight="84">
        <!-- 期款 -->
         <router-link  tag="div" exact :to="{path:routerPath('returnDetailThree'), query:{item:item,index:index}}" class="analyItem anItemBor" active-class="anItemBor-active" v-for="(item,index) in receiveMoneyList" :key="index">
            <p class="analyItemTit tx-center">{{stageFilter(index+1)}}期款<span v-if="item.type === 4" style="color:red;">|质</span></p>
            <div class="analyItemCon">
                <p class="col-md-4">
                    <span class="pr8 cLightGray">应收</span>
                    <span>{{item.received_time =null ? '--': formatDate(item.receivable_time)}}</span>
                </p>
                <p class="col-md-4">
                    <span class="pr8 cLightGray">金额</span>
                    <span>{{item.receivable.toFixed(2)}}</span>
                </p>
                <p class="col-md-4">
                    <span class="pr8 cLightGray">进度</span>
                    <span>{{item.chargeback_rate}}</span>%
                </p>
                <p class="col-md-4">
                    <span class="pr8 cLightGray">实收</span>
                    <span>{{item.received_time =null ? '--': formatDate(item.received_time)}}</span>
                </p>
                <p class="col-md-4">
                    <span class="pr8 cLightGray">金额</span>
                    <span>{{item.received.toFixed(2)}}</span>
                </p>
                <p class="col-md-4">
                    <span class="pr8 cLightGray">天数</span>
                    <span :class="{'cRed':item.day<0}">{{item.day}}</span>
                </p>
                 <span><span class="circlemark" :class="stageColorStandard(item.statusName)">{{item.statusName}}</span></span>
            </div>
        </router-link>
        <!-- 洽商 -->
        <router-link tag="div" :to="routerPath('returnDetailThreeQS')" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">洽商</p>
            <div class="analyItemCon">
                    <p class="col-md-4">
                        <span class="cLightGray pr8" data-title="洽商利润 = （增项签单金额 - 增项发包金额 - 增项税金 - 增项代购）/ （增项签单金额 - 增项税金 - 增项代购）">洽商利润</span><br>
                        <span class="cGreen">预留</span>
                    </p>
                    <p class="col-md-4">
                        <span class="cLightGray pr8" data-title="洽商提成 = 监理增项总提成 + 工程经理增项总提成">洽商提成</span><br>
                        <span class="cGreen">预留</span>
                    </p>
                    <span class="circlemark circlemark-lightRed">差</span>
            </div>
        </router-link>
    </div>
    <div class="pr10">
        <router-link tag="div" :to="routerPath('returnDetailThreeHander')" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">处理</p>
            <div class="analyItemCon">
                 <p class="col-md-4">
                        <span class="cLightGray pr8" data-title="应收总额 = 所有期数的应收-减项金额 合计">应总</span><br>
                        <span class="cGreen">{{(getReceive.receivables).toFixed(2)}}</span>
                    </p>
                    <p class="col-md-4">
                        <span class="cLightGray pr8" data-title="已收总额 = 所有期数的已收合计">已总</span><br>
                        <span class="cGreen">{{(getReceive.sumReceived).toFixed(2)}}</span>
                    </p>
                    <p class="fl col-md-4">
                        <span class="cLightGray pr8" data-title="差额 = 应收总额 - 已收总额">差额 </span><br>
                        <span class="cGreen">{{(getReceive.notReceived).toFixed(2)}}</span>
                    </p>
            </div>
        </router-link>
    </div>
</div>
</template>
<script>
import { mapGetters } from 'vuex'
import { getReceiveMoney } from '../Resources/Api'
export default {
    name: '',
    data () {
        return {
            getReceive: {}, // 返回所有信息
            receiveMoneyList: []

        }
    },
    created () {
        this.getReceiveMoney()
    },
    computed: {
        ...mapGetters(['leftInfo'])
    },
    methods: {
        // 查询回款二段数据
        getReceiveMoney () {
            getReceiveMoney({
                orderNo: this.leftInfo.orderno
            }).then(results => {
                if (Number(results.data.StatusCode) === 0) {
                    this.getReceive = results.data.Body
                    this.receiveMoneyList = results.data.Body.receiveMoneyList
                }
            }).catch(() => {})
        },
        // 时间转换
        formatDate (value) {
            let date = new Date(value)
            let y = date.getFullYear()
            let MM = date.getMonth() + 1
            MM = MM < 10 ? ('0' + MM) : MM
            let d = date.getDate()
            d = d < 10 ? ('0' + d) : d
            return y + '-' + MM + '-' + d
        },
        // guolv
        stageFilter (stage) {
            var stageName = ''
            switch (stage) {
            case 1:
                stageName = '一'
                break
            case 2:
                stageName = '二'
                break
            case 3:
                stageName = '三'
                break
            case 4:
                stageName = '四'
                break
            case 5:
                stageName = '五'
                break
            case 6:
                stageName = '六'
                break
            case 7:
                stageName = '七'
                break
            case 8:
                stageName = '八'
                break
            }
            return stageName
        },
        // 状态
        stageColorStandard (str) {
            let color = ''
            switch (str) {
            case '完':
                color = 'circlemark-green'
                break
            case '未':
                color = 'circlemark-lightRed'
                break
            case '差':
                color = 'circlemark-lightRed'
                break
            }
            return color
        },
        // 路由跳转路径拼接
        routerPath (path) {
            return this.$route.matched[1].path + '/' + path
        },
        // 直接进行路由跳转路径
        routerPush (path) {
            this.$router.push(this.$route.matched[1].path + '/' + path)
        }

    },
    filters: {
        dCreateTime (value) {
            var date = new Date(parseInt(value))
            var Y = date.getFullYear() + '-'
            var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-'
            var D = date.getDate() + ' '
            // var h = date.getHours() + ':'
            // var m = date.getMinutes() + ':'
            // var s = date.getSeconds()
            var df = Y + M + D
            //   var df = Y+M+D+h+m+s;
            return df
        }
    },
    watch: {
        leftInfo () {
            this.getReceiveMoney()
            console.log('111')
        }
    }
}
</script>
