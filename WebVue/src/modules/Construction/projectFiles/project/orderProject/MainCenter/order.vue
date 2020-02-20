<template>
<div class="">
    <div class="pr10">
        <div class="analyItem">
            <p class="analyItemTit tx-center">状态</p>
            <div class="analyItemCon">
                 <span class="cGreen pr8" :data-title="currentStage">{{leftInfo.stage | stage}}</span>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">项目名片</p>
            <div class="analyItemCon">
                <div class="col-md-4"><span class="cLightGray pr8">单号</span> <span>{{leftInfo.id}}</span></div>
                <div class="col-md-4"><span class="cLightGray pr8">名称</span> <span>{{leftInfo.name}}</span></div>
                <div class="col-md-4"><span class="cLightGray pr8">阶段</span> <span>{{leftInfo.state}}</span></div>
                <div class="col-md-4"><span class="cLightGray pr8">经理</span> <span>张三</span></div>
                <div class="col-md-4"><span class="cLightGray pr8">监理</span> <span>李四</span></div>
                <div class="col-md-4"><span class="cLightGray pr8">项目经理</span> <span>王五</span></div>
            </div>
        </div>
    </div>
    <!-- 物业办理 -->
    <div class="thinScroll pr10" v-scrollHeight="84">
        <router-link   v-for="(item,index) in orderDetetail" :key = "index"  tag="div" exact :to="{name: routerName(index), params:{type: item.type}, query: {ind: index}}"
        class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center analyLightGreen" v-if="projectOrder.status == item.type">{{item.name}}</p>
            <p class="analyItemTit tx-center analyShallowGreen" v-else-if="projectOrder.status > item.type || projectOrder.status === 0 ">{{item.name}}</p>
            <p class="analyItemTit tx-center" v-else>{{item.name}}</p>
            <div class="analyItemCon">
                <p class="col-md-4">
                    <span class="cLightGray pr8">操作时间</span>
                    <span class="cGreen"> {{item.type | getCurrentOperation(orderDetetailOperation,1) }}</span>
                </p>
                <p class="col-md-4">
                    <span class="cLightGray pr8">操作人</span>
                    <span class="cGreen"> {{item.type | getCurrentOperation(orderDetetailOperation,2) }}</span>
                </p>
                <span class="roleFixed">{{item.roleName ? item.roleName : ''}}</span>
                <span class="circlemark circlemark-purple" v-if="projectOrder.status == item.type">待</span>
                <span class="circlemark circlemark-lightGreen" v-else-if="projectOrder.status > item.type || projectOrder.status === 0 ">完</span>
                <span class="circlemark circlemark-purple" v-else>待</span>
            </div>
        </router-link>
    </div>
    <div class="pr10">
        <div class="analyItem">
            <p class="analyItemTit tx-center">综合</p>
            <div class="analyItemCon">
                <p class="col-md-4">
                    <span class="clightGray pr5">已完成</span>
                    <span class="alreadyNum">{{projectOrder.status === 0 ? orderDetetail.length : projectOrder.status/10 - 1}}</span>
                </p>
                <p class="col-md-4">
                    <span class="clightGray pr5">未完成</span>
                    <span class="notNum">{{ projectOrder.status === 0 ? '0' : orderDetetail.length - (projectOrder.status / 10 - 1) }}</span>
                </p>
            </div>
        </div>
    </div>
</div>
</template>
<script>
import { getSenceProjectOrderDetailByOrderCode } from '../Resources/Api/index'
import { mapGetters } from 'vuex'
export default {
    data () {
        return {
            orderDetetail: [],
            orderDetetailOperation: [],
            projectOrder: [],
            currentStage: '当前阶段'
        }
    },
    mounted () {
        this.getSenceProjectOrderDetailByOrderCode()
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
        // 获取数据
        getSenceProjectOrderDetailByOrderCode () {
            let parm = {
                orderCode: this.leftInfo.code
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
        routerName (number) {
            let index = number + 1
            let routerName = ''
            switch (this.leftInfo.order_type_id) {
            case 1:
                routerName = 'dataInfo' + index
                break
            case 2:
                routerName = 'propertyInfo' + index
                break
            case 4:
                routerName = 'protectInfo' + index
                break
            case 5:
                routerName = 'discloseInfo' + index
                break
            case 6:
                routerName = 'cameraInfo' + index
                break
            case 7:
                routerName = 'imageInfo' + index
                break
            case 8:
                routerName = 'temporaryInfo' + index
                break
            case 9:
                routerName = 'layingInfo' + index
                break
            case 10:
                routerName = 'safeInfo' + index
                break
            case 11:
                routerName = 'imageorderInfo' + index
                break
            case 12:
                routerName = 'environmentalInfo' + index
                break
            case 13:
                routerName = 'inspectionInfo' + index
                break
            case 14:
                routerName = 'negotiationInfo' + index
                break
            case 15:
                routerName = 'delayInfo' + index
                break
            case 16:
                routerName = 'complaintInfo' + index
                break
            case 17:
                routerName = 'fineInfo' + index
                break
            case 18:
                routerName = 'generalInfo' + index
                break
            case 19:
                routerName = 'materialconfirmInfo' + index
                break
            }
            return routerName
        }
    },
    watch: {
        leftInfo () {
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
        },
        stage (parone) {
            let value = ''
            switch (parone) {
            case 0:
                value = '历史'
                break
            case 2:
                value = '准备'
                break
            case 3:
                value = '在施'
                break
            case 4:
                value = '竣工'
                break
            default:
                break
            }
            return value
        }
    }
}
</script>
