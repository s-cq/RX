<template>
<div class="">
    <div class="pr10">
        <div class="analyItem">
            <p class="analyItemTit tx-center">状态</p>
            <div class="analyItemCon">
                <p class="fl col-md-4">
                    <span class="pr8">
                        <span class="cRed"></span>
                    </span>
                </p>
            </div>
        </div>
    </div>
    <div class="thinScroll pr10" v-scrollHeight="10">
        <router-link tag="div" :to="{path: routerPath('processZidai'), query:{leSelfUnsignedScore:stayLevel[0][0].leSelfUnsignedScore,leSelfSignedScore:stayLevel[0][0].leSelfSignedScore}}" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">自带单</p>
            <div class="analyItemCon">
                <p class="fl col-md-6">
                    <span class="cLightGray pr8">未签(加分)</span>
                    <span class="rz-num">{{stayLevel[0][0].leSelfUnsignedScore}}</span>
                </p>
                <p class="fl col-md-6">
                    <span class="cLightGray pr8">已签(加分)</span>
                    <span>{{stayLevel[0][0].leSelfSignedScore}}</span>
                </p>
            </div>
        </router-link>
        <router-link tag="div" :to="{path: routerPath('processRecommended'), query:{leRefereeUnsignedScore:stayLevel[0][0].leRefereeUnsignedScore,leRefereeSignedScore:stayLevel[0][0].leRefereeSignedScore}}" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">推荐</p>
            <div class="analyItemCon">
                <p class="fl col-md-6">
                    <span class="cLightGray pr8">未签(加分)</span>
                    <span class="rz-num">{{stayLevel[0][0].leRefereeUnsignedScore}}</span>
                </p>
                <p class="fl col-md-6">
                    <span class="cLightGray pr8">已签(加分)</span>
                    <span>{{stayLevel[0][0].leRefereeSignedScore}}</span>
                </p>
            </div>
        </router-link>
    </div>
</div>
</template>
<script>
import { mapGetters } from 'vuex'
import { getStayLevelById } from '../Resources/Api'
export default {
    data () {
        return {
            stayLevel: []
        }
    },
    created () {
        this.GetStayLevel()
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
        GetStayLevel () {
            let _this = this
            _this.stayLevel = []
            getStayLevelById({
                leId: _this.leftInfo.leId
            }).then(results => {
                _this.stayLevel = results.data.Body
                console.log(_this.stayLevel)
            }).catch(error => {
                console.log(error)
            })
        }
    },
    computed: {
        ...mapGetters(['leftInfo', 'updatePlate'])
    },
    watch: {
        leftInfo () {
            this.GetStayLevel()
        },
        updatePlate () {
            this.GetStayLevel()
        }
    }
}
</script>
