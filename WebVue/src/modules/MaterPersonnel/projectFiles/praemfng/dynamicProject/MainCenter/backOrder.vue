<template>
  <div class>
    <div class="pr10">
      <div class="analyItem">
        <p class="analyItemTit tx-center">状态</p>
        <div class="analyItemCon"></div>
      </div>
    </div>
    <div class="thinScroll pr10" v-scrollHeight= "109">
      <router-link
        exact :key="index"  tag="div" :to="{path: routerPath('integralRefund'), query:{integr:integral}}"  class="analyItem anItemBor" active-class="anItemBor-active">
        <p class="analyItemTit tx-center">退单</p>
        <div class="analyItemCon">
          <p class="col-md-4">
            <span class="cLightGray pr8">次数</span>
            <span>{{integral[0]?integral[0].deductNum:0}}次</span>
          </p>
            <p class="col-md-4">
            <span class="cLightGray pr8">积分</span>
            <span>{{integral[0]?integral[0].deductFraction:0}}分</span>
          </p>
        </div>
      </router-link>
    </div>
    <div class="layerRtb-footer">
        <div class="analyItem">
            <p class="analyItemTit tx-center">综合</p>
            <div class="analyItemCon">
                <!-- <p class="fl col-md-9"></p>
                <p class="fr col-md-3">
                    <span class="cLightGray">统计</span>
                    <span class="cGreen fz14 bold">0分</span>
                </p>
                <p class="fl"><span class="circlemark circlemark-green">优</span></p> -->
            </div>
        </div>

    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import { getIntegralInfo, saveIntegralInfo } from '../Resources/Api'
export default {
    data () {
        return {
            integral: []
        }
    },
    computed: {
        ...mapGetters(['leftInfo', 'updatePlate'])
    },
    created () {
        this.GetIntegral()
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
        GetIntegral () {
            let _this = this
            _this.integral = []
            getIntegralInfo({
                leveId: this.leftInfo.leLevel,
                integralType: 1
            }).then(results => {
                this.integral = results.data.Body
            })
        },
        SaveIntegral () {
            saveIntegralInfo({})
        }
    },
    watch: {
        leftInfo () {
            this.GetIntegral()
        },
        updatePlate () {
            this.GetIntegral()
        }
    }
}
</script>
