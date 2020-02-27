<template>
    <div class="layerRtb layerRtb-threecolumn">
        <three-title :title="{name:'普级'}"></three-title>
        <div class="layerRtb-scroll thinScroll" v-scrollHeight="137">
            <div class="analyItem">
                <p class="analyItemTit tx-center">当前</p>
                <div class="analyItemCon">
                    <a href="javascript:" class="setLink" style="float:right">
                        <img src="../../Resources/img/1573872938.png" :class="[ fourIndex === 0 ? 'anItemBor-active' : '']" @click="generalDetails(0)" />
                    </a>
                    <p class="fl col-md-3"><span class="cLightGray pr8">级别</span><span>{{gradeByAbilityLevel.grade}}</span></p>
                    <p class="fl col-md-4"><span class="cLightGray pr8">职务</span><span>{{gradeByAbilityLevel.trainRoleName}}</span></p>
                    <p class="fl col-md-4"><span class="cLightGray pr8">职称</span><span>{{gradeByAbilityLevel.professional_title}}</span></p>
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
                            <span class="cLightGray pr8">原级</span><span>{{item.oldLevel}}级</span>
                        </p>
                        <p class="col-md-4">
                            <span class="cLightGray pr8">现级</span><span>{{item.abilityLevel}}级</span>
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
            <general-Detail v-if="fourIndex === currentIndex" :key='currentIndex'></general-Detail>
        </transition-group>
    </div>
</template>
<script>
import { getAllInternalUserLevelByUserCard } from '../../Resources/Api'
import { mapGetters } from 'vuex'
import generalDetail from './four/generalDetails'
export default {
    components: {
        generalDetail
    },
    data () {
        return {
            isGroup: 0,
            gradeByAbilityLevel: {},
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
        this.gradeByAbilityLevel = this.$route.params.gradeByAbilityLevel
        this.load()
    },
    methods: {
        load () {
            getAllInternalUserLevelByUserCard({ user_card_no: this.leftInfo.cardNo, login_card_no: this.userInfo.as_cardNo, manageType: 1 })
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
        generalDetails (index) {
            this.fourIndex = index
            this.currentIndex = index
        },
        clickFourShow () {
            this.fourIndex = undefined
            this.load()
        }
    }

}

</script>
