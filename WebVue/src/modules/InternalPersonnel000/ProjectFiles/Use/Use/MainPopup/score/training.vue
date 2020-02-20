<template>
    <div class="layerRtb layerRtb-threecolumn">
        <three-title :title="{name:'培训'}"></three-title>
        <div class="layerRtb-scroll thinScroll" v-scrollHeight="137">
            <div class="analyItem">

                <p class="analyItemTit tx-center">函授</p>
                <div class="analyItemCon">
                    <div class="col-md-10">
                        <p class="col-md-3">
                            <span class="cLightGray pr8">调级</span><input type="text" class="width40 level level1" value="0" />
                        </p>
                        <p class="col-md-3">
                            <span class="cLightGray pr8">原级别</span>{{abilityLevel}}
                        </p>
                        <p class="col-md-3">
                            <span class="cLightGray pr8">现级别</span>{{abilityLevel}}
                        </p>
                        <p class="col-md-3">
                            <input type="text" class="col-md-12" placeholder="事由" />
                        </p>
                    </div>
                    <span class="fr mt5">
                        <a href="javascript:" class="uiSwitchclick uiSwitch1 bgc0ccda fl ${corrFlag == 1 ? 'noallow uiSwitch1-blue-on' : ''}" data-trainType="1" v-bind:data-flag="correspondenceDetail.train_flag">
                            <i class="uiSwitch-btn1"></i>
                        </a>
                        <span class="fl uiSwitch1Span ml5 ${corrFlag == 1 ? 'uiSwitch1Span-blue-on' : ''}">启动</span>
                    </span>
                    <span class="fr mt5 fixright">函授启动</span>
                </div>

            </div>
            <div class="analyItem">

                <p class="analyItemTit tx-center">面授</p>
                <div class="analyItemCon">
                    <div class="col-md-10">
                        <p class="col-md-3">
                            <span class="cLightGray pr8">分值</span>{{integral==null?'0':integral}}
                        </p>
                        <p class="col-md-9">
                            <input type="text" class="col-md-12" placeholder="事由" id="stayPeoPerTrainRea2" />
                        </p>
                    </div>
                    <span class="fr mt5">
                        <a href="javascript:" class="uiSwitchclick uiSwitch1 bgc0ccda fl ${faceType == 2 ? 'noallow uiSwitch1-blue-on' : ''}" data-trainType="2" v-bind:data-flag="faceDetail.train_flag">
                            <i class="uiSwitch-btn1"></i>
                        </a>
                        <span class="fl uiSwitch1Span ml5 ${faceFlag == 1 ? 'uiSwitch1Span-blue-on' : ''}">启动</span>
                    </span>
                    <span class="fr mt5 fixright">面授启动(积分)</span>
                </div>

            </div>
            <div class="analyItem">

                <p class="analyItemTit tx-center">面授</p>
                <div class="analyItemCon">
                    <div class="col-md-10">
                        <p class="col-md-3">
                            <span class="cLightGray pr8">调级</span><input type="text" class="width40 level level2" value="0" id="stayPeoPerTrainLevel3" />
                        </p>
                        <p class="col-md-3">
                            <span class="cLightGray pr8">原级别</span>{{abilityLevel}}
                        </p>
                        <p class="col-md-3">
                            <span class="cLightGray pr8">现级别</span>{{abilityLevel}}
                        </p>
                        <p class="col-md-3">
                            <input type="text" class="col-md-12" placeholder="事由" id="stayPeoPerTrainRea3" />
                        </p>
                    </div>
                    <span class="fr mt5">
                        <a href="javascript:" class="uiSwitchclick uiSwitch1 bgc0ccda fl ${faceType == 3 ? 'noallow uiSwitch1-blue-on' : ''}" data-trainType="3" v-bind:data-flag="faceDetail.train_flag">
                            <i class="uiSwitch-btn1"></i>
                        </a>
                        <span class="fl uiSwitch1Span ml5 ${faceFlag == 1 ? 'uiSwitch1Span-blue-on' : ''}">启动</span>
                    </span>
                    <span class="fr mt5 fixright">面授启动(级别)</span>
                </div>

            </div>
        </div>
        <div class="layerRtb-footer">
            <div class="analyItem">

                <p class="analyItemTit tx-center">状态</p>
                <div class="analyItemCon">
                    <div class="col-md-10">

                        <p class="col-md-4">
                            <span class="cLightGray pr8">函授</span>
                            <span class="cGreen">{{correspondenceDetail.train_flag==1?'开启中':'未开启'}}</span>
                        </p>
                        <p class="col-md-4">
                            <span class="cLightGray pr8">面授</span>

                            <span class="cGreen">{{faceDetail.train_flag==1?'开启中':'未开启'}}</span>
                        </p>
                    </div>
                </div>

            </div>

        </div>

        <div class="layerRtb-footer">
            <div class="analyItem">

                <p class="analyItemTit tx-center">函历史</p>
                <div class="analyItemCon">
                    <p class="col-md-4"><span class="cLightGray pr8">次数</span>{{correspondenceCount}}</p>
                    <p class="col-md-4"><span class="cLightGray pr8">总分</span>-</p>
                    <p class="col-md-4"><span class="cLightGray pr8">平均分</span>-</p>
                    <a href="javascript:" class="circlemark circlemark-purple">待</a>
                </div>

            </div>

        </div>
        <div class="layerRtb-footer">
            <div class="analyItem">

                <p class="analyItemTit tx-center">面历史</p>
                <div class="analyItemCon">
                    <p class="col-md-4"><span class="cLightGray pr8">次数</span>{{faceCount}}</p>
                    <p class="col-md-4"><span class="cLightGray pr8">总分</span>-</p>
                    <p class="col-md-4"><span class="cLightGray pr8">平均分</span>-</p>
                    <a href="javascript:" class="circlemark circlemark-purple">待</a>
                </div>

            </div>

        </div>
    </div>
</template>
<script>
import { getUseUseThreeEndTrainingetail } from '../../Resources/Api'
import { mapGetters } from 'vuex'
export default {
    data () {
        return {
            body: {},
            abilityLevel: 0,
            correspondenceCount: 0,
            faceCount: 0,
            correspondenceDetail: {},
            faceDetail: {}
        }
    },
    computed: {
        ...mapGetters(['leftInfo', 'userInfo'])
    },
    created () {
        this.load()
    },
    methods: {
        load () {
            getUseUseThreeEndTrainingetail({ user_card_no: this.leftInfo.cardNo, login_card_no: this.userInfo.as_cardNo, manageType: 1 })
                .then(result => {
                    if (result.data.Body !== null) {
                        this.body = result.data.Body
                        this.abilityLevel = this.body.abilityLevel
                        this.correspondenceCount = this.body.correspondenceCount
                        this.faceCount = this.body.faceCount
                        this.correspondenceDetail = this.body.correspondenceDetail
                        this.faceDetail = this.body.faceDetail
                        this.integral = this.body.integral
                    }
                })
                .catch(err => {
                    console.log(err)
                })
        }

    }

}

</script>

