<template>
    <div class="layerRtb layerRtb-threecolumn">
        <three-title :title="{name:'竣工'}"></three-title>
        <div class="layerRtb-scroll thinScroll" v-scrollHeight="137">
            <div class="analyItem">
                <p class="analyItemTit tx-center">标准</p>
                <div class="analyItemCon">
                    <div class="col-md-2"><span class="cLightGray pr8"></span><span>{{warehouseinfo.abilityLevel}}级</span></div>
                    <div class="col-md-4">
                        <span class="cLightGray pr8">标准</span>
                        <span v-if="bzedit === 0">{{userLevelStandardDetail.greatMore}}万/月</span>
                        <span v-else-if="bzedit === 1"><input type="number" step="0.01" v-model="userLevelStandardDetail.greatMore">万/月</span>
                    </div>
                    <div class="col-md-4">
                        <span class="cLightGray pr8"> 权重比：</span>
                        <span v-if="bzedit === 0">{{userLevelStandardDetail.cheatFine}}</span>
                        <span v-else-if="bzedit === 1"><input type="number" step="0.01" v-model="userLevelStandardDetail.cheatFine"></span>
                    </div>
                    <div class="analyItemCon" v-if="bzedit === 0">
                        <img src="https://gnr.rxjy.com/hrms/static/modules/cur/images/edit_img.png" title="编辑" width="20" class="fl pointer mr5" @click="bzedit=1">
                    </div>
                    <div class="analyItemCon" v-if="bzedit === 1">
                        <img src="https://gnr.rxjy.com/hrms/static/modules/cur/images/save_img.png" title="保存" width="20" class="fl pointer mr5" name="update_le_self" @click="UdateStayLevelYJ()">
                        <img src="https://gnr.rxjy.com/hrms/static/modules/cur/images/goback_img.png" title="返回" width="20" class="fl pointer mr5" @click="bzedit=0">
                    </div>
                </div>
            </div>
            <div class="analyItem">
                <p class="analyItemTit tx-center">竣工</p>
                <div class="analyItemCon cGreen">
                    <p class="col-md-2">
                        <span>优</span>
                    </p>
                    <p class="col-md-4">
                        <span v-if="yedit === 0">实际>={{userLevelStandardDetail.greatMore}}万</span>
                        <span v-else-if="yedit === 1">实际>= <input type="number" step="0.01" v-model="userLevelStandardDetail.greatMore">万</span>
                    </p>
                    <p class="col-md-4">
                        <span v-if="yedit === 0">奖{{userLevelStandardDetail.greatBonus}}元</span>
                        <span v-else-if="yedit === 1">奖<input type="number" step="0.01" v-model="userLevelStandardDetail.greatBonus">元</span>
                    </p>
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
                <p class="analyItemTit tx-center">竣工</p>
                <div class="analyItemCon cLightGreen">
                    <p class="col-md-2">
                        <span>良</span>
                    </p>
                    <p class="col-md-4">
                        <span v-if="ledit === 0">{{userLevelStandardDetail.goodMore}}万&lt;=实际&lt;{{userLevelStandardDetail.greatMore}}万</span>
                        <span v-else-if="ledit === 1">
                            <input type="number" step="0.01" v-model="userLevelStandardDetail.goodMore">万&lt;=
                            实际
                            &lt;<input type="number" step="0.01" v-model="userLevelStandardDetail.greatMore">万
                        </span>
                    </p>
                    <p class="col-md-4">
                        <span v-if="ledit === 0">奖{{userLevelStandardDetail.goodBonus}}元</span>
                        <span v-else-if="ledit === 1">奖<input type="number" step="0.01" v-model="userLevelStandardDetail.goodBonus">元</span>
                    </p>
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
                <p class="analyItemTit tx-center">竣工</p>
                <div class="analyItemCon cOrange">
                    <p class="col-md-2">
                        <span>中</span>
                    </p>
                    <p class="col-md-4">
                        <span v-if="zedit === 0">{{userLevelStandardDetail.averageMore}}万&lt;=实际&lt;{{userLevelStandardDetail.goodMore}}万</span>
                        <span v-else-if="zedit === 1">
                            <input type="number" step="0.01" v-model="userLevelStandardDetail.averageMore">万&lt;=
                            实际
                            &lt;<input type="number" step="0.01" v-model="userLevelStandardDetail.goodMore">万
                        </span>
                    </p>
                    <p class="col-md-4">
                        <span v-if="zedit === 0">罚{{userLevelStandardDetail.averageFine}}元</span>
                        <span v-else-if="zedit === 1">罚<input type="number" step="0.01" v-model="userLevelStandardDetail.averageFine">元</span>
                    </p>
                    <div class="analyItemCon" v-if="zedit === 0">
                        <img src="https://gnr.rxjy.com/hrms/static/modules/cur/images/edit_img.png" title="编辑" width="20" class="fl pointer mr5" @click="zedit=1">
                    </div>
                    <div class="analyItemCon" v-if="zedit === 1">
                        <img src="https://gnr.rxjy.com/hrms/static/modules/cur/images/save_img.png" title="保存" width="20" class="fl pointer mr5" name="update_le_self" @click="UdateStayLevelYJ()">
                        <img src="https://gnr.rxjy.com/hrms/static/modules/cur/images/goback_img.png" title="返回" width="20" class="fl pointer mr5" @click="zedit=0">
                    </div>
                </div>
            </div>
            <div class="analyItem">
                <p class="analyItemTit tx-center">竣工</p>
                <div class="analyItemCon cRed">
                    <p class="col-md-2">
                        <span>差</span>
                    </p>
                    <p class="col-md-4">
                        <span v-if="cedit === 0">{{userLevelStandardDetail.badMore}}万&lt;=实际&lt;{{userLevelStandardDetail.averageMore}}万</span>
                        <span v-else-if="cedit === 1">
                            <input type="number" step="0.01" v-model="userLevelStandardDetail.badMore">万&lt;=
                            实际
                            &lt;<input type="number" step="0.01" v-model="userLevelStandardDetail.averageMore">万
                        </span>
                    </p>
                    <p class="col-md-4">
                        <span v-if="cedit === 0">罚{{userLevelStandardDetail.badFine}}元</span>
                        <span v-else-if="cedit === 1">罚<input type="number" step="0.01" v-model="userLevelStandardDetail.badFine">元</span>
                    </p>
                    <div class="analyItemCon" v-if="cedit === 0">
                        <img src="https://gnr.rxjy.com/hrms/static/modules/cur/images/edit_img.png" title="编辑" width="20" class="fl pointer mr5" @click="cedit=1">
                    </div>
                    <div class="analyItemCon" v-if="cedit === 1">
                        <img src="https://gnr.rxjy.com/hrms/static/modules/cur/images/save_img.png" title="保存" width="20" class="fl pointer mr5" name="update_le_self" @click="UdateStayLevelYJ()">
                        <img src="https://gnr.rxjy.com/hrms/static/modules/cur/images/goback_img.png" title="返回" width="20" class="fl pointer mr5" @click="cedit=0">
                    </div>
                </div>
            </div>
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
// , upUserLevelStandard
import { getWarehouseResultDetail, upUserLevelStandardDetail } from '../../Resources/Api/index'
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
        this.warehouseinfo = this.$route.params.userLevelStandardDetail
        this.load()
    },
    methods: {
        load () {
            // 竣工
            getWarehouseResultDetail({ abilityLevel: this.leftInfo.grade, abilityType: 5 }).then((result) => {
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
            this.$set(this.userLevelStandardDetail, 'abilityType', 5)
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
            getWarehouseResultDetail({ abilityLevel: this.leftInfo.grade, abilityType: 5, greatMore: this.greatMore }).then((result) => {
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
    // UdateStayLevel () {
    //     this.$set(this.warehouseinfo, 'abilityLevel', this.leftInfo.grade)
    //     let params = this.warehouseinfo
    //     upUserLevelStandard(params).then((result) => {
    //         if (result.data.StatusCode === 0) {
    //             this.$message({
    //                 type: 'info',
    //                 message: '修改成功'
    //             })
    //             this.bzedit = 0
    //         }
    //     }).catch((err) => {
    //         console.log(err)
    //     })
    // }
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
