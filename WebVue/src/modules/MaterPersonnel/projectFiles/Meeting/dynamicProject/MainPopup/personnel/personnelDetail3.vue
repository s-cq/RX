<template>
    <div class="layerRtb layerRtb-threecolumn">
        <three-title :title="{name:'级别'}"></three-title>
        <div class="layerRtb-scroll thinScroll" v-scrollHeight="137">
            <div class="analyItem">
                <p class="analyItemTit tx-center">标准</p>
                <div class="analyItemCon">
                    <!-- <p class="col-md-4">
                    <span class="cLightGray pr8">名称</span>
                    <span>预留名称</span>
                </p> -->
                </div>
            </div>
            <div class="analyItem">
                <p class="analyItemTit tx-center">积分</p>
                <div class="analyItemCon">
                    <p class="col-md-4">
                        <span class="cLightGray pr8">积分</span>
                        <span class="cGreen w700 fz18 peopleNowLevel">{{score[0].aggregate_integral}}</span>
                    </p>
                </div>
            </div>
            <div class="analyItem">
                <p class="analyItemTit tx-center">上级</p>
                <div class="analyItemCon">
                    <p class="fl col-md-4">
                        <span class="cLightGray pr8">级别</span>
                        <span class="cRed w700 fz18 peopleBeforeLevel">{{peopleBeforeLevel}}</span>
                    </p>
                </div>
            </div>
            <div class="analyItem">
                <p class="analyItemTit tx-center">当前</p>
                <div class="analyItemCon">
                    <p class="fl col-md-4">
                        <span class="cLightGray pr8">级别</span>
                        <span class="cGreen w700 fz18 peopleNowLevel">{{score[0].showLevel}}</span>
                    </p>
                </div>
            </div>
            <div class="analyItem">
                <p class="analyItemTit tx-center">下级</p>
                <div class="analyItemCon">
                    <p class="fl col-md-4">
                        <span class="cLightGray pr8">级别</span>
                        <span class="cRed w700 fz18 peopleBeforeLevel">{{peopleNextLevel}}</span>
                    </p>
                </div>
            </div>
        </div>
        <div class="layerRtb-footer">
            <div class="analyItem">
                <p class="analyItemTit tx-center">手动调级</p>
                <div class="analyItemCon pb5">
                    <div class="col-md-6 borderight h_percent100">
                        <div class="clearfix">
                            <p class="fl">当前<span class="cGreen fz15 peopleNowLevel">{{score[0].showLevel}}</span>级</p>
                            <p class="fl ml10">调至
                                <select id="changelevel" class="curL-sel" v-model="level">
                                    <option :value="3">3</option>
                                    <option :value="4">4</option>
                                    <option :value="5">5</option>
                                    <option :value="6">6</option>
                                    <option :value="7">7</option>
                                    <option :value="8">8</option>
                                    <option :value="9">9</option>
                                    <option :value="10">10</option>
                                    <option :value="11">11</option>
                                    <option :value="12">12</option>
                                    <option :value="13">13</option>
                                    <option :value="14">14</option>
                                    <option :value="15">15</option>
                                    <option :value="16">16</option>
                                    <option :value="17">17</option>
                                    <option :value="18">18</option>
                                    <option :value="19">19</option>
                                    <option :value="20">20</option>
                                    <option :value="21">21</option>
                                </select>
                                级
                                <input type="text" class="form-control hide width60" id="addtime"
                                    onclick="WdatePicker({dateFmt:'yyyy-MM-dd'});">
                            </p>
                        </div>
                        <div class="mt5 clearfix">
                            <div class="col-md-7">
                                <textarea rows="2" class="pa5" style="width:100%;" id="changeremark" v-model="remark"></textarea>
                                <p class="tx-center mt5">
                                    <input type="button" class="uiBtn-blue uiBtn-small" value="提交" style="width:60px;" @click="updateUserInfoLevelFn()"
                                        id="changebutton">
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 h_percent100 pl5 pa5">
                        <p class="cBlue">记录</p>
                        <div class="slimScrollDiv"
                            style="position: relative; overflow: hidden; width: auto; height: 250px;">
                            <div class="pmuser_level_changehistoryl"
                                style="overflow: hidden; width: auto; height: 101px;">
                                <div class="recordScroll_new" id="pmuser_level_changehistory"
                                    style="position:absolute; height:100px; overflow:auto">
                                    <div class="pl10 pr10 fl " style="width: 100%;" ng-repeat="li in scaleRecord" v-for="(item,index) in Record" :key="index">
                                        <p>{{itme.content}}</p><span class="fr pb5"
                                            style="border-bottom: 1px dashed;width: 100%;text-align: right;">{{itme.creat_user}}
                                            {{itme.creat_time | slice(0,16)}}</span>
                                    </div>
                                </div>
                            </div>
                            <div class="slimScrollBar"
                                style="background: rgb(206, 206, 206); width: 2px; position: absolute; top: 101px; opacity: 0.4; display: none; border-radius: 0px; z-index: 99; right: 1px;">
                            </div>
                            <div class="slimScrollRail"
                                style="width: 2px; height: 100%; position: absolute; top: 0px; display: none; border-radius: 7px; background: rgb(51, 51, 51); opacity: 0.2; z-index: 90; right: 1px;">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import {
    mapGetters, mapMutations
} from 'vuex'
import {
    GetByUIdScoreInfo, GetByUIdOperationRecord, updateUserInfoLevel
} from '../../Resources/Api'
export default {
    data () {
        return {
            score: [],
            peopleBeforeLevel: 0,
            peopleNextLevel: 0,
            level: 0,
            Record: [],
            remark: ''
        }
    },
    created () {
        this.GetByUIdScoreInfoFn()
        this.GetByUIdOperationRecordFn()
    },
    methods: {
        ...mapMutations({
            setUpdatePlate: `SET_UPDATE_PLATE`
        }),
        // 查询项目经理当月金牌,积分结余和当前级别
        GetByUIdScoreInfoFn () {
            let _this = this
            _this.score = []
            _this.peopleBeforeLevel = 0
            _this.peopleNextLevel = 0
            _this.level = 0
            GetByUIdScoreInfo({
                uid: _this.leftInfo.uid
            }).then(results => {
                _this.score = results.data.Body
                _this.level = _this.score[0].showLevel
                if (_this.score[0].showLevel !== 4 && _this.score[0].showLevel !== 14 && _this.score[0]
                    .showLevel !== 12 && _this.score[0].showLevel !== 13 && _this.score[0].showLevel !== 21
                ) {
                    _this.peopleBeforeLevel = _this.score[0].showLevel - 1
                    _this.peopleNextLevel = _this.score[0].showLevel + 1
                }
                if (_this.score[0].showLevel === 4 || _this.score[0].showLevel === 14) {
                    _this.peopleBeforeLevel = _this.score[0].showLevel
                    _this.peopleNextLevel = _this.score[0].showLevel + 1
                }
                if (_this.score[0].showLevel === 12 || _this.score[0].showLevel === 21) {
                    _this.peopleBeforeLevel = _this.score[0].showLevel - 1
                    _this.peopleNextLevel = _this.score[0].showLevel
                }
                if (_this.score[0].showLevel === 13) {
                    _this.peopleBeforeLevel = _this.score[0].showLevel
                    _this.peopleNextLevel = _this.score[0].showLevel
                }
            }).catch(error => {
                console.log(error)
            })
        },
        // 查询指定人员操作记录
        GetByUIdOperationRecordFn () {
            let _this = this
            _this.Record = []
            GetByUIdOperationRecord({
                userType: 2,
                pmUid: _this.leftInfo.uid,
                dataType: 1
            }).then(results => {
                _this.Record = results.data.Body
            }).catch(error => {
                console.log(error)
            })
        },
        // 更新指定人员级别信息
        updateUserInfoLevelFn () {
            let _this = this
            if ($.trim(_this.remark) === '') {
                layer.msg('备注不能为空！', {icon: 5})
                return
            }
            let ind = layer.load()
            updateUserInfoLevel({
                level: _this.level,
                uid: _this.leftInfo.uid,
                creatUser: _this.userInfo.as_cardNo,
                creatNo: _this.userInfo.as_fullName,
                content: _this.remark
            }).then(results => {
                layer.close(ind)
                if (results.data.StatusCode === 0) {
                    _this.GetByUIdScoreInfoFn()
                    _this.GetByUIdOperationRecordFn()
                    _this.remark = ''
                    _this.setUpdatePlate()
                } else {
                    layer.msg('级别修改发生错误！！', {icon: 5})
                }
            }).catch(error => {
                layer.close(ind)
                layer.msg('级别修改提交失败！' + error, {icon: 5})
            })
        }
    },
    computed: {
        ...mapGetters(['leftInfo', 'userInfo'])
    }
}

</script>
