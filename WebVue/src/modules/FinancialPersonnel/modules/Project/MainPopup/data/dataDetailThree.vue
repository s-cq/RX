<template>
<div class="layerRtb layerRtb-threecolumn">
    <three-title :title="{name:'【支款_预留'+name+'】详情'}"></three-title>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "137">
        <div class="analyItem">
            <p class="analyItemTit tx-center">预留</p>
            <div class="analyItemCon">
                <p class="col-md-4 cursor" >
                    <span class="pr8">预留</span><br>
                    <span>0</span>
                </p>
                <p class="col-md-4 cursor" >
                    <span class="pr8">预留</span><br>
                    <span>0</span>
                </p>
                 <p class="col-md-4 cursor" >
                    <span class="pr8">预留</span><br>
                    <span>0</span>
                </p>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">预留</p>
            <div class="analyItemCon">
                <p class="col-md-4 cursor" >
                    <span class="pr8">预留</span><br>
                    <span>0</span>
                </p>
                <p class="col-md-4 cursor" >
                    <span class="pr8">预留</span><br>
                    <span>0</span>
                </p>
                 <p class="col-md-4 cursor" >
                    <span class="pr8">预留</span><br>
                    <span>0</span>
                </p>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">预留</p>
            <div class="analyItemCon">
                <p class="col-md-4 cursor" >
                    <span class="pr8">预留</span><br>
                    <span>0</span>
                </p>
                <p class="col-md-4 cursor" >
                    <span class="pr8">预留</span><br>
                    <span>0</span>
                </p>
                 <p class="col-md-4 cursor" >
                    <span class="pr8">预留</span><br>
                    <span>0</span>
                </p>
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
            name: '',
            fourIndex: undefined,
            src: 'https://proj01.oss-cn-beijing.aliyuncs.com/common/1556070802NRnhKTB5GG.png'
        }
    },
    computed: {
        ...mapGetters(['leftInfo'])
    },
    created () {
        this.name = this.$route.query.index
        console.log(this.$route)
    },
    methods: {
        clickFourShow (index) {
            this.fourIndex = index
        }
    },
    watch: {
        $route () {
            this.name = this.$route.query.index
        },
        leftoInfo () {
            this.name = this.$route.query.index
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
