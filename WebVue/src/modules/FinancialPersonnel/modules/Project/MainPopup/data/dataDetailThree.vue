<template>
<div class="layerRtb layerRtb-threecolumn">
    <three-title :title="{name:'【资料__'+name+'】详情'}"></three-title>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "137">
        <div class="analyItem" v-for="(item,index) in arr" :key='index'>
            <p class="analyItemTit tx-center">{{item | ellipsis(4)}}</p>
            <div class="analyItemCon">
                <p class="col-md-4 cursor" >
                    <rx-viewer :images="imgUrlAry" :options="{}">
                        <img v-for="(list, ind) in imgUrlAry" :key="ind" :src="list | smallImg(80, 80)" alt="">
                    </rx-viewer>
                </p>
                <p class="col-md-4 cursor" >
                    <span class="pr8">{{item}}</span>
                </p>
                <span class="circlemark circlemark-lightRed">未</span>
            </div>
        </div>
    </div>
    <div class="layerRtb-footer">
        <div class="analyItem">
            <p class="analyItemTit tx-center">综合</p>
            <div class="analyItemCon">
                    <p class="col-md-4">
                        <span class="cLightGray pr8">应传</span>
                        <span>17</span>
                    </p>
                    <p class="col-md-4">
                        <span class="cLightGray pr8">已传</span>
                        <span class="c666">0</span>
                    </p>
                    <p class="col-md-4">
                        <span class="cLightGray pr8">完成度</span>
                        <span class="c666">0%</span>
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
            arr: [],
            name: '',
            fourIndex: undefined,
            imgUrlAry: ['https://proj01.oss-cn-beijing.aliyuncs.com/common/1556070802NRnhKTB5GG.png']
        }
    },
    computed: {
        ...mapGetters(['leftInfo'])
    },
    created () {
        this.name = this.$route.query.index
        this.stateChange(this.name)
    },
    methods: {
        clickFourShow (index) {
            this.fourIndex = index
        },
        stateChange (val) {
            switch (val) {
            case '前期':
                this.arr = ['安全教育', '受教育人员', '材料小样确', '现场工人工']
                break
            case '中期':
                this.arr = ['材料进场验', '隐蔽工程检查记录_强电', '隐蔽工程检查记录_弱电', '隐蔽工程检查记录_钢结构']
                break
            }
        }
    },
    filters: {
        ellipsis (value, num) {
            if (!value) return ''
            if (value.length > num) {
                return value.slice(0, num) + ''
            }
            return value
        }
    },
    watch: {
        $route () {
            this.name = this.$route.query.index
            this.stateChange(this.name)
        },
        leftoInfo () {
            this.name = this.$route.query.index
            this.stateChange(this.name)
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
