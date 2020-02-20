<template>
<div class="layerRtb layerRtb-threecolumn">
    <three-title :title="{name:name}"></three-title>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "137">
        <div :class="['analyItem', 'anItemBor', fiveIndex === index ? 'anItemBor-active' : '']" v-for="(item,index) in orderDetetail" :key = "index" @click="fourShow(index,item.name,item.requestPath, item.type)">
            <p class="analyItemTit tx-center analyLightGreen" v-if="projectOrder.status == item.type">{{item.name}}</p>
            <p class="analyItemTit tx-center analyShallowGreen" v-else-if="projectOrder.status > item.type || projectOrder.status === 0 ">{{item.name}}</p>
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
  <!-- 四段渲染容器 -->
    <transition-group class="animated faster" enter-active-class="animated faster slideInRight" leave-active-class="animated faster slideOutRight">
        <!-- 物业办理 -->
        <rx-propertyFive1 v-if="fiveIndex === 0 && orderTypeId === 2" :key="0" :type="type"></rx-propertyFive1>
        <rx-propertyFive2 v-if="fiveIndex === 1 && orderTypeId === 2" :key="1" :type="type"></rx-propertyFive2>
        <rx-propertyFive3 v-if="fiveIndex === 2 && orderTypeId === 2" :key="2" :type="type"></rx-propertyFive3>
        <rx-propertyFive4 v-if="fiveIndex === 3 && orderTypeId === 2" :key="3" :type="type"></rx-propertyFive4>
        <rx-propertyFive5 v-if="fiveIndex === 4 && orderTypeId === 2" :key="4" :type="type"></rx-propertyFive5>
        <rx-propertyFive6 v-if="fiveIndex === 5 && orderTypeId === 2" :key="5" :type="type"></rx-propertyFive6>

        <!-- 摄像头 -->
        <rx-cameraFive1 v-if="fiveIndex === 0 && orderTypeId === 6" :key="0" :code='this.code' :type="type"></rx-cameraFive1>
        <rx-cameraFive2 v-if="fiveIndex === 1 && orderTypeId === 6" :key="1" :code='this.code' :type="type"></rx-cameraFive2>
        <rx-cameraFive3 v-if="fiveIndex === 2 && orderTypeId === 6" :key="2" :code='this.code' :type="type"></rx-cameraFive3>
        <rx-cameraFive4 v-if="fiveIndex === 3 && orderTypeId === 6" :key="3" :code='this.code' :type="type"></rx-cameraFive4>
        <rx-cameraFive5 v-if="fiveIndex === 4 && orderTypeId === 6" :key="4" :code='this.code' :type="type"></rx-cameraFive5>

        <!-- 开工仪式 -->
        <rx-ceremonyFive1 v-if="fiveIndex === 0 && orderTypeId === 21" :key="0" :type="type"></rx-ceremonyFive1>
        <rx-ceremonyFive2 v-if="fiveIndex === 1 && orderTypeId === 21" :key="1" :type="type"></rx-ceremonyFive2>
        <rx-ceremonyFive3 v-if="fiveIndex === 2 && orderTypeId === 21" :key="2" :type="type"></rx-ceremonyFive3>
        <rx-ceremonyFive4 v-if="fiveIndex === 3 && orderTypeId === 21" :key="3" :type="type"></rx-ceremonyFive4>
        <rx-ceremonyFive5 v-if="fiveIndex === 4 && orderTypeId === 21" :key="4" :type="type"></rx-ceremonyFive5>
        <!-- 现场 -->
        <rx-senceFive1 v-if="fiveIndex === 0 && (orderTypeId ===4 || orderTypeId === 7 || orderTypeId === 9)" :key="0" :titleName="titleName" :url="url" :type="type"></rx-senceFive1>
        <rx-senceFive2 v-if="fiveIndex === 1 && (orderTypeId ===4 || orderTypeId === 7 || orderTypeId === 9)" :key="1" :titleName="titleName" :url="url" :type="type"></rx-senceFive2>
        <rx-senceFive3 v-if="fiveIndex === 2 && (orderTypeId ===4 || orderTypeId === 7 || orderTypeId === 9)" :key="2" :titleName="titleName" :url="url" :type="type"></rx-senceFive3>
        <rx-senceFive4 v-if="fiveIndex === 3 && (orderTypeId ===4 || orderTypeId === 7 || orderTypeId === 9)" :key="3" :titleName="titleName" :url="url" :type="type"></rx-senceFive4>
        <!-- 临电 -->
        <rx-provisionFive1 v-if="fiveIndex === 0 &&  orderTypeId === 8" :key="0" :titleName="titleName" :url="url" :type="type"></rx-provisionFive1>
        <rx-provisionFive2 v-if="fiveIndex === 1 &&  orderTypeId === 8" :key="1" :titleName="titleName" :url="url" :type="type"></rx-provisionFive2>
        <rx-provisionFive3 v-if="fiveIndex === 2 &&  orderTypeId === 8" :key="2" :titleName="titleName" :url="url" :type="type"></rx-provisionFive3>
        <!-- 延期订单 -->
        <rx-delayFive1 v-if="fiveIndex === 0 &&  orderTypeId === 15" :key="0" :type="type"></rx-delayFive1>
        <rx-delayFive2 v-if="fiveIndex === 1 &&  orderTypeId === 15" :key="1" :type="type"></rx-delayFive2>
        <rx-delayFive3 v-if="fiveIndex === 2 &&  orderTypeId === 15" :key="2" :type="type"></rx-delayFive3>
        <!-- 投诉订单 -->
        <rx-complaintFive1 v-if="fiveIndex === 0 &&  orderTypeId === 18" :key="0"  :type="type"></rx-complaintFive1>
        <rx-complaintFive2 v-if="fiveIndex === 1 &&  orderTypeId === 18" :key="1"  :type="type"></rx-complaintFive2>
        <rx-complaintFive3 v-if="fiveIndex === 2 &&  orderTypeId === 18" :key="2"  :type="type"></rx-complaintFive3>
        <rx-complaintFive4 v-if="fiveIndex === 3 &&  orderTypeId === 18" :key="3"  :type="type"></rx-complaintFive4>
        <!-- 竣工总检 -->
        <rx-completedFive1 v-if="fiveIndex === 0 &&  orderTypeId === 18" :key="0"  :type="type"></rx-completedFive1>
        <rx-completedFive2 v-if="fiveIndex === 1 &&  orderTypeId === 18" :key="1"  :type="type"></rx-completedFive2>
        <rx-completedFive3 v-if="fiveIndex === 2 &&  orderTypeId === 18" :key="2"  :type="type"></rx-completedFive3>
        <rx-completedFive4 v-if="fiveIndex === 3 &&  orderTypeId === 18" :key="3"  :type="type"></rx-completedFive4>

    </transition-group>
</div>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex'
import { getSenceProjectOrderDetailByOrderCode } from '../../Resources/Api/index'
import rxPropertyFive1 from './five/property/PropertyFive1.vue'
import rxPropertyFive2 from './five/property/propertyFive2.vue'
import rxPropertyFive3 from './five/property/propertyFive3.vue'
import rxPropertyFive4 from './five/property/propertyFive4.vue'
import rxPropertyFive5 from './five/property/propertyFive5.vue'
import rxPropertyFive6 from './five/property/propertyFive6.vue'

import rxCameraFive1 from './five/camera/CameraFive1.vue'
import rxCameraFive2 from './five/camera/CameraFive2.vue'
import rxCameraFive3 from './five/camera/CameraFive3.vue'
import rxCameraFive4 from './five/camera/CameraFive4.vue'
import rxCameraFive5 from './five/camera/CameraFive5.vue'

import rxCeremonyFive1 from './five/ceremony/CeremonyFive1.vue'
import rxCeremonyFive2 from './five/ceremony/CeremonyFive2.vue'
import rxCeremonyFive3 from './five/ceremony/CeremonyFive3.vue'
import rxCeremonyFive4 from './five/ceremony/CeremonyFive4.vue'
import rxCeremonyFive5 from './five/ceremony/CeremonyFive5.vue'

import rxSenceFive1 from './five/sence/SenceFive1.vue'
import rxSenceFive2 from './five/sence/SenceFive2.vue'
import rxSenceFive3 from './five/sence/SenceFive3.vue'
import rxSenceFive4 from './five/sence/SenceFive4.vue'

import rxProvisionFive1 from './five/provision/provisionFive1.vue'
import rxProvisionFive2 from './five/provision/provisionFive2.vue'
import rxProvisionFive3 from './five/provision/ProvisionFive3.vue'

import rxDelayFive1 from './five/delay/DelayFive1.vue'
import rxDelayFive2 from './five/delay/DelayFive2.vue'
import rxDelayFive3 from './five/delay/DelayFive3.vue'

import rxComplaintFive1 from './five/complaint/ComplaintFive1.vue'
import rxComplaintFive2 from './five/complaint/ComplaintFive2.vue'
import rxComplaintFive3 from './five/complaint/ComplaintFive3.vue'
import rxComplaintFive4 from './five/complaint/ComplaintFive4.vue'

import rxCompletedFive1 from './five/completed/CompletedFive1.vue'
import rxCompletedFive2 from './five/completed/CompletedFive2.vue'
import rxCompletedFive3 from './five/completed/CompletedFive3.vue'
import rxCompletedFive4 from './five/completed/CompletedFive4.vue'

export default {
    components: {
        rxPropertyFive1,
        rxPropertyFive2,
        rxPropertyFive3,
        rxPropertyFive4,
        rxPropertyFive5,
        rxPropertyFive6,

        rxCameraFive1,
        rxCameraFive2,
        rxCameraFive3,
        rxCameraFive4,
        rxCameraFive5,
        rxCeremonyFive1,
        rxCeremonyFive2,
        rxCeremonyFive3,
        rxCeremonyFive4,
        rxCeremonyFive5,

        rxSenceFive1,
        rxSenceFive2,
        rxSenceFive3,
        rxSenceFive4,

        rxProvisionFive1,
        rxProvisionFive2,
        rxProvisionFive3,

        rxDelayFive1,
        rxDelayFive2,
        rxDelayFive3,

        rxComplaintFive1,
        rxComplaintFive2,
        rxComplaintFive3,
        rxComplaintFive4,

        rxCompletedFive1,
        rxCompletedFive2,
        rxCompletedFive3,
        rxCompletedFive4
    },
    data () {
        return {
            orderDetetail: [], // 订单数据
            orderDetetailOperation: [], // 操作人信息
            projectOrder: [], // 订单状态
            fiveIndex: undefined, // index值
            name: '', // 三段头部
            orderTypeId: '',
            titleName: '', // 四段头部
            url: '', // 四段请求路径
            type: '', // 类型
            code: ''
        }
    },
    computed: {
        ...mapGetters(['twoToThreeInfo'])
    },
    mounted () {
        this.orderTypeId = this.$route.query.project.orderTypeId
        this.name = this.$route.query.project.typeName
        this.getSenceProjectOrderDetailByOrderCode()
    },

    created () {
        this.code = this.$route.query.code
    },
    methods: {
        ...mapMutations({
            'setTwoToThreeInfo': 'SET_TWO_TO_THREE_INFO'
        }),
        // 获取数据
        getSenceProjectOrderDetailByOrderCode () {
            let parm = {
                orderCode: this.$route.query.code
            }
            // 接口获取数据
            getSenceProjectOrderDetailByOrderCode(parm).then(results => {
                if (results.data.StatusCode === 1) {
                    this.orderDetetail = results.data.Body.senceStage
                    this.projectOrder = results.data.Body.projectOrder
                    this.orderDetetailOperation = results.data.Body.projectOrderUserOperationList
                    this.setTwoToThreeInfo(this.projectOrder)
                }
            }).catch(error => {
                console.log(error)
            })
        },
        // 点击切换Index
        fourShow (index, name, url, type) {
            this.fiveIndex = index
            this.titleName = name
            this.url = url
            this.type = type
        },
        clickFiveShow () {
            this.fiveIndex = undefined
            this.getSenceProjectOrderDetailByOrderCode()
            this.setTwoToThreeInfo(this.projectOrder)
        }
    },
    watch: {
        $route () {
            this.fiveIndex = undefined
            this.getSenceProjectOrderDetailByOrderCode()
            this.name = this.$route.query.project.typeName
            this.orderTypeId = this.$route.query.project.orderTypeId
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
<style lang="scss">
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
