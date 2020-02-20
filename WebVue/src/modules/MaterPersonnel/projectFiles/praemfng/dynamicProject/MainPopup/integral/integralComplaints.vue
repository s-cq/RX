<template>
    <div class="layerRtb layerRtb-threecolumn">
        <three-title :title="{name:'投诉'}"></three-title>
        <div class="layerRtb-scroll thinScroll" v-scrollHeight="437">
                <div class="analyItem">
                    <p class="analyItemTit tx-center">轻度 {{complaints[0]?complaints[0].integralName:''}}</p>
                    <div class="analyItemCon">
                        <p class="col-md-4" v-if="qdedit == 0">
                            <span class="cLightGray pr8">次数 </span>
                            <span >{{complaints[0]?complaints[0].deductNum:0}}</span>
                        </p>
                        <p class="col-md-4" v-if="qdedit == 0">
                            <span class="cLightGray pr8">积分</span>
                            <span>{{complaints[0]?complaints[0].deductFraction:0}}分</span>
                        </p>
                        <p class="col-md-4" v-if="qdedit == 1">
                            <span class="cLightGray pr8">次数</span>
                            <span><input type="text" v-model="integralnum"></span>
                        </p>
                        <p class="col-md-4" v-if="qdedit == 1">
                            <span class="cLightGray pr8">积分</span>
                            <span><input type="text" v-model="integralScope"></span>
                        </p>
                        <div   class="mensbvrh" style=" position: absolute; top: 14px;right: 34px;" v-if="qdedit == 0">
                        <img src="https://gnr.rxjy.com/hrms/static/modules/cur/images/edit_img.png" title="编辑" width="20" class="fl pointer mr5" @click="qdedit = 1">
                    </div>
                    <div style=" position: absolute; top: 14px;right: 34px;"    v-if="qdedit == 1">
                        <img src="https://gnr.rxjy.com/hrms/static/modules/cur/images/save_img.png" title="保存" width="20" class="fl pointer mr5" name="update_le_self" @click="SaveIntegral()">
                        <img src="https://gnr.rxjy.com/hrms/static/modules/cur/images/goback_img.png" title="返回" width="20" class="fl pointer mr5" @click="qdedit = 0">
                    </div>
                    </div>
                </div>
                    <div class="analyItem">
                    <p class="analyItemTit tx-center">中度{{complaints[1]?complaints[1].integralName:''}}</p>
                    <div class="analyItemCon">
                        <p class="col-md-4" v-if="cedit == 0">
                            <span class="cLightGray pr8">次数</span>
                            <span >{{complaints[1]?complaints[1].deductNum:0}}</span>
                        </p>
                        <p class="col-md-4" v-if="cedit == 0">
                            <span class="cLightGray pr8">积分</span>
                            <span>{{complaints[1]?complaints[1].deductFraction:0}}分</span>
                        </p>
                        <p class="col-md-4" v-if="cedit == 1">
                            <span class="cLightGray pr8">次数</span>
                            <span><input type="text" v-model="integralnum1"></span>
                        </p>
                        <p class="col-md-4" v-if="cedit == 1">
                            <span class="cLightGray pr8">积分</span>
                            <span><input type="text" v-model="integralScope1"></span>
                        </p>
                        <div   class="mensbvrh" style=" position: absolute; top: 14px;right: 34px;" v-if="cedit == 0">
                        <img src="https://gnr.rxjy.com/hrms/static/modules/cur/images/edit_img.png" title="编辑" width="20" class="fl pointer mr5" @click="cedit = 1">
                    </div>
                    <div style=" position: absolute; top: 14px;right: 34px;"    v-if="cedit == 1">
                        <img src="https://gnr.rxjy.com/hrms/static/modules/cur/images/save_img.png" title="保存" width="20" class="fl pointer mr5" name="update_le_self" @click="SaveIntegral1()">
                        <img src="https://gnr.rxjy.com/hrms/static/modules/cur/images/goback_img.png" title="返回" width="20" class="fl pointer mr5" @click="cedit = 0">
                    </div>
                    </div>
                </div>
                    <div class="analyItem">
                    <p class="analyItemTit tx-center">重度{{complaints[2]?complaints[2].integralName:''}}</p>
                    <div class="analyItemCon">
                        <p class="col-md-4" v-if="hedit == 0">
                            <span class="cLightGray pr8">次数</span>
                            <span >{{complaints[2]?complaints[2].deductNum:0}}</span>
                        </p>
                        <p class="col-md-4" v-if="hedit == 0">
                            <span class="cLightGray pr8">积分</span>
                            <span>{{complaints[2]?complaints[2].deductFraction:0}}分</span>
                        </p>
                        <p class="col-md-4" v-if="hedit == 1">
                            <span class="cLightGray pr8">次数</span>
                            <span><input type="text" v-model="integralnum2"></span>
                        </p>
                        <p class="col-md-4" v-if="hedit == 1">
                            <span class="cLightGray pr8">积分</span>
                            <span><input type="text" v-model="integralScope2"></span>
                        </p>
                        <div   class="mensbvrh" style=" position: absolute; top: 14px;right: 34px;" v-if="hedit == 0">
                        <img src="https://gnr.rxjy.com/hrms/static/modules/cur/images/edit_img.png" title="编辑" width="20" class="fl pointer mr5" @click="hedit = 1">
                    </div>
                    <div style=" position: absolute; top: 14px;right: 34px;"    v-if="hedit == 1">
                        <img src="https://gnr.rxjy.com/hrms/static/modules/cur/images/save_img.png" title="保存" width="20" class="fl pointer mr5" name="update_le_self" @click="SaveIntegral2()">
                        <img src="https://gnr.rxjy.com/hrms/static/modules/cur/images/goback_img.png" title="返回" width="20" class="fl pointer mr5" @click="hedit = 0">
                    </div>
                    </div>
                </div>
        </div>
        <div class="layerRtb-footer">
            <div class="analyItem">
                <p class="analyItemTit tx-center">综合</p>
                <div class="analyItemCon">
                                <div class="tx-center">
        </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
import { getIntegralInfo, saveIntegralInfo } from '../../Resources/Api'
export default {
    data () {
        return {
            qdedit: 0,
            cedit: 0,
            hedit: 0,
            integralnum: 0,
            integralScope: 0,
            integralnum1: 0,
            integralScope1: 0,
            integralnum2: 0,
            integralScope2: 0,
            complaints: [],
            getcomplaints: []
        }
    },
    computed: {
        ...mapGetters(['leftInfo'])
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
            _this.complaints1 = []

            getIntegralInfo({
                leveId: this.leftInfo.leLevel,
                integralType: 3
            }).then(results => {
                this.complaints1 = results.data.Body
                if (this.complaints1.length === 1) {
                    _this.getcomplaints = [{}, {}, {}]
                    if (this.complaints1[0].complaintsLevel === 2) {
                        _this.getcomplaints[1] = this.complaints1[0]
                    } else if (this.complaints1[0].complaintsLevel === 3) {
                        _this.getcomplaints[2] = this.complaints1[0]
                    }
                    this.complaints = _this.getcomplaints
                } else if (this.complaints1.length === 2) {
                    _this.getcomplaints = [{}, {}, {}]
                    if (this.complaints1[0].complaintsLevel === 1 && this.complaints1[1].complaintsLevel === 3) {
                        _this.getcomplaints[0] = this.complaints1[0]
                        _this.getcomplaints[2] = this.complaints1[1]
                        this.complaints = _this.getcomplaints
                    } else if (this.complaints1[0].complaintsLevel === 2 && this.complaints1[1].complaintsLevel === 3) {
                        _this.getcomplaints[1] = this.complaints1[0]
                        _this.getcomplaints[2] = this.complaints1[1]
                        this.complaints = _this.getcomplaints
                    } else {
                        this.complaints = _this.complaints1
                    }
                } else {
                    this.complaints = this.complaints1
                }
            })
        },
        SaveIntegral () {
            saveIntegralInfo({
                id: this.id,
                leveId: this.leftInfo.leLevel,
                deductNum: this.integralnum,
                deductFraction: this.integralScope,
                complaintsLevel: 1,
                integralType: 3,
                integralName: '投诉轻度'
            }).then(result => {
                this.qdedit = 0
                this.complaints[0].deductNum = this.integralnum
                this.complaints[0].deductFraction = this.integralScope
                this.GetIntegral()
            })
        },
        SaveIntegral1 () {
            saveIntegralInfo({
                id: this.id,
                leveId: this.leftInfo.leLevel,
                deductNum: this.integralnum1,
                deductFraction: this.integralScope1,
                complaintsLevel: 2,
                integralType: 3,
                integralName: '投诉中度'
            }).then(result => {
                this.cedit = 0
                this.complaints[1].deductNum = this.integralnum1
                this.complaints[1].deductFraction = this.integralScope1
                this.GetIntegral()
            })
        },
        SaveIntegral2 () {
            saveIntegralInfo({
                id: this.id,
                leveId: this.leftInfo.leLevel,
                deductNum: this.integralnum1,
                deductFraction: this.integralScope1,
                complaintsLevel: 3,
                integralType: 3,
                integralName: '投诉重度'
            }).then(result => {
                this.hedit = 0
                this.complaints[2].deductNum = this.integralnum2
                this.complaints[2].deductFraction = this.integralScope2
                this.GetIntegral()
            })
        }
    },
    watch: {
        leftInfo () {
            this.GetIntegral()
        }
    }
}
</script>

<style>
    .mensbvrh{
        position: absolute;
    }
</style>
