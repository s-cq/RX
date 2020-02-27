<template>
<div class="layerRtb layerRtb-threecolumn">
    <three-title :title="{name:'增值详情'}"></three-title>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "137">
        <div v-if="serverNameList.length === 0">
            <div class="analyItem">
                <p class="analyItemTit tx-center">暂无数据</p>
                <div class="analyItemCon">暂无数据</div>
            </div>
        </div>
        <div :class="['analyItem', index === currentIndex ? 'anItemBor' : '']"  v-for="(item, index) in serverNameList" :key="index" @click="fourClick(index,item.currentObject)">
            <p class="analyItemTit tx-center">{{item.name}}</p>
            <div class="analyItemCon">
                <p class="col-md-4"><span class="cLightGray pr8">总金额</span><span>{{item.allmoney.toFixed(2)}}</span></p>
                <p class="col-md-4"><span class="cLightGray pr8">实际金额</span><span>{{item.actualMoney.toFixed(2)}}</span></p>
                <p class="col-md-4"><span class="cLightGray pr8">项目个数</span><span>{{item.number}}</span></p>
            </div>
        </div>
    </div>
    <div class="layerRtb-footer">
        <div class="analyItem">
            <p class="analyItemTit tx-center">综合</p>
            <div class="analyItemCon">
                <p class="col-md-4"><span class="cLightGray pr8">总金额</span><span>{{allmoney}}</span></p>
                <p class="col-md-4"><span class="cLightGray pr8">实际金额</span><span>{{allactualMoney}}</span></p>
                <p class="col-md-4"><span class="cLightGray pr8">项目个数</span><span>{{allnumber}}</span></p>
            </div>
        </div>
    </div>
    <!-- 四段渲染容器 -->
    <transition-group class="animated faster" enter-active-class="animated faster slideInRight" leave-active-class="animated faster slideOutRight">
        <super-server-four v-if="fourIndex === currentIndex" :key='currentIndex' :fourData='fourData'></super-server-four>
    </transition-group>
</div>
</template>
<script>
import SuperServerFour from './four/superServerFour'
export default {
    components: {
        SuperServerFour
    },
    data () {
        return {
            serverNameList: [], // 增值数据
            fourIndex: undefined, // 下标
            currentIndex: 0, // 当前的Index
            fourData: {} // 四段数据
        }
    },
    computed: {
        allmoney () {
            let number = 0
            this.serverNameList.forEach(item => {
                number += Number(item.allmoney)
            })
            return number.toFixed(2)
        },
        allactualMoney () {
            let number = 0
            this.serverNameList.forEach(item => {
                number += Number(item.actualMoney)
            })
            return number.toFixed(2)
        },
        allnumber () {
            let allnumber = 0
            this.serverNameList.forEach(item => {
                allnumber += Number(item.number)
            })
            return allnumber
        }
    },
    created () {
        this.serverNameList = this.$route.query.data
    },
    methods: {
        // 点击出现四段
        fourClick (index, data) {
            this.fourIndex = index
            this.currentIndex = index
            this.fourData = data
        },
        clickFourShow () {
            this.fourIndex = undefined
        }
    }
}
</script>
