<template>
<div class="layerRtb layerRtb-threecolumn">
    <three-title :title="{name:$route.query.typeName}"></three-title>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "17">
        <div tag="div" @click="clickFourShow(0,item.process_id)" class="analyItem anItemBor" v-for="(item, index) in this.orderProFilterList" :key="index">
            <p class="analyItemTit tx-center">{{item.process_name | truncate(5)}}</p>
            <div class="analyItemCon">
                <p>{{item.process_name}}  {{item.process_key | getConName(orderProcesslibrary)}}</p>
                <span :class="['circlemark',  item.ServerUrl ? 'circlemark-lightGreen' : 'circlemark-lightRed']">{{item.ServerUrl ? '完' : '未'}}</span>
           </div>
        </div>
    </div>
    <!-- 四段渲染容器 -->
    <transition-group class="animated faster" enter-active-class="animated faster slideInRight" leave-active-class="animated faster slideOutRight">
        <order-detail v-if="fourIndex === 0" :key='0' :processId="processId"></order-detail>
    </transition-group>
</div>
</template>
<script>
import { mapGetters } from 'vuex'
import OrderDetail from './four/orderDetail'
import { getQualityTwo } from '../Resources/Api/index'
export default {
    components: {
        OrderDetail
    },
    data () {
        return {
            orderProcesslibrary: [], // 具体数据
            orderConstProcess: [], // title 数据
            orderProFilterList: [],
            fourIndex: undefined,
            processId: ''
        }
    },
    computed: {
        ...mapGetters(['leftInfo', 'userInfo'])
    },
    created () {
        this.getQualityTwo()
    },
    mounted () {

    },
    methods: {
        // 获取数据
        getQualityTwo () {
            let _this = this
            // let parm = {
            //     orderNo: '50-18189'
            // }
            let parm = {
                orderNo: this.leftInfo.orderno
            }
            getQualityTwo(parm).then((result) => {
                _this.orderProcesslibrary = result.data.Body.processlibrary
                _this.orderConstProcess = result.data.Body.constProcess
                this.dataFilter()
            }).catch((err) => {
                console.log(err)
            })
        },

        // 数据过滤
        dataFilter () {
            const baseList = this.orderConstProcess.filter(item => {
                return item.typename === this.$route.query.typeName
            })
            var obj = {}
            this.orderProFilterList = baseList.reduce((cur, next) => {
                // eslint-disable-next-line no-unused-expressions
                obj[next.process_name] ? '' : obj[next.process_name] = true && cur.push(next)
                return cur
            }, [])
        },
        clickFourShow (index, id) {
            this.fourIndex = index
            this.processId = id
            // this.$nextTick(() => {
            //     this.processId = processId
            // })
        }
    },
    watch: {
        leftInfo () {
            this.getQualityTwo()
        },
        $route () {
            this.dataFilter()
        }
    },
    filters: {
        // 过滤orderProcesslibrary
        getConName (code, dataList) {
            const upperCase = code.toLocaleUpperCase()
            const orderConFilterList = dataList.filter(item => {
                return item.ProcessCode === upperCase
            })
            let name
            if (orderConFilterList && orderConFilterList.length > 0) {
                name = `---- ${orderConFilterList[0].ProcessChildClass}`
            } else {
                name = ''
            }

            return name
        }
    }
}
</script>
<style lang="">
    .standardImg {
        width: 28px;
        height: 25px;
        line-height: 25px;
        text-align: center;
        position: absolute;
        top: 1px;
        left: 1px;
        background: #000;
        opacity: 0.6;
        color: #fff;
        border-radius: 5px;
        padding: 0 1px;
    }
    .sceneImg {
        width: 28px;
        height: 25px;
        line-height: 25px;
        text-align: center;
        position: absolute;
        top: 1px;
        left: 1px;
        background: #f00;
        opacity: 0.6;
        color: #fff;
        border-radius: 5px;
        padding: 0 1px;
    }
</style>
