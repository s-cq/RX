<template>
    <div class="">
        <div class="pr10">
            <div class="analyItem">
                <p class="analyItemTit tx-center">状态</p>
                <div class="analyItemCon">

                </div>
            </div>
        </div>
        <div class="thinScroll pr10" v-scrollHeight="85">
            <router-link tag="div" :to="routerPath('achImprintThree')" class="analyItem anItemBor" active-class="anItemBor-active">
                <p class="analyItemTit tx-center">印记</p>
                <div class="analyItemCon">
                </div>
            </router-link>
            <router-link tag="div" :to="routerPath('achThree')" class="analyItem anItemBor" active-class="anItemBor-active">
                <p class="analyItemTit tx-center">累计成就</p>
                <div class="analyItemCon">
                    <p class="fl col-md-4"><span class="cLightGray pr10">个数</span><span>{{ordinaryCompletedTotal}}个</span></p>
                    <p class="fl col-md-4"><span class="cLightGray pr10">金额</span><span>{{Number(ordinaryCompletedMoney/10000).toFixed(2)}}万</span></p>
                </div>
            </router-link>
            <router-link tag="div" :to="{path:routerPath('trainThree'),query: {pathUrl: jumpUrl!== null ? jumpUrl : 'null'}}" class="analyItem anItemBor" active-class="anItemBor-active">
                <p class="analyItemTit tx-center">培训</p>
                <div class="analyItemCon">
                    <p class="fl col-md-4"><span class="cLightGray pr10">函授</span><span>{{peiObject !== null && peiObject.appTrainNum !== null ? peiObject.appTrainNum : 0}}次</span></p>
                    <p class="fl col-md-4"><span class="cLightGray pr10">面授</span><span>{{peiObject !== null && peiObject.militaryNum !== null ? peiObject.militaryNum : 0}}次</span></p>
                </div>
            </router-link>
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
import { getTrainProcess, getLatelyClassTrainResultByCardNo, getAllAchievement } from '../Resources/Api'
import { mapGetters } from 'vuex'
export default {
    data () {
        return {
            peiObject: null, // 培训数据
            jumpUrl: null, // 三段的URl
            ordinaryCompletedMoney: 0,
            ordinaryCompletedTotal: 0,
            body: {}
        }
    },
    computed: {
        ...mapGetters(['leftInfo'])
    },
    created () {
        this.getTrainProcess()
        this.getAllAchievementFn()
    },
    methods: {

        getAllAchievementFn () {
            getAllAchievement({
                user_card_no: this.leftInfo.cardNo
            }).then(result => {
                this.body = result.data.Body
                this.ordinaryCompletedMoney = this.body.ordinaryCompletedMoney
                this.ordinaryCompletedTotal = this.body.ordinaryCompletedTotal
            })
        },
        // 路由跳转路径拼接
        routerPath (path) {
            return this.$route.matched[1].path + '/' + path
        },
        // 直接进行路由跳转路径
        routerPush (path) {
            this.$router.push(this.$route.matched[1].path + '/' + path)
        },
        getTrainProcess () {
            // 获取培训接口
            getTrainProcess({ cardNo: this.leftInfo.cardNo }).then((results) => {
                if (results.data.statusCode === 1) {
                    this.peiObject = results.data.body
                }
            }).catch((error) => {
                console.log(error)
            })
            // 获取培训三段URl
            getLatelyClassTrainResultByCardNo({ cardNo: this.leftInfo.cardNo }).then((results) => {
                if (results.data.statusCode === 1) {
                    const data = results.data.body
                    if (data !== null) {
                        this.jumpUrl = data.jumpUrl
                    }
                }
            }).catch((error) => {
                console.log(error)
            })
        }
    },
    watch: {
        leftInfo () {
            this.getTrainProcess()
            this.getAllAchievementFn()
        }
    }
}
</script>
