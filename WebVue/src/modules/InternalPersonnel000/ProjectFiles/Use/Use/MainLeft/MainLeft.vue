<template>
    <div class="tc-left pr10 fl">
        <ul class="clearfix uiTab1 mb5 j_outerHeight">
            <!-- <li class="col-md-3 fl uiTab1-active"><a href="javascript:">项</a></li> -->
        </ul>
        <div class="daily_title j_outerHeight">
            <ul class="clearfix">
                <li :class="currentUserType === 0 ? 'title_cur' :  ''" data-title="全部" @click="userTypeClick(0)">全</li>
                <li :class="currentUserType === 1 ? 'title_cur' :  ''" data-title="监理" @click="userTypeClick(1)">J</li>
                <li :class="currentUserType === 2 ? 'title_cur' :  ''" data-title="工程经理" @click="userTypeClick(2)">G</li>
                <li :class="currentUserType === 3 ? 'title_cur' :  ''" data-title="行政主管" @click="userTypeClick(3)">X</li>
                <li :class="currentUserType === 583 ? 'title_cur' :  ''" data-title="工总经理" @click="userTypeClick(583)">M</li>
                <li :class="currentUserType === 4 ? 'title_cur' :  ''" data-title="离职" @click="userTypeClick(4)">L</li>
            </ul>
        </div>
        <div class="contentbox">
            <table class="uiTable j_outerHeight">
                <thead>
                    <tr class="tr-show" v-show="!seachIco">
                        <th width="20%">
                            <select class="theadselect thinScroll">
                                <option value="">地区</option>
                            </select></th>
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
                            <select class="theadselect thinScroll">
                                <option value="">级别</option>
                            </select>
                        </th>
                        <th width="15%">业</th>
                        <th>处理</th>
                    </tr>
                    <tr class="tr-hide" v-show="seachIco">
                        <th>
                            <div class="dailyftSearch clearfix">
                                <div class="fl uiHas-textIcon">
                                    <input type="text" class="col-md-12 lesson-title-input" v-model="search" @keyup.enter="GetInternalUserListByCityIdFn()" placeholder="姓名">
                                    <i class="uiText-searchIcon bgIcon select-cancel-btn" @click="GetInternalUserListByCityIdFn()"></i>
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
import { GetInternalUserListByCityId
} from '../Resources/Api'
export default {
    data () {
        return {
            seachIco: false,
            loading: false,
            trIndex: 0,
            search: '',
            leftListData: [], // 遍历的数据
            currentUserType: 0
        }
    },
    computed: {
        ...mapGetters(['leftInfo', 'userInfo'])
    },
    created () {
        this.GetInternalUserListByCityIdFn(0)
    },
    methods: {
        ...mapMutations({
            setLeftData: `SET_LEFT_INFO`
        }),
        // 左側頭部切換
        userTypeClick (currentUserType) {
            this.currentUserType = currentUserType
            this.GetInternalUserListByCityIdFn()
        },
        // 左側切換時間
        siderBarTrclick (index, item) {
            this.trIndex = index
            // 保存字段时 一定要确认公共字段一致
            this.setLeftData(item)
            // 关闭弹窗
            this.$router.push(this.$route.matched[1].path)
        },
        GetInternalUserListByCityIdFn () {
            this.loading = true
            GetInternalUserListByCityId({
                // 用户名或卡号
                search: this.search,
                // 当前人的角色 0全部 1监理 2工程经理 3行政主管
                userType: this.currentUserType,
                // 是否是根据城市id查询该城下所有分司的人  0否1是
                isCity: 0,
                isAccount: 2,
                // 1留 2用
                isPerson: 2,
                // 地区id
                curAreaId: this.userInfo.as_diquId,
                areaId: this.userInfo.as_diquId,
                visitType: 0,
                curUserCard: this.userInfo.as_cardNo
            }).then(results => {
                this.seachIco = false
                this.leftListData = results.data.Body
                this.siderBarTrclick(this.trIndex, this.leftListData[this.trIndex])
                this.loading = false
            }).catch(error => {
                console.log(error)
            })
        }
    }
}
</script>
