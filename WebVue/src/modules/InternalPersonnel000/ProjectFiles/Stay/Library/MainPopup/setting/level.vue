<template>
<div class="layerRtb layerRtb-threecolumn">
    <three-title :title="{name:'级别'}"></three-title>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "137">
        <div class="analyItem">
            <p class="analyItemTit tx-center">积分</p>
            <div class="analyItemCon">
                <p class="col-md-10" v-if="jiFen===0">
                    <span class="cLightGray pr8">积分</span>
                    <span>0分</span>
                </p>
                <p class="col-md-10" v-if="jiFen!==0">
                    <span class="cLightGray pr8">积分</span>
                    <span><input type="number" class="width80" v-model="userLevel.integralStandard"></span>
                </p>
                <!-- <img src="https://pa.rxjy.com/abc/static/images/ico/edit_img.png" class="edit_img" v-if="jiFen===0" @click="jiFen=1">
                <img src="https://pa.rxjy.com/abc/static/images/ico/save_img.png" class="save_img " v-if="jiFen!==0" @click="updateUserStandardFn()">
                <img src="https://pa.rxjy.com/abc/static/images/ico/goback_img.png" class="goback_img " v-if="jiFen!==0" @click="jiFen=0"> -->
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">成就</p>
            <div class="analyItemCon">
                <p class="col-md-10" v-if="chengJiu===0">
                    <span class="cLightGray pr8">金额</span>
                    <span>{{userLevel.achieveStandard}}万</span>
                </p>
                 <p class="col-md-10" v-if="chengJiu!==0">
                    <span class="cLightGray pr8">金额</span>
                    <span><input type="number" class="width80" v-model="userLevel.achieveStandard"></span>
                </p>
                <img src="https://pa.rxjy.com/abc/static/images/ico/edit_img.png" class="edit_img" v-if="chengJiu===0" @click="chengJiu=1">
                <img src="https://pa.rxjy.com/abc/static/images/ico/save_img.png" class="save_img " v-if="chengJiu!==0" @click="updateUserStandardFn()">
                <img src="https://pa.rxjy.com/abc/static/images/ico/goback_img.png" class="goback_img " v-if="chengJiu!==0" @click="chengJiu=0">
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
            jiFen: 0,
            chengJiu: 0,
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
                    _this.jiFen = 0
                    _this.chengJiu = 0
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
