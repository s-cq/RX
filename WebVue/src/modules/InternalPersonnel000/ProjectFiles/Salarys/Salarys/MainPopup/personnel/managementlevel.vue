<template>
    <div class="layerRtb layerRtb-threecolumn">
        <three-title :title="{name:'管级'}"></three-title>
        <div class="layerRtb-scroll thinScroll" v-scrollHeight="137">
            <div class="analyItem">
                <p class="analyItemTit tx-center">当前</p>
                <div class="analyItemCon">
                    <!-- <div>
                        <a href="javascript:" class="setLink" style="float:right">
                            <img src="../../Resources/img/1573872938.png" :class="[ fourIndex === 0 ? 'anItemBor-active' : '']" @click="manageDetails(0)" />
                        </a>
                    </div> -->
                    <p class="fl col-md-4"><span class="cLightGray pr8">级别</span><span>{{gradeByManageLevel.grade==null?0:gradeByManageLevel.grade}}</span></p>
                    <p class="fl col-md-4"><span class="cLightGray pr8">职务</span><span>{{gradeByManageLevel.trainRoleName}}</span></p>
                    <p class="fl col-md-3"><span class="cLightGray pr8">职称</span><span>{{gradeByManageLevel.professional_title}}</span></p>
                </div>
            </div>
            <div class="analyItem" v-for="(item,index) in body" :key="index">
                <p class="analyItemTit tx-center"></p>
                <div class="analyItemCon">
                    <p class="col-md-4">
                        <p class="col-md-4">
                            <span class="cLightGray pr8">时间</span><span>
                                {{item.createTime}}</span>
                        </p>
                        <p class="col-md-4">
                            <span class="cLightGray pr8">原级</span><span>{{item.oldLevel==null?0:item.oldLevel}}级</span>
                        </p>
                        <p class="col-md-4">
                            <span class="cLightGray pr8">现级</span><span>{{item.manageLevel==null?0:item.manageLevel}}级</span>
                        </p>
                        <p class="col-md-4">
                            <span class="cLightGray pr8">状态</span><span class="cGreen">通过</span>
                        </p>
                        <p class="col-md-4">
                            <span class="cLightGray pr8">答题</span><span>-</span>
                        </p>
                        <p class="col-md-4">
                            <span class="cLightGray pr8">分数</span><span>-</span>
                        </p>
                        <p class="col-md-12">
                            <span class="cLightGray pr8">原因</span><span>【{{item.manualGradeFlag == 1 ? '手调' : '自动'}}】</span><span>{{item.remark}}</span>
                        </p>

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
        <transition-group class="animated faster" enter-active-class="animated faster slideInRight" leave-active-class="animated faster slideOutRight">
            <management-Detail v-if="fourIndex === currentIndex" :key='currentIndex'></management-Detail>
        </transition-group>
    </div>
</template>
<script>
import { getAllInternalUserLevelByUserCard } from '../../Resources/Api'
import { mapGetters } from 'vuex'
import managementDetail from './four/managementDetails'
export default {
    components: {
        managementDetail
    },
    data () {
        return {
            isGroup: 0,
            gradeByManageLevel: {},
            body: {},
            fourIndex: undefined,
            currentIndex: 0
        }
    },
    computed: {
        ...mapGetters(['leftInfo', 'userInfo'])
    },
    created () {
        this.isGroup = this.$route.params.isGroup
        this.gradeByManageLevel = this.$route.params.gradeByManageLevel
        this.load()
    },
    methods: {
        load () {
            if (Number(this.leftInfo.MONTH) < 10) {
                this.pointTime = this.leftInfo.YEAR + '-0' + this.leftInfo.MONTH + '-01'
            } else {
                this.pointTime = this.leftInfo.YEAR + '-' + this.leftInfo.MONTH + '-01'
            }
            getAllInternalUserLevelByUserCard({ user_card_no: this.leftInfo.u_kahao, login_card_no: this.userInfo.as_cardNo, manageType: 2, pointTime: this.pointTime })
                .then(result => {
                    if (result.data.Body !== null) {
                        this.body = result.data.Body
                    }
                })
                .catch(err => {
                    console.log(err)
                })
        },
        // 点击四段
        manageDetails (index) {
            this.fourIndex = index
            this.currentIndex = index
        }
    }

}

</script>
