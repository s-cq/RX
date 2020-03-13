<template>
<div class="layerRtb layerRtb-threecolumn layerRtb-right">
    <three-title :title="{name:'【分项_增减项】详情'}" :close="false">
        <span tag="i" class="rig_close fr" @click="$parent.$parent.clickFourShow()"></span>
    </three-title>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "137" v-loading="loading">
        <div class="analyItem" v-for="(item,index) in negotiateHistoryRecordList" :key="index">
            <p class="analyItemTit tx-center"><span>装饰</span>|
                <span v-if="item.ChangesType ===1">增项</span>
                <span v-if="item.ChangesType ===2">减项</span>
            </p>
            <div class="analyItemCon">
                <p class="fl col-md-4">
                    <span class="cLightGray pr8">申请日期</span><span>{{myFormatDate(item.ChangesTime)}}</span>
                </p>
                <p class="fl col-md-4">
                    <span class="cLightGray pr8">增减类型</span>
                        <span v-if="item.ChangesType ===1">增项</span>
                        <span style="color: red" v-if="item.ChangesType ===2">减项
                            (
                                <span v-if="item.ChangesZJType ===1" >减项不减利</span>
                                <span v-if="item.ChangesZJType ===2" >减项减利</span>
                            )
                        </span>
                </p>
                <p class="fl col-md-4">
                    <span class="cLightGray pr8">状态</span>
                    <span v-html='statusCode(item.ChangesState)'></span>
                    <input v-if="item.ChangesState !== 3 && item.ChangesState !== 5" @click="chakan(item)" type="button" value="查看" data-title="点击进入查看增减项记录" class="uiBtn-blue uiBtn-small zjx_check layerui-title" data-zjxid="3343" data-zjxtype="0" data-flag="1">

                </p>
                <p class="fl col-md-4">
                    <span class="cLightGray pr8">签单金额</span>
                    <span>{{item.ChangesSigningMoney}}</span>
                </p>

                <p class="fl col-md-4">
                    <span class="cLightGray pr8">发包金额</span>
                    <span>{{item.ChangesContractMoney}}</span>
                </p>
                <p class="fl col-md-4">
                    <span class="cLightGray pr8">税金金额</span>
                    <span>{{item.ChangesTaxes}}</span>
                </p>
                <p class="fl col-md-4">
                    <span class="cLightGray pr8">装饰协调费</span>
                    <span>{{item.ChangesBrokerage}}</span>
                </p>

                <p class="fl col-md-4">
                    <span class="cLightGray pr8">人工增减金额</span>
                    <span>{{item.ChangesArtificiallyMoney}}</span>
                </p>
                <p class="fl col-md-4">
                    <span class="cLightGray pr8">材料增减金额</span>
                    <span>{{item.ChangesMaterialMoney}}</span>
                </p>

                <p class="fl col-md-4 layerui-title" :data-title="item.ChangesItemContent">
                    <span class="cLightGray pr8">增减内容</span><span>{{item.ChangesItemContent.substr(0,5)}}...</span>
                </p>
                <p class="fl col-md-4 layerui-title" :data-title="item.ChangesReason">
                    <span class="cLightGray pr8">增减原因</span><span>{{item.ChangesReason.substr(0,5)}}...</span>
                </p>
            </div>
        </div>
    </div>
    <div class="layerRtb-footer">
        <div class="analyItem">
            <p class="analyItemTit tx-center">综合</p>
            <div class="analyItemCon">
            </div>
        </div>
    </div>
        <!-- 五段渲染容器 -->
    <transition-group class="animated faster" enter-active-class="animated faster slideInRight" leave-active-class="animated faster slideOutRight">
        <rx-fenFive v-if="fiveIndex === 0 " :key="0" :data = data></rx-fenFive>
    </transition-group>
</div>
</template>
<script>
import { mapGetters } from 'vuex'
import rxFenFive from '../five/fenFive'
import { getNegotiateFour } from '../../../Resources/Api'
export default {
    data () {
        return {
            fiveIndex: undefined, // 关闭index
            loading: false,
            negotiateHistoryRecordList: [], // 增减项历史记录
            data: {} //
        }
    },
    computed: {
        ...mapGetters(['leftInfo'])
    },
    components: {
        rxFenFive
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
        chakan (item) {
            this.fiveIndex = 0
            this.data = item
        },
        clickFiveShow () {
            this.fiveIndex = undefined
        },
        // 查询回款二段数据
        load () {
            this.loading = true
            let param = {
                orderNo: this.leftInfo.orderno // this.leftInfo.orderno
            }
            getNegotiateFour(param).then(results => {
                if (Number(results.data.StatusCode) === 0) {
                    this.negotiateHistoryRecordList = results.data.Body.negotiateHistoryRecordList
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
        statusCode (ChangesState) {
            let str = '<span>--</span>'
            if (ChangesState === 1) {
                str = '<span style="color:blue" class="layerui-title" data-title="【集团审计】审批中">【集审】审批中</span>'
            } else if (ChangesState === 2) {
                str = '<span style="color:red" class="layerui-title" data-title="【集团审计】打回">【集审】打回</span>'
            } else if (ChangesState === 3) {
                str = '<span style="cursor: pointer; color: blue;" class="layerui-title" data-title="待分司上传发包协议操作">上传发包协议</span>'
            } else if (ChangesState === 4) {
                str = '<span style="color:green" class="layerui-title" data-title="【地方成本】通过">【地成】通过</span>'
            } else if (ChangesState === 5) {
                str = '<span style="color: blue" class="layerui-title" data-title="【集团成本】审批中">【集成】审批中</span>'
            } else if (ChangesState === 6) {
                str = '<span style="color: red" class="layerui-title" data-title="【集团成本】打回，原因说明：@ChangesCheckContent ">【集团成本】打回</span>'
            } else {
                str = '<span>--</span>'
            }
            return str
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
