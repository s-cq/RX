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
            </ul>
        </div>
        <div class="contentbox">
            <table class="uiTable j_outerHeight">
                <thead>
                    <tr>
                        <th width="25%" class="tx-center">
                            <select class="theadselect timeSelect" @change="selectClick()" v-model="curMonth">
                                <option v-for="(itemm, index) in monthList" :key="index" v-bind:value="itemm.year" class="City">{{itemm.month}}月</option>
                            </select>
                        </th>
                        <th width="25%" class="tx-center">
                            司
                        </th>
                        <th width="25%" class="tx-center">
                            薪总
                        </th>
                        <th width="25%">审批完</th>
                    </tr>
                </thead>
            </table>
            <div class="scroll-content thinScroll thinScroll-table" v-loading="loading" v-scrollHeight="36">
                <table class="uiTable uiTable-striped uiTable-hover" id="tab1">
                    <tbody id="tabData" class="tabDataCompany">
                        <tr v-for="(item, index) in listTrue" :key="index" :class="{'tractive':index == trIndex}" @click="siderBarTrclick(index,item)">
                            <td width="25%">{{pointMonth}}月</td>
                            <td width="25%">{{item.regionName}}</td>
                            <td width="25%">{{item.salaryTotal==null?item.salaryTotal:item.salaryTotal| toFixed(0)}}</td>
                            <td width="25%" :class="item.passStatus == 1 ? 'cGreen' : 'cRed'">{{item.passStatus == 1 ? '已审' : '待审'}}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="j_outerHeight clearfix tj_bottom">
                <p class="col-md-3" data-title="全部">{{listTrue.length}}</p>
                <p class="col-md-3 cGreen" data-title="正常">0</p>
                <p class="col-md-3 cOrange" data-title="异常">0</p>
                <p class="col-md-3 cRed" data-title="问题">0</p>
            </div>
        </div>
    </div>
</template>
<script>
import { mapMutations, mapGetters } from 'vuex'
import { getSalaryListByRegionId } from '../Resources/Api'
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
            curAreaId: '',
            listTrue: []
        }
    },
    mounted: function () {
        this.getSalaryListByRegionIdFn()
    },
    computed: {
        ...mapGetters(['leftInfo', 'userInfo'])
    },
    created () {

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
        getSalaryListByRegionIdFn () {
            getSalaryListByRegionId({

            }).then(results => {
                this.body = results.data.Body
                if (results.data.Body.companyList != null && results.data.Body.companyList.length > 0) {
                    this.listTrue = []
                    this.list = results.data.Body.companyList
                    this.curAreaId = this.userInfo.as_diquId
                    for (var i = 0; i < this.list.length; i++) {
                        console.log('this.curAreaId:' + this.curAreaId)
                        if (this.curAreaId === 39) {
                            this.listTrue = this.list
                            break
                        }
                        if (this.list[i].regionId === this.curAreaId) {
                            console.log('进来啦' + this.list[i].regionId)
                            this.listTrue.push(this.list[i])
                            console.log('进来啦1' + this.list[i])
                            break
                        }
                    }
                }
                this.setLeftData(this.listTrue[0])
                this.pointMonth = this.body.pointMonth
                this.pointYear = this.body.pointYear
                this.monthList = this.body.monthList
                this.curMonth = this.body.monthList[0].year
            })
        },

        selectClick (year, month) {
            this.pointTime = $('.timeSelect').val()
            getSalaryListByRegionId({
                pointTime: $('.timeSelect').val() + '-01'
            }).then(results => {
                this.body = results.data.Body
                if (results.data.Body.companyList != null && results.data.Body.companyList.length > 0) {
                    this.listTrue = []
                    this.list = results.data.Body.companyList
                    this.curAreaId = this.userInfo.as_diquId
                    for (var i = 0; i < this.list.length; i++) {
                        if (this.curAreaId === 39) {
                            this.listTrue = this.list
                            break
                        }
                        if (this.list[i].regionId === this.curAreaId) {
                            this.listTrue.push(this.list[i])
                            break
                        }
                    }
                }
                this.pointMonth = this.body.pointMonth
                this.pointYear = this.body.pointYear
                this.monthList = this.body.monthList
                this.setLeftData(this.listTrue[0])
            })
        }
    }
}
</script>
