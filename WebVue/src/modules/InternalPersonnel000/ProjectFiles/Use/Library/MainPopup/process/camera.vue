<template>
    <div class="layerRtb layerRtb-threecolumn">
        <three-title :title="{name:'摄像头'}"></three-title>
        <div class="layerRtb-scroll thinScroll" v-scrollHeight="137">
            <div class="analyItem">
                <p class="analyItemTit tx-center">领取</p>
                <div class="analyItemCon cGreen">
                    <div class="col-md-3"><span class="cLightGray pr8">100%完成领取摄像头的任务</span><span>积分+2分</span></div>
                    <div class="col-md-3"><span class="cLightGray pr8">少领取一个</span><span>积分-2分</span></div>
                    <!-- <div class="col-md-3">
                        <span class="cLightGray pr8"></span>
                        <span v-if="bzedit === 0">{{warehouseinfo.orderCompletionRateMonth}}%/月</span>
                        <span v-else-if="bzedit === 1"><input type="number" step="0.01" v-model="warehouseinfo.orderCompletionRateMonth">%/月</span>
                    </div> -->
                    <div class="analyItemCon" v-if="bzedit === 0">
                        <img src="https://gnr.rxjy.com/hrms/static/modules/cur/images/edit_img.png" title="编辑" width="20" class="fl pointer mr5" @click="bzedit=1">
                    </div>
                    <div class="analyItemCon" v-if="bzedit === 1">
                        <img src="https://gnr.rxjy.com/hrms/static/modules/cur/images/save_img.png" title="保存" width="20" class="fl pointer mr5" name="update_le_self" @click="UdateStayLevel()">
                        <img src="https://gnr.rxjy.com/hrms/static/modules/cur/images/goback_img.png" title="返回" width="20" class="fl pointer mr5" @click="bzedit=0">
                    </div>
                </div>
            </div>
            <div class="analyItem">
                <p class="analyItemTit tx-center">安装</p>
                <div class="analyItemCon cGreen">
                    <!-- <p class="col-md-2">
                        <span>优</span>
                    </p>
                    <p class="col-md-4">
                        <span v-if="yedit === 0">实际>={{userLevelStandardDetail.greatMore}}%</span>
                        <span v-else-if="yedit === 1">实际>= <input type="number" step="0.01" v-model="userLevelStandardDetail.greatMore">%</span>
                    </p>
                    <p class="col-md-2">
                        <span v-if="yedit === 0">奖{{userLevelStandardDetail.greatBonus}}元</span>
                        <span v-else-if="yedit === 1">奖<input type="number" step="0.01" v-model="userLevelStandardDetail.greatBonus">元</span>
                    </p>
                    <p class="col-md-2">
                        <span v-if="yedit === 0">积分+{{userLevelStandardDetail.greatIntegral}}分</span>
                        <span v-else-if="yedit === 1">积分+<input type="number" step="0.01" v-model="userLevelStandardDetail.greatIntegral">分</span>
                    </p> -->
                    <div class="col-md-3"><span class="cLightGray pr8">100%安装</span><span>积分+2分</span></div>
                    <div class="col-md-3"><span class="cLightGray pr8">少安装一个</span><span>积分-2分</span></div>
                    <div class="analyItemCon" v-if="yedit === 0">
                        <img src="https://gnr.rxjy.com/hrms/static/modules/cur/images/edit_img.png" title="编辑" width="20" class="fl pointer mr5" @click="yedit=1">
                    </div>
                    <div class="analyItemCon" v-if="yedit === 1">
                        <img src="https://gnr.rxjy.com/hrms/static/modules/cur/images/save_img.png" title="保存" width="20" class="fl pointer mr5" name="update_le_self" @click="UdateStayLevelYJ()">
                        <img src="https://gnr.rxjy.com/hrms/static/modules/cur/images/goback_img.png" title="返回" width="20" class="fl pointer mr5" @click="yedit=0">
                    </div>
                </div>
            </div>
            <div class="analyItem">
                <p class="analyItemTit tx-center">使用时间</p>
                <div class="analyItemCon cLightGreen">
                    <!-- <p class="col-md-2">
                        <span>良</span>
                    </p>
                    <p class="col-md-4">
                        <span v-if="ledit === 0">{{userLevelStandardDetail.goodMore}}%&lt;=实际&lt;{{userLevelStandardDetail.goodLess}}%</span>
                        <span v-else-if="ledit === 1">
                            <input type="number" step="0.01" v-model="userLevelStandardDetail.goodMore">%&lt;=
                            实际
                            &lt;<input type="number" step="0.01" v-model="userLevelStandardDetail.goodLess">%
                        </span>
                    </p>
                    <p class="col-md-2">
                        <span v-if="ledit === 0">奖{{userLevelStandardDetail.goodBonus}}元</span>
                        <span v-else-if="ledit === 1">奖<input type="number" step="0.01" v-model="userLevelStandardDetail.goodBonus">元</span>
                    </p>
                    <p class="col-md-2">
                        <span v-if="ledit === 0">积分+{{userLevelStandardDetail.goodIntegral}}分</span>
                        <span v-else-if="ledit === 1">积分<input type="number" step="0.01" v-model="userLevelStandardDetail.goodIntegral">分</span>
                    </p> -->
                    <div class="col-md-3"><span class="cLightGray pr8">达到8小时以上</span><span>积分+5分</span></div>
                    <div class="col-md-3"><span class="cLightGray pr8">不满6小时</span><span>积分-5分</span></div>
                    <div class="analyItemCon" v-if="ledit === 0">
                        <img src="https://gnr.rxjy.com/hrms/static/modules/cur/images/edit_img.png" title="编辑" width="20" class="fl pointer mr5" @click="ledit=1">
                    </div>
                    <div class="analyItemCon" v-if="ledit === 1">
                        <img src="https://gnr.rxjy.com/hrms/static/modules/cur/images/save_img.png" title="保存" width="20" class="fl pointer mr5" name="update_le_self" @click="UdateStayLevelYJ()">
                        <img src="https://gnr.rxjy.com/hrms/static/modules/cur/images/goback_img.png" title="返回" width="20" class="fl pointer mr5" @click="ledit=0">
                    </div>
                </div>
            </div>
            <div class="analyItem">
                <p class="analyItemTit tx-center">回收</p>
                <div class="analyItemCon cOrange">
                    <!-- <p class="col-md-2">
                        <span>中</span>
                    </p>
                    <p class="col-md-4">
                        <span v-if="zedit === 0">{{userLevelStandardDetail.averageMore}}%&lt;=实际&lt;{{userLevelStandardDetail.averageLess}}%</span>
                        <span v-else-if="zedit === 1">
                            <input type="number" step="0.01" v-model="userLevelStandardDetail.averageMore">%&lt;=
                            实际
                            &lt;<input type="number" step="0.01" v-model="userLevelStandardDetail.averageLess">%
                        </span>
                    </p>
                    <p class="col-md-2">
                        <span v-if="zedit === 0">罚{{userLevelStandardDetail.averageFine}}元</span>
                        <span v-else-if="zedit === 1">罚<input type="number" step="0.01" v-model="userLevelStandardDetail.averageFine">元</span>
                    </p>
                    <p class="col-md-2">
                        <span v-if="zedit === 0">积分{{userLevelStandardDetail.averageIntegral}}分</span>
                        <span v-else-if="zedit === 1">积分<input type="number" step="0.01" v-model="userLevelStandardDetail.averageIntegral">分</span>
                    </p> -->
                    <div class="col-md-3"><span class="cLightGray pr8">全部回收</span><span>积分+3分</span></div>
                    <div class="col-md-3"><span class="cLightGray pr8">少回收一个</span><span>积分-2分</span></div>
                    <div class="analyItemCon" v-if="zedit === 0">
                        <img src="https://gnr.rxjy.com/hrms/static/modules/cur/images/edit_img.png" title="编辑" width="20" class="fl pointer mr5" @click="zedit=1">
                    </div>
                    <div class="analyItemCon" v-if="zedit === 1">
                        <img src="https://gnr.rxjy.com/hrms/static/modules/cur/images/save_img.png" title="保存" width="20" class="fl pointer mr5" name="update_le_self" @click="UdateStayLevelYJ()">
                        <img src="https://gnr.rxjy.com/hrms/static/modules/cur/images/goback_img.png" title="返回" width="20" class="fl pointer mr5" @click="zedit=0">
                    </div>
                </div>
            </div>
            <!-- <div class="analyItem">
                <p class="analyItemTit tx-center">竣工</p>
                <div class="analyItemCon cRed">
                    <p class="col-md-2">
                        <span>差</span>
                    </p>
                    <p class="col-md-4">
                        <span v-if="cedit === 0">{{userLevelStandardDetail.badMore}}%&lt;=实际&lt;{{userLevelStandardDetail.badLess}}%</span>
                        <span v-else-if="cedit === 1">
                            <input type="number" step="0.01" v-model="userLevelStandardDetail.badMore">%&lt;=
                            实际
                            &lt;<input type="number" step="0.01" v-model="userLevelStandardDetail.badLess">%
                        </span>
                    </p>
                    <p class="col-md-2">
                        <span v-if="cedit === 0">罚{{userLevelStandardDetail.badFine}}元</span>
                        <span v-else-if="cedit === 1">罚<input type="number" step="0.01" v-model="userLevelStandardDetail.badFine">元</span>
                    </p>
                    <p class="col-md-2">
                        <span v-if="cedit === 0">积分{{userLevelStandardDetail.badIntegral}}分</span>
                        <span v-else-if="cedit === 1">积分<input type="number" step="0.01" v-model="userLevelStandardDetail.badIntegral">分</span>
                    </p>
                    <div class="analyItemCon" v-if="cedit === 0">
                        <img src="https://gnr.rxjy.com/hrms/static/modules/cur/images/edit_img.png" title="编辑" width="20" class="fl pointer mr5" @click="cedit=1">
                    </div>
                    <div class="analyItemCon" v-if="cedit === 1">
                        <img src="https://gnr.rxjy.com/hrms/static/modules/cur/images/save_img.png" title="保存" width="20" class="fl pointer mr5" name="update_le_self" @click="UdateStayLevelYJ()">
                        <img src="https://gnr.rxjy.com/hrms/static/modules/cur/images/goback_img.png" title="返回" width="20" class="fl pointer mr5" @click="cedit=0">
                    </div>
                </div>
            </div> -->
        </div>
        <div class="layerRtb-footer">
            <div class="analyItem">
                <p class="analyItemTit tx-center">综合</p>
                <div class="analyItemCon">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { getWarehouseResultDetail, upUserLevelStandardDetail, upUserLevelStandard } from '../../Resources/Api/index'
import { mapGetters } from 'vuex'
export default {
    data () {
        return {
            warehouseinfo: [],
            userLevelStandard: [],
            userLevelStandardDetail: [],
            bzedit: 0,
            yedit: 0,
            ledit: 0,
            zedit: 0,
            cedit: 0
        }
    },
    computed: {
        ...mapGetters(['leftInfo', 'userInfo'])
    },
    created () {
        this.warehouseinfo = this.$route.params.datainfo
        this.load()
    },
    methods: {
        load () {
            getWarehouseResultDetail({ abilityLevel: this.leftInfo.grade, abilityType: 22 }).then((result) => {
                if (result.data.Body.warehouseDetail !== null) {
                    this.userLevelStandard = result.data.Body.userLevelStandard
                    this.userLevelStandardDetail = result.data.Body.userLevelStandardDetail
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
        },
        UdateStayLevelYJ () {
            this.$set(this.userLevelStandardDetail, 'abilityLevel', this.leftInfo.grade)
            this.$set(this.userLevelStandardDetail, 'abilityType', 22)
            let params = this.userLevelStandardDetail
            upUserLevelStandardDetail(params).then((result) => {
                if (result.data.StatusCode === 0) {
                    this.$message({
                        type: 'info',
                        message: '修改成功'
                    })
                    this.yedit = 0
                    this.ledit = 0
                    this.zedit = 0
                    this.cedit = 0
                }
            }).catch((err) => {
                console.log(err)
            })
        },
        UdateStayLevel () {
            this.$set(this.warehouseinfo, 'abilityLevel', this.leftInfo.grade)
            let params = this.warehouseinfo
            upUserLevelStandard(params).then((result) => {
                if (result.data.StatusCode === 0) {
                    this.$message({
                        type: 'info',
                        message: '修改成功'
                    })
                    this.bzedit = 0
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
    }
}
</script>
<style scoped>
input {
  width: 50px;
}
</style>

