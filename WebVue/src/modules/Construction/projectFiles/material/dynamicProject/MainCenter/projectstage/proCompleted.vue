<template>
<div class="">

    <!-- 新 -->
    <router-link v-for="(item, index) in orderlist" :key="index" exact :to="routerPath('matinfo?index=' + orderId[index])" class="analyItem anItemBor" active-class="anItemBor-active" @click.native="setTwoToThreeInfo(item)">
        <p class="analyItemTit tx-center">{{ orderName[index] }}订单</p>
        <div class="analyItemCon">
            <div class="col-md-4">
                <span class="cLightGray pr8">材料</span>
                <span v-if="index == 0">{{ typeCount.jcType }}种</span>
                <span v-if="index == 1">{{ typeCount.zcType }}种</span>
                <span v-if="index == 2">{{ typeCount.fcType }}种</span>
                <span v-if="index == 3">{{ typeCount.dzType }}种</span>
                <span v-if="index == 4">{{ typeCount.xzType }}种</span>
                <span v-if="index == 5">{{ typeCount.zzType }}种</span>
            </div>
            <div class="col-md-4"><span class="cLightGray pr8">金额</span><span>{{ item.planMoney }}元</span></div>
            <div class="col-md-4"><span class="cLightGray pr8">材料商</span><span>{{ item.shopCount }}人</span></div>
        </div>
    </router-link>

</div>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex'
import { GetShopMaterial } from '../../Resources/Api/proStage'
export default {
    data () {
        return {
            orderlist: [
                {planMoney: '', shopCount: 0},
                {planMoney: '', shopCount: 0},
                {planMoney: '', shopCount: 0},
                {planMoney: '', shopCount: 0},
                {planMoney: '', shopCount: 0},
                {planMoney: '', shopCount: 0}
            ],
            MoneyCount: 0, // 总金额
            orderName: ['基础', '主材', '复尺', '定制', '现制', '储值'],
            orderId: [1, 4, 8, 16, 32, 64],
            typeCount: {
                jcType: 0,
                zcType: 0,
                fcType: 0,
                dzType: 0,
                xzType: 0,
                zzType: 0
            } // 种类个数
        }
    },
    mounted () {
    },
    created () {
        this.load()
    },
    computed: {
        ...mapGetters(['leftInfo', 'userInfo'])
    },
    methods: {
        ...mapMutations({
            setTwoToThreeInfo: `SET_TWO_TO_THREE_INFO`
        }),
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
            this._GetAllOrderFn(1, 0)
            this._GetAllOrderFn(4, 1)
            this._GetAllOrderFn(8, 2)
            this._GetAllOrderFn(16, 3)
            this._GetAllOrderFn(32, 4)
            this._GetAllOrderFn(64, 5)
        },
        _GetAllOrderFn (type, index) {
            let _this = this
            _this.loading = true
            let params = {
                rwdID: _this.leftInfo.orderno,
                flowCode: type,
                havDis: 1
            }
            GetShopMaterial(params).then((result) => {
                if (index === 0) {
                    _this.$set(_this.orderlist, 0, result.data.body)
                    _this.typeCount.jcType = result.data.body.items.map(list => list.matCount).reduce((acc, cur) => (parseFloat(cur) + acc), 0)
                }
                if (index === 1) {
                    _this.$set(_this.orderlist, 1, result.data.body)
                    _this.typeCount.zcType = result.data.body.items.map(list => list.matCount).reduce((acc, cur) => (parseFloat(cur) + acc), 0)
                }
                if (index === 2) {
                    _this.$set(_this.orderlist, 2, result.data.body)
                    _this.typeCount.fcType = result.data.body.items.map(list => list.matCount).reduce((acc, cur) => (parseFloat(cur) + acc), 0)
                }
                if (index === 3) {
                    _this.$set(_this.orderlist, 3, result.data.body)
                    _this.typeCount.dzType = result.data.body.items.map(list => list.matCount).reduce((acc, cur) => (parseFloat(cur) + acc), 0)
                }
                if (index === 4) {
                    _this.$set(_this.orderlist, 4, result.data.body)
                    _this.typeCount.xzType = result.data.body.items.map(list => list.matCount).reduce((acc, cur) => (parseFloat(cur) + acc), 0)
                }
                if (index === 5) {
                    _this.$set(_this.orderlist, 5, result.data.body)
                    _this.typeCount.zzType = result.data.body.items.map(list => list.matCount).reduce((acc, cur) => (parseFloat(cur) + acc), 0)
                }
            }).catch((err) => {
                console.log(`根据单号和店铺类型获取店铺列表接口错误，错误内容${err}`)
            })
        }

    },
    watch: {
        leftInfo () {
            this.load()
        }
    },
    filters: {
        stage (parone) {
            let value = ''
            switch (parone) {
            case 0:
            case 10:
                value = '审计'
                break
            case 20:
                value = '准备'
                break
            case 30:
                value = '在施'
                break
            case 31:
                value = '施前'
                break
            case 32:
                value = '施中'
                break
            case 33:
                value = '施尾'
                break
            case 40:
                value = '竣工'
                break
            case 50:
                value = '完工'
                break
            case 60:
                value = '历史'
                break
            case 70:
                value = '坏账'
                break
            case 80:
                value = '退单'
                break
            }
            return value
        }
    }
}
</script>
