<template>
<div class="layerRtb layerRtb-threecolumn">
    <three-title :title="{name:'奖金'}"></three-title>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "137">
        <div class="analyItem">
            <p class="analyItemTit tx-center">接单</p>
            <div class="analyItemCon">
                <p class="col-md-10" v-if="jieDan===0">
                    <span class="cLightGray pr8">金额</span>
                    <span>{{userLevel.inspectionBonus}}元/次</span>
                </p>
                <p class="col-md-10" v-if="jieDan!==0">
                    <span class="cLightGray pr8">金额</span>
                    <span><input type="number" class="width80" v-model="userLevel.inspectionBonus"></span>
                </p>
                <img src="https://pa.rxjy.com/abc/static/images/ico/edit_img.png" class="edit_img" v-if="jieDan===0" @click="jieDan=1">
                <img src="https://pa.rxjy.com/abc/static/images/ico/save_img.png" class="save_img " v-if="jieDan!==0" @click="updateUserStandardFn()">
                <img src="https://pa.rxjy.com/abc/static/images/ico/goback_img.png" class="goback_img " v-if="jieDan!==0" @click="jieDan=0">
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">准备</p>
            <div class="analyItemCon">
                <p class="col-md-10" v-if="zhunBei===0">
                    <span class="cLightGray pr8">金额</span>
                    <span>{{userLevel.prepareBonus}}元/次</span>
                </p>
                 <p class="col-md-10" v-if="zhunBei!==0">
                    <span class="cLightGray pr8">金额</span>
                    <span><input type="number" class="width80" v-model="userLevel.prepareBonus"></span>
                </p>
                <img src="https://pa.rxjy.com/abc/static/images/ico/edit_img.png" class="edit_img" v-if="zhunBei===0" @click="zhunBei=1">
                <img src="https://pa.rxjy.com/abc/static/images/ico/save_img.png" class="save_img " v-if="zhunBei!==0" @click="updateUserStandardFn()">
                <img src="https://pa.rxjy.com/abc/static/images/ico/goback_img.png" class="goback_img " v-if="zhunBei!==0" @click="zhunBei=0">
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">竣检</p>
            <div class="analyItemCon">
                <p class="col-md-10" v-if="junJian===0">
                    <span class="cLightGray pr8">金额</span>
                    <span>{{userLevel.completeBonus}}元/次</span>
                </p>
                 <p class="col-md-10" v-if="junJian!==0">
                    <span class="cLightGray pr8">金额</span>
                    <span><input type="number" class="width80" v-model="userLevel.completeBonus"></span>
                </p>
                <img src="https://pa.rxjy.com/abc/static/images/ico/edit_img.png" class="edit_img" v-if="junJian===0" @click="junJian=1">
                <img src="https://pa.rxjy.com/abc/static/images/ico/save_img.png" class="save_img " v-if="junJian!==0" @click="updateUserStandardFn()">
                <img src="https://pa.rxjy.com/abc/static/images/ico/goback_img.png" class="goback_img " v-if="junJian!==0" @click="junJian=0">
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
import {
    mapGetters
} from 'vuex'
import {
    GetUserLevelStandardByAbilityLevel,
    updateUserStandard
} from '../../Resources/Api'
export default {
    data () {
        return {
            jieDan: 0,
            zhunBei: 0,
            junJian: 0,
            userLevel: {}
        }
    },
    created () {
        this.GetUserLevelStandardByAbilityLevelFn()
    },
    methods: {
        // 查询登记对应的分项设置信息
        GetUserLevelStandardByAbilityLevelFn () {
            let _this = this
            _this.userLevel = {}
            GetUserLevelStandardByAbilityLevel({
                level: _this.leftInfo.grade
            }).then(results => {
                _this.userLevel = results.data.Body
            }).catch(error => {
                console.log(error)
            })
        },
        // 更新指定级别设置标准信息
        updateUserStandardFn () {
            let _this = this
            let ind = layer.load()
            updateUserStandard({
                level: _this.leftInfo.grade,
                inspectionBonus: this.userLevel.inspectionBonus,
                prepareBonus: this.userLevel.prepareBonus,
                completeBonus: this.userLevel.completeBonus
            }).then(results => {
                layer.close(ind)
                if (results.data.StatusCode === 0) {
                    _this.GetUserLevelStandardByAbilityLevelFn()
                    _this.jieDan = 0
                    _this.zhunBei = 0
                    _this.junJian = 0
                } else {
                    layer.msg('更新发生错误！', {icon: 5})
                }
            }).catch(error => {
                layer.msg('提交失败！' + error, {icon: 5})
            })
        }
    },
    computed: {
        ...mapGetters(['leftInfo'])
    }
}
</script>
