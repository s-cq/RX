<template>
<div class="tc-left pr10 fl">
    <ul class="clearfix uiTab1 mb5 j_outerHeight">
        <!-- <li class="col-md-3 fl uiTab1-active"><a href="javascript:">项</a></li> -->
    </ul>
    <div class="daily_title j_outerHeight">
        <ul class="clearfix">
            <!-- <li :class="{'title_cur':titleIndex == 0}" @click="title_cur(0)" data-title="模" >模</li> -->
            <router-link tag="li" data-title="模版" :to="routerPath('StaticProject')">模</router-link>
            <li :class="{'title_cur':titleIndex == 1}" @click="title_cur(1)" data-title="全部">全</li>
        </ul>
    </div>
    <div class="contentbox">
        <table class="uiTable j_outerHeight">
            <thead>
                <tr>
                    <th width="30%">
                        <div class="relative">
                            <span>编号</span>
                            <i class="uiText-searchIcon bgIcon" @click="souFlag = !souFlag" style="margin-top:-4px"></i>
                        </div>
                        <div class="dailyftSearch clearfix" v-if="souFlag" style="z-index:2">
                            <div class="fl uiHas-textIcon">
                                <input type="text" placeholder="项目编号" class="col-md-12" v-model="searchText" @keyup.enter="selectFilter()">
                                <i class="uiText-searchIcon bgIcon" @click="selectFilter()"></i>
                            </div>
                        </div>
                    </th>
                    <th width="20%" class="tx-center">管</th>
                    <th width="15%">业</th>
                    <th width="20%">
                        <select class="theadselect thinScroll" v-model="stageValue" @change="selectFilter()">
                            <option value="">阶段</option>
                            <option value="11">审计</option>
                            <option value="12">准备</option>
                            <option value="13">施前</option>
                            <option value="13">施中</option>
                            <option value="13">施尾</option>
                            <option value="14">竣工</option>
                            <option value="15">完工</option>
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
                        <td class="relative" width="30%" :data-title="item.contract_no+'-'+item.proname">
                            {{ item.contract_no | truncate(7) }}
                        </td>
                        <td width="20%">
                            <span :class="item.State!==0?'cRed':'cGray'" :data-title="item.State | Msg">{{item.State | State }}</span>
                        </td>
                        <td width="15%" :class="{'cRed':item.DiffDate < 0}">{{item.ye}}</td>
                        <td width="20%">
                            <span class="cPurple">{{item.AfterMarketState | stage(item.ConstructionPeriod) }}</span>
                        </td>
                        <td width="15%">
                            <span :class="{'cRed':item.countDownHours < 0}">{{ -999 > item.countDownHours ?  '-999+' : item.countDownHours }}</span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="j_outerHeight clearfix tj_bottom">
            <p class="col-md-3" data-title="全部" @click="signValue = '', selectFilter()">{{allCount}}</p>
            <p class="col-md-3 cGreen" data-title="正常" @click="signValue = 1, selectFilter()">{{zcCount}}</p>
            <p class="col-md-3 cOrange" data-title="异常" @click="signValue = 2, selectFilter()">{{ycCount}}</p>
            <p class="col-md-3 cRed" data-title="问题" @click="signValue = 3, selectFilter()">{{wtCount}}</p>
        </div>
    </div>
</div>
</template>
<script>
import { getProjectLeftList } from '../Resources/Api'
import { mapMutations, mapGetters } from 'vuex'
export default {
    data () {
        return {
            loading: true,
            trIndex: 0,
            titleIndex: 1,
            souFlag: false,
            leftListData: [], // 直接呈现的数据
            leftListDataClone: [], // 保存原始数据
            searchText: '', // 编号筛选
            stageValue: '', // 阶段筛选
            signValue: '', // 正/异/问题
            allCount: 0,
            zcCount: 0,
            ycCount: 0,
            wtCount: 0
        }
    },
    computed: {
        ...mapGetters(['leftInfo'])
    },
    created () {
        this.load()
    },
    methods: {
        ...mapMutations({
            setLeftData: `SET_LEFT_INFO`
        }),
        // 页面加载方法
        load () {
            // 用_this 代替this
            let _this = this
            this.loading = true
            // 接口参数
            let parm = {
                topTab: 0
            }
            // 接口
            getProjectLeftList(parm).then(results => {
                if (results.data.StatusCode === 0) {
                    _this.leftListData = _this.leftListDataClone = results.data.Body.prolist
                    if (this.leftListData.length > 0) {
                        this.siderBarTrclick(0, _this.leftListData[0])
                    }
                }
            }).catch(error => {
                console.log(error)
            })

            this.loading = false
            this.selectFilter()
        },
        // 二级切换
        title_cur (titleIndex) {
            let _this = this
            _this.titleIndex = titleIndex
            if (titleIndex === 1) {
            }
        },
        // 左侧点击保存当前项信息
        siderBarTrclick (index, item) {
            this.trIndex = index
            // 保存字段时 一定要确认公共字段一致
            this.setLeftData(item)
            // 点击是否关闭弹窗
            this.$router.push(this.$route.matched[1].path)
        },
        // 筛选
        selectFilter () {
            // let searchReg = new RegExp(`^${this.searchText}$`)
            let stageReg = new RegExp(`^${this.stageValue}$`)
            let signReg = new RegExp(`^${this.signValue}$`)
            // 该正则是去掉空格
            // if (!this.searchText) searchReg = new RegExp(/[\s\S]*/)
            if (!this.stageValue) stageReg = new RegExp(/[\s\S]*/)
            if (!this.signValue) signReg = new RegExp(/[\s\S]*/)

            this.leftListData = this.leftListDataClone.filter(item => (
                // orderNoReg.test(item.orderNo)) &&
                stageReg.test(item.AfterMarketState) &&
                signReg.test(item.signs)
            ))

            if (!this.signValue) {
                this.signValue = ''
                this.updateBottom()
            }

            if (this.leftListData.length > 0) {
                this.siderBarTrclick(0, this.leftListData[0])
            }
            this.souFlag = false
        },
        // 更新底部正常异常问题的数量
        updateBottom () {
            let zcCount = 0
            let ycCount = 0
            let wtCount = 0
            for (var item of this.leftListData) {
                if (item.importance !== 2 && item.importance !== 3) {
                    zcCount = zcCount + 1
                } else if (item.importance === 2) {
                    ycCount = ycCount + 1
                } else if (item.importance === 3) {
                    wtCount = wtCount + 1
                }
            }
            this.allCount = this.leftListData.length
            this.zcCount = zcCount
            this.ycCount = ycCount
            this.wtCount = wtCount
        },
        // 路由跳转路径拼接
        routerPath (path) {
            return this.$route.matched[0].path + '/' + path
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
        stage (parone, partwo) {
            let value = ''
            switch (parone) {
            case 0:
            case 1:
                value = '审计'
                break
            case 2:
                value = '准备'
                break
            case 3:
                switch (partwo) {
                case 1:
                    value = '施前'
                    break
                case 2:
                    value = '施中'
                    break
                case 3:
                    value = '施尾'
                    break
                default:
                    value = '在施'
                    break
                }
                break
            case 4:
                value = '竣工'
                break
            case 5:
                value = '完工'
                break
            case 6:
                value = '历史'
                break
            case 7:
                value = '坏账'
                break
            case 8:
                value = '退单'
                break
            }
            return value
        }
    }
}
</script>
