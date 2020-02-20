<template>
<div class="layerRtb layerRtb-threecolumn">
    <three-title :title="{name:'订单'}"></three-title>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "137">
        <div v-if="supertimesList.length > 0">
            <div class="threeTab">
                <span>监理订单</span>
                <i :class="['el-icon-arrow-down', 'fr', 'mr20', orderShow === 1 ? 'active' : '']" @click="orderTabClick(1)"></i>
            </div>
            <div v-if="orderShow === 1 && flag">
                <div class="analyItem anItemBor" v-for="(item,index) in supertimesList" :key = "index" @click="fourClick(index, item.code, item.typeName,item.orderTypeId,item)">
                    <p class="analyItemTit tx-center">{{item.typeName}}</p>
                    <div class="analyItemCon">
                    <p class="col-md-4">
                            <span>订单日期</span>
                            <span class="cGreen">{{$utils.format('yyyy-MM-dd', item.createTime) }}</span>
                        </p>
                            <p class="col-md-4">
                            <span>创建人</span>
                            <span class="cGreen">{{item.createUserName}}</span>
                        </p>
                        <p class="col-md-4" v-if="item.status !== 0">
                            <span class="cLightGray pr8">当前阶段</span>
                            <span class="cGreen"> {{item.statusName}} </span>
                        </p>
                        <p class="col-md-4" v-if="item.status === 0">
                            <span class="cGreen"> 已完成 </span>
                        </p>
                        <span :class="['circlemark', item.status === 0 ? 'circlemark-lightGreen' : 'circlemark-lightRed']">{{item.status === 0 ? '完' : '未'}}</span>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="projecttimesList.length > 0">
            <div class="threeTab">
                <span>项目经理订单</span>
                <i :class="['el-icon-arrow-down', 'fr', 'mr20', orderShow === 2 ? 'active' : '']" @click="orderTabClick(2)"></i>
            </div>
            <div v-if="orderShow === 2 && flag">
                <div class="analyItem anItemBor" v-for="(item,index) in projecttimesList" :key = "index" @click="fourClick(index, item.code, item.typeName,item.orderTypeId,item)">
                    <p class="analyItemTit tx-center">{{item.typeName}}</p>
                    <div class="analyItemCon">
                    <p class="col-md-4">
                            <span>订单日期</span>
                            <span class="cGreen">{{$utils.format('yyyy-MM-dd', item.createTime) }}</span>
                        </p>
                            <p class="col-md-4">
                            <span>创建人</span>
                            <span class="cGreen">{{item.createUserName}}</span>
                        </p>
                        <p class="col-md-4" v-if="item.status !== 0">
                            <span class="cLightGray pr8">当前阶段</span>
                            <span class="cGreen"> {{item.statusName}} </span>
                        </p>
                        <p class="col-md-4" v-if="item.status === 0">
                            <span class="cGreen"> 已完成 </span>
                        </p>
                        <span :class="['circlemark', item.status === 0 ? 'circlemark-lightGreen' : 'circlemark-lightRed']">{{item.status === 0 ? '完' : '未'}}</span>
                    </div>
                </div>
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
    <!-- 四段渲染容器 -->
    <transition-group class="animated faster" enter-active-class="animated faster slideInRight" leave-active-class="animated faster slideOutRight">
        <rx-orderTimeDetail v-if="fourIndex === 0" :key="0" :code="code" :typeName="typeName" :orderTypeId="orderTypeId"></rx-orderTimeDetail>
    </transition-group>
</div>
</template>
<script>
import { mapMutations, mapGetters } from 'vuex'
import { getProjectOrderByCondition } from '../../Resources/Api/index'
import rxOrderTimeDetail from './four/orderTimeDetail.vue'
export default {
    components: {
        rxOrderTimeDetail
    },
    data () {
        return {
            supertimesList: [], // 监理订单
            projecttimesList: [], // 经理订单
            fourIndex: undefined, // 当前index
            code: '', // 订单号
            orderTypeId: '', // 订单id
            typeName: '', // 订单名称
            orderShow: 0, // 订单是否显示
            flag: false // 下拉标识
        }
    },
    computed: {
        ...mapGetters(['twoToThreeInfo', 'leftInfo'])
    },
    created () {
        this.getProjectOrderByCondition()
    },
    methods: {
        ...mapMutations({
            'setTwoToThreeInfo': 'SET_TWO_TO_THREE_INFO'
        }),
        // 接口获取数据
        getProjectOrderByCondition () {
            let orderStage
            if (this.leftInfo.AfterMarketState === 10) {
                orderStage = '1,2'
            } else {
                orderStage = Math.floor(this.leftInfo.AfterMarketState / 10)
            }
            let parm = {
                orderNo: this.leftInfo.orderno,
                orderStage: orderStage,
                areaId: 0
            }
            // 接口获取数据
            getProjectOrderByCondition(parm).then(results => {
                if (results.data.StatusCode === 1) {
                    let orderList = results.data.Body
                    this.supertimesList = orderList.filter((item) => { return item.times === this.$route.query.times && item.orderTypeId < 14 })
                    this.projecttimesList = orderList.filter((item) => { return item.times === this.$route.query.times && item.orderTypeId > 24 && item.orderTypeId < 28 })
                }
            }).catch(error => {
                console.log(error)
            })
        },
        // 订单点击
        orderTabClick (index) {
            if (this.orderShow === index) {
                this.flag = !this.flag
            } else {
                this.orderShow = index
                this.flag = true
            }
            if (!this.flag) {
                this.orderShow = ''
            }
        },
        // 关闭按钮
        clickFourShow () {
            this.fourIndex = undefined
            this.getProjectOrderByCondition()
        },
        fourClick (index, code, typeName, orderTypeId, item) {
            this.fourIndex = 0
            this.code = code
            this.typeName = typeName
            this.orderTypeId = orderTypeId
            this.setTwoToThreeInfo(item)
        }
    },
    watch: {
        $route () {
            this.getProjectOrderByCondition()
            this.fourIndex = undefined
        },
        setTwoToThreeInfo () {
            this.getProjectOrderByCondition()
        }
    }
}
</script>
<style lang="scss" scoped>
    .threeTab{
        margin: 5px 0 10px -5px;
        height: 50px;
        line-height: 50px;
        box-shadow: 2px 2px 5px 0 rgba(0, 0, 0, .16), 0 2px 10px 0 rgba(0, 0, 0, .12);
        padding-left: 8px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        i{
            cursor: pointer;
            font-weight: bold;
            &:hover{
                color: #0099FF
            }
            &.active {
                color: #0099FF
            }
        }
    }

</style>
