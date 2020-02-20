<template>
    <div class="">
        <div class="pr10">
            <div class="analyItem">
                <p class="analyItemTit tx-center">状态</p>
                <div class="analyItemCon">
                    <p class="col-md-6" v-if="capital.needDeposit>capital.deposit">
                        <span class="cRed pr8">押金({{(capital.needDeposit-capital.deposit)}})</span>
                    </p>
                    <p class="col-md-4">
                        <span class="cLightGray pr8">产值</span>
                        <span
                            :class="capital.outputType=='高产'?'cGreen':(capital.outputType=='中产'?'cgreen':'cRed')">{{capital.outputType}}</span>
                    </p>
                    <p class="col-md-2">
                        <span class="state_pai1 cRednew">派</span>
                        <span class="state_wei1 cRednew">未</span>
                    </p>
                </div>
            </div>
        </div>
        <div class="thinScroll pr10" v-scrollHeight="10">
            <router-link tag="div" :to="routerPath('capitalCapitalDetail')" class="analyItem anItemBor"
                active-class="anItemBor-active">
                <p class="analyItemTit tx-center">奖罚</p>
                <div class="analyItemCon">
                    <div class="col-md-10">
                        <p class="col-md-4">
                            <span class="cLightGray pr8">财务待</span>
                            <span>{{capital.doingMoney}}</span>
                        </p>
                        <p class="col-md-4">
                            <span class="cLightGray pr8">人事待</span>
                            <span>{{capital.personMoney}}</span>
                        </p>
                        <p class="col-md-4">
                            <span class="cLightGray pr8">待执行</span>
                            <span>{{capital.waitToDo}}</span>
                        </p>
                        <p class="col-md-4">
                            <span class="cLightGray pr8">已执行</span>
                            <span>{{capital.didMoney}}</span>
                        </p>
                        <p class="col-md-4">
                            <span class="cLightGray pr8">金额 </span>
                            <span class="c666">{{capital.totalFineMoney}}</span>
                        </p>
                        <p class="col-md-4">
                            <span class="cLightGray pr8">次数</span>
                            <span class="c666">{{capital.totalFineNum}}</span>
                        </p>
                    </div>
                    <div class="col-md-2" style="margin-top:20px;">
                        <span class="state_pai1 cRednew">派</span>
                        <span class="state_wei1 cRednew">未</span>
                    </div>
                </div>
            </router-link>
            <router-link tag="div" :to="routerPath('capitalCapitalDetail1')" class="analyItem anItemBor"
                active-class="anItemBor-active">
                <p class="analyItemTit tx-center">质保金</p>
                <div class="analyItemCon">
                    <p class="col-md-6">
                        <span class="cLightGray pr8">待收</span>
                        <span class="cRed">0</span>
                    </p>
                    <p class="col-md-4">
                        <span class="cLightGray pr8">质保金</span>
                        <span class="cRed">0</span>
                    </p>
                </div>
            </router-link>
            <router-link tag="div" :to="routerPath('capitalCapitalDetail2')" class="analyItem anItemBor"
                active-class="anItemBor-active">
                <p class="analyItemTit tx-center">押金</p>
                <div class="analyItemCon">
                    <p class="col-md-4">
                        <span class="cLightGray pr8">级别</span>
                        <span class="c666">{{capital.traditionLevel}}</span>
                    </p>
                    <p class="col-md-4">
                        <span class="cLightGray pr8">应缴押金</span>
                        <span class="c666">{{capital.needDeposit}}</span>
                    </p>
                    <p class="col-md-4">
                        <span class="cLightGray pr8">已缴押金</span>
                        <span class="c666" >{{capital.deposit}}</span>
                    </p>
                    <p class="col-md-4">
                        <span class="cLightGray pr8">上限级别</span>
                        <span class="cRed">12</span>
                    </p>
                    <p class="col-md-4">
                        <span class="cLightGray pr8">上限应缴</span>
                        <span class="cRed">0</span>
                    </p>
                    <p class="col-md-4">
                        <span class="cLightGray pr8">差额</span>
                        <span class="cRed">0</span>
                    </p>
                </div>
            </router-link>
            <router-link tag="div" :to="routerPath('capitalCapitalDetail3')" class="analyItem anItemBor"
                active-class="anItemBor-active">
                <p class="analyItemTit tx-center">加盟费</p>
                <div class="analyItemCon">
                    <p class="col-md-4">
                        <span class="cLightGray pr8">倒计时</span>
                        <span class="cRed">-437</span>
                    </p>
                    <p class="col-md-4">
                        <span class="cLightGray pr8">实际加盟费</span>
                        <span class="cRed">0</span>
                    </p>
                    <p class="col-md-4">
                        <span class="cLightGray pr8">加盟合同额</span>
                        <span class="cRed">0</span>
                    </p>
                </div>
            </router-link>
            <router-link tag="div" :to="routerPath('capitalCapitalDetail4')" class="analyItem anItemBor"
                active-class="anItemBor-active">
                <p class="analyItemTit tx-center">历史</p>
                <div class="analyItemCon">
                    <p class="col-md-4">
                        <span class="cLightGray pr8" title="个人平均产值">个人</span>
                        <span class="c666">{{capital.avgOverMoney}}</span>
                    </p>
                    <p class="col-md-4">
                        <span class="cLightGray pr8" title="城市平均产值">城市</span>
                        <span class="c666">{{capital.cityAvgOverMoney}}</span>
                    </p>
                    <p class="col-md-4">
                        <span class="cLightGray pr8">产值</span>
                        <span
                           :class="capital.outputType=='高产'?'cGreen':(capital.outputType=='中产'?'cgreen':'cRed')">{{capital.outputType}}</span>
                    </p>
                </div>
            </router-link>
            <router-link tag="div" :to="routerPath('capitalCapitalDetail5')" class="analyItem anItemBor"
                active-class="anItemBor-active">
                <p class="analyItemTit tx-center">培训费</p>
                <div class="analyItemCon">
                    <p class="col-md-4">
                        <span class="cLightGray pr8">已付金额</span>
                        <span class="cRed">46.35</span>
                    </p>
                    <p class="col-md-4">
                        <span class="cLightGray pr8">未付金额</span>
                        <span class="cRed">0</span>
                    </p>
                </div>
            </router-link>
        </div>
    </div>
</template>
<script>
import {
    mapGetters
} from 'vuex'
import {
    GetByUIdFundInformation,
    selectAllCityAndCompany
} from '../Resources/Api'
export default {
    data () {
        return {
            capital: {},
            region: ''
        }
    },
    created () {
        this.selectAllCityAndCompanyFn()
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
        // 查询指定人员资金板块奖罚数据
        GetByUIdFundInformationFn () {
            let _this = this
            _this.capital = {}
            GetByUIdFundInformation({
                uid: _this.leftInfo.uid,
                area: _this.region
            }).then(results => {
                _this.capital = results.data.Body
            }).catch(error => {
                console.log(error)
            })
        },
        // 通过分司ID去除相同等级地区
        selectAllCityAndCompanyFn () {
            let _this = this
            _this.region = ''
            selectAllCityAndCompany({
                companyId: _this.leftInfo.dq_id
            }).then(results => {
                for (let i = 0; i < results.data.length; i++) {
                    _this.region = _this.region + results.data[i].cpId + ','
                }
                _this.region = _this.region.substr(0, _this.region.length - 1)
                _this.GetByUIdFundInformationFn()
            }).catch(error => {
                console.log(error)
            })
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
<style>
    .cRednew {
        background: red;
        padding: 2px;
        color: #fff;
    }

</style>
