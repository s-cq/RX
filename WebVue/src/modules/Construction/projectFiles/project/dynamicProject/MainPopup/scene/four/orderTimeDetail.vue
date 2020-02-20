<template>
<div class="layerRtb layerRtb-threecolumn layerRtb-right">
    <three-title :title="{name:name}" :close="false">
        <span tag="i" class="rig_close fr" @click="$parent.$parent.clickFourShow()"></span>
    </three-title>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "137">
        <div :class="['analyItem', 'anItemBor', fiveIndex === index ? 'anItemBor-active' : '']" v-for="(item,index) in orderDetetail" :key = "index" @click="fourShow(index,item.type)">
            <p class="analyItemTit tx-center analyLightGreen" v-if="projectOrder.status == item.type">{{item.name}}</p>
            <p class="analyItemTit tx-center  analyShallowGreen" v-else-if="projectOrder.status > item.type || projectOrder.status === 0 ">{{item.name}}</p>
            <p class="analyItemTit tx-center" v-else>{{item.name}}</p>
            <div class="analyItemCon">
                <div v-if="item.roleName">
                    <p class="col-md-4">
                        <span class="cLightGray pr8">操作时间</span>
                        <span class="cGreen"> {{item.type | getCurrentOperation(orderDetetailOperation,1) }}</span>
                    </p>
                    <p class="col-md-4">
                        <span class="cLightGray pr8">操作人</span>
                        <span class="cGreen"> {{item.type | getCurrentOperation(orderDetetailOperation,2) }}</span>
                    </p>
                </div>
                <span class="roleFixed" v-if="item.roleName">{{item.roleName}}</span>
                <span class="circlemark circlemark-purple" v-if="projectOrder.status == item.type && item.roleName || item.roleName && projectOrder.status < item.type && projectOrder.status !== 0">待</span>
                <span class="circlemark circlemark-lightGreen" v-else-if=" item.roleName && projectOrder.status > item.type || item.roleName && projectOrder.status === 0">完</span>
            </div>
        </div>
    </div>
    <!-- 五段渲染容器 -->
    <transition-group class="animated faster" enter-active-class="animated faster slideInRight" leave-active-class="animated faster slideOutRight">
        <!-- 安全订单 -->
        <rx-safeFive1 v-if="fiveIndex === 0 &&  (orderTypeId === 10 || orderTypeId === 25)  " :key="0" :Projectcode="Projectcode" :type="type" :role="role"></rx-safeFive1>
        <rx-safeFive2 v-if="fiveIndex === 1 &&  (orderTypeId === 10 || orderTypeId === 25)" :key="1" :Projectcode="Projectcode" :type="type" :role="role"></rx-safeFive2>
        <rx-safeFive3 v-if="fiveIndex === 2 &&  (orderTypeId === 10 || orderTypeId === 25)" :key="2" :Projectcode="Projectcode" :type="type" :role="role"></rx-safeFive3>
        <rx-safeFive4 v-if="fiveIndex === 3 &&  (orderTypeId === 10 || orderTypeId === 25)" :key="3" :Projectcode="Projectcode" :type="type" :role="role"></rx-safeFive4>
        <!-- 形象订单 -->
        <rx-imageFive1 v-if="fiveIndex === 0 && (orderTypeId === 11 ||  orderTypeId === 26)" :key="0" :Projectcode="Projectcode" :type="type" :role="role"></rx-imageFive1>
        <rx-imageFive2 v-if="fiveIndex === 1 && (orderTypeId === 11 ||  orderTypeId === 26)" :key="1" :Projectcode="Projectcode" :type="type" :role="role"></rx-imageFive2>
        <rx-imageFive3 v-if="fiveIndex === 2 && (orderTypeId === 11 ||  orderTypeId === 26)" :key="2" :Projectcode="Projectcode" :type="type" :role="role"></rx-imageFive3>
        <rx-imageFive4 v-if="fiveIndex === 3 && (orderTypeId === 11 ||  orderTypeId === 26)" :key="3" :Projectcode="Projectcode" :type="type" :role="role"></rx-imageFive4>
        <!-- 环境订单 -->
        <rx-environmentalFive1 v-if="fiveIndex === 0 && (orderTypeId === 12 ||  orderTypeId === 27)" :key="0" :Projectcode="Projectcode" :type="type" :role="role"></rx-environmentalFive1>
        <rx-environmentalFive2 v-if="fiveIndex === 1 && (orderTypeId === 12 ||  orderTypeId === 27)" :key="1" :Projectcode="Projectcode" :type="type" :role="role"></rx-environmentalFive2>
        <rx-environmentalFive3 v-if="fiveIndex === 2 && (orderTypeId === 12 ||  orderTypeId === 27)" :key="2" :Projectcode="Projectcode" :type="type" :role="role"></rx-environmentalFive3>
        <rx-environmentalFive4 v-if="fiveIndex === 3 && (orderTypeId === 12 ||  orderTypeId === 27)" :key="3" :Projectcode="Projectcode" :type="type" :role="role"></rx-environmentalFive4>
        <!-- 巡检订单 -->
        <!-- <rx-inspectionFive1 v-if="fiveIndex === 0 && (orderTypeId === 13 ||  orderTypeId === 28)" :key="0" :Projectcode="Projectcode" :type="type" :role="role"></rx-inspectionFive1>
        <rx-inspectionFive2 v-if="fiveIndex === 1 && (orderTypeId === 13 ||  orderTypeId === 28)" :key="1" :Projectcode="Projectcode" :type="type" :role="role"></rx-inspectionFive2>
        <rx-inspectionFive3 v-if="fiveIndex === 2 && (orderTypeId === 13 ||  orderTypeId === 28)" :key="2" :Projectcode="Projectcode" :type="type" :role="role"></rx-inspectionFive3>
        <rx-inspectionFive4 v-if="fiveIndex === 3 && (orderTypeId === 13 ||  orderTypeId === 28)" :key="3" :Projectcode="Projectcode" :type="type" :role="role"></rx-inspectionFive4> -->
    </transition-group>
</div>
</template>
<script>
import { mapGetters } from 'vuex'
import { getSenceProjectOrderDetailByOrderCode } from '../../../Resources/Api/index'
import rxSafeFive1 from '../five/safe/SafeFive1.vue'
import rxSafeFive2 from '../five/safe/SafeFive2.vue'
import rxSafeFive3 from '../five/safe/SafeFive3.vue'
import rxSafeFive4 from '../five/safe/SafeFive4.vue'
import rxImageFive1 from '../five/image/ImageFive1.vue'
import rxImageFive2 from '../five/image/ImageFive2.vue'
import rxImageFive3 from '../five/image/ImageFive3.vue'
import rxImageFive4 from '../five/image/ImageFive4.vue'
import rxEnvironmentalFive1 from '../five/environmental/EnvironmentalFive1.vue'
import rxEnvironmentalFive2 from '../five/environmental/EnvironmentalFive2.vue'
import rxEnvironmentalFive3 from '../five/environmental/EnvironmentalFive3.vue'
import rxEnvironmentalFive4 from '../five/environmental/EnvironmentalFive4.vue'
// import rxInspectionFive1 from '../five/inspection/InspectionFive1.vue'
// import rxInspectionFive2 from '../five/inspection/InspectionFive2.vue'
// import rxInspectionFive3 from '../five/inspection/InspectionFive3.vue'
// import rxInspectionFive4 from '../five/inspection/InspectionFive4.vue'

export default {
    props: ['code', 'typeName', 'orderTypeId'],
    components: {
        rxSafeFive1,
        rxSafeFive2,
        rxSafeFive3,
        rxSafeFive4,
        rxImageFive1,
        rxImageFive2,
        rxImageFive3,
        rxImageFive4,
        rxEnvironmentalFive1,
        rxEnvironmentalFive2,
        rxEnvironmentalFive3,
        rxEnvironmentalFive4
        // rxInspectionFive1,
        // rxInspectionFive2,
        // rxInspectionFive3,
        // rxInspectionFive4
    },
    data () {
        return {
            orderDetetail: [], // 订单数据
            orderDetetailOperation: [], // 操作人数据
            projectOrder: [], // 状态数据
            fiveIndex: undefined, // 关闭index
            name: '', // 头部名称
            Projectcode: '', // 订单单号
            type: '', // 订单类型
            role: '' // 当前角色的id
        }
    },
    computed: {
        ...mapGetters(['twoToThreeInfo', 'updatePlate'])
    },
    mounted () {
        this.name = this._props.typeName
        this.Projectcode = this._props.code
        this.getSenceProjectOrderDetailByOrderCode()
    },

    created () {

    },
    methods: {
        // 获取数据
        getSenceProjectOrderDetailByOrderCode () {
            let parm = {
                orderCode: this.twoToThreeInfo.code
            }
            // 接口获取数据
            getSenceProjectOrderDetailByOrderCode(parm).then(results => {
                if (results.data.StatusCode === 1) {
                    this.orderDetetail = results.data.Body.senceStage
                    this.projectOrder = results.data.Body.projectOrder
                    this.orderDetetailOperation = results.data.Body.projectOrderUserOperationList
                }
            }).catch(error => {
                console.log(error)
            })
        },
        // 点击切换Index
        fourShow (index, type) {
            this.fiveIndex = index
            this.type = type
        },
        clickFiveShow () {
            this.fiveIndex = undefined
            this.getSenceProjectOrderDetailByOrderCode()
        }
    },
    watch: {
        $route () {
            this.getSenceProjectOrderDetailByOrderCode()
        },
        updatePlate () {
            this.getSenceProjectOrderDetailByOrderCode()
        }
    },
    filters: {
        // 操作时间
        getCurrentOperation (type, operationInfo, flag) {
            const currentInfo = operationInfo.filter((item) => { return item.type === type })
            if (currentInfo.length > 0) {
                if (flag === 1) {
                    return currentInfo[0].create_time.replace(/T/g, ' ').replace(/\.[\d]{3}Z/, '').split(' ')[0]
                }
                if (flag === 2) {
                    return currentInfo[0].create_user_name
                }
            } else {
                return ''
            }
        }
    }
}
</script>
<style lang="">
    .roleFixed {
        position: absolute;
        right: 30px;
        top: 5px;
        font-family: Tahoma,Helvetica,Arial;
        font-size: 12px;
        color: #85da02;
        letter-spacing: 2px;
    }
</style>
