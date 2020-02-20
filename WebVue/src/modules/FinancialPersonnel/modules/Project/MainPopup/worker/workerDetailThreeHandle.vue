<template>
<div class="layerRtb layerRtb-threecolumn">
    <three-title :title="{name:'预留'}"></three-title>
    <div class="stay-nav spread-top plr10 pb10">
        <ul class="clearfix uiTab3 rgpkList">
            <li :class="{'uiTab3-active':flg==0}" @click="flg = 0"><a href="javascript:">待办</a></li>
            <li :class="{'uiTab3-active':flg==1}"><a @click="flg = 1" href="javascript:" >记录</a></li>
        </ul>
    </div>
    <div v-if="flg==0" class="layerRtb-scroll thinScroll" v-scrollHeight = "137">
        <div class="analyItem"  v-for="(item,index) in arr " :key="index">
            <p class="analyItemTit tx-center">预留</p>
            <div class="analyItemCon">
                        <p class="fl col-md-4">
                            <span class="cLightGray pr8">预留名称</span>
                            <span class="cBlue">预留</span>
                        </p>
                         <p class="fl col-md-4">
                            <span class="cLightGray pr8">预留名称</span>
                            <span class="cBlue">预留</span>
                        </p>
                        <p class="fl col-md-4">
                            <span class="cLightGray pr8">预留名称</span>
                            <span class="cBlue">预留</span>
                        </p>
                        <span class="circlemarkment cGreen">预留</span>
                    </div>
        </div>
    </div>
    <div v-else class="layerRtb-scroll thinScroll" v-scrollHeight = "137" >
            预留
    </div>
    <div class="layerRtb-footer">
        <div class="analyItem">
            <p class="analyItemTit tx-center">综合</p>
            <div class="analyItemCon">
                <p class="col-md-4">
                    <span class="pr8 cLightGray">天数</span>
                    <span>0天</span>
                </p>
                <p class="col-md-4">
                    <span class="pr8 cLightGray">成本</span>
                    <span>0元</span>
                </p>
                <p class="col-md-4">
                    <span class="pr8 cLightGray">报价</span>
                    <span>1元</span>
                </p>
            </div>
        </div>
    </div>
</div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    data () {
        return {
            flg: 0,
            arr: [1, 2, 3, 4]
        }
    },
    computed: {
        ...mapGetters(['leftInfo'])
    },
    created () {
        console.log(this.$route)
    },
    methods: {
    },
    watch: {
        $route () {
            this.flg = 0
            console.log('111')
        }
    }
}
</script>
<style>
.circlemarkment {
    position: absolute;
    right: 10px;
    top: 50%;
    margin-top: -12.5px;
    font-size: 14px;
    font-weight: 700;
}
</style>
