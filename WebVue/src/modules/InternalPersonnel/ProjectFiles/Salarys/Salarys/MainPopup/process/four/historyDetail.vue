<template>
    <div class="layerRtb layerRtb-threecolumn layerRtb-right">
        <three-title :title="{name:'工人录入历史'}" :close="false">
            <h2 class="uiTitle2 fl">
                <span tag="i" class="rig_close fr" @click="$parent.$parent.clickFourShowHistory()"></span>
            </h2>
            <h2 class="uiTitle2 fr mr30">
                <span class="ml5 fz14 mr10">按日期搜索</span>
                <input value="2019" style="width: 40px;padding: 0 2px" id="historyYear"><span class="ml5 fz14">年</span>
                <input value="" style="width: 40px;padding: 0 2px" id="historyMonth"><span class="ml5 fz14">月</span>
                <input value="" style="width: 40px;padding: 0 2px" id="historyDay"><span class="ml5 fz14">日</span>
                <input type="button" value="搜索" class="uiBtn-small uiBtn-blue" @click="searchDate()" />
            </h2>
        </three-title>
        <div class="alertBox02 pl10 pr5 threeScroll" style="height: 396px; overflow: hidden; width: auto;" v-scrollHeight="18">
            <div v-if="workerDetails.length>0">
                <div class="analyItem anItemBor" v-for="(item,index) in workerDetails" :key="index" @click="clickFourShow1(index,item.id)">
                    <p class="analyItemTit tx-center">工人信息</p>
                    <div class="analyItemCon">
                        <p class="col-md-2">
                            <span class="cLightGray pr8">姓名</span>
                            <span>{{item.worker_name}}</span>
                        </p>
                        <p class="col-md-2">
                            <span class="cLightGray pr8">编号</span>
                            <span>{{item.worker_number}}</span>
                        </p>
                        <p class="col-md-2">
                            <span class="cLightGray pr8">身份证</span>
                            <span>正反面已上传</span>
                        </p>
                        <p class="col-md-2">
                            <span class="cLightGray pr8">形象照</span>
                            <span>已上传</span>
                        </p>
                        <p class="col-md-2">
                            <span class="cLightGray pr8">支付宝</span>
                            <span>已绑定</span>
                        </p>
                    </div>
                </div>

            </div>
            <div v-else>
                <div class="analyItem">
                    <p class="analyItemTit tx-center">记录</p>
                    <div class="analyItemCon">
                        <p class="col-md-12">
                            <span>暂无数据！</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="layerRtb-footer" @click="clickFourShowHistory(0,item.id)">
            <div class="analyItem">
                <p class="analyItemTit tx-center">综合</p>
                <div class="analyItemCon">
                    <p class="col-md-3"><span class="cLightGray pr8">总人数</span><span id="workerCount">{{workerSum}}</span></p>
                    <p class="col-md-3"><span class="cLightGray pr8">单价</span><span id="oneMoney">{{workerMoney.worker_money}}</span></p>
                    <p class="col-md-3"><span class="cLightGray pr8">总金额</span><span id="CountMoney">{{Number(workerMoney.worker_money*workerSum)}}</span></p>

                </div>
            </div>
        </div>
        <transition-group class="animated faster" enter-active-class="animated faster slideInRight" leave-active-class="animated faster slideOutRight">
            <worker-detail v-if="fiveIndex === currentIndex" :key='currentIndex' :workerIds='workerIds'></worker-detail>
        </transition-group>
    </div>
</template>
<script>
import {
    mapGetters
} from 'vuex'
import WorkerDetail from './five/workerDetail'
import {
    getFourRsglWorkerNumberAndName, getFourRsglWorkerNumberAndNameBetween
} from '../../../Resources/Api'
export default {
    components: {
        WorkerDetail
    },
    props: ['workerIds'],
    data () {
        return {
            workerId: 0,
            body: {},
            workerSum: 0,
            workerMoney: {},
            workerDetails: {},
            create_time: '',
            fiveIndex: undefined,
            currentIndex: 0
        }
    },
    computed: {
        ...mapGetters(['leftInfo', 'userInfo'])
    },
    created () {
        this.workerId = this.workerIds
        this.getFourRsglWorkerNumberAndNameFn()
    },
    methods: {
        getFourRsglWorkerNumberAndNameFn () {
            getFourRsglWorkerNumberAndName({
                user_card_no: this.leftInfo.cardNo,
                grade: this.leftInfo.abilityLevel
            }).then(results => {
                this.body = results.data.Body
                this.workerSum = this.body.workerDetails.length
                this.workerDetails = this.body.workerDetails
                this.workerMoney = this.body.workerMoney
            }).catch(error => {
                console.log(error)
            })
        },
        searchDate () {
            var historyYear = $('#historyYear').val()
            var historyMonth = $('#historyMonth').val()
            var historyDay = $('#historyDay').val()

            if (historyMonth !== 0 && historyMonth !== '' && historyDay !== 0 && historyDay !== '') {
                if (historyMonth.length < 2) {
                    historyMonth = '0' + historyMonth
                }
                if (historyDay.length < 2) {
                    historyDay = '0' + historyDay
                }
                this.create_time = historyYear + '-' + historyMonth + '-' + historyDay
            } else if (historyMonth !== 0 && historyMonth !== '') {
                if (historyMonth.length < 2) {
                    historyMonth = '0' + historyMonth
                }
                this.create_time = historyYear + '-' + historyMonth
            } else {
                this.create_time = historyYear
            }
            getFourRsglWorkerNumberAndNameBetween({
                create_time: this.create_time,
                user_card_no: this.leftInfo.u_kahao,
                grade: this.leftInfo.abilityLevel
            }).then(results => {
                this.body = results.data.Body
                this.workerSum = this.body.workerDetails.length
                this.workerDetails = this.body.workerDetails
                this.workerMoney = this.body.workerMoney
            }).catch(error => {
                console.log(error)
            })
        },
        // 点击四段
        clickFourShow1 (index, workerId) {
            this.fiveIndex = index
            this.currentIndex = index
            this.workerIds = workerId
        }

    }

}
</script>
<style>
.mr30 {
  margin-right: 30px;
}
.uiRadio12 {
  margin-right: 10px;
}
.div1 {
  display: inline-block;
  padding: 0.3em 0.5em;
  background-image: linear-gradient(#ddd, #bbb);
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 0.3em;
  box-shadow: 0 1px white inset;
  text-align: center;
  text-shadow: 0 1px 1px black;
  color: white;
  font-weight: bold;
}
.div1:active {
  box-shadow: 0.05em 0.1em 0.2em rgba(0, 0, 0, 0.6) inset;
  border-color: rgba(0, 0, 0, 0.3);
  background: #bbb;
}
.closeAbsolute {
  position: absolute;
  right: 10px;
  top: 3px;
}
</style>
