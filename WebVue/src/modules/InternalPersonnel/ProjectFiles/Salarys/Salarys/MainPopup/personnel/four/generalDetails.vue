<template>
    <div class="layerRtb layerRtb-threecolumn layerRtb-right">
        <!-- 四段 闫传强 -->
        <three-title :title="{name:'普级编辑'}" :close="false">
            <span tag="i" class="rig_close fr" @click="$parent.$parent.clickFourShow()"></span>
        </three-title>
        <div class="layerRtb-scroll thinScroll" v-scrollHeight="137">
            <div class="analyItem" v-for="(item,index) in allGradeList" :key="index">
                <p class="analyItemTit tx-center">{{item.grade}}</p>
                <div class="analyItemCon" :data-level='item.grade'>
                    <p class="fl mr20"><span class="cLightGray pr8">职务</span>{{item.trainRoleName}}</p>
                    <p class="fl mr20"><span class="cLightGray pr8">职称</span>{{item.professional_title}}</p>
                    <p class="fl mr20"><span class="cLightGray pr8">分值</span>12</p>
                    <p class="fl mr20 cGreen">{{item.grade===gradeByAbilityLevel.grade?'启用':''}}</p>
                    <p style="position: absolute;right: 10px;top: 10px;">
                        <input type="text" vlaue="1" :class="[ item.grade == gradeByAbilityLevel.grade ? ' judge-span judge-yes active' : 'judge-span judge-yes']" :data-level='allGradeList.grade' @click="saveInternelUserLevelByManageFn(item.grade,1)">
                        <input type="text" vlaue="2" class="judge-span judge-no" :data-level='item.grade' @click="saveInternelUserLevelByManageFn(item.grade,2)">
                    </p>
                </div>
            </div>
        </div>
        <div class="layerRtb-footer">
            <div class="analyItem">
                <p class="analyItemTit tx-center">综合</p>
                <div>
                </div>
            </div>

        </div>
    </div>
</template>
<script>
import { fourGeneralLevelDetail, saveInternelUserLevelByManage } from '../../../Resources/Api'
import { mapGetters } from 'vuex'
export default {
    props: ['type'],
    data () {
        return {
            body: {},
            YW_BYCnt: 0,
            YW_BYWDCnt: 0,
            XC_BYCnt: 0,
            XC_BYWDCnt: 0,
            SJ_BYCnt: 0,
            SJ_BYWDCnt: 0,
            group: 0,
            state: 0,
            allGradeList: {},
            gradeByAbilityLevel: {},
            gradeByManageLevel: {}
        }
    },
    computed: {
        ...mapGetters(['leftInfo', 'userInfo'])
    },
    created () {
        this.loadEventDetails()
    },
    methods: {

        loadEventDetails () {
            fourGeneralLevelDetail({
                user_card_no: this.leftInfo.u_kahao
            }).then(result => {
                this.body = result.data.Body
                this.allGradeList = this.body.allGradeList
                this.gradeByAbilityLevel = this.body.gradeByAbilityLevel
                this.gradeByManageLevel = this.body.gradeByManageLevel
            })
        },

        saveInternelUserLevelByManageFn (abilityLevel, yesorno) {
            saveInternelUserLevelByManage({
                abilityLevel: abilityLevel, // 普级
                manageType: 1, // 普级
                gradeOld: this.gradeByAbilityLevel.grade, // 用户调整前能力级别
                oldLevel: this.gradeByAbilityLevel.grade, // 用户调整前能力级别
                userCard: this.leftInfo.cardNo, // 人员卡号
                remark: '用户升降级原因', // 备注
                manualGradeFlag: 1, // 手动调级（0自动、1手动）
                createdBy: this.userInfo.as_cardNo, // 创建者卡号
                modifyBy: this.userInfo.as_cardNo, // 修改者卡号
                yesorno: yesorno,
                manageLevel: this.gradeByManageLevel.grade
            }).then(result => {

            })
        }

    }

}

</script>
