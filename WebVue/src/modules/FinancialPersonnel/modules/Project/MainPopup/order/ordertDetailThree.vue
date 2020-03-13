<template>
<div class="layerRtb layerRtb-threecolumn">
    <three-title :title="{name:'【订单_项目订单】详情'}"></three-title>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "137">
        <div class="analyItem" v-for="(item,index) in entityList" :key="index">
            <p class="analyItemTit tx-center">订单{{index+1}}</p>
            <div class="analyItemCon">
                <p class="col-md-4">
                    <span class="cLightGray pr8">单号</span>
                    <span :data-title="item.code">{{item.order_number}}</span>
                </p>
                <p class="col-md-4">
                    <span class="cLightGray pr8">订单名称</span>
                    <span>{{item.name}}</span>
                </p>
                 <p class="col-md-4">
                   <span class="cLightGray pr8">创建时间</span>
                   <span>{{item.create_time}}</span>
                </p>
                <p class="col-md-4">
                    <span class="cLightGray pr8">状态</span>
                    <span v-if="item.statusName=='超期'" class="cRed">{{item.statusName}}</span>
                    <span v-else-if="item.statusName=='已完成'" class="cGreen">{{item.statusName}}</span>
                    <span v-else >{{item.statusName}}</span>
                </p>
                <p class="col-md-4">
                    <span class="cLightGray pr8">完成时间</span>
                    <span>{{item.execution_completed===1 ? item.execution_completed_time:'暂无'}}</span>
                </p>
                <p class="col-md-4">
                    <span class="cLightGray pr8">金额</span>
                    <span>{{item.price}}</span>
                </p>
                <!-- <span><span :class="['circlemark', item.stage === 0 ? 'circlemark-lightGreen' : 'circlemark-lightRed' ]">{{item.stage === 0 ? '完' : '执'}}</span></span> -->
            </div>
        </div>
    </div>
    <div class="layerRtb-footer">
        <div class="analyItem">
            <p class="analyItemTit tx-center">综合</p>
            <div class="analyItemCon"></div>
        </div>
    </div>
</div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    data () {
        return {
            entityList: [] // 页面实体集合
        }
    },
    computed: {
        ...mapGetters(['leftInfo'])
    },
    created () {
        this.entityList = this.$route.query.entityList
        console.log(this.entityList)
    },
    methods: {
        clickFourShow (index) {
            this.fourIndex = index
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
