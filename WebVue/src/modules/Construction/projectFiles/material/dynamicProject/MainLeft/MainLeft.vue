<template>
<div class="tc-left pr10 fl">
    <ul class="clearfix uiTab1 mb5 j_outerHeight">
        <!-- <li class="col-md-3 fl uiTab1-active"><a href="javascript:">项</a></li> -->
    </ul>
    <div class="daily_title j_outerHeight">
        <ul class="clearfix">
            <li :class="{ 'title_cur':tindex == 0 }" data-title="全部" @click="filterStage(0)">全</li>
            <li :class="{ 'title_cur':tindex == 10 }" data-title="审计" @click="filterStage(10)">审</li>
            <li :class="{ 'title_cur':tindex == 20 }" data-title="准备" @click="filterStage(20)">准</li>
            <li :class="{ 'title_cur':tindex == 30 }" data-title="在施" @click="filterStage(30)">在</li>
            <li :class="{ 'title_cur':tindex == 40 }" data-title="竣工" @click="filterStage(40)">竣</li>
            <li :class="{ 'title_cur':tindex == 50 }" data-title="完工" @click="filterStage(50)">完</li>
            <li :class="{ 'title_cur':tindex == 60 }" style="float: right" data-title="历史" @click="filterStage(60)">历</li>
        </ul>
    </div>
    <div class="contentbox">
        <div class="dailyftSearch clearfix" v-if="souFlag" style="z-index:2">
            <div class="fl uiHas-textIcon">
                <input type="text" placeholder="编号/项目单号/项经/监理" class="col-md-12 searchName" v-model="searchText"  @keyup.enter="selectFilter()">
                <i class="uiText-searchIcon bgIcon" @click="selectFilter()"></i>
            </div>
        </div>
        <table class="uiTable j_outerHeight">
            <thead>
                <tr>
                    <th width="30%">
                        <span class="serial_number" @click="souFlag = true">编号<i class="bgIcon"></i></span>
                    </th>
                    <th width="20%">项经</th>
                    <th width="10%">管</th>
                    <th width="10%">业</th>
                    <th width="15%">
                        <select class="theadselect thinScroll" v-model="stageValue" @change="selectFilter()">
                            <option value="">阶段</option>
                            <option value="10">审计</option>
                            <option value="20">准备</option>
                            <option value="30">在施</option>
                            <option value="31">施前</option>
                            <option value="32">施中</option>
                            <option value="33">施尾</option>
                            <option value="40">竣工</option>
                            <option value="50">完工</option>
                            <option value="60">历史</option>
                        </select>
                    </th>
                    <th width="15%">处理</th>
                </tr>
            </thead>
        </table>
        <div class="scroll-content thinScroll thinScroll-table" v-loading="loading" v-scrollHeight="36">
            <table class="uiTable uiTable-striped uiTable-hover" id="tab1">
                <tbody>
                    <tr v-for="(item,index) in leftListData" :key="index" :class="{'tractive':index == trIndex}" @click="siderBarTrclick(index,item)">
                        <td  width="30%" :data-title="item.contract_no+'-'+item.proname">{{item.contract_no | truncate(7)}}</td>
                        <td width="20%">{{item.pm_username}}</td>
                        <td width="10%">未</td>
                        <td width="10%">--</td>
                        <td width="15%">{{ item.AfterMarketState | stage}}</td>
                        <td width="15%">{{ item.Dcreatime }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="j_outerHeight clearfix tj_bottom">
            <p class="col-md-3" data-title="全部">{{allCount}}</p>
            <p class="col-md-3 cGreen" data-title="正常">{{zcCount}}</p>
            <p class="col-md-3 cOrange" data-title="异常">{{ycCount}}</p>
            <p class="col-md-3 cRed" data-title="问题">{{wtCount}}</p>
        </div>
    </div>
</div>
</template>
<script>
import { mapMutations, mapGetters } from 'vuex'
import { getListSupervisorOrder } from '../Resources/Api/index'
export default {
    data () {
        return {
            loading: false,
            trIndex: 0,
            leftListData: [], // 遍历的数据
            leftListDataClone: [],
            searchText: '', // 编号筛选
            stageValue: '', // 阶段筛选
            signValue: '', // 正/异/问题
            tindex: 0, // 小标签下标
            allCount: 0,
            zcCount: 0,
            ycCount: 0,
            wtCount: 0,
            souFlag: false
        }
    },
    computed: {
        ...mapGetters(['leftInfo', 'userInfo'])
    },
    created () {
        this.load()
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
        // 加载页面
        load () {
            // 用_this 代替this
            let _this = this
            _this.loading = true
            // 判断角色
            // const userNo = Number(this.getCookie('u_diqu')) === 39 ? '' : this.getCookie('u_kahao')
            const userNo = Number(this.userInfo.as_diquId) === 39 ? '' : Number(this.userInfo.as_cardNo)
            // 接收参数
            let parm = {
                topTab: 0,
                logType: 1,
                userNo: userNo
            }
            // 接口获取数据，对项目阶段进行转换
            getListSupervisorOrder(parm).then(results => {
                if (results.data.StatusCode === 0) {
                    var list = results.data.Body.orderList
                    list.forEach(element => {
                        element.AfterMarketState = _this.$options.filters['AfterMarketState'](element.AfterMarketState, element.ConstructionPeriod)
                        _this.leftListDataClone.push(element)
                    })
                    _this.leftListData = _this.leftListDataClone
                    if (_this.leftListData.length > 0) {
                        _this.siderBarTrclick(_this.trIndex, _this.leftListData[_this.trIndex])
                    }
                    _this.selectFilter()
                }
            }).catch(error => {
                console.log(error)
            })
            _this.loading = false
        },
        // 筛选
        selectFilter () {
            this.trIndex = 0
            // 搜索清空前后空格以及转化为大写
            this.searchText = this.searchText.replace(/(^\s*)|(\s*$)/g, '').toUpperCase()
            let searchReg = new RegExp(`^${this.searchText}$`)
            let stageReg = new RegExp(`^${this.stageValue}$`)
            if (!this.stageValue) stageReg = new RegExp(/[\s\S]*/)
            if (!this.searchText) searchReg = new RegExp(/[\s\S]*/)
            if (Number(this.stageValue) >= 30 && Number(this.stageValue) < 40) { this.tindex = 30 } else { this.tindex = this.stageValue }
            if (Number(this.stageValue) === 30) {
                let construction = new RegExp(`^3`)
                this.leftListData = this.leftListDataClone.filter(item => (
                    construction.test(item.AfterMarketState) && (searchReg.test(item.contract_no) || searchReg.test(item.orderno) || searchReg.test(item.pm_username) || searchReg.test(item.proname) || searchReg.test(item.supervisor_username))
                ))
            } else {
                this.leftListData = this.leftListDataClone.filter(item => (
                    stageReg.test(item.AfterMarketState) && (searchReg.test(item.contract_no) || searchReg.test(item.orderno) || searchReg.test(item.pm_username) || searchReg.test(item.proname) || searchReg.test(item.supervisor_username))
                ))
            }

            if (this.leftListData.length > 0) {
                this.siderBarTrclick(this.trIndex, this.leftListData[this.trIndex])
            }
            this.souFlag = false
            this.updateBottom()
        },
        // 更新底部正常异常问题的数量
        updateBottom () {
            let zcCount = 0
            let ycCount = 0
            let wtCount = 0
            for (var item of this.leftListData) {
                if (item.signs === 1) {
                    zcCount = zcCount + 1
                } else if (item.signs === 2) {
                    ycCount = ycCount + 1
                } else if (item.signs === 3) {
                    wtCount = wtCount + 1
                }
            }
            this.allCount = this.leftListData.length
            this.zcCount = zcCount
            this.ycCount = ycCount
            this.wtCount = wtCount
        },
        // 头部小表情筛选
        filterStage (Stage) {
            let _this = this
            _this.tindex = Stage
            switch (Stage) {
            case 0:
                _this.tindex = 0
                _this.stageValue = ''
                break
            case 30:
                _this.tindex = Stage
                _this.stageValue = Stage
                break
            default:
                _this.tindex = Stage
                _this.stageValue = Stage
                break
            }
            _this.selectFilter()
        },
        // 路由跳转路径拼接
        routerPath (path) {
            return this.$route.matched[0].path + '/' + path
        },
        getCookie (name) {
            let arr = new RegExp('(^| )' + name + '=([^;]*)(;|$)')
            let reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)')
            if ((arr = document.cookie.match(reg))) { return unescape(arr[2]) } else { return null }
        }
    },
    filters: {
        Msg (params) {
            let msg = ''
            switch (params) {
            case 0:
                msg = '--'
                break
            case 1:
                msg = '款项延期'
                break
            case 2:
                msg = '款项,工期均延期'
                break
            case 3:
                msg = '工期延期'
                break
            default:
                break
            }
            return msg
        },
        State (params) {
            let msg = ''
            switch (params) {
            case 0:
                msg = '--'
                break
            case 1:
                msg = '款项'
                break
            case 2:
                msg = '款工'
                break
            case 3:
                msg = '工期'
                break
            default:
                break
            }
            return msg
        },
        stage (parone) {
            let value = ''
            switch (parone) {
            case 0:
            case 10:
                value = '审计'
                break
            case 20:
                value = '准备'
                break
            case 30:
                value = '在施'
                break
            case 31:
                value = '施前'
                break
            case 32:
                value = '施中'
                break
            case 33:
                value = '施尾'
                break
            case 40:
                value = '竣工'
                break
            case 50:
                value = '完工'
                break
            case 60:
                value = '历史'
                break
            case 70:
                value = '坏账'
                break
            case 80:
                value = '退单'
                break
            }
            return value
        },
        AfterMarketState (parone, partwo) {
            let value = ''
            switch (parone) {
            case 0:
            case 1:
                value = 10
                break
            case 2:
                // value = '准备'
                value = 20
                break
            case 3:
                switch (partwo) {
                case 1:
                    // value = '施前'
                    value = 31
                    break
                case 2:
                    // value = '施中'
                    value = 32
                    break
                case 3:
                    // value = '施尾'
                    value = 33
                    break
                default:
                    // value = '在施'
                    value = 30
                    break
                }
                break
            case 4:
                // value = '竣工'
                value = 40
                break
            case 5:
                // value = '完工'
                value = 50
                break
            case 6:
                // value = '历史'
                value = 60
                break
            case 7:
                // value = '坏账'
                value = 70
                break
            case 8:
                // value = '退单'
                value = 80
                break
            }
            return value
        }
    }
}
</script>
