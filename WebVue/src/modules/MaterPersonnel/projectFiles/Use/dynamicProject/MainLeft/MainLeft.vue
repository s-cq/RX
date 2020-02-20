<template>
<div class="tc-left pr10 fl">
    <ul class="clearfix uiTab1 mb5 j_outerHeight">
        <!-- <li class="col-md-3 fl uiTab1-active"><a href="javascript:">项</a></li> -->
    </ul>
    <div class="daily_title j_outerHeight">
        <ul class="clearfix">
            <li :class="userState===12?'title_cur':''" @click="userState=12,GetProjectManagerListFn()" data-title="全部">全</li>
            <li :class="userState===1?'title_cur':''" @click="userState=1,GetProjectManagerListFn()" data-title="传统项目经理">X</li>
            <li :class="userState===7?'title_cur':''" @click="userState=7,GetProjectManagerListFn()" data-title="加盟项目经理">M</li>

            <li :class="userState===6?'title_cur':''" @click="userState=6,GetProjectManagerListFn()" style="float:right;" data-title="离职或黑名单">H</li>
            <li :class="userState===5?'title_cur':''" @click="userState=5,GetProjectManagerListFn()" style="float:right;" data-title="冻结">D</li>
            <!-- <li data-title="不超过10个字是不会出现的" data-title-length="10">S</li>
            <li data-title="我的背景色是蓝色的" data-title-color="#3385ff">Z</li>
            <li class="title_not_allowed">G</li>
            <li style="float:right;">D</li> -->
        </ul>
    </div>
    <div class="contentbox">
        <table class="uiTable j_outerHeight">
            <thead>
                <tr class="tr-show" v-show="!seachIco">
                    <th width="20%">
                        <select class="theadselect thinScroll" v-model="region"  @change="chooseCity()">
                            <option  value="" selected="true"> 全部</option>
                            <option  :value="coupon.id" v-for="(coupon,index) in colony_city" :key="index">{{coupon.city_name}}</option>
                        </select>
                    </th>
                    <th width="20%" class="tx-center">
                       <span class="serial_number" @click="seachIco=true">
                            姓名<i class="bgIcon select-btn"></i>
                        </span>
                    </th>
                    <th width="15%" class="tx-center">
                        <select class="theadselect thinScroll" v-model="state" @change="GetProjectManagerListFn()">
                            <option value="">管</option>
                            <option value="正常">正常</option>
                            <option value="整改">整改</option>
                            <option value="冻结">冻结</option>
                            <option value="处罚">处罚</option>
                            <option value="培训">培训</option>
                            <option value="奖励">奖励</option>
                            <option value="打烊">打烊</option>
                        </select>
                    </th>
                    <th width="13%" class="tx-center">
                       业状
                    </th>
                    <th >回访</th>
                </tr>
                 <tr class="tr-hide" v-show="seachIco">
                    <th>
                        <div class="dailyftSearch clearfix">
                            <div class="fl uiHas-textIcon">
                                <input type="text" class="col-md-12 lesson-title-input" v-model="inpu"
                                    placeholder="姓名/卡号" @keyup.enter="GetProjectManagerListFn()" >
                                <i class="uiText-searchIcon bgIcon select-cancel-btn" @click="GetProjectManagerListFn()"></i>
                            </div>
                        </div>
                    </th>
                </tr>
            </thead>
        </table>
        <div class="scroll-content thinScroll thinScroll-table" v-loading="loading" v-scrollHeight="36">
            <table class="uiTable uiTable-striped uiTable-hover" id="tab1">
                <tbody>
                    <tr v-for="(item,index) in leftListData" :key="index" :class="{'tractive':index == trIndex}" @click="siderBarTrclick(index,item)">
                        <td width="20%">{{item.areaName}}</td>
                        <td width="20%">{{item.user_name}}</td>
                        <td width="15%">{{item.Title}}</td>
                        <td width="13%">--</td>
                        <td class="cRed">-999</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="j_outerHeight clearfix tj_bottom">
            <p class="col-md-3" data-title="全部">{{leftListData.length}}</p>
            <p class="col-md-3 cGreen" data-title="正常">0</p>
            <p class="col-md-3 cOrange" data-title="异常">0</p>
            <p class="col-md-3 cRed" data-title="问题">0</p>
        </div>
    </div>
</div>
</template>
<script>
import { mapMutations, mapGetters } from 'vuex'
import {
    getUseUserList,
    getColony,
    getCity
} from '../Resources/Api'
export default {
    data () {
        return {
            loading: false,
            seachIco: false,
            trIndex: 0,
            leftListData: [], // 遍历的数据
            inpu: '',
            state: '',
            userState: 12,
            region: '',
            colonyList: [],
            cityList: [],
            colony_city: []
        }
    },
    computed: {
        ...mapGetters(['leftInfo'])
    },
    created () {
        this.GetUseUser()
        this.GetCityInfo()
    },
    methods: {
        ...mapMutations({
            setLeftData: `SET_LEFT_INFO`
        }),
        siderBarTrclick (index, item) {
            this.trIndex = index
            // 保存字段时 一定要确认公共字段一致
            this.setLeftData(item)
            // 关闭弹窗
            this.$router.push(this.$route.matched[1].path)
        },
        GetUseUser () {
            this.index = layer.load()
            getUseUserList({
                business: {
                    userName: '',
                    userArea: 0,
                    title: '管',
                    level: 0,
                    userState: this.userState,
                    userType: 1,
                    major: 1,
                    role: 0,
                    companys: '',
                    logType: 1}
            }).then(results => {
                this.seachIco = false
                layer.close(this.index)
                this.leftListData = results.data.Body
                console.log(this.leftListData)
                this.siderBarTrclick(this.trIndex, this.leftListData[this.trIndex])
            }).catch(error => {
                console.log(error)
                layer.close(this.index)
            })
        },
        GetColonyInfo () {
            let _this = this
            let cityNew = {
                id: 0,
                city_name: ''
            }
            _this.colonyList = []
            getColony({
                region: 39
            }).then(results => {
                _this.colonyList = results.data.Body
                _this.colonyList.forEach(element => {
                    cityNew.id = element.dq_id
                    cityNew.city_name = element.dq_name
                    _this.colony_city.push(cityNew)
                    cityNew = {
                        id: 0,
                        city_name: ''
                    }
                })
            }).catch(error => {
                console.log(error)
            })
        },
        GetCityInfo () {
            let _this = this
            _this.cityList = []
            let cityNew = {
                id: 0,
                city_name: ''
            }
            getCity({
            }).then(results => {
                _this.cityList = results.data
                _this.cityList.forEach(element => {
                    cityNew.id = element.cp_id
                    cityNew.city_name = '城-' + element.city_name
                    _this.colony_city.push(cityNew)
                    cityNew = {
                        id: 0,
                        city_name: ''
                    }
                })
            }).catch(error => {
                console.log(error)
            })

            this.GetColonyInfo()
        },
        chooseCity () {
            this.GetUseUser()
        }
    },
    watch: {
        userState () {
            this.GetUseUser()
        }
    }
}
</script>
