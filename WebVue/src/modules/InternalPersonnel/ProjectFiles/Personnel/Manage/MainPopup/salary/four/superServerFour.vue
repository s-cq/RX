<template>
<div class="layerRtb layerRtb-threecolumn layerRtb-right">
    <three-title :title="{name:'增值详情'}" :close="false">
        <span tag="i" class="rig_close fr" @click="$parent.$parent.clickFourShow()"></span>
    </three-title>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "137">
        <div class="analyItem"  v-for="(item, index) in currentServerList" :key='index'>
            <p class="analyItemTit tx-center">{{item.proname | truncate(4)}}</p>
            <div class="analyItemCon">
                <p class="col-md-6"><span class="cLightGray pr8">项目名称</span><span :data-title="item.proname">{{item.proname | truncate(20)}}</span></p>
                <p class="col-md-6"><span class="cLightGray pr8">订单编号</span><span>{{item.order_number}}</span></p>
                <p class="col-md-6"><span class="cLightGray pr8">订单金额</span><span>{{item.money === null ? '--' : item.money}}</span></p>
                <p class="col-md-6"><span class="cLightGray pr8">实收金额</span><span>{{item.actualMoney === null ? '--' : item.actualMoney }}</span></p>
                <p class="fl">
                    <span v-if="Number(item.timeout_flag) === 1" class="circlemark circlemark-lightRed">超</span>
                    <span v-else :class="['circlemark', Number(item.status) === 0 ? 'circlemark-green' : 'circlemark-lightRed']">{{Number(item.status) === 0 ? '完' : '未'}}</span>
                </p>
            </div>
        </div>
    </div>
    <div class="layerRtb-footer">
        <div class="analyItem">
            <p class="analyItemTit tx-center">综合</p>
            <div class="analyItemCon">
                <p class="col-md-6"><span class="cLightGray pr8">总金额</span><span>{{allMoney}}</span></p>
                <p class="col-md-6"><span class="cLightGray pr8">总实收金额</span><span>{{allactualMoney}}</span></p>
            </div>
        </div>
    </div>
</div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    props: ['fourData'],
    data () {
        return {
            currentServerList: [] // 当前增项的数据
        }
    },
    computed: {
        ...mapGetters(['leftInfo', 'userInfo']),
        allMoney () {
            let number = 0
            this.currentServerList.forEach(item => {
                number += Number(item.money)
            })
            return number.toFixed(2)
        },
        allactualMoney () {
            let number = 0
            this.currentServerList.forEach(item => {
                number += Number(item.actualMoney)
            })
            return number.toFixed(2)
        }
    },
    created () {
        this.currentServerList = []
        const serverList = this.fourData
        serverList.forEach(element => {
            if (element.proname !== null) {
                this.currentServerList.push(element)
            }
        })
    },
    methods: { },
    watch: {
        leftInfo () {
            this.currentServerList = []
            const serverList = this.fourData
            serverList.forEach(element => {
                if (element.proname !== null) {
                    this.currentServerList.push(element)
                }
            })
        }
    }
}
</script>
