<template>
    <div class="">
        <div class="pr10">
            <div class="analyItem">
                <p class="analyItemTit tx-center">状态</p>
                <div class="analyItemCon">
                </div>
            </div>
        </div>
        <div class="thinScroll pr10" v-scrollHeight="94">
        </div>
        <div class="pr10">
            <div class="analyItem">
                <p class="analyItemTit tx-center">综合</p>
                <div class="analyItemCon">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import {
    mapGetters
} from 'vuex'
export default {
    data () {
        return {
            completionList: {},
            // 项目总数
            projectSum: 0,
            // 竣工金额
            completion_money: 0,
            // 竣工提成
            comprehensive_completion: 0,
            // 罚款金额
            fine_money: 0,
            // 罚款提成
            comprehensive_fine: 0,
            // 洽商金额
            negotiate_profit: 0,
            // 洽商提成
            comprehensive_negotiate: 0,
            tradeDetail: {},
            stayCompleteState: 5,
            stayCarryState: 5,
            stayDiscussState: 5,
            junStateObject: {}, // 竣工的状态按钮显示
            fineStateObjdect: {}, // 罚款的状态按钮显示
            qiaStateObjdect: {}, // 洽商的状态按钮显示
            junQuanzhong: 0, // 竣工的权重
            fineQuanzhong: {}, // 罚款的权重
            qiaQuanzhong: {} // 洽商的权重
        }
    },
    created () {
    },
    methods: {
    // 路由跳转路径拼接
        routerPath (path) {
            return this.$route.matched[1].path + '/' + path
        },
        // 直接进行路由跳转路径
        routerPush (path) {
            this.$router.push(this.$route.matched[1].path + '/' + path)
        }
    },
    computed: {
        ...mapGetters(['leftInfo'])
    },
    watch: {
        leftInfo () {
        }
    }
}
</script>
