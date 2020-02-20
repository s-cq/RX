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
        exact
        v-for="(item,index) in resultList"
        :key="index"
        tag="div"
        :to="routerPath('resultResultDetail?orderNo='+item.orderNo)"
        class="analyItem anItemBor"
        active-class="anItemBor-active"
      >
        <p class="analyItemTit tx-center">{{item.compName | slice(0,4)}}</p>
        <div class="analyItemCon">
          <p class="col-md-3">
            <span class="cLightGray pr8">名称</span>
            <span :data-title="item.compName">{{item.compName | truncate(4)}}</span>
          </p>
          <p class="col-md-3">
            <span class="cLightGray pr8">单号</span>
            <span class="c666">{{item.orderNo}}</span>
          </p>
          <p class="col-md-3">
            <span class="cLightGray pr8">金额</span>
            <span class="c666">{{item.contractFee}}</span>
          </p>
          <p class="col-md-3">
            <span class="cLightGray pr8">阶段</span>
            <span class="c666">{{item.afterMarketState}}</span>
          </p>
        </div>
      </router-link>
      <!--          <router-link tag="div" :to="routerPath('resultResultDetail1')" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">项目二</p>
            <div class="analyItemCon">

            </div>
        </router-link>
        <router-link tag="div" :to="routerPath('resultResultDetail2')" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">项目三</p>
            <div class="analyItemCon">

            </div>
      </router-link>-->
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
        <!-- <div class="tx-center">
            <input type="button" class="uiBtn-normal uiBtn-blue" value="确定">
        </div> -->
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import { GetByuidProjectManagerResult } from '../Resources/Api'
export default {
    data () {
        return {
            resultList: []
        }
    },
    created () {
        this.GetProjectManagerResult()
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
        GetProjectManagerResult () {
            let _this = this
            _this.resultList = []
            GetByuidProjectManagerResult({
                uid: _this.leftInfo.uid
            })
                .then(results => {
                    _this.resultList = results.data.Body
                    _this.resultList.forEach(element => {
                        element.afterMarketState = _this.$options.filters['AfterMarketState'](element.afterMarketState, element.constructionPeriod)
                    })
                })
                .catch(error => {
                    console.log(error)
                })
        }
    },
    filters: {
        AfterMarketState (parone, partwo) {
            let value = ''
            switch (parone) {
            case 2:
                value = '准备'
                break
            case 3:
                switch (partwo) {
                case 1:
                    value = '施前'
                    break
                case 2:
                    value = '施中'
                    break
                case 3:
                    value = '施尾'
                    break
                default:
                    value = '在施'
                    break
                }
                break
            case 4:
                value = '竣工'
                break
            }
            return value
        }
    },
    computed: {
        ...mapGetters(['leftInfo'])
    },
    watch: {
        leftInfo () {
            this.GetProjectManagerResult()
        }
    }
}
</script>
