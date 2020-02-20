<template>
<div class="layerRtb layerRtb-threecolumn">
    <three-title :title="{name:'工艺详情'}"></three-title>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "17">
        <div tag="div" class="analyItem">
            <p class="analyItemTit tx-center">{{qualityList.ProcesName | slice(0,4)}}</p>
            <div class="analyItemCon">
                <div class="fl" v-for="(itemImage,index) in qualityList.ImgList" :key="index">
                    <rx-viewer style="position:relative">
                        <div class="clearfix tx-center">
                            <div class="mr10">
                                <img :src="itemImage.PhotoUrl | smallImg(80, 80)">
                                <p @click="currentIndex(index)">工序{{index + 1}}</p>
                            </div>
                        </div>
                    </rx-viewer>
                </div>
                <div class="col-md-11">
                    <p><span class="cLightGray pr8">名称</span><span>{{qualityList.ProcesName}}</span></p>
                    <p class="col-md-11">
                        <span class="cLightGray pr8">描述</span>
                        <span>{{qualityList.OrderDescription}}</span>
                    </p>
                </div>
                <span :class="['circlemark',  qualityList.FinishedState ? 'circlemark-lightGreen' : 'circlemark-lightRed']">{{qualityList.FinishedState ? '完' : '未'}}</span>
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
            qualityList: [],
            fourIndex: undefined,
            clickIndex: undefined, // 点击时的下标
            flag: true
        }
    },
    computed: {
        ...mapGetters(['leftInfo', 'userInfo'])
    },
    created () {
        this.qualityList = this.$route.query.qualityList
    },
    methods: {
        currentIndex (index) {
            if (this.flag) {
                this.clickIndex = index
            }
            this.flag = !this.flag
        }
    },
    watch: {
        $route () {
            this.qualityList = this.$route.query.qualityList
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
