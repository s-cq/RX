<template>
<div class="">
    <div class="pr10">
        <div class="analyItem">
            <p class="analyItemTit tx-center">状态</p>
           <div class="analyItemCon">
                <div class="col-md-12">
                    <div class="col-md-3">
                        <span class="cRed pr8 bold" >未</span>
                    </div>
                    <div class="col-md-3">
                        <span class="cGreen pr8" title="当前阶段">{{leftInfo.AfterMarketState | stage}}</span>
                    </div>
                    <div class="col-md-3">
                        <span class="cLightGreen pr8" title="进入该阶段的日期">{{leftInfo.AfterMarketStateTime}}</span>
                    </div>
                    <div class="col-md-3">
                        <span class="cLightGreen pr8">剩余</span>
                        <span class="cRed">三</span>天
                    </div>
                    <span class="circlemark circlemark-lightRed">--</span>
                </div>
            </div>
        </div>
    </div>
    <div class="thinScroll pr10" v-scrollHeight="84">
         <router-link tag="div" exact :to="{path:routerPath('threeTimeOrder'), query: { times: item.times}}" class="analyItem anItemBor" active-class="anItemBor-active" v-for="(item,index) in timinglist" :key="index">
            <p class="analyItemTit tx-center">订单{{timinglist.length - index}}</p>
            <div class="analyItemCon">
                <p class="col-md-6">
                    <span class="cGreen">{{$utils.format('yyyy-MM-dd', item.createTime)}} ~ {{orderEndTime(item.createTime)}}</span>
                </p>
                <p class="col-md-3">
                    <span class="cLightGray pr8">已完成</span>
                    <span class="cGreen">{{dataStatus[item.times].split('-')[1] }} </span>
                </p>
                <p class="col-md-3">
                    <span class="cLightGray pr8">未完成</span>
                    <span class="cGreen"> {{dataStatus[item.times].split('-')[0] - dataStatus[item.times].split('-')[1]}}</span>
                </p>
                <span :class="['circlemark', dataStatus[item.times] === 6 ? 'circlemark-lightGreen' : 'circlemark-lightRed']">{{dataStatus[item.times] === 6 ? '完' : '未'}}</span>
            </div>
        </router-link>
        <router-link tag="div" exact  :to="{path:routerPath('orderDetails'), query: { code:item.code,project: item }}" class="analyItem anItemBor" active-class="anItemBor-active " v-for="(item) in otherList" :key="item.id">
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
        </router-link>
    </div>
    <div class="pr10">
        <router-link tag="div" :to="routerPath('default')" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">处理</p>
            <div class="analyItemCon">
                <div class="col-md-12">
                </div>
            </div>
        </router-link>
    </div>
</div>
</template>
<script>
import { mapGetters } from 'vuex'
import { getProjectOrderByCondition } from '../Resources/Api/scene'
export default {
    data () {
        return {
            orderList: [], // 订单集合
            timinglist: [], // 定时订单
            otherList: [], // 其他订单
            dataStatus: []
        }
    },
    created () {
        this.getProjectOrderByCondition()
    },
    computed: {
        ...mapGetters(['leftInfo', 'twoToThreeInfo', 'updatePlate'])
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
        // 加载数据
        getProjectOrderByCondition () {
            let parm = {
                orderNo: this.leftInfo.orderno,
                orderStage: '2,3,4',
                areaId: 0
            }
            // 接口获取数据
            getProjectOrderByCondition(parm).then(results => {
                if (results.data.StatusCode === 1) {
                    this.orderList = results.data.Body
                    this.dataStatus = results.data.result
                    // 定时订单
                    this.timinglist = this.orderList.filter((item) => { return item.orderTypeId === 10 })
                    // 其他订单
                    this.otherList = this.orderList.filter((item) => {
                        return item.orderTypeId !== 10 && item.orderTypeId !== 11 && item.orderTypeId !== 12 && item.orderTypeId !== 13 &&
                               item.orderTypeId !== 25 && item.orderTypeId !== 26 && item.orderTypeId !== 27 && item.orderTypeId !== 28
                    })
                }
            }).catch(error => {
                console.log(error)
            })
        },
        // 当前时间 + 7
        orderEndTime (time) {
            const DataTimes = new Date(time).getTime()
            const endTimes = DataTimes + 6 * 24 * 60 * 60 * 1000
            return this.$utils.format('yyyy-MM-dd', endTimes)
        }
    },
    watch: {
        leftInfo () {
            this.getProjectOrderByCondition()
        },
        updatePlate () {
            this.getProjectOrderByCondition()
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
