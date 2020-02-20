<template>
<div class="">
    <div class="pr10">
        <div class="analyItem">
            <p class="analyItemTit tx-center">状态</p>
            <div class="analyItemCon">
                <div class="col-md-4">
                    <span class="cGreen pr8" title="当前阶段">{{leftInfo.AfterMarketState | stage}}</span>
                </div>
                <div v-if="leftInfo.AfterMarketState===10" class="col-md-4">
                    <span class="cLightGray pr8" title="审计">审计结果</span>
                    <span v-if="MaterialOrderList.AuditState===1" class="cGreen">已完成</span>
                    <span v-else class="cRed">未完成</span>
                </div>
                <div v-if="leftInfo.AfterMarketState===10" class="col-md-4">
                    <span class="cLightGray pr8" title="材料">材料结果</span>
                    <span v-if="MaterialOrderList.MaterialState===1" class="cGreen">已完成</span>
                    <span v-else class="cRed">未完成</span>
                </div>
                <span class="circlemark circlemark-lightRed">未</span>
            </div>
        </div>
    </div>
    <div class="thinScroll pr10" v-scrollHeight="10">
        <!-- 审计 -->
        <proAudit v-if="leftInfo.AfterMarketState == 10"></proAudit>
        <!-- 准备 -->
        <proReady v-if="leftInfo.AfterMarketState == 20"></proReady>
        <!-- 施前 -->
        <proFront v-if="leftInfo.AfterMarketState == 31"></proFront>
        <!-- 施中 -->
        <proCenter v-if="leftInfo.AfterMarketState == 32"></proCenter>
        <!-- 施尾 -->
        <proTail v-if="leftInfo.AfterMarketState == 33"></proTail>
        <!-- 竣工 -->
        <proCompleted v-if="leftInfo.AfterMarketState == 40"></proCompleted>
        <!-- 完工 -->
        <proFinished v-if="leftInfo.AfterMarketState == 50"></proFinished>

    </div>
</div>
</template>
<script>
import { mapGetters } from 'vuex'
import proAudit from './projectstage/proAudit' // 审计
import proReady from './projectstage/proReady' // 准备
import proFront from './projectstage/proFront' // 施前
import proCenter from './projectstage/proCenter' // 施中
import proTail from './projectstage/proTail' // 施尾
import proCompleted from './projectstage/proCompleted' // 竣工
import proFinished from './projectstage/proFinished' // 完工
import { getMaterialOrderListByOrderNo } from '../Resources/Api/proStage'
export default {
    components: {
        proAudit, proReady, proFront, proCenter, proTail, proCompleted, proFinished
    },
    data () {
        return {
            MaterialOrderList: []// 项目材料订单分类
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
            // 用_this 代替this
            let _this = this
            _this.loading = true
            let param = {
                orderNo: _this.leftInfo.orderno
            }
            getMaterialOrderListByOrderNo(param).then((result) => {
                if (result.data.StatusCode === 0) {
                    _this.MaterialOrderList = result.data.Body
                }
            }).catch((err) => {
                console.log(err)
            })
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
