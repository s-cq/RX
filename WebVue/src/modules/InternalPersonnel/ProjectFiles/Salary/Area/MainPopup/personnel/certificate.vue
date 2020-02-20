<template>
    <div class="layerRtb layerRtb-threecolumn">
        <three-title :title="{name:'证用'}"></three-title>
        <div class="layerRtb-scroll thinScroll" v-scrollHeight="137">
            <div class="analyItem" v-for="(item,index) in body" :key="index">

                <p class="analyItemTit tx-center">证件</p>
                <div class="analyItemCon">
                    <p class="fl col-md-4"><span class="cLightGray pr8 wid70-ri">证件类型</span><span class="BankName">{{item.certificate_name}}</span></p>
                    <p class="fl col-md-4"><span class="cLightGray pr8 wid70-ri">证件照片</span><span class="BankCard passimg _showImg"><img :src="item.userImgUrl" style="position: relative; z-index: 1; width: 50px; height: 50px;"></span></p>
                    <p class="fl col-md-4"><span class="cLightGray pr8 wid70-ri">到期日期</span><span class="UrgentContact">{{item.expiry_time}}</span></p>
                </div>
            </div>
        </div>
        <div class="layerRtb-footer">
            <div class="analyItem">
                <p class="analyItemTit tx-center">综合</p>
                <div class="analyItemCon">
                    <!-- <p class="fl col-md-9"></p>
                    <p class="fr col-md-3">
                        <span class="cLightGray">统计</span>
                        <span class="cGreen fz14 bold">0分</span>
                    </p>
                    <p class="fl"><span class="circlemark circlemark-green">优</span></p> -->
                </div>
            </div>
            <!-- <div class="tx-center">
                <input type="button" class="uiBtn-normal uiBtn-blue" value="确定">
            </div> -->
        </div>
    </div>
</template>
<script>
import { getUseUseThreeEndProofDetail } from '../../Resources/Api'
import { mapGetters } from 'vuex'
export default {
    data () {
        return {
            isGroup: 0,
            gradeByAbilityLevel: {},
            body: {}
        }
    },
    computed: {
        ...mapGetters(['leftInfo', 'userInfo'])
    },
    created () {
        this.isGroup = this.$route.params.isGroup
        this.gradeByAbilityLevel = this.$route.params.gradeByAbilityLevel
        this.load()
    },
    methods: {
        load () {
            if (Number(this.leftInfo.MONTH) < 10) {
                this.pointTime = this.leftInfo.YEAR + '-0' + this.leftInfo.MONTH + '-01'
            } else {
                this.pointTime = this.leftInfo.YEAR + '-' + this.leftInfo.MONTH + '-01'
            }
            getUseUseThreeEndProofDetail({ user_card_no: this.leftInfo.u_kahao, login_card_no: this.userInfo.as_cardNo, manageType: 1, pointTime: this.pointTime })
                .then(result => {
                    if (result.data.Body !== null) {
                        this.body = result.data.Body
                    }
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }

}

</script>
