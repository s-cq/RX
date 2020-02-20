<template>
<div class="">
    <div class="pr10">
        <div class="analyItem">
            <p class="analyItemTit tx-center">状态</p>
            <div class="analyItemCon">
                <div class="col-md-12">
                    <div class="col-md-3">
                        <span class="cGreen pr8" title="当前阶段">{{leftInfo.AfterMarketState | stage}}</span>
                    </div>
                    <div class="col-md-3">
                        <span class="cGreen pr8" title="进入该阶段的日期">{{leftInfo.AfterMarketStateTime}}</span>
                    </div>
                    <div class="col-md-3">
                        <span class="cGreen pr8">未开启</span>
                    </div>
                    <span class="circlemark circlemark-lightGreen">正</span>
                </div>
            </div>
        </div>
    </div>
    <div class="thinScroll pr10" v-scrollHeight="84">
         <router-link tag="div" :to="routerPath('customerThree')" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">发起投诉</p>
            <div class="analyItemCon">
                <div class="col-md-3"><span class="cLightGray pr8">发起</span><span></span></div>
            </div>
        </router-link>
        <router-link tag="div"  exact :to="{path:routerPath('customerLookThree'), query: { id: item.id }}" class="analyItem anItemBor" active-class="anItemBor-active" v-for="(item, index) of ComplaintOrderList" :key='item.id'>
            <p class="analyItemTit tx-center">订单{{index + 1}}</p>
            <div class="analyItemCon">
                <p class="col-md-4"><span class="cLightGray pr8">类型</span><span>{{item.typeName}}</span></p>
                <p class="col-md-4"><span class="cLightGray pr8">科目</span><span>{{item.subjectName}}</span></p>
                <p class="col-md-4"><span class="cLightGray pr8">阶段</span><span>{{item.orderStageName}}</span></p>
                <span v-if="item.orderReckonByTime<0"  class="circlemark circlemark-lightRed">超</span>
            </div>
        </router-link>
        <router-link tag="div" exact :to="{path:routerPath('customerLookThree'), query: { id: item.id}}" class="analyItem anItemBor" active-class="anItemBor-active" v-for="(item, index) of historyOrderList" :key='item.id'>
            <p class="analyItemTit tx-center">历史订单{{index + 1}}</p>
            <div class="analyItemCon">
                <p class="col-md-4"><span class="cLightGray pr8">类型</span><span>{{item.typeName}}</span></p>
                <p class="col-md-4"><span class="cLightGray pr8">科目</span><span>{{item.subjectName}}</span></p>
                <p class="col-md-4"><span class="cLightGray pr8">阶段</span><span>{{item.orderStageName}}</span></p>
                <span v-if="item.orderReckonByTime<0"  class="circlemark circlemark-lightRed">超</span>
            </div>
        </router-link>
        <router-link tag="div" exact :to="{path:routerPath('customerLookThree'), query: { id: item.id  }}" class="analyItem anItemBor" active-class="anItemBor-active" v-for="(item, index) of stopOrderList" :key='item.id'>
            <p class="analyItemTit tx-center">终止订单{{index + 1}}</p>
            <div class="analyItemCon">
                <p class="col-md-4"><span class="cLightGray pr8">类型</span><span>{{item.typeName}}</span></p>
                <p class="col-md-4"><span class="cLightGray pr8">科目</span><span>{{item.subjectName}}</span></p>
                <p class="col-md-4"><span class="cLightGray pr8">阶段</span><span>{{item.orderStageName}}</span></p>
                <span v-if="item.orderReckonByTime<0"  class="circlemark circlemark-lightRed">超</span>
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
import { findSpSolveTheProblemLeftList } from '../Resources/Api/customer'
export default {
    data () {
        return {
            ComplaintOrderList: [], // 全部订单
            historyOrderList: [], // 历史订单
            stopOrderList: [] // 终止订单
        }
    },
    created () {
        this.findSpSolveTheProblemLeftList(1)
        this.findSpSolveTheProblemLeftList(2)
        this.findSpSolveTheProblemLeftList(3)
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
        // 查看订单页面
        findSpSolveTheProblemLeftList (type) {
            let parm = {
                postId: 33,
                projectId: this.leftInfo.orderno,
                orderStages: '0,1,2',
                orderState: '0'
            }
            switch (type) {
            // 1 是全部 2是历史 3是终止
            case 1:
                parm = {
                    postId: 33,
                    projectId: this.leftInfo.orderno,
                    orderStages: '0,1,2',
                    orderState: '0'
                }
                break
            case 2:
                parm = {
                    postId: 33,
                    projectId: this.leftInfo.orderno,
                    orderStage: '3',
                    orderState: '0'
                }
                break
            case 3:
                parm = {
                    postId: 33,
                    projectId: this.leftInfo.orderno,
                    orderState: '1'
                }
                break
            default:
                break
            }
            findSpSolveTheProblemLeftList(parm).then((results) => {
                if (results.data.statusCode === 1) {
                    if (type === 1) {
                        this.ComplaintOrderList = results.data.body
                    } else if (type === 2) {
                        this.historyOrderList = results.data.body
                    } else if (type === 3) {
                        this.stopOrderList = results.data.body
                    }
                }
            }).catch((error) => {
                console.log(error)
            })
        }
    },
    watch: {
        leftInfo () {
            this.findSpSolveTheProblemLeftList(1)
            this.findSpSolveTheProblemLeftList(2)
            this.findSpSolveTheProblemLeftList(3)
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
