<template>
<div class="">
    <div class="pr10">
        <div class="analyItem">
            <p class="analyItemTit tx-center">状态</p>
            <div class="analyItemCon">
                <div class="col-md-12">
                    <div class="col-md-3">
                        <span class="cGreen pr8" title="当前阶段">{{leftInfo.AfterMarketState | stage}}</span>
                    </div>
                    <div class="col-md-3">
                        <span class="cGreen pr8" title="进入该阶段的日期">{{leftInfo.AfterMarketStateTime}}</span>
                    </div>
                    <div class="col-md-3">
                        <span class="cGreen pr8">未开启</span>
                    </div>
                    <span class="circlemark circlemark-lightGreen">正</span>
                </div>
            </div>
        </div>
    </div>
    <div class="thinScroll pr10" v-scrollHeight="10">
        <div :class="leftInfo.AfterMarketState > 10?'analyItem analyItem-visited':leftInfo.AfterMarketState===10?'analyItem analyItem-current':'analyItem'">
            <p class="analyItemTit tx-center">审计</p>
            <div class="analyItemCon">
                <div class="col-md-12">
                    <div class="col-md-3"><span class="cLightGray pr8">审计</span>
                        <span v-if="orderModel.order_state >= 4" class="cGreen">完成</span>
                        <span v-else class="cRed">未完</span>
                    </div>
                    <div class="col-md-3"><span class="cLightGray pr8">分配</span>
                        <span v-if="startConditionByOrderNO.is_setup_camera === 1 && startConditionByOrderNO.is_confim_carft === 1 &&  startConditionByOrderNO.is_allot_camera === 1 && orderModel.supervisor_username !== null" class="cGreen">完成</span>
                        <span v-else class="cRed">未完</span>
                    </div>
                    <div class="col-md-3"><span class="cLightGray pr8">客服</span>
                        <span v-if="orderModel.CustomIsActive===0" class="cGreen">完成</span>
                        <span v-else class="cRed">未完</span>
                    </div>
                    <div class="col-md-3"><span class="cLightGray pr8">发包</span>
                        <span v-if="taskResultByOrderNo.S_Hr===1" class="cGreen">完成</span>
                        <span v-else class="cRed">未完</span>
                    </div>
                    <div class="col-md-3"><span class="cLightGray pr8">财务</span><span class="cGreen">完成</span></div>
                    <div class="col-md-3"><span class="cLightGray pr8">材料</span>
                        <span v-if="proInfoMaterialList.FixedState===1" class="cGreen">完成</span>
                        <span v-else class="cRed">未完</span>
                    </div>
                    <div class="col-md-3"><span class="cLightGray pr8">设计师</span>
                        <span v-if="orderModel.IsdesignerOk===1&&auditItemsByOrderNo.length>0" class="cGreen">完成</span>
                        <span v-else-if="orderModel.IsdesignerOk===0&&auditItemsByOrderNo.length===0" class="cGreen">完成</span>
                        <span v-else class="cRed">未完</span>
                    </div>
                    <span class="circlemark circlemark-lightGreen">未</span>
                    <div class="fixedTrangle">
                        <span href="javascript:" class="fixedtips"></span>
                        <div class="fixedtipscon pt10 pb10 tx-center">
                            <i></i> <p>48个小时内未完成发包为异常</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div :class="leftInfo.AfterMarketState > 20?'analyItem analyItem-visited':leftInfo.AfterMarketState===20?'analyItem analyItem-current':'analyItem'">
            <p class="analyItemTit tx-center">准备</p>
            <div class="analyItemCon">
                <div class="col-md-12">
                    <div class="col-md-3"><span class="cLightGray pr8">监理</span>
                        <span v-if="workerTypeCount < 30" class="cRed">未完</span>
                        <span v-else class="cGreen">完成</span>
                    </div>
                    <div class="col-md-3"><span class="cLightGray pr8">客户端</span>
                        <span v-if="orderModel.CustomIsActive === 0" class="cRed">未完</span>
                        <span v-else class="cGreen">完成</span>
                    </div>
                    <div class="col-md-3"><span class="cLightGray pr8">外人</span>
                        <span v-if="onSiteInspectionList.Preparestate>0" class="cGreen">完成</span>
                        <span v-else class="cRed">未完</span>
                    </div>
                    <div class="col-md-3"><span class="cLightGray pr8">经理</span>
                        <span v-if="orderModel.construction_time!==null&&startConditionByOrderNO.is_dispatch===1&&startConditionByOrderNO.is_make_plan===1&&startConditionByOrderNO.is_confim_files===1" class="cGreen">完成</span>
                        <span v-else class="cRed">未完</span>
                    </div>
                    <span class="circlemark circlemark-lightGreen">未</span>
                    <div class="fixedTrangle">
                        <span href="javascript:" class="fixedtips"></span>
                        <div class="fixedtipscon pt10 pb10 tx-center">
                            <i></i> <p>项目经理、监理7天内没有完成开工前准备工作为异常</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
         <div :class="leftInfo.AfterMarketState > 31?'analyItem analyItem-visited':leftInfo.AfterMarketState===31?'analyItem analyItem-current':'analyItem'">
            <p class="analyItemTit tx-center">施前</p>
            <div class="analyItemCon">
                <div class="col-md-12">
                    <div class="col-md-3"><span class="cLightGray pr8">监理</span><span class="cRed">未完</span></div>
                    <div class="col-md-3"><span class="cLightGray pr8">项经</span><span class="cRed">未完</span></div>
                    <span class="circlemark circlemark-lightGreen">未</span>
                </div>
            </div>
        </div>
         <div :class="leftInfo.AfterMarketState > 32?'analyItem analyItem-visited':leftInfo.AfterMarketState===32?'analyItem analyItem-current':'analyItem'">
            <p class="analyItemTit tx-center">施中</p>
            <div class="analyItemCon">
                <div class="col-md-12">
                    <div class="col-md-3"><span class="cLightGray pr8">监理</span><span class="cRed">未完</span></div>
                    <div class="col-md-3"><span class="cLightGray pr8">项经</span><span class="cRed">未完</span></div>
                    <span class="circlemark circlemark-lightGreen">未</span>
                </div>
            </div>
        </div>
         <div :class="leftInfo.AfterMarketState > 33?'analyItem analyItem-visited':leftInfo.AfterMarketState===33?'analyItem analyItem-current':'analyItem'">
            <p class="analyItemTit tx-center">施尾</p>
            <div class="analyItemCon">
                <div class="col-md-12">
                    <div class="col-md-3"><span class="cLightGray pr8">监理</span><span class="cRed">未完</span></div>
                    <div class="col-md-3"><span class="cLightGray pr8">项经</span><span class="cRed">未完</span></div>
                    <span class="circlemark circlemark-lightGreen">未</span>
                </div>
            </div>
        </div>
         <div :class="leftInfo.AfterMarketState > 40?'analyItem analyItem-visited':leftInfo.AfterMarketState===40?'analyItem analyItem-current':'analyItem'">
            <p class="analyItemTit tx-center">竣工</p>
            <div class="analyItemCon">
                <div class="col-md-12">
                    <div class="col-md-3"><span class="cLightGray pr8">总检</span><span class="cRed">未完</span></div>
                    <div class="col-md-3"><span class="cLightGray pr8">验收</span><span class="cRed">未完</span></div>
                    <div class="col-md-3"><span class="cLightGray pr8">结算</span><span class="cRed">未完</span></div>
                    <span class="circlemark circlemark-lightGreen">未</span>
                </div>
            </div>
        </div>
        <div :class="leftInfo.AfterMarketState > 50?'analyItem analyItem-visited':leftInfo.AfterMarketState===50?'analyItem analyItem-current':'analyItem'">
            <p class="analyItemTit tx-center">完工</p>
            <div class="analyItemCon">
               <div class="col-md-12">
                    <div class="col-md-3"><span class="cLightGray pr8">甲方</span>
                        <span v-if="jiaJs===0&&orderModel.AfterMarketState===5" class="cGreen">已结算</span>
                        <span v-else class="cRed">未结算</span>
                    </div>
                    <div class="col-md-3"><span class="cLightGray pr8">丙方</span>
                        <span v-if="bingJs===0&&orderModel.AfterMarketState===5" class="cGreen">已结算</span>
                        <span v-else class="cRed">未结算</span>
                    </div>
                    <span class="circlemark circlemark-lightGreen">未</span>
                </div>
            </div>
        </div>
        <router-link tag="div" :to="routerPath('hander')"
        :class="leftInfo.AfterMarketState > 60?'analyItem anItemBor analyItem-visited':leftInfo.AfterMarketState===60?'analyItem anItemBor analyItem-current':'analyItem anItemBor'" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">巡检</p>
            <div class="analyItemCon">
                <div class="col-md-12">
                    <div class="col-md-3"><span class="cLightGray pr8">集巡</span>
                        <span v-if="jTInspectionList.Closetype===1" class="cGreen">巡检中</span>
                        <span v-else class="cRed">未开启</span>
                    </div>
                    <div class="col-md-3"><span class="cLightGray pr8">开启时间</span>
                        <span>{{jTInspectionList.xj_time}}</span>
                    </div>
                    <span class="circlemark circlemark-lightGreen">未</span>
                </div>
            </div>
        </router-link>
    </div>
</div>
</template>
<script>
import { mapGetters } from 'vuex'
import { getOrderStage } from '../Resources/Api/index'
export default {
    data () {
        return {
            orderModel: [], // 项目信息
            startConditionByOrderNO: [], // 项目审核记录
            taskResultByOrderNo: [], // 任务分配结果内容
            proInfoMaterialList: [], // 项目配送统计
            auditItemsByOrderNo: [], // 项目报价项集合
            startReadyPhoto: [], // 监理开工准备照片
            onSiteInspectionList: [], // 项目巡检信息
            jiaJs: [], // 甲方结算
            bingJs: [], // 丙方结算
            jTInspectionList: []// 集团巡检信息
        }
    },
    created () {
        this.load()
    },
    computed: {
        ...mapGetters(['leftInfo', 'userInfo']),
        // 项目准备序列数量
        workerTypeCount () {
            return this.startReadyPhoto.map(startReady => startReady.TotalCount).reduce((acc, cur) => (parseFloat(cur) + acc), 0)
        }
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
        load () {
            // 用_this 代替this
            let _this = this
            _this.loading = true
            // 接口请求项目信息
            let parm = {
                orderNo: _this.leftInfo.orderno,
                selectedType: 1
            }
            getOrderStage(parm).then((result) => {
                if (result.data.StatusCode === 0) {
                    _this.orderModel = result.data.Body.orderModel
                    _this.startConditionByOrderNO = result.data.Body.startConditionByOrderNO[0]
                    _this.taskResultByOrderNo = result.data.Body.taskResultByOrderNo[0]
                    _this.proInfoMaterialList = result.data.Body.proInfoMaterialList[0]
                    _this.auditItemsByOrderNo = result.data.Body.auditItemsByOrderNo
                    _this.startReadyPhoto = result.data.Body.startReadyPhoto
                    _this.onSiteInspectionList = result.data.Body.onSiteInspectionList[0]
                    _this.jiaJs = result.data.Body.jiaJs
                    _this.bingJs = result.data.Body.bingJs
                    _this.jTInspectionList = result.data.Body.jTInspectionList
                }
            }).catch((err) => {
                console.log(err)
            })
        }
    },
    watch: {
        leftInfo () {
            this.load()
        }
    },
    filters: {
        stage (parone) {
            let value = ''
            switch (parone) {
            case 0:
            case 10:
                value = '审计'
                break
            case 20:
                value = '准备'
                break
            case 30:
                value = '在施'
                break
            case 31:
                value = '施前'
                break
            case 32:
                value = '施中'
                break
            case 33:
                value = '施尾'
                break
            case 40:
                value = '竣工'
                break
            case 50:
                value = '完工'
                break
            case 60:
                value = '历史'
                break
            case 70:
                value = '坏账'
                break
            case 80:
                value = '退单'
                break
            }
            return value
        }
    }
}
</script>
