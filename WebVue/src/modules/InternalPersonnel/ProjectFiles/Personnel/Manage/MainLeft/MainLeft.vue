<template>
    <div class="tc-left pr10 fl">
        <ul class="clearfix uiTab1 mb5 j_outerHeight">
            <!-- <li class="col-md-3 fl uiTab1-active"><a href="javascript:">项</a></li> -->
        </ul>
        <div class="daily_title j_outerHeight">
            <ul class="clearfix">
                <li :class="currentUserType === 0 ? 'title_cur' :  ''" data-title="全部" @click="userTypeClick(0)">全</li>
                <!-- <li data-title="不超过10个字是不会出现的" data-title-length="10">S</li>
            <li data-title="我的背景色是蓝色的" data-title-color="#3385ff">Z</li>
            <li class="title_not_allowed">G</li>
            <li style="float:right;">D</li> -->
                <li :class="currentUserType === 1 ? 'title_cur' :  ''" data-title="监理" @click="userTypeClick(1)">J</li>
                <li :class="currentUserType === 2 ? 'title_cur' :  ''" data-title="工程经理" @click="userTypeClick(2)">G</li>
                <li :class="currentUserType === 3 ? 'title_cur' :  ''" data-title="行政主管" @click="userTypeClick(3)">X</li>
                <li :class="currentUserType === 583 ? 'title_cur' :  ''" data-title="工总经理" @click="userTypeClick(583)">M</li>
                <!-- <li id="twoTitle5" style="width: 25px;" data-type="-1" title="投标部">T</li> -->
                <!-- <%--<li style="width: 25px;" data-type="584" title="人员总监">R</li>--%>
                <%--<li style="width: 25px;" data-type="585" title="项目总监">P</li>
                <li style="width: 25px;" data-type="586" title="材料总监">C</li>--%>
                <%--<li data-type="5" title="全国巡检岗">巡</li>--%> -->
                <li :class="currentUserType === 4 ? 'title_cur' :  ''" data-title="离职" @click="userTypeClick(4)">L</li>
            </ul>
        </div>
        <div class="contentbox">
            <table class="uiTable j_outerHeight">
                <thead>
                    <tr class="tr-show" v-show="!seachIco">
                        <th width="20%">
                            <select class="theadselect areaSelect" @change="selectClick()" v-model="cityId">
                                <option value='0'>全部</option>
                                <option v-for="(item,index) in jsonArray" :key="item.id+item.city_name +index" :value="item.id + '城'" class="City">城-{{item.city_name}}</option>
                                <option v-for="(item,index) in rsglDiqus" :key="item.dq_id + item.dq_name +index" :value="item.dq_id">{{item.dq_name}}</option>
                            </select>
                        </th>
                        <th width="20%" class="tx-center">
                            <span class="serial_number" @click="seachIco = true">
                                姓名<i class="bgIcon select-btn"></i>
                            </span>
                        </th>
                        <th width="15%" class="tx-center">
                            <select class="theadselect thinScroll">
                                <option value="">管状</option>
                                <option value="1">正常</option>
                                <option value="2">整改</option>
                                <option value="4">淘汰</option>
                            </select>
                        </th>
                        <th width="15%" class="tx-center">
                            <select class="theadselect thinScroll" v-model="levelValue" @change="levelChangeValue()">
                                <option value='0'>级别</option>
                                <option :value="item+2" v-for="item in 10" :key="item-100">{{item + 2}}</option>
                            </select>
                        </th>
                        <th width="15%">业</th>
                        <th>处理</th>
                    </tr>
                    <tr class="tr-hide" v-show="seachIco">
                        <th>
                            <div class="dailyftSearch clearfix">
                                <div class="fl uiHas-textIcon">
                                    <input type="text" class="col-md-12 lesson-title-input" v-model="search" @keyup.enter="GetInternalUserListByCityIdFn(0,userInfo.as_diquId)" placeholder="姓名">
                                    <i class="uiText-searchIcon bgIcon select-cancel-btn" @click="GetInternalUserListByCityIdFn(0,userInfo.as_diquId)"></i>
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
                            <td width="20%">{{item.regionName}}</td>
                            <td width="20%">{{item.userName}}</td>
                            <td width="15%" v-if="item.handTypeTop==1 || (item.handTypeTop==2 && item.taskStatus!==2) || item.handTypeTop==3">正常</td>
                            <td width="15%" v-else-if="(item.handTypeTop==2 && item.taskStatus==2)">整改</td>
                            <td width="15%" v-else-if="item.handTypeTop==4">淘汰</td>
                            <td width="15%" v-else-if="item.handTypeTop==6">异常</td>
                            <td width="15%" v-else-if="item.handTypeTop==7" class="cBlue">培训</td>
                            <td width="15%" v-else>--</td>
                            <td width="15%">{{item.abilityLevel}}</td>
                            <td width="15%" v-if="item.jobLevel==80" style="color: #99cc00;">良</td>
                            <td width="15%" v-else-if="item.stayTrade==1" class="cGreen">优</td>
                            <td width="15%" v-else-if="item.stayTrade==2" style="color: #99cc00;">良</td>
                            <td width="15%" v-else-if="item.stayTrade==3" class="cYellow">中</td>
                            <td width="15%" v-else-if="item.stayTrade==4" class="cRed">差</td>
                            <td width="15%" v-else class="cPurple">待</td>
                            <td :class="item.groupUseHour<0?'cRed':''">{{item.groupUseHour == -10000 ? "-999+" : item.groupUseHour &lt; -999 ? "-999+" : item.groupUseHour}}</td>
                        </tr>
                        <tr v-if="leftListData.length === 0">
                            <td class="tx-center">暂无数据</td>
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
import { GetInternalUserListByCityId, getInternalSalaryList
} from '../Resources/Api'
export default {
    data () {
        return {
            cityId: 0, // 城市Value
            seachIco: false,
            loading: false,
            trIndex: 0,
            search: '',
            leftListData: [], // 遍历的数据
            leftListCloneData: [], // 用于数据过滤
            currentUserType: 0,
            levelValue: '0', // 级别
            jsonArray: {},
            rsglDiqus: {}
        }
    },
    computed: {
        ...mapGetters(['leftInfo', 'userInfo'])
    },
    created () {
        let userInfo = { cardNo: '01000378', u_xingming: '巩飞燕' }
        // this.setUserInfo(userInfo)
        localStorage.setItem('userinfo', userInfo)
        sessionStorage.setItem('userinfo', userInfo)
        this.GetInternalUserListByCityIdFn(0, this.userInfo.as_diquId)
        this.GetInternalUserListByCityIdFn1()
    },
    methods: {
        ...mapMutations({
            setLeftData: `SET_LEFT_INFO`
        }),
        // 左側頭部切換
        userTypeClick (currentUserType) {
            this.currentUserType = currentUserType
            this.GetInternalUserListByCityIdFn(0, this.userInfo.as_diquId)
        },
        // 左側切換時間
        siderBarTrclick (index, item) {
            this.trIndex = index
            // 保存字段时 一定要确认公共字段一致
            this.setLeftData(item)
            // 关闭弹窗
            this.$router.push(this.$route.matched[1].path)
        },
        // 级别筛选
        levelChangeValue () {
            if (Number(this.levelValue) === 0) {
                this.leftListData = this.leftListCloneData
                return false
            } else {
                const data = this.leftListCloneData.filter((item) => { return item.abilityLevel === Number(this.levelValue) })
                this.leftListData = data
            }
        },
        // 处理排序
        compare (prop) {
            return function (a, b) {
                return a[prop] - b[prop]
            }
        },
        // 城市筛选
        selectClick () {
            if (Number(this.cityId) === 0) {
                this.leftListData = this.leftListCloneData
            } else {
                if (typeof this.cityId === 'number') {
                    // 分司筛选
                    this.GetInternalUserListByCityIdFn(0, this.cityId)
                } else {
                    if (this.cityId.indexOf('城') > -1) {
                        // 截取汉字
                        const cityId = Number(this.cityId.substr(0, this.cityId.length - 1))
                        // 城筛选
                        this.GetInternalUserListByCityIdFn(1, cityId)
                    }
                }
            }
        },
        // 获取数据
        GetInternalUserListByCityIdFn (city, areaId) {
            this.loading = true
            GetInternalUserListByCityId({
                // 用户名或卡号
                search: this.search,
                // 当前人的角色 0全部 1监理 2工程经理 3行政主管
                userType: this.currentUserType,
                // 是否是根据城市id查询该城下所有分司的人  0否1是
                isCity: city,
                isAccount: 2,
                // 1留 2用
                isPerson: 0,
                u_diqu: areaId,
                // 地区id
                curAreaId: this.userInfo.as_diquId,
                areaId: areaId,
                visitType: 0,
                curUserCard: this.userInfo.as_cardNo
            }).then(results => {
                this.seachIco = false
                this.leftListData = results.data.Body
                this.leftListData = this.leftListData.sort(this.compare('groupUseHour'))
                this.leftListCloneData = this.leftListData
                this.siderBarTrclick(this.trIndex, this.leftListData[this.trIndex])
                this.loading = false
            }).catch(error => {
                console.log(error)
            })
        },
        GetInternalUserListByCityIdFn1 () {
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
            })
        }
    },
    watch: {
        leftInfo () {
            if (this.leftInfo.Status === 1) {
                const findIndex = this.leftListData.findIndex((item) => { return item.cardNo === this.leftInfo.cardNo })
                if (findIndex >= 0) {
                    this.$set(this.leftListData[findIndex], 'groupUseHour', 168)
                    this.leftListData = this.leftListData.sort(this.compare('groupUseHour'))
                }
            }
        }
    }
}
</script>
