<template>
<div class="layerRtb layerRtb-threecolumn layerRtb-right">
    <three-title :title="{name:'产品详情'}" :close="false">
        <span tag="i" class="rig_close fr" @click="$parent.$parent.clickFourShow()"></span>
    </three-title>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "137">
        <div class="analyItem" v-for="(item, index) in productinfo" :key="index">
            <p class="analyItemTit tx-center">产品{{index + 1}}</p>
            <div class="analyItemCon">
                <div class="col-md-2 tx-center">
                    <el-image
                        style="width: 50px; height: 50px"
                        :src="item.productData.imgList[0]"
                        alt="暂无图片"
                        :preview-src-list="item.productData.imgList"
                        fit="fill"></el-image>
                </div>
                <div class="col-md-10">
                    <p class="col-md-4"><span class="cLightGray pr8">名称</span><span>{{ item.productData.matName }}</span></p>
                    <p class="col-md-4"><span class="cLightGray pr8">品牌</span><span>{{ item.productData.brandName }}</span></p>
                    <p class="col-md-4"><span class="cLightGray pr8">规格</span><span>{{ item.productData.proMatspec }}</span></p>
                    <p class="col-md-4"><span class="cLightGray pr8">单价</span><span>{{ item.proPrice }}</span></p>
                    <p class="col-md-4"><span class="cLightGray pr8">用量/总量</span><span>0 / 11</span></p>
                    <p class="col-md-4"><span class="cLightGray pr8">配额/计额</span><span>5 / 11</span></p>
                </div>
            </div>
        </div>
    </div>
    <div class="layerRtb-footer">
        <div class="analyItem">
            <p class="analyItemTit tx-center">综合</p>
            <div class="analyItemCon">
                <p class="col-md-4"><span class="cLightGray pr8">材料种类</span><span>{{ count }}</span></p>
                <p class="col-md-4"><span class="cLightGray pr8">总价</span><span>{{ planMoney }}</span></p>
            </div>
        </div>
    </div>
</div>
</template>
<script>
import { mapGetters } from 'vuex'
import { GetProductDetailItemsByShopID } from '../../Resources/Api/proStage'
export default {
    props: ['shopId'],
    data () {
        return {
            productinfo: [], // 项目信息
            count: 0, // 总个数
            planMoney: 0 // 计划金额
        }
    },
    created () {
        this.load()
    },
    computed: {
        ...mapGetters(['leftInfo', 'userInfo'])
    },
    methods: {
        // 路由跳转路径拼接
        routerPath (path) {
            return this.$route.matched[1].path + '/' + path
        },
        // 直接进行路由跳转路径
        routerPush (path) {
            this.$router.push(this.$route.matched[1].path + '/' + path)
        },
        // 加载
        load () {
            // 用_this 代替this
            let _this = this
            _this.loading = true
            // 接口请求项目信息
            let parm = {
                rwdID: _this.leftInfo.orderno,
                flowCode: _this.$route.query.index,
                ShopID: _this.shopId,
                havDis: 1
            }
            // 获取项目材料信息
            GetProductDetailItemsByShopID(parm).then(results => {
                if (results.data.statusCode === 1) {
                    _this.productinfo = results.data.body.items
                    _this.count = results.data.body.matCount
                    _this.planMoney = results.data.body.planMoney
                }
            }).catch(error => {
                console.log(error)
            })
        }
    },
    watch: {
        leftInfo () {
            this.load()
        }
    },
    filters: {
    }
}
</script>
