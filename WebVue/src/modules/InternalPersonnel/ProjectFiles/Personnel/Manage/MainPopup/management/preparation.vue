<template>
<div class="layerRtb layerRtb-threecolumn">
    <three-title :title="{name:'绩效详情'}"></three-title>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "137">
        <div class="analyItem">
            <p class="analyItemTit tx-center">标准</p>
            <div class="analyItemCon">
                <p class="col-md-3">
                    <span class="cLightGray pr8">标准</span>
                    <span> <span class="fz14 cGreen tx-fb pr8"> {{achieveMentList.length > 0 ? achieveMentList[0].greatMore : '--'}}</span>w</span>
                </p>
                <p class="col-md-3">
                    <span class="cLightGray pr8">奖励</span>
                    <span> <span> {{ achieveMentList.length > 0 ? achieveMentList[0].prize : '--'}}</span></span>
                </p>
                <p class="col-md-3">
                    <span class="cLightGray pr8">计量</span>
                    <span> <span class="fz14 cOrange tx-fb pr8">{{ achieveMentList.length > 0 ? achieveMentList[0].measure : '--'}}</span>w</span>
                </p>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">最低</p>
            <div class="analyItemCon">
                <p class="col-md-3">
                    <span class="cLightGray pr8">标准</span>
                    <span> <span class="fz14 cRed tx-fb pr8"> {{ achieveMentList.length > 0 ? achieveMentList[0].goodMore : '--'}}</span>w</span>
                </p>
                <p class="col-md-3">
                    <span class="cLightGray pr8">罚款</span>
                    <span> <span> {{ achieveMentList.length > 0 ? achieveMentList[0].punish : '--'}}</span></span>
                </p>
                <p class="col-md-3">
                    <span class="cLightGray pr8">计量</span>
                    <span> <span class="fz14 cOrange tx-fb pr8">{{ achieveMentList.length > 0 ? achieveMentList[0].measure : '--'}}</span>w</span>
                </p>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">实际</p>
            <div class="analyItemCon">
                <p class="col-md-3">
                    <span class="cLightGray pr8">实际</span>
                    <span> <span class="fz14 cOrange tx-fb pr8"> {{ achieveMentList.length > 0 ? achieveMentList[0].completionMoney : '--'}}</span>w</span>
                </p>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">撞表</p>
            <div class="analyItemCon">
                <p class="col-md-4">
                    <span class="cLightGray pr8">差额</span>
                    <span> <span class="fz14 cRed tx-fb pr8">{{ achieveMentList.length > 0 ? achieveMentList[0].resultMoney : '--'}}</span>w</span>
                </p>
                <p class="col-md-4">
                    <span class="cLightGray pr8">倒计时</span>
                    <span> <span class="fz14 cGreen tx-fb"> {{time}}天</span></span>
                </p>
                <p class="col-md-4">
                    <span class="cLightGray pr8">状态</span>
                    <span> <span class=" cRed tx-fb"> {{achieveMentList.length > 0 ? achieveMentList[0].resultMoney > 0 ? '撞表' : '未撞' : '--'}}</span></span>
                </p>
                 <p class="col-md-12">
                    <span class="cLightGray pr8">结果</span>
                    <span v-if="achieveMentList.length > 0 && achieveMentList[0].hasOwnProperty('resultMoney') ">
                        <span v-if="achieveMentList[0].resultMoney > 0">
                            <span> {{`已触发奖励标准:{(${achieveMentList[0].completionMoney} - ${achieveMentList[0].greatMore})}/${achieveMentList[0].measure}* ${achieveMentList[0].prize}`}}  <span class="cLightGray pr8">{{ ` {(实际量-标准量)}/计量* 奖励` }}</span>=
                                <span class="fz14 cGreen tx-fb">{{((achieveMentList[0].completionMoney - achieveMentList[0].greatMore)/achieveMentList[0].measure * achieveMentList[0].prize).toFixed(2)}}</span>
                            </span>
                        </span>
                        <span v-else>
                            <span> {{`已触发罚款标准:{(${achieveMentList[0].completionMoney} - ${achieveMentList[0].goodMore})}/${achieveMentList[0].measure}* ${achieveMentList[0].punish}`}}  <span class="cLightGray pr8">{{ ` {(实际量-最低量)}/计量* 罚款` }}</span>=
                                <span class="fz14 cRed tx-fb">{{((achieveMentList[0].completionMoney - achieveMentList[0].goodMore)/achieveMentList[0].measure * achieveMentList[0].punish).toFixed(2)}}</span>
                            </span>
                        </span>
                    </span>
                    <span v-else>--</span>
                </p>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">历史</p>
            <div class="analyItemCon">
                <p class="col-md-3">
                </p>
            </div>
        </div>
    </div>
    <div class="layerRtb-footer">
        <div class="analyItem">
            <p class="analyItemTit tx-center">综合</p>
            <div class="analyItemCon">
                <div class="clearfix">
                    <div class="clearfix">
                        <p class="col-md-4">
                            <span class="cLightGray pr8">结果</span>
                            <span v-if="achieveMentList.length > 0 && achieveMentList[0].hasOwnProperty('resultMoney') ">
                                <span v-if="achieveMentList.length > 0 && achieveMentList[0].resultMoney > 0">
                                    <span class="fz14 cGreen tx-fb">{{((achieveMentList[0].completionMoney - achieveMentList[0].greatMore)/achieveMentList[0].measure * achieveMentList[0].prize).toFixed(2)}}</span>
                                </span>
                                <span v-else>
                                    <span class="fz14 cRed tx-fb">{{((achieveMentList[0].completionMoney - achieveMentList[0].goodMore)/achieveMentList[0].measure * achieveMentList[0].punish).toFixed(2)}}</span>
                                </span>
                            </span>
                            <span v-else>--</span>
                        </p>
                        <p class="col-md-4">
                            <span class="cLightGray pr8">距完成目标差</span>
                            <span> <span  class="fz14 cRed tx-fb pr8">{{ achieveMentList.length > 0 ? achieveMentList[0].resultMoney : '--'}}</span> w</span>
                        </p>
                        <p class="col-md-4">
                            <span class="cLightGray pr8">状态</span>
                            <span> <span class="cRed tx-fb"> 不同意</span></span>
                        </p>
                    </div>
                    <div class="clearfix">
                        <p class="col-md-4">
                            <span class="cLightGray pr8">执行</span>
                            <span> <span class="cRed tx-fb"> 未到时</span></span>
                        </p>
                        <p class="col-md-4">
                            <span class="cLightGray pr8">倒计时</span>
                            <span> <span class="fz14 cGreen tx-fb"> {{time}}天</span></span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
         <div class="analyItem">
            <p class="analyItemTit tx-center">通知</p>
            <div class="analyItemCon">
                <p class="col-md-4">
                    <span class="cLightGray pr8">执行</span>
                    <span>系统</span>
                </p>
                <p class="col-md-4">
                    <span class="cLightGray pr8">时间</span>
                    <span>{{new Date().getFullYear()}}-{{new Date().getMonth() + 1}}-{{new Date(new Date().getMonth(), (new Date().getFullYear() + 1), 0).getDate()}}</span>
                </p>
                <p class="col-md-4">
                    <span class="cLightGray pr8">执行</span>
                    <span> <span class="cRed tx-fb"> 未到时</span></span>
                </p>
            </div>
        </div>
    </div>
</div>
</template>
<script>
import { mapGetters } from 'vuex'
import { getUserManageMonthEvaluation } from '../../Resources/Api/index'
export default {
    data () {
        return {
            achieveMentList: [], // 绩效集合
            currentCard: '', // 当前的卡号
            time: '' // 倒计时
        }
    },
    computed: {
        ...mapGetters(['userInfo'])
    },
    created () {
        this.time = Number(new Date(new Date().getFullYear(), (new Date().getMonth() + 1), 0).getDate()) - Number(new Date().getDate())
        this.getUserManageMonthEvaluation()
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
        getUserManageMonthEvaluation () {
            let parm = {
                user_card_no: this.$route.query.card
            }
            // 获取绩效接口
            getUserManageMonthEvaluation(parm).then((result) => {
                if (result.data.StatusCode === 0) {
                    this.achieveMentList = result.data.Body.allOnJobGCJL
                }
                console.log(this.achieveMentList)
            }).catch((error) => {
                console.log(error)
            })
        }
    },
    watch: {
        $route () {
            this.getUserManageMonthEvaluation()
        }
    }
}
</script>
