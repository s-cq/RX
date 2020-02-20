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
        <router-link tag="div" :to="{path: routerPath('setUpBasic'), query:{basic:stayLevel[0][0]}}" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">当阶</p>
            <div class="analyItemCon">
                <p class="fl col-md-6">
                    <span class="cLightGray pr8">共</span>
                    <span class="rz-num">4</span>
                </p>
                <p class="fl col-md-6">
                    <span class="cLightGray pr8">可用</span>
                    <span>1</span>
                </p>
            </div>
        </router-link>
                <router-link tag="div" :to="{path: routerPath('setUpManage'), query:{manage:stayLevel[0][0]}}" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">管理</p>
              <div class="analyItemCon">
                <p class="fl col-md-6">
                    <span class="cLightGray pr8">共</span>
                    <span class="rz-num">4</span>
                </p>
                <p class="fl col-md-6">
                    <span class="cLightGray pr8">可用</span>
                    <span>1</span>
                </p>
            </div>
        </router-link>
                <router-link tag="div" :to="{path: routerPath('setUpProcess'), query:{process:stayLevel[0][0]}}" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">过程</p>
            <div class="analyItemCon">
                <p class="fl col-md-6">
                    <span class="cLightGray pr8">共</span>
                    <span class="rz-num">4</span>
                </p>
                <p class="fl col-md-6">
                    <span class="cLightGray pr8">可用</span>
                    <span>1</span>
                </p>
            </div>
        </router-link>
         <router-link tag="div" :to="{path: routerPath('setUpResult'), query:{result:stayLevel[0][0]}}" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">结果</p>
            <div class="analyItemCon">
                <p class="fl col-md-6">
                    <span class="cLightGray pr8">共</span>
                    <span class="rz-num">4</span>
                </p>
                <p class="fl col-md-6">
                    <span class="cLightGray pr8">可用</span>
                    <span>1</span>
                </p>
            </div>
        </router-link>
         <router-link tag="div" :to="{path: routerPath('setUpTraining'), query:{training:stayLevel[0][0]}}" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">培训</p>
            <div class="analyItemCon">
                <p class="fl col-md-12">
                    <span class="cLightGray pr8">次数</span>
                    <span class="rz-num">{{stayLevel[0][0].leTrainingNum}}</span>
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
