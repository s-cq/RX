<template>
<div class="layerRtb layerRtb-threecolumn layerRtb-right">
    <three-title :title="{name:'打点'}" :close="false">
        <span tag="i" class="rig_close fr" @click="$parent.$parent.clickFiveShow()"></span>
    </three-title>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "137">
        <div class="analyItem">
            <p class="analyItemTit tx-center">点位图</p>
            <div class="analyItemCon">
                <rx-viewer :images="caremaList" class="ml10 fl">
                    <div class="clearfix">
                        <div v-for="(item, index) of caremaList" :key="index" class="fl mr10">
                            <img :src="item | smallImg(88, 88)" :alt="index">
                        </div>
                    </div>
                </rx-viewer>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">点位详情</p>
            <div class="analyItemCon">
                <div  v-for="(item, index) of caremaDetail" :key="index">
                    <p class="col-md-6">
                        <span class="cLightGray pr8">区域</span>
                        <span>{{item.split('-')[0]}}</span>
                    </p>
                    <p class="col-md-6">
                        <span class="cLightGray pr8">点数</span>
                        <span>{{item.split('-')[1]}}</span>
                    </p>
                 </div>
            </div>
        </div>
    </div>
    <div class="layerRtb-footer">
        <div class="analyItem">
            <p class="analyItemTit tx-center">综合</p>
            <div class="analyItemCon">
                <!-- <p class="col-md-4">
                    <span class="cLightGray pr8">已选择</span>
                    <span>{{selectNumber}}</span>
                </p>
                <p class="col-md-4">
                    <el-checkbox v-model="isAllSelect" @change="selectAllChange()">全选</el-checkbox>
                </p>
                <input type="button" class="uiBtn-normal uiBtn-blue" @click="submit()" value="确定" v-if="buttonIsShow"> -->
            </div>
        </div>
    </div>
</div>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex'
import { getByOrderCode } from '../../../../Resources/Api/scene'
export default {
    props: ['type', 'role'],
    data () {
        return {
            caremaInfo: {}, // 打点信息
            caremaDetail: [], // 点位详情
            caremaList: [] // 点位图片
        }
    },
    created () {
        this.getByOrderCode()
    },
    computed: {
        ...mapGetters(['leftInfo', 'twoToThreeInfo', 'userInfo'])
    },
    methods: {
        ...mapMutations({
            setUpDatePlate: `SET_UPDATE_PLATE`
        }),
        // 路由跳转路径拼接
        routerPath (path) {
            return this.$route.matched[1].path + '/' + path
        },
        // 直接进行路由跳转路径
        routerPush (path) {
            this.$router.push(this.$route.matched[1].path + '/' + path)
        },
        // 自动加载
        getByOrderCode () {
            // 用_this 代替this
            let _this = this
            _this.loading = true
            // 接收参数
            let parm = {
                orderNo: this.leftInfo.orderno
            }
            // 查询打点信息
            getByOrderCode(parm).then((result) => {
                if (result.data.StatusCode === 1) {
                    _this.caremaInfo = result.data.Body.cameraEntity
                    if (_this.caremaInfo.pointMapDetails) {
                        this.caremaDetail = _this.caremaInfo.pointMapDetails.split(',')
                    }
                    if (_this.caremaInfo.pointMap) {
                        this.caremaList = _this.caremaInfo.pointMap.split(',')
                    }
                }
            }).catch((error) => {
                console.log(error)
            })
        }
    },
    watch: {
        leftInfo () {
            this.getByOrderCode()
        }
    }
}
</script>

<style>
    .fixedBox.flex {
        display: flex;
        align-content: center;
    }
    .pomernxcfg{
        width: 74%;
        height: 100% ;
    }
</style>
