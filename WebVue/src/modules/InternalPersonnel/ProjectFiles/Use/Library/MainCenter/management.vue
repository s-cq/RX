<template>
    <div class="">
        <div class="pr10">
            <div class="analyItem">
                <p class="analyItemTit tx-center">状态</p>
                <div class="analyItemCon">

                </div>
            </div>
        </div>
        <div v-if="grade>13 && grade<21" class="thinScroll pr10" v-scrollHeight="10">
            <router-link tag="div" :to="{name:'resultCompletionUse',params:{userLevelStandardDetail: userLevelStandardDetail}}" class="analyItem anItemBor" active-class="anItemBor-active">
                <p class="analyItemTit tx-center">竣工</p>
                <div class="analyItemCon">
                    <div class="col-md-3"><span class="cLightGray pr8">标准</span><span>{{userLevelStandardDetail.greatMore}}万/月</span></div>
                </div>
            </router-link>
            <router-link tag="div" :to="{name:'resultPenaltyUse',params:{userLevelStandardDetail: userLevelStandardDetail2}}" class="analyItem anItemBor" active-class="anItemBor-active">
                <p class="analyItemTit tx-center">罚款</p>
                <div class="analyItemCon">
                    <div class="col-md-3"><span class="cLightGray pr8">标准</span><span>{{userLevelStandardDetail2.greatMore}}万/月</span></div>
                </div>
            </router-link>
            <router-link tag="div" :to="{name:'resultAddItemUse',params:{userLevelStandardDetail: userLevelStandardDetail3}}" class="analyItem anItemBor" active-class="anItemBor-active">
                <p class="analyItemTit tx-center">增项</p>
                <div class="analyItemCon">
                    <div class="col-md-3"><span class="cLightGray pr8">标准</span><span>{{userLevelStandardDetail3.greatMore}}万/月</span></div>
                </div>
            </router-link>
            <router-link tag="div" :to="{name:'customerReviewss',params:{userLevelStandardDetail: userLevelStandardDetail}}" class="analyItem anItemBor">
                <p class="analyItemTit tx-center">客户评价</p>
                <div class="analyItemCon">
                    <div class="col-md-3"><span class="cLightGray pr8">标准</span><span>5个五星/月</span></div>
                </div>
            </router-link>
        </div>
        <div v-else class="thinScroll pr10" v-scrollHeight="10">
            <div class="analyItem">
                <p class="analyItemTit tx-center">竣工</p>
                <div class="analyItemCon">
                    <div class="col-md-3"><span class="cLightGray pr8">标准</span><span>{{userLevelStandardDetail.greatMore}}万/月</span></div>
                </div>
            </div>
            <div class="analyItem">
                <p class="analyItemTit tx-center">罚款</p>
                <div class="analyItemCon">
                    <div class="col-md-3"><span class="cLightGray pr8">标准</span><span>{{userLevelStandardDetail2.greatMore}}万/月</span></div>
                </div>
            </div>
            <div class="analyItem">
                <p class="analyItemTit tx-center">增项</p>
                <div class="analyItemCon">
                    <div class="col-md-3"><span class="cLightGray pr8">标准</span><span>{{userLevelStandardDetail3.greatMore}}万/月</span></div>
                </div>
            </div>
            <div class="analyItem">
                <p class="analyItemTit tx-center">客户评价</p>
                <div class="analyItemCon">
                    <div class="col-md-3"><span class="cLightGray pr8">标准</span><span>5个五星/月</span></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
// import { getWarehouseDetail } from '../Resources/Api/index'
import { getWarehouseResultDetail } from '../Resources/Api/index'
import { mapGetters } from 'vuex'
export default {
    data () {
        return {
            userLevelStandardDetail: {},
            userLevelStandardDetail2: {},
            userLevelStandardDetail3: {},
            grade: 0

        }
    },
    computed: {
        ...mapGetters(['leftInfo', 'userInfo'])
    },
    created () {
        this.grade = this.leftInfo.grade
        this.JunGong()
        this.fakuan()
        this.zeng()
    },
    methods: {
        // 竣工
        JunGong () {
            getWarehouseResultDetail({ abilityLevel: this.leftInfo.grade, abilityType: 5 }).then((result) => {
                if (result.data.Body.userLevelStandardDetail !== null) {
                    this.userLevelStandardDetail = result.data.Body.userLevelStandardDetail
                }
            }).catch((err) => {
                console.log(err)
            })
        },
        // 罚款
        fakuan () {
            getWarehouseResultDetail({ abilityLevel: this.leftInfo.grade, abilityType: 9 }).then((result) => {
                if (result.data.Body.userLevelStandardDetail !== null) {
                    this.userLevelStandardDetail2 = result.data.Body.userLevelStandardDetail
                } else {
                    this.userLevelStandardDetail2 = JSON.parse(JSON.stringify(this.userLevelStandardDetail))
                    for (const key in this.userLevelStandardDetail2) {
                        if (this.userLevelStandardDetail2.hasOwnProperty(key)) {
                            this.userLevelStandardDetail2[key] = 0
                        }
                    }
                }
            }).catch((err) => {
                console.log(err)
            })
        },
        // 增项
        zeng () {
            getWarehouseResultDetail({ abilityLevel: this.leftInfo.grade, abilityType: 10 }).then((result) => {
                if (result.data.Body.userLevelStandardDetail !== null) {
                    this.userLevelStandardDetail3 = result.data.Body.userLevelStandardDetail
                } else {
                    this.userLevelStandardDetail3 = JSON.parse(JSON.stringify(this.userLevelStandardDetail))
                    for (const key in this.userLevelStandardDetail3) {
                        if (this.userLevelStandardDetail3.hasOwnProperty(key)) {
                            this.userLevelStandardDetail3[key] = 0
                        }
                    }
                }
            }).catch((err) => {
                console.log(err)
            })
        },
        // 路由跳转路径拼接
        routerPath (path) {
            return this.$route.matched[1].path + '/' + path
        },
        // 直接进行路由跳转路径
        routerPush (path) {
            this.$router.push(this.$route.matched[1].path + '/' + path)
        }
    },
    watch: {
        leftInfo () {
            this.grade = this.leftInfo.grade
            this.JunGong()
            this.fakuan()
            this.zeng()
        }
    }
}
</script>
