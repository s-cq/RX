<template>
<div class="layerRtb layerRtb-threecolumn">
    <three-title :title="{name:'【项目奖罚】详情'}"></three-title>
    <ul class="clearfix uiTab3 pl10 mb10">
        <li class="uiTab3-active"><a href="javascript:">记录</a></li>
    </ul>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "137" v-loading="loading">
        <div class="analyItem" v-for="(item, index) in rewardList" :key="index" >
            <p class="analyItemTit tx-center" title="24196">罚款{{index+1}}</p>
            <div class="analyItemCon">
                <p class="fl col-md-4">
                    <span class="cLightGray pr8">申请日期</span><span>{{item.FineTime}}</span>
                </p>
                <p class="fl col-md-4">
                    <span class="cLightGray pr8">罚款人</span><span>{{item.FineName}}</span>
                </p>
                <p class="fl col-md-4">
                    <span class="cLightGray pr8">罚款来源</span>
                    <span>{{item.FineSourceType}}</span>
                </p>
                <p class="fl col-md-4">
                    <span class="cLightGray pr8">来源</span><span>{{item.FineSource}}</span>
                </p>
                <p class="fl col-md-4">
                    <span class="cLightGray pr8">金额</span><span>{{item.FineMoney}}</span>
                </p>
                <p class="fl col-md-4">
                    <span class="cLightGray pr8">罚款状态</span>
                    <span v-html="ZH_FKState(item.FineState,item.FineJinCheng)"></span>
                </p>
                <p class="fl col-md-4 layerui-title" data-title="">
                    <span class="cLightGray pr8">审批时间</span><span>{{item.FineCheckime}}</span>
                </p>
                <p class="fl col-md-4">
                    <span class="cLightGray pr8">审核状态</span>
                    <span v-html="status(item.FineCheckime,item.FineJinCheng)"></span>
                </p>
                <p class="fl col-md-4 layerui-title" :data-title="item.FineMark">
                    <span class="cLightGray pr8">罚款备注</span><span class="alertTitle">{{item.FineRemark.substr(0,8)}}...</span>
                </p>
            </div>
        </div>
    </div>
    <div class="layerRtb-footer">
        <div class="analyItem">
            <p class="analyItemTit tx-center">综合</p>
               <div class="analyItemCon">
                <div class="clearfix">
                    <p class="fl col-md-4">
                        <span class="cLightGray pr8">个数</span><span>{{rewardList.length}}</span><!--正常/待处理/紧急-->
                    </p>
                    <p class="fl col-md-4">
                        <span class="cLightGray pr8">罚款合计</span><span>{{totalMoney()}}</span><!--正常/待处理/紧急-->
                    </p>
                    <p class="col-md-4 lh28">
                        <span class="c999 pr10"></span>
                            <input type="button" value="奖罚清零" class="uiBtn-blue uiBtn-small btnpost">
                            <span class="circlemark circlemark-lightRed">未</span>
                    </p>
                </div>
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
            workorder: {}, // 项目基本数据
            rewardList: [] // 罚款记录
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
        // 罚款合计
        totalMoney () {
            let sumMoney = 0.00
            this.rewardList.forEach((item) => {
                sumMoney += item.FineMoney
            })
            return sumMoney.toFixed(2)
        },
        // 查询回款二段数据
        load () {
            this.loading = true
            let param = {
                orderNo: '19-750899', // this.leftInfo.orderno
                type: 5
            }
            getCostSharingThree(param).then(results => {
                if (Number(results.data.StatusCode) === 0) {
                    this.workorder = results.data.Body.workorder
                    this.rewardList = results.data.Body.rewardList
                    this.loading = false
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
        },
        ZH_FKState (fkState, jincheng) {
            let result = '--'
            if (fkState === 1) {
                if (jincheng === 1) {
                    result = '<span style="color:red">未扣除</span>'
                } else {
                    result = '<span style="color:red">已作废</span>'
                }
            } else if (fkState === 2) {
                result = '处理中'
            } else if (fkState === 3) {
                result = '<span style="color:green">已扣除</span>'
            }
            return result
        },
        status (FineCheckime, FineJinCheng) {
            let result = '--'
            if (FineCheckime != null) {
                if (FineJinCheng === 2) {
                    result = '<span style="color:red">已作废</span>'
                } else {
                    result = '<span style="color:green">已审核</span>'
                }
            } else {
                result = '<span style="color:red">未审核</span>'
            }
            return result
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
        },
        // 金额过滤
        toFixed (value) {
            if (value == null || isNaN(value) || value === undefined) {
                return '0.00'
            } else {
                return value.toFixed(2)
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
