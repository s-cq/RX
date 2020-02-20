<template>
<div class="layerRtb layerRtb-threecolumn">
    <three-title :title="{name:leftInfo.proname}"></three-title>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "137">
        <div class="analyItem">
            <p class="analyItemTit tx-center">信息</p>
            <div class="analyItemCon">
                <p class="col-md-4">
                    <span class="cLightGray pr8">单号</span>
                    <span>{{$route.query.orderNo}}</span>
                </p>
                <p class="col-md-4">
                    <span class="cLightGray pr8">合同</span>
                    <span>{{$route.query.money}}</span>
                </p>
                <p class="col-md-4">
                    <span class="cLightGray pr8">发包</span>
                    <span>{{$route.query.ContractingMoney}}</span>
                </p>
                 <p class="col-md-4">
                    <span class="cLightGray pr8">未收</span>
                    <span>{{$route.query.uncollected}}</span>
                </p>
            </div>
        </div>
        <div v-if="Receivable.length>0">
        <div class="analyItem" v-for="(item,index) in Receivable" :key="index">
            <p class="analyItemTit tx-center">{{item.Type!==4?item.Period:''}}{{item.Type==1?'期款':item.Type==2?'增款':item.Type==4?'质保金':'--'}}</p>
            <div class="analyItemCon">
                <p class="col-md-3">
                    <span class="cLightGray pr8">日期</span>
                    <span>{{item.Time.slice(0,10)}}</span>
                </p>
                <p class="col-md-3">
                    <span class="cLightGray pr8">应收</span>
                    <span>{{item.Receivable}}</span>
                </p>
                 <p class="col-md-3">
                    <span class="cLightGray pr8">已收</span>
                    <span>{{item.Received}}</span>
                </p>
                <p class="col-md-3">
                    <span class="cLightGray pr8">状态</span>
                    <span :class="item.Receivable &lt;=item.Received?'cGreen':'cRed'">{{item.Receivable &lt;=item.Received?'已回完':'未回完'}}</span>
                </p>
            </div>
        </div>
        </div>
        <div>
            <div class="analyItem">
            <p class="analyItemTit tx-center">款项记录</p>
            <div class="analyItemCon">
                <p class="col-md-12">
                    <span>暂无记录信息！</span>
                </p>
            </div>
        </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">支款</p>
            <div class="analyItemCon">
                <p class="col-md-3">
                    <span class="cLightGray pr8">人工</span>
                    <span>{{moneyInfo.SUMRenGong}}</span>
                </p>
                <p class="col-md-3">
                    <span class="cLightGray pr8">材料</span>
                    <span>{{moneyInfo.SUMCaiLiao}}</span>
                </p>
                <p class="col-md-3">
                    <span class="cLightGray pr8">其他</span>
                    <span>{{moneyInfo.qtMoney}}</span>
                </p>
                <p class="col-md-3">
                    <span class="cLightGray pr8">罚款</span>
                    <span>{{faKuanMoney}}</span>
                </p>
            </div>
        </div>
    </div>
    <div class="layerRtb-footer">
        <div class="analyItem">
            <p class="analyItemTit tx-center">综合</p>
            <div class="analyItemCon">
                <p class="col-md-3">
                    <span class="cLightGray pr8">可用</span>
                    <span>{{keYong}}</span>
                </p>
                <p class="col-md-3">
                    <span class="cLightGray pr8">人工</span>
                    <span>{{moneyInfo.SUMRenGong}}</span>
                </p>
                <p class="col-md-3">
                    <span class="cLightGray pr8">材料</span>
                    <span>{{moneyInfo.SUMCaiLiao}}</span>
                </p>
                <p class="col-md-3">
                    <span class="cLightGray pr8">其他</span>
                    <span>{{moneyInfo.qtMoney}}</span>
                </p>
                <p class="col-md-3">
                    <span class="cLightGray pr8">罚款</span>
                    <span>{{faKuanMoney}}</span>
                </p>
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
import { GetyyMoneyListByUserID, GetByOrderReceivableDetails, GetByOrderProjectFinesList, ProjectKYMoneyList } from '../../Resources/Api'
export default {
    data () {
        return {
            moneyInfo: {},
            Receivable: [],
            keYong: 0,
            Fines: [], // 罚款记录
            faKuanMoney: 0
        }
    },
    created () {
        this.GetByOrderReceivableDetailsFn()
        this.GetyyMoneyListByUserIDFn()
        this.GetByOrderProjectFinesListFn()
        this.ProjectKYMoneyListFn()
    },
    methods: {
        // 查询项目支款信息
        GetyyMoneyListByUserIDFn () {
            let _this = this
            _this.moneyInfo = {}
            // 查询项目待结款信息
            GetyyMoneyListByUserID({
                uid: _this.leftInfo.uid,
                flag: 2,
                OrderID: _this.$route.query.orderNo
            }).then(results => {
                _this.moneyInfo = results.data.Body[0]
            }).catch(error => {
                console.log(error)
            })
        },
        // 查询指定项目回款进度信息
        GetByOrderReceivableDetailsFn () {
            let _this = this
            _this.Receivable = {}
            // 查询项目待结款信息
            GetByOrderReceivableDetails({
                orderNo: _this.$route.query.orderNo
            }).then(results => {
                _this.Receivable = results.data.Body
            }).catch(error => {
                console.log(error)
            })
        },
        // 查询指定项目经理的项目罚款记录
        GetByOrderProjectFinesListFn () {
            let _this = this
            _this.Fines = []
            _this.faKuanMoney = 0
            // 查询项目待结款信息
            GetByOrderProjectFinesList({
                uid: _this.leftInfo.uid,
                orderNo: _this.$route.query.orderNo
            }).then(results => {
                _this.Fines = results.data.Body
                for (let i = 0; i < _this.Fines.length; i++) {
                    _this.faKuanMoney = _this.faKuanMoney + _this.Fines[i].fineMoney
                }
            }).catch(error => {
                console.log(error)
            })
        },
        // 查询项目可用款项信息
        ProjectKYMoneyListFn () {
            let _this = this
            _this.keYong = 0
            // 查询项目待结款信息
            ProjectKYMoneyList({
                uid: _this.leftInfo.uid,
                orderNo: _this.$route.query.orderNo
            }).then(results => {
                _this.keYong = results.data.Body[0].ProjectAllMoney
            }).catch(error => {
                console.log(error)
            })
        }
    },
    computed: {
        ...mapGetters(['leftInfo'])
    },
    watch: {
        $route () {
            this.GetByOrderReceivableDetailsFn()
            this.GetyyMoneyListByUserIDFn()
            this.GetByOrderProjectFinesListFn()
            this.ProjectKYMoneyListFn()
        }
    }
}
</script>
