<template>
<div class="layerRtb layerRtb-threecolumn">
    <three-title :title="{name:'培养'}"></three-title>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "137">
        <div class="analyItem">
            <p class="analyItemTit tx-center">操作</p>
            <div class="analyItemCon">
                <p class="col-md-10">
                    <span class="cLightGray pr8"></span>
                </p>
                <p class="col-md-2">
                    <span aria-hidden="true" class="iconfont icon-add icon-2x bold pointer cBlue fr mt2 mr5" @click='fourIndex = 0' data-title="添加类别"></span>                </p>
            </div>
        </div>
        <div class="analyItem" v-for="(item,index) in userMarket" :key="index" >
            <p class="analyItemTit tx-center">{{item.signTitle}}</p>
            <div class="analyItemCon">
                <p class="col-md-8">
                    <span class="cLightGray pr8">{{item.signRemark}}</span>
                </p>
                <p class="col-md-2">
                    <span class="cGreen cLightGray pr8">{{item.signFlag===1?'启用':'未启用'}}</span>
                </p>
                 <el-button type="danger" icon='el-icon-delete' size="small" round @click="delSign(item.signId)"></el-button>
                 <el-button type="primary" icon="el-icon-edit" size="small" round></el-button>
            </div>
        </div>
    </div>
    <div class="layerRtb-footer">
        <div class="analyItem">
            <p class="analyItemTit tx-center">综合</p>
            <div class="analyItemCon">
                <p class="fl col-md-9"></p>
            </div>
        </div>
    </div>
    <!-- 四段渲染容器 -->
    <transition-group class="animated faster" enter-active-class="animated faster slideInRight" leave-active-class="animated faster slideOutRight">
        <rx-right v-if="fourIndex === 0" :key="0"></rx-right>
    </transition-group>
</div>
</template>
<script>
import { getUserMarkDetailList, updateSignBySignId } from '../../Resources/Api'
import rxRight from './tagThree/cultivate.vue'
export default {
    components: {
        rxRight
    },
    data () {
        return {
            userMarket: [],
            fourIndex: undefined
        }
    },
    created () {
        this.GetUserMarkDetail()
    },
    methods: {
        GetUserMarkDetail () {
            let _this = this
            _this.userMarket = []
            getUserMarkDetailList({
                pmUserInfo: { signType: 1,
                    signFlag: 3
                }
            }).then(results => {
                _this.userMarket = results.data.Body
                console.log(_this.userMarket)
            })
        },
        delSign (data) {
            updateSignBySignId({
                pmUserInfo: {
                    signId: data,
                    delFlag: 1}
            }).then(results => {
                if (results.data.StatusCode === 0) {
                    this.GetUserMarkDetail()
                }
            })
        },
        clickFourShow (index, id) {
            this.fourIndex = index
            this.fourShopId = id
        }
    }
}
</script>
