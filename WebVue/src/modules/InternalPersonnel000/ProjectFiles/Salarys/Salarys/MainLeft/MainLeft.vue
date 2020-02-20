<template>
    <div class="tc-left pr10 fl">
        <ul class="clearfix uiTab1 mb5 j_outerHeight">
            <!-- <li class="col-md-3 fl uiTab1-active"><a href="javascript:">项</a></li> -->
        </ul>
        <div class="daily_title j_outerHeight">
            <ul class="clearfix">
                <li class="title_cur" data-title="全部">全</li>
                <!-- <li data-title="不超过10个字是不会出现的" data-title-length="10">S</li>
            <li data-title="我的背景色是蓝色的" data-title-color="#3385ff">Z</li>
            <li class="title_not_allowed">G</li>
            <li style="float:right;">D</li> -->
                <div class="fl uiHas-textIcon" style="float:right">
                    <input type="text" placeholder="姓名或卡号" class="col-md-12 lesson-title-input" v-model="search" @keyup.enter="GetInternalUserListByCityIdFn()">
                    <i class="uiText-searchIcon bgIcon select-cancel-btn" @click="GetInternalUserListByCityIdFn()"></i>
                </div>
            </ul>

        </div>
        <div class="contentbox">
            <table class="uiTable j_outerHeight">
                <thead>
                    <tr>
                        <th width="25%" class="tx-center">
                            <select class="theadselect timeSelect" @change="selectClick()" v-model="curMonth">
                                <option v-for="(itemm, index) in monthList" :key="index+'1'" v-bind:value="itemm.year" class="City">{{itemm.month}}月</option>
                            </select>
                        </th>
                        <th width="20%" class="tx-center">
                            <select class="theadselect areaSelect" @change="selectClick($event, 2)">
                                <option :value='0'>全部</option>
                                <option v-for="(itemm, index) in jsonArray" :key="index+'2'" v-bind:value="itemm.id" class="City">城-{{itemm.city_name}}</option>
                                <option v-for="(item, index) in rsglDiqus" :key="index+'3'" v-bind:value="item.dq_id">{{item.dq_name}}</option>
                            </select>
                        </th>
                        <th width="20%" class="tx-center">
                            <select class="theadselect userSelect" @change="selectClick($event, 3)">
                                <option value="-1">状态</option>
                                <option value="2">试用</option>
                                <option value="3">正式</option>
                                <option value="4">入职申请</option>
                                <option value="6">待转正</option>
                                <option value="0">离职</option>
                            </select>
                        </th>
                        <th width="20%">
                            <select class="theadselect typeSelect" @change="selectClick($event, 4)">
                                <option value="0">角色</option>
                                <option value="1">监理</option>
                                <option value="2">工程经理</option>
                                <option value="3">行政主管</option>
                                <option value="583">工总经理</option>
                                <option value="584">人员总监</option>
                            </select></th>
                        <th width="20%">
                            <select class="theadselect stateSelect" @change="selectClick($event, 5)">
                                <option value="-1">审核</option>
                                <option value="0">待审</option>
                                <option value="1">已审</option>
                            </select>
                        </th>
                    </tr>
                </thead>
            </table>
            <div class="scroll-content thinScroll thinScroll-table" v-loading="loading" v-scrollHeight="36">
                <table class="uiTable uiTable-striped uiTable-hover" id="tab1">
                    <tbody id="tabData" class="tabDataCompany">
                        <tr v-for="(item, index) in list" :key="index+'4'" :class="{'tractive':index == trIndex}" @click="siderBarTrclick(index,item)">
                            <td width="20%">{{pointMonth}}月</td>
                            <td width="20%">{{item.dq_name}}</td>
                            <td width="20%">{{item.zt_name|strSplite}}</td>
                            <td width="20%">{{item.u_xingming}}</td>
                            <td width="20%"><span class="status" :class="item.Status |listColor">{{item.Status === 1 ? '已审' : '待审'}}</span></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="j_outerHeight clearfix tj_bottom">
                <p class="col-md-3" data-title="全部">{{list.length}}</p>
                <p class="col-md-3 cGreen" data-title="正常">0</p>
                <p class="col-md-3 cOrange" data-title="异常">0</p>
                <p class="col-md-3 cRed" data-title="问题">0</p>
            </div>
        </div>
    </div>
</template>
<script>
import { mapMutations, mapGetters } from 'vuex'
import { getInternalSalaryList } from '../Resources/Api'
export default {
    data () {
        return {
            loading: false,
            trIndex: 0,
            leftListData: [1, 2, 3, 4], // 遍历的数据
            list: {},
            jsonArray: {},
            rsglDiqus: {},
            monthList: {},
            body: {},
            pointMonth: '',
            curMonth: '',
            pointTime: '',
            areaIdName: '',
            areaId: 0,
            year: 0,
            month: 0,
            search: ''


        }
    },
    mounted: function () {
        this.getInternalSalaryListFn()
    },
    computed: {
        ...mapGetters(['leftInfo', 'userInfo', 'updatePlate'])
    },
    created () {
        var date = new Date()
        this.year = date.getFullYear()
        this.month = date.getMonth()
        if (this.month === 0) {
            this.year = this.year - 1
            this.month = 12
        }
        if (Number(this.month) < 10) {
            this.pointTime = this.year + '-0' + this.month + '-01'
        } else {
            this.pointTime = this.year + '-' + this.month + '-01'
        }
        this.areaIdName = this.leftInfo.dq_name
        this.areaId = this.leftInfo.regionId
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
        GetInternalUserListByCityIdFn () {
            this.list = {}
            getInternalSalaryList({
                // userType: $('.typeSelect').val(),
                // userState: $('.stateSelect').val(),
                curAreaId: this.userInfo.as_diquId,
                pointTime: $('.timeSelect').val() + '-01',
                // areaId: this.areaId
                search: this.search.trim()
            }).then(results => {
                this.body = results.data.Body
                if (this.body.salaryList != null && this.body.salaryList.length > 0) {
                    this.list = this.body.salaryList
                    this.setLeftData(this.list[0])
                }
                this.jsonArray = this.body.jsonArray
                this.rsglDiqus = this.body.rsglDiqus
                this.pointMonth = this.body.pointMonth
                this.pointYear = this.body.pointYear
                this.monthList = this.body.monthList
                if (this.pointMonth < 10) {
                    this.curMonth = this.pointYear + '-0' + this.pointMonth
                } else {
                    this.curMonth = this.pointYear + '-' + this.pointMonth
                }
                console.log(this.curMonth)
            })
        },
        getInternalSalaryListFn () {
            getInternalSalaryList({
                // userType: $('.typeSelect').val(),
                // userState: $('.stateSelect').val(),
                curAreaId: this.userInfo.as_diquId,
                pointTime: this.pointTime
                // areaId: this.areaId
            }).then(results => {
                this.body = results.data.Body
                if (this.body.salaryList != null && this.body.salaryList.length > 0) {
                    this.list = this.body.salaryList
                    this.setLeftData(this.list[0])
                }
                this.jsonArray = this.body.jsonArray
                this.rsglDiqus = this.body.rsglDiqus
                this.pointMonth = this.body.pointMonth
                this.pointYear = this.body.pointYear
                this.monthList = this.body.monthList
                if (this.pointMonth < 10) {
                    this.curMonth = this.pointYear + '-0' + this.pointMonth
                } else {
                    this.curMonth = this.pointYear + '-' + this.pointMonth
                }
                console.log(this.curMonth)
            })
        },

        selectClick (year, month) {
            var citycs = $('.areaSelect').find('option:selected').hasClass('City')// 有无class
            if (citycs === true) {
                var cityId = $('.areaSelect').val()
            } else {
                var areaId = $('.areaSelect').val()
            }
            this.list = {}
            getInternalSalaryList({
                userType: $('.typeSelect').val(),
                userState: $('.stateSelect').val(),
                curAreaId: this.userInfo.as_diquId,
                pointTime: $('.timeSelect').val() + '-01',
                userSelect: $('.userSelect').val(),
                areaId: areaId,
                cityId: cityId
            }).then(results => {
                this.body = results.data.Body
                if (this.body.salaryList != null && this.body.salaryList.length > 0) {
                    this.list = this.body.salaryList
                }
                this.setLeftData(this.list[0])
                this.jsonArray = this.body.jsonArray
                this.rsglDiqus = this.body.rsglDiqus
                this.pointMonth = this.body.pointMonth
                this.pointYear = this.body.pointYear
                this.monthList = this.body.monthList
                if (this.pointMonth < 10) {
                    this.curMonth = this.pointYear + '-0' + this.pointMonth
                } else {
                    this.curMonth = this.pointYear + '-' + this.pointMonth
                }
            })
        }
    },
    watch: {
        updatePlate () {
            if (this.leftInfo.Status === 1) {
                const findIndex = this.list.findIndex((item) => { return item.u_kahao === this.leftInfo.u_kahao })
                if (findIndex >= 0) {
                    this.$set(this.list[findIndex], 'Status', 1)
                }
            }
        }
    },
    filters: {
        listColor: function (str) {
            if (str === 1) {
                return 'cGreen'
            } else {
                return 'cRed'
            }
        },
        strSplite: function (str) {
            if (str.length > 1) {
                return str.substr(0, 2)
            } else {
                return str
            }
        }
    }
}
</script>
