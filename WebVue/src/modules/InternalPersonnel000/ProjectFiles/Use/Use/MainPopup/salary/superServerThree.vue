<template>
<div class="layerRtb layerRtb-threecolumn">
    <three-title :title="{name:'增值详情'}"></three-title>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "137">
        <div class="analyItem"  v-for="(item, index) in serverNameList" :key="index">
            <p class="analyItemTit tx-center">{{item.name}}</p>
            <div class="analyItemCon">
                <p class="col-md-4"><span class="cLightGray pr8">总金额</span><span>{{item.allmoney}}</span></p>
                <p class="col-md-4"><span class="cLightGray pr8">实际金额</span><span>{{item.actualMoney}}</span></p>
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
</div>
</template>
<script>
export default {
    data () {
        return {
            serverNameList: [] // 增值数据
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

    }
}
</script>
