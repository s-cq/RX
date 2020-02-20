<template>
<div class="layerRtb layerRtb-threecolumn">
    <three-title :title="{name:'提成'}"></three-title>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "137">
        <div class="analyItem">
            <p class="analyItemTit tx-center">罚款</p>
            <div class="analyItemCon">
                <p class="col-md-10" v-if="faKuan===0">
                    <span class="cLightGray pr8">比例</span>
                    <span>{{userLevel.fineRatio}}%</span>
                </p>
                <p class="col-md-10" v-if="faKuan!==0">
                    <span class="cLightGray pr8">比例</span>
                    <span><input type="number" class="width80" v-model="userLevel.fineRatio"></span>
                </p>
                <img src="https://pa.rxjy.com/abc/static/images/ico/edit_img.png" class="edit_img" v-if="faKuan===0" @click="faKuan=1">
                <img src="https://pa.rxjy.com/abc/static/images/ico/save_img.png" class="save_img " v-if="faKuan!==0" @click="updateUserStandardFn()">
                <img src="https://pa.rxjy.com/abc/static/images/ico/goback_img.png" class="goback_img " v-if="faKuan!==0" @click="faKuan=0">
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">洽商</p>
            <div class="analyItemCon">
                <p class="col-md-10" v-if="qiShang===0">
                    <span class="cLightGray pr8">比例</span>
                    <span>{{userLevel.incrementRatio}}%</span>
                </p>
                <p class="col-md-10" v-if="qiShang!==0">
                    <span class="cLightGray pr8">比例</span>
                    <span><input type="number" class="width80" v-model="userLevel.incrementRatio"></span>
                </p>
                <img src="https://pa.rxjy.com/abc/static/images/ico/edit_img.png" class="edit_img" v-if="qiShang===0" @click="qiShang=1">
                <img src="https://pa.rxjy.com/abc/static/images/ico/save_img.png" class="save_img " v-if="qiShang!==0" @click="updateUserStandardFn()">
                <img src="https://pa.rxjy.com/abc/static/images/ico/goback_img.png" class="goback_img " v-if="qiShang!==0" @click="qiShang=0">
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">竣工</p>
            <div class="analyItemCon">
                <p class="col-md-10" v-if="junGong===0">
                    <span class="cLightGray pr8">比例</span>
                    <span>{{userLevel.completeRatio}}%</span>
                </p>
                <p class="col-md-10" v-if="junGong!==0">
                    <span class="cLightGray pr8">比例</span>
                    <span><input type="number" class="width80" v-model="userLevel.completeRatio"></span>
                </p>
                <img src="https://pa.rxjy.com/abc/static/images/ico/edit_img.png" class="edit_img" v-if="junGong===0" @click="junGong=1">
                <img src="https://pa.rxjy.com/abc/static/images/ico/save_img.png" class="save_img " @click="updateUserStandardFn()" v-if="junGong!==0">
                <img src="https://pa.rxjy.com/abc/static/images/ico/goback_img.png" class="goback_img " v-if="junGong!==0" @click="junGong=0">
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
            faKuan: 0,
            qiShang: 0,
            junGong: 0,
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
                fineRatio: this.userLevel.fineRatio,
                incrementRatio: this.userLevel.incrementRatio,
                completeRatio: this.userLevel.completeRatio
            }).then(results => {
                layer.close(ind)
                if (results.data.StatusCode === 0) {
                    _this.GetUserLevelStandardByAbilityLevelFn()
                    _this.faKuan = 0
                    _this.qiShang = 0
                    _this.junGong = 0
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
