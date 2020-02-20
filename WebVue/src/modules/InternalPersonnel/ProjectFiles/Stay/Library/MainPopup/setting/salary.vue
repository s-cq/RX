<template>
<div class="layerRtb layerRtb-threecolumn">
    <three-title :title="{name:'薪酬'}"></three-title>
    <div class="layerRtb-scroll thinScroll" v-scrollHeight = "137">
        <div class="analyItem">
            <p class="analyItemTit tx-center">底薪</p>
            <div class="analyItemCon">
                <p class="col-md-10" v-if="diXin===0">
                    <span class="cLightGray pr8">金额</span>
                    <span>{{userLevel.baseSalary}}元</span>
                </p>
                <p class="col-md-10" v-if="diXin!==0">
                    <span class="cLightGray pr8">金额</span>
                    <span><input type="number" class="width80" v-model="userLevel.baseSalary"></span>
                </p>
                <img src="https://pa.rxjy.com/abc/static/images/ico/edit_img.png" class="edit_img" v-if="diXin===0" @click="diXin=1">
                <img src="https://pa.rxjy.com/abc/static/images/ico/save_img.png" class="save_img " v-if="diXin!==0" @click="updateUserStandardFn()">
                <img src="https://pa.rxjy.com/abc/static/images/ico/goback_img.png" class="goback_img " v-if="diXin!==0" @click="diXin=0">
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">公积金</p>
            <div class="analyItemCon">
                <p class="col-md-10" v-if="gongJiJin===0">
                    <span class="cLightGray pr8">金额</span>
                    <span>{{userLevel.housingFund}}元</span>
                </p>
                 <p class="col-md-10" v-if="gongJiJin!==0">
                    <span class="cLightGray pr8">金额</span>
                    <span><input type="number" class="width80" v-model="userLevel.housingFund"></span>
                </p>
                <img src="https://pa.rxjy.com/abc/static/images/ico/edit_img.png" class="edit_img" v-if="gongJiJin===0" @click="gongJiJin=1">
                <img src="https://pa.rxjy.com/abc/static/images/ico/save_img.png" class="save_img " v-if="gongJiJin!==0" @click="updateUserStandardFn()">
                <img src="https://pa.rxjy.com/abc/static/images/ico/goback_img.png" class="goback_img " v-if="gongJiJin!==0" @click="gongJiJin=0">
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">社保</p>
            <div class="analyItemCon">
                <p class="col-md-10" v-if="sheBao===0">
                    <span class="cLightGray pr8">金额</span>
                    <span>{{userLevel.socialSecurity}}元</span>
                </p>
                 <p class="col-md-10" v-if="sheBao!==0">
                    <span class="cLightGray pr8">金额</span>
                    <span><input type="number" class="width80" v-model="userLevel.socialSecurity"></span>
                </p>
                <img src="https://pa.rxjy.com/abc/static/images/ico/edit_img.png" class="edit_img" v-if="sheBao===0" @click="sheBao=1">
                <img src="https://pa.rxjy.com/abc/static/images/ico/save_img.png" class="save_img " v-if="sheBao!==0" @click="updateUserStandardFn()">
                <img src="https://pa.rxjy.com/abc/static/images/ico/goback_img.png" class="goback_img " v-if="sheBao!==0" @click="sheBao=0">
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">个税</p>
            <div class="analyItemCon">
                <p class="col-md-10" v-if="geShui===0">
                    <span class="cLightGray pr8">金额</span>
                    <span>{{userLevel.incomeTax}}元</span>
                </p>
                 <p class="col-md-10" v-if="geShui!==0">
                    <span class="cLightGray pr8">金额</span>
                    <span><input type="number" class="width80" v-model="userLevel.incomeTax"></span>
                </p>
                <img src="https://pa.rxjy.com/abc/static/images/ico/edit_img.png" class="edit_img" v-if="geShui===0" @click="geShui=1">
                <img src="https://pa.rxjy.com/abc/static/images/ico/save_img.png" class="save_img " v-if="geShui!==0" @click="updateUserStandardFn()">
                <img src="https://pa.rxjy.com/abc/static/images/ico/goback_img.png" class="goback_img " v-if="geShui!==0" @click="geShui=0">
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
            diXin: 0,
            gongJiJin: 0,
            sheBao: 0,
            geShui: 0,
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
                baseSalary: this.userLevel.baseSalary,
                housingFund: this.userLevel.housingFund,
                socialSecurity: this.userLevel.socialSecurity,
                incomeTax: this.userLevel.incomeTax
            }).then(results => {
                layer.close(ind)
                if (results.data.StatusCode === 0) {
                    _this.GetUserLevelStandardByAbilityLevelFn()
                    _this.diXin = 0
                    _this.gongJiJin = 0
                    _this.sheBao = 0
                    _this.geShui = 0
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
