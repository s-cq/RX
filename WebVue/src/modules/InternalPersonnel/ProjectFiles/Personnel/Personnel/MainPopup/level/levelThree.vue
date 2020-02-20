<template>
<div class="layerRtb layerRtb-threecolumn">
    <three-title :title="{name:'详情'}"></three-title>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "137">
        <div v-if="currentIndex === 1">
            <div class="analyItem" v-for="(item,index) in comDateList" :key='index'>
                <p class="analyItemTit tx-center">项目{{index + 1}}</p>
                <div class="analyItemCon">
                    <p class="col-md-4">
                        <span class="cLightGray pr8">项目名称</span>
                        <span>{{item.project_name}}</span>
                    </p>
                    <p class="col-md-4">
                        <span class="cLightGray pr8">项目金额</span>
                        <span>{{item.completion_money / 10000}}万</span>
                    </p>
                    <p class="col-md-4">
                        <span class="cLightGray pr8">完成时间</span>
                        <span>{{item.create_time}}</span>
                    </p>
                </div>
            </div>
            <div class="analyItem" v-if="comDateList.length === 0">
                <p class="analyItemTit tx-center">暂无数据</p>
                <div class="analyItemCon">
                    <span>暂无数据</span>
                </div>
            </div>
        </div>
        <div v-if="currentIndex === 2">
            <div class="analyItem" v-for="(item,index) in orderDateList" :key='index'>
                <p class="analyItemTit tx-center">订单{{index + 1}}</p>
                <div class="analyItemCon">
                    <p class="col-md-6">
                        <span class="cLightGray pr8">订单名称</span>
                        <span>{{item.orderDateList}}</span>
                    </p>
                    <span :class="['circlemark', item.orderStatus ? 'circlemark-lightRed' : 'circlemark-green']">{{item.orderStatus ? '未' : '完'}}</span>
                </div>
            </div>
            <div class="analyItem" v-if="orderDateList.length === 0">
                <p class="analyItemTit tx-center">暂无数据</p>
                <div class="analyItemCon">
                    <span>暂无数据</span>
                </div>
            </div>
        </div>
        <div v-if="currentIndex === 3">
            <div class="analyItem" v-for="(item,index) in evalDateList" :key='index'>
                <p class="analyItemTit tx-center">好评{{index + 1}}</p>
                <div class="analyItemCon">
                    <p class="col-md-6">
                        <span class="cLightGray pr8">项目名称</span>
                        <span>{{item.project_name}}</span>
                    </p>
                    <p class="col-md-6">
                        <span class="cLightGray pr8">评价结果</span>
                        <span>{{item.score}}</span>
                    </p>
                    <p class="col-md-12">
                        <span class="cLightGray pr8">评价内容</span>
                        <span>{{item.score_content}}</span>
                    </p>
                </div>
            </div>
            <div class="analyItem" v-if="evalDateList.length === 0">
                <p class="analyItemTit tx-center">暂无数据</p>
                <div class="analyItemCon">
                    <span>暂无数据</span>
                </div>
            </div>
        </div>
    </div>
    <div class="layerRtb-footer">
        <div class="analyItem"  v-if="currentIndex === 1">
            <p class="analyItemTit tx-center">综合</p>
            <div class="analyItemCon">
                <p class="col-md-4">
                    <span class="cLightGray pr8">项目</span>
                    <span>{{comDateList.length}}</span>
                </p>
                <p class="col-md-4">
                    <span class="cLightGray pr8">金额</span>
                    <span>{{comMoney / 10000}}万</span>
                </p>
                <p class="col-md-4">
                    <span class="cLightGray pr8">差额</span>
                    <span>{{difference}}万</span>
                </p>
            </div>
        </div>
        <div class="analyItem"  v-if="currentIndex === 2">
            <p class="analyItemTit tx-center">综合</p>
            <div class="analyItemCon">
                <p class="col-md-4">
                    <span class="cLightGray pr8">订单数量</span>
                    <span>{{orderDateList.length}}</span>
                </p>
                <p class="col-md-4">
                    <span class="cLightGray pr8">已完成</span>
                    <span>{{comNum}}</span>
                </p>
                <p class="col-md-4">
                    <span class="cLightGray pr8">未完成</span>
                    <span>{{orderDateList.length - comNum}}</span>
                </p>
            </div>
        </div>
        <div class="analyItem"  v-if="currentIndex === 3">
            <p class="analyItemTit tx-center">综合</p>
            <div class="analyItemCon">
                <p class="col-md-4">
                    <span class="cLightGray pr8">数量</span>
                    <span>{{evalDateList.length}}</span>
                </p>
                <p class="col-md-4">
                    <span class="cLightGray pr8">已完成</span>
                    <span>{{evlCom}}</span>
                </p>
                <p class="col-md-4">
                    <span class="cLightGray pr8">差额</span>
                    <span>{{standEvl - evlCom}}</span>
                </p>
            </div>
        </div>
    </div>
</div>
</template>
<script>
import { mapGetters } from 'vuex'
import { getPersonnelPersonnelLevelThreeCompleted, getPersonnelPersonnelLevelThreeProcess, getPersonnelPersonnelLevelThreeEvaluation } from '../../Resources/Api'
export default {
    data () {
        return {
            evlCom: 0, // 已完成的评价
            standEvl: 0, // 标准的评价
            currentIndex: 1, // 当前的Index
            standMoney: 0, // 标准金额
            comDateList: [], // 完工数据
            orderDateList: [], // 订单数据
            comNum: 0, // 完成的数量
            evalDateList: [] // 好评数据
        }
    },
    computed: {
        ...mapGetters(['leftInfo']),
        // 完工总金额
        comMoney () {
            let money = 0
            this.comDateList.forEach(item => {
                if (item.completion_money === null) {
                    money += 0
                } else {
                    money += item.completion_money
                }
            })
            return money.toFixed(2)
        },
        // 完工差额
        difference () {
            let returnMoney = 0
            let money = 0
            this.comDateList.forEach(item => {
                if (item.completion_money === null) {
                    money += 0
                } else {
                    money += item.completion_money
                }
            })
            returnMoney = Number(this.standMoney) - money
            return returnMoney
        }
    },
    created () {
        this.standMoney = this.$route.query.stangMoney
        this.currentIndex = this.$route.query.index
        if (this.currentIndex === 1) {
            this.getPersonnelPersonnelLevelThreeCompleted()
        } else if (this.currentIndex === 2) {
            this.getPersonnelPersonnelLevelThreeProcess()
        } else if (this.currentIndex === 3) {
            this.evlCom = this.$route.query.comEvl
            this.standEvl = this.$route.query.stand
            this.getPersonnelPersonnelLevelThreeEvaluation()
        }
    },
    methods: {
        // 获取完工数据
        getPersonnelPersonnelLevelThreeCompleted () {
            let parms = {
                user_card_no: this.leftInfo.cardNo
            }
            getPersonnelPersonnelLevelThreeCompleted(parms).then((results) => {
                if (results.data.StatusCode === 0) {
                    this.comDateList = results.data.Body.allCompleted
                }
            }).catch((error) => {
                console.log(error)
            })
        },
        // 获取订单数据
        getPersonnelPersonnelLevelThreeProcess () {
            let parms = {
                user_card_no: this.leftInfo.cardNo
            }
            getPersonnelPersonnelLevelThreeProcess(parms).then((results) => {
                if (results.data.StatusCode === 0) {
                    this.evalDateList = results.data.Body.processlist
                    this.comNum = this.evalDateList.filter((item) => { return item.orderStatus === 0 }).length
                }
            }).catch((error) => {
                console.log(error)
            })
        },
        // 获取好评数据
        getPersonnelPersonnelLevelThreeEvaluation () {
            let parms = {
                user_card_no: this.leftInfo.cardNo
            }
            getPersonnelPersonnelLevelThreeEvaluation(parms).then((results) => {
                if (results.data.StatusCode === 0) {
                    this.comDateList = results.data.Body.evalDateList
                }
            }).catch((error) => {
                console.log(error)
            })
        }
    },
    watch: {
        leftInfo () {
            this.standMoney = this.$route.query.stangMoney
            this.currentIndex = this.$route.query.index
            if (this.currentIndex === 1) {
                this.getPersonnelPersonnelLevelThreeCompleted()
            } else if (this.currentIndex === 2) {
                this.getPersonnelPersonnelLevelThreeProcess()
            } else if (this.currentIndex === 3) {
                this.getPersonnelPersonnelLevelThreeEvaluation()
            }
        },
        $route () {
            this.standMoney = this.$route.query.stangMoney
            this.currentIndex = this.$route.query.index
            if (this.currentIndex === 1) {
                this.getPersonnelPersonnelLevelThreeCompleted()
            } else if (this.currentIndex === 2) {
                this.getPersonnelPersonnelLevelThreeProcess()
            } else if (this.currentIndex === 3) {
                this.getPersonnelPersonnelLevelThreeEvaluation()
            }
        }
    }
}
</script>
