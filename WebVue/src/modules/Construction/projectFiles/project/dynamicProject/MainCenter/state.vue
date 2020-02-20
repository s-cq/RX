<template>
<div class="">
    <div class="pr10">
        <div class="analyItem">
            <p class="analyItemTit tx-center">状态</p>
            <div class="analyItemCon">
                <div class="col-md-12">
                    <div class="col-md-3">
                        <span class="cRed pr8 bold" >未</span>
                    </div>
                    <div class="col-md-3">
                        <span class="cGreen pr8" title="当前阶段">{{leftInfo.AfterMarketState | stage}}</span>
                    </div>
                    <div class="col-md-3">
                        <span class="cLightGreen pr8" title="进入该阶段的日期">{{leftInfo.AfterMarketStateTime}}</span>
                    </div>
                    <div class="col-md-3">
                        <span class="cLightGreen pr8">剩余</span>
                        <span class="cRed">三</span>天
                    </div>
                    <span class="circlemark circlemark-lightRed">--</span>
                </div>
            </div>
        </div>
    </div>
    <div class="thinScroll pr10" v-scrollHeight="84">
        <div class="analyItem">
            <p class="analyItemTit tx-center">工人</p>
            <div class="analyItemCon">
                <div class="col-md-12" >
                    <p class="col-md-3"><span class="cLightGray pr8">总需</span><span>16人</span></p>
                    <div v-for="(item,index) in workerTypeList" :key="index">
                        <p class="col-md-3"><span class="cLightGray pr8">{{item.WorkerTypeName}}</span><span>{{item.WorkmenNumber |toFixed(0)}}</span></p>
                    </div>
                </div>
                <span class="circlemark circlemark-lightGreen">完</span>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">材料</p>
            <div class="analyItemCon">
                <div class="col-md-12">
                    <div class="col-md-3"><span class="cLightGray pr8">订单类型</span><span>{{materialModel.length}}种</span></div>
                </div>
                <span class="circlemark circlemark-lightGreen">完</span>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">质量</p>
            <div class="analyItemCon">
                <div class="col-md-12">
                    <div class="col-md-3"><span class="cLightGray pr8">应用</span><span>{{qualityModel.processCount}}个</span></div>
                    <div class="col-md-3"><span class="cLightGray pr8">工种</span><span>{{qualityModel.workTypeCount}}个</span></div>
                    <div class="col-md-3"><span class="cLightGray pr8">重点</span><span>0个</span></div>
                </div>
                <span class="circlemark circlemark-lightGreen">完</span>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">现场</p>
            <div class="analyItemCon">
                <div class="col-md-12">
                    <div class="col-md-6"><span class="cLightGray pr8">工种</span><span>启 1 项 传 0 项</span></div>
                    <div class="col-md-6"><span class="cLightGray pr8">形象</span><span>启 14 项 传 0 项</span></div>
                    <div class="col-md-6"><span class="cLightGray pr8">安全</span><span>启 7 项 传 0 项</span></div>
                    <div class="col-md-6"><span class="cLightGray pr8">环境</span><span>启 9 项 传 0 项</span></div>
                    <div class="col-md-6"><span class="cLightGray pr8">资料</span><span>21种</span></div>
                </div>
                <span class="circlemark circlemark-lightRed">未</span>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">投诉</p>
            <div class="analyItemCon">
                <div class="col-md-12">
                    <div class="col-md-3"><span class="cLightGray pr8">任务总数</span><span>0</span></div>
                    <div class="col-md-3"><span class="cLightGray pr8">进行中</span><span>0</span></div>
                    <div class="col-md-3"><span class="cLightGray pr8">已完成</span><span>0</span></div>
                    <div class="col-md-3"><span class="cLightGray pr8"></span><span></span></div>
                </div>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">项目班组</p>
            <div class="analyItemCon">
                <div class="col-md-12">
                    <div class="col-md-6"><span class="col-md-4 cLightGray pr8">工程经理:</span><span class="col-md-3">G0330</span></div>
                    <div class="col-md-6"><span class="col-md-3 cLightGray pr8">电话:</span><span class="col-md-3">手机号</span></div>
                    <div class="col-md-6"><span class="col-md-4 cLightGray pr8">项目经理:</span><span class="col-md-3">常永杰</span></div>
                    <div class="col-md-6"><span class="col-md-3 cLightGray pr8">电话:</span><span class="col-md-3">18838209789</span></div>
                    <div class="col-md-6"><span class="col-md-4 cLightGray pr8">设计师:</span><span class="col-md-3">井延淼</span></div>
                    <div class="col-md-6"><span class="col-md-3 cLightGray pr8">电话:</span><span class="col-md-3">15038009455</span></div>
                    <div class="col-md-6"><span class="col-md-4 cLightGray pr8">监理:</span><span class="col-md-3">李永红</span></div>
                    <div class="col-md-6"><span class="col-md-3 cLightGray pr8">电话:</span><span class="col-md-3">15544185915</span></div>
                </div>
            </div>
        </div>
    </div>
    <div class="pr10">
        <router-link tag="div" :to="routerPath('hander')" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">处理</p>
            <div class="analyItemCon">
                <div class="col-md-12">
                    <div class="col-md-3"><span class="cLightGray pr8">当前阶段</span><span class="cGreen">完工</span></div>
                    <div class="col-md-3"><span class="cLightGray pr8"></span><span></span></div>
                    <div class="col-md-3"><span class="cLightGray pr8"></span><span></span></div>
                    <div class="col-md-3"><span class="cLightGray pr8"></span><span></span></div>
                </div>
            </div>
        </router-link>
    </div>
</div>
</template>
<script>
import { mapGetters } from 'vuex'
import { getSupervisorOrderState, getMaterialState } from '../Resources/Api/index'
export default {
    data () {
        return {
            orderModel: [], // 项目信息
            workerTypeList: [], // 项目工种信息
            materialModel: [], // 项目材料信息
            qualityModel: [] // 项目质量信息
        }
    },
    created () {
        this.load()
    },
    computed: {
        ...mapGetters(['leftInfo', 'userInfo'])
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
        // 加载
        load () {
            // 用_this 代替this
            let _this = this
            _this.loading = true

            // 接口请求项目信息
            let proparm = {
                orderNo: _this.leftInfo.orderno,
                selectedType: 1
            }
            getSupervisorOrderState(proparm).then(results => {
                if (results.data.StatusCode === 0) {
                    _this.orderModel = results.data.Body.orderModel
                    _this.workerTypeList = results.data.Body.workerTypeList
                    _this.qualityModel = results.data.Body.quality
                }
            }).catch(error => {
                console.log(error)
            })
            // 接口请求材料信息
            let matparm = {
                rwdID: _this.leftInfo.orderno,
                havDis: 1
            }
            getMaterialState(matparm).then(results => {
                if (results.data.StatusCode === 0) {
                    _this.materialModel = results.data.Body.orderModel
                }
            }).catch(error => {
                console.log(error)
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
